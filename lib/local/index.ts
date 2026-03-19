import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Cart, Collection, Menu, Page, Product } from "../shopify/types";
import prisma from "./prisma";

function formatProduct(p: any): Product {
  if (!p) return p;
  return {
    id: p.id,
    handle: p.handle,
    availableForSale: p.availableForSale,
    title: p.title,
    description: p.description,
    descriptionHtml: p.descriptionHtml,
    options: JSON.parse(p.options),
    priceRange: {
      maxVariantPrice: {
        amount: p.priceRangeMax.toString(),
        currencyCode: "USD",
      },
      minVariantPrice: {
        amount: p.priceRangeMin.toString(),
        currencyCode: "USD",
      },
    },
    featuredImage: JSON.parse(p.featuredImage),
    images: JSON.parse(p.images),
    seo: JSON.parse(p.seo),
    tags: JSON.parse(p.tags),
    updatedAt: p.updatedAt.toISOString(),
    variants:
      p.variants?.map((v: any) => ({
        id: v.id,
        title: v.title,
        availableForSale: v.availableForSale,
        selectedOptions: JSON.parse(v.selectedOptions),
        price: { amount: v.price.toString(), currencyCode: "USD" },
      })) || [],
  };
}

function formatCart(cart: any): Cart {
  if (!cart) return cart;
  const lines =
    cart.lines?.map((line: any) => {
      const product = line.merchandise.product;
      return {
        id: line.id,
        quantity: line.quantity,
        cost: {
          totalAmount: {
            amount: line.costAmount.toString(),
            currencyCode: "USD",
          },
        },
        merchandise: {
          id: line.merchandise.id,
          title: line.merchandise.title,
          selectedOptions: JSON.parse(line.merchandise.selectedOptions),
          product: {
            id: product.id,
            handle: product.handle,
            title: product.title,
            featuredImage: JSON.parse(product.featuredImage),
          },
        },
      };
    }) || [];

  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    cost: {
      subtotalAmount: {
        amount: cart.subtotalAmount.toString(),
        currencyCode: "USD",
      },
      totalAmount: { amount: cart.totalAmount.toString(), currencyCode: "USD" },
      totalTaxAmount: {
        amount: cart.totalTaxAmount.toString(),
        currencyCode: "USD",
      },
    },
    lines,
    totalQuantity: cart.totalQuantity,
  };
}

const mockCollections: Collection[] = [
  {
    handle: "computers",
    title: "Computers",
    description: "Powerful desktop computers and laptops.",
    seo: { title: "Computers", description: "Computers" },
    path: "/search/computers",
    updatedAt: new Date().toISOString(),
  },
];

export async function createCart(): Promise<Cart> {
  const cart = await prisma.cart.create({
    data: {
      checkoutUrl: "https://commerce.trycephal.com/checkout",
    },
    include: {
      lines: { include: { merchandise: { include: { product: true } } } },
    },
  });
  return formatCart(cart);
}

export async function addToCart(
  lines: { merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) throw new Error("Cart not found");

  for (const line of lines) {
    const variant = await prisma.productVariant.findUnique({
      where: { id: line.merchandiseId },
    });
    if (!variant) continue;
    const total = Number(variant.price) * line.quantity;

    // Check if item already in cart
    const existingLine = await prisma.cartLine.findFirst({
      where: { cartId, merchandiseId: line.merchandiseId },
    });

    if (existingLine) {
      await prisma.cartLine.update({
        where: { id: existingLine.id },
        data: {
          quantity: existingLine.quantity + line.quantity,
          costAmount: Number(existingLine.costAmount) + total,
        },
      });
    } else {
      await prisma.cartLine.create({
        data: {
          cartId,
          merchandiseId: line.merchandiseId,
          quantity: line.quantity,
          costAmount: total,
        },
      });
    }
  }

  return await updateCartTotals(cartId);
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) throw new Error("Cart not found");

  await prisma.cartLine.deleteMany({
    where: { id: { in: lineIds }, cartId },
  });

  return await updateCartTotals(cartId);
}

export async function updateCart(
  lines: { id: string; merchandiseId: string; quantity: number }[],
): Promise<Cart> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) throw new Error("Cart not found");

  for (const line of lines) {
    const variant = await prisma.productVariant.findUnique({
      where: { id: line.merchandiseId },
    });
    if (!variant) continue;
    const total = Number(variant.price) * line.quantity;

    await prisma.cartLine.update({
      where: { id: line.id },
      data: { quantity: line.quantity, costAmount: total },
    });
  }

  return await updateCartTotals(cartId);
}

async function updateCartTotals(cartId: string): Promise<Cart> {
  const cartLines = await prisma.cartLine.findMany({ where: { cartId } });
  const totalQuantity = cartLines.reduce(
    (acc: number, line: any) => acc + line.quantity,
    0,
  );
  const subtotalAmount = cartLines.reduce(
    (acc: number, line: any) => acc + Number(line.costAmount),
    0,
  );

  const updated = await prisma.cart.update({
    where: { id: cartId },
    data: {
      totalQuantity,
      subtotalAmount,
      totalAmount: subtotalAmount,
      totalTaxAmount: 0,
    },
    include: {
      lines: { include: { merchandise: { include: { product: true } } } },
    },
  });

  return formatCart(updated);
}

export async function getCart(): Promise<Cart | undefined> {
  const cartId = (await cookies()).get("cartId")?.value;
  if (!cartId) return undefined;

  const cart = await prisma.cart.findUnique({
    where: { id: cartId },
    include: {
      lines: { include: { merchandise: { include: { product: true } } } },
    },
  });

  if (!cart) return undefined;
  return formatCart(cart);
}

export async function getCollection(
  handle: string,
): Promise<Collection | undefined> {
  return mockCollections.find((c) => c.handle === handle);
}

export async function getCollectionProducts({
  collection,
  reverse,
  sortKey,
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let orderBy: any = {};
  if (sortKey && sortKey !== "RELEVANCE") {
    orderBy[sortKey === "CREATED_AT" ? "createdAt" : sortKey.toLowerCase()] =
      reverse ? "desc" : "asc";
  } else {
    orderBy.createdAt = "desc";
  }

  const products = await prisma.product.findMany({
    orderBy,
    include: { variants: true },
  });

  return products.map(formatProduct);
}

export async function getCollections(): Promise<Collection[]> {
  return [
    {
      handle: "",
      title: "All",
      description: "All products",
      seo: { title: "All", description: "All products" },
      path: "/search",
      updatedAt: new Date().toISOString(),
    },
    ...mockCollections,
  ];
}

export async function getMenu(handle: string): Promise<Menu[]> {
  if (handle === "next-js-frontend-header-menu") {
    return [
      { title: "All", path: "/search" },
      { title: "Computers", path: "/search/computers" },
    ];
  }
  if (handle === "next-js-frontend-footer-menu") {
    return [
      { title: "About us", path: "/about" },
      { title: "Privacy Policy", path: "/privacy" },
    ];
  }
  return [];
}

export async function getPage(handle: string): Promise<Page> {
  return {
    id: "1",
    title: "Mock Page",
    handle,
    body: "Mock page content.",
    bodySummary: "Mock page",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function getPages(): Promise<Page[]> {
  return [];
}

export async function getProduct(handle: string): Promise<Product | undefined> {
  const product = await prisma.product.findUnique({
    where: { handle },
    include: { variants: true },
  });

  if (!product) return undefined;
  return formatProduct(product);
}

export async function getProductRecommendations(
  productId: string,
): Promise<Product[]> {
  const products = await prisma.product.findMany({
    where: { id: { not: productId } },
    take: 4,
    include: { variants: true },
  });
  return products.map(formatProduct);
}

export async function getProducts({
  query,
  reverse,
  sortKey,
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  let orderBy: any = {};
  if (sortKey && sortKey !== "RELEVANCE") {
    orderBy[sortKey === "CREATED_AT" ? "createdAt" : sortKey.toLowerCase()] =
      reverse ? "desc" : "asc";
  } else {
    orderBy.createdAt = "desc";
  }

  let where: any = {};
  if (query) {
    where.title = { contains: query };
  }

  const products = await prisma.product.findMany({
    where,
    orderBy,
    include: { variants: true },
  });
  return products.map(formatProduct);
}

export async function revalidate(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json({ status: 200, revalidated: true, now: Date.now() });
}
