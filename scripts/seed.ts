import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Clearing database...");
  await prisma.cartLine.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();

  console.log("Seeding products...");
  for (let i = 1; i <= 1; i++) {
    const title = `Mac Studio with M3 Ultra chip`;
    const handle = `mac-studio-m3-ultra`;

    const product = await prisma.product.create({
      data: {
        id: `gid://shopify/Product/1`,
        handle,
        title,
        description:
          "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
        descriptionHtml:
          "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
        options: JSON.stringify([
          { id: "1", name: "Title", values: ["Default Title"] },
        ]),
        priceRangeMin: 63000.0,
        priceRangeMax: 63000.0,
        featuredImage: JSON.stringify({
          url: "/images/mac-studio.png",
          altText: "Mac Studio with M3 Ultra chip",
          width: 1024,
          height: 1024,
        }),
        images: JSON.stringify([
          {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        ]),
        seo: JSON.stringify({ title, description: `${title} ($63000)` }),
        tags: JSON.stringify(["Desktop", "Mac", "M3 Ultra", "Computers"]),
        variants: {
          create: [
            {
              id: `gid://shopify/ProductVariant/3`,
              title: "Default Title",
              selectedOptions: JSON.stringify([
                { name: "Title", value: "Default Title" },
              ]),
              price: 63000.0,
              inventory: 1,
            },
          ],
        },
      },
    });
    console.log(`Created product: ${product.title}`);
  }

  const dellTitle = `Dell Pro Max with GB300`;
  const dellHandle = `dell-pro-max-gb300`;

  const dellProduct = await prisma.product.create({
    data: {
      id: `gid://shopify/Product/13`,
      handle: dellHandle,
      title: dellTitle,
      description:
        "NVIDIA Grace 72 Core Neoverse V2. NVIDIA DGX B300 288GB HBM3e and RTX PRO 1000. 496 GB LPDDR5X. 16 TB Gen4 SSD. MaxCool liquid-cooling technology for peak AI workload efficiency. 1600 W Titanium power supply.",
      descriptionHtml:
        "<ul><li>NVIDIA Grace 72 Core Neoverse V2</li><li>NVIDIA DGX B300 288GB HBM3e and RTX PRO 1000</li><li>496 GB LPDDR5X</li><li>16 TB Gen4 SSD</li><li>MaxCool liquid-cooling technology</li><li>1600 W Titanium power supply</li></ul>",
      options: JSON.stringify([
        { id: "1", name: "Title", values: ["Default Title"] },
      ]),
      priceRangeMin: 380000.0,
      priceRangeMax: 380000.0,
      featuredImage: JSON.stringify({
        url: "/images/dell-pro-max.png",
        altText: "Dell Pro Max with GB300",
        width: 1024,
        height: 1024,
      }),
      images: JSON.stringify([
        {
          url: "/images/dell-pro-max.png",
          altText: "Dell Pro Max with GB300",
          width: 1024,
          height: 1024,
        },
      ]),
      seo: JSON.stringify({
        title: dellTitle,
        description: `${dellTitle} ($380000)`,
      }),
      tags: JSON.stringify(["Desktop", "AI", "NVIDIA GB300", "Computers"]),
      variants: {
        create: [
          {
            id: `gid://shopify/ProductVariant/13`,
            title: "Default Title",
            selectedOptions: JSON.stringify([
              { name: "Title", value: "Default Title" },
            ]),
            price: 380000.0,
            inventory: 1,
          },
        ],
      },
    },
  });
  console.log(`Created product: ${dellProduct.title}`);

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
