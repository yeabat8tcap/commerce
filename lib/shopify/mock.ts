import {
    ShopifyCart,
    ShopifyCollection,
    ShopifyProduct
} from './types';

const mockProducts: ShopifyProduct[] = [
    {
        id: 'gid://shopify/Product/1',
        handle: 'mac-studio',
        availableForSale: true,
        title: 'Apple Mac Studio',
        description: 'Empower your creativity with Mac Studio. Compact design with extreme performance.',
        descriptionHtml: '<p>Empower your creativity with Mac Studio. Compact design with extreme performance.</p>',
        options: [
            { id: '1', name: 'Chip', values: ['M2 Max', 'M2 Ultra'] },
            { id: '2', name: 'RAM', values: ['32GB', '64GB', '128GB'] }
        ],
        priceRange: {
            maxVariantPrice: { amount: '3999.0', currencyCode: 'USD' },
            minVariantPrice: { amount: '1999.0', currencyCode: 'USD' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/1',
                        title: 'M2 Max / 32GB',
                        availableForSale: true,
                        selectedOptions: [
                            { name: 'Chip', value: 'M2 Max' },
                            { name: 'RAM', value: '32GB' }
                        ],
                        price: { amount: '1999.0', currencyCode: 'USD' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/images/mac-studio.png',
            altText: 'Apple Mac Studio',
            width: 1024,
            height: 1024
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/images/mac-studio.png',
                        altText: 'Apple Mac Studio',
                        width: 1024,
                        height: 1024
                    }
                }
            ]
        },
        seo: { title: 'Apple Mac Studio', description: 'Apply Mac Studio' },
        tags: ['Desktop', 'Mac'],
        updatedAt: new Date().toISOString()
    },
    {
        id: 'gid://shopify/Product/2',
        handle: 'mac-mini',
        availableForSale: true,
        title: 'Apple Mac Mini',
        description: 'More muscle. More hustle. Mac Mini is the compact desktop with massive power.',
        descriptionHtml: '<p>More muscle. More hustle. Mac Mini is the compact desktop with massive power.</p>',
        options: [
            { id: '3', name: 'Chip', values: ['M2', 'M2 Pro'] },
            { id: '4', name: 'RAM', values: ['8GB', '16GB', '32GB'] }
        ],
        priceRange: {
            maxVariantPrice: { amount: '1299.0', currencyCode: 'USD' },
            minVariantPrice: { amount: '599.0', currencyCode: 'USD' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'gid://shopify/ProductVariant/2',
                        title: 'M2 / 8GB',
                        availableForSale: true,
                        selectedOptions: [
                            { name: 'Chip', value: 'M2' },
                            { name: 'RAM', value: '8GB' }
                        ],
                        price: { amount: '599.0', currencyCode: 'USD' }
                    }
                }
            ]
        },
        featuredImage: {
            url: '/images/mac-mini.png',
            altText: 'Apple Mac Mini',
            width: 1024,
            height: 1024
        },
        images: {
            edges: [
                {
                    node: {
                        url: '/images/mac-mini.png',
                        altText: 'Apple Mac Mini',
                        width: 1024,
                        height: 1024
                    }
                }
            ]
        },
        seo: { title: 'Apple Mac Mini', description: 'Apple Mac Mini' },
        tags: ['Desktop', 'Mac'],
        updatedAt: new Date().toISOString()
    }
];

const mockCollections: ShopifyCollection[] = [
    {
        handle: 'computers',
        title: 'Computers',
        description: 'Powerful desktop computers and laptops.',
        seo: { title: 'Computers', description: 'Computers' },
        updatedAt: new Date().toISOString()
    }
];

const mockMenus = {
    'next-js-frontend-header-menu': [
        { title: 'All', url: '/search' },
        { title: 'Computers', url: '/search/computers' }
    ],
    'next-js-frontend-footer-menu': [
        { title: 'About us', url: '/about' },
        { title: 'Privacy Policy', url: '/privacy' }
    ]
};

const mockCart: ShopifyCart = {
    id: 'gid://shopify/Cart/1',
    checkoutUrl: 'https://mock.myshopify.com/checkout',
    cost: {
        subtotalAmount: { amount: '0.0', currencyCode: 'USD' },
        totalAmount: { amount: '0.0', currencyCode: 'USD' },
        totalTaxAmount: { amount: '0.0', currencyCode: 'USD' }
    },
    lines: { edges: [] },
    totalQuantity: 0
};

export async function mockShopifyFetch<T>({
    query,
    variables
}: {
    query: string;
    variables?: any;
}): Promise<{ status: number; body: T }> {
    console.log('MOCK FETCH:', query.slice(0, 100).replace(/\s+/g, ' '), variables);

    let data: any = {};

    if (query.includes('query getMenu')) {
        const handle = variables?.handle || 'next-js-frontend-header-menu';
        data = {
            menu: {
                items: mockMenus[handle as keyof typeof mockMenus] || []
            }
        };
    } else if (query.includes('query getCollections')) {
        data = {
            collections: {
                edges: mockCollections.map((c) => ({ node: c }))
            }
        };
    } else if (query.includes('query getCollectionProducts')) {
        data = {
            collection: {
                products: {
                    edges: mockProducts.map((p) => ({ node: p }))
                }
            }
        };
    } else if (query.includes('query getProducts')) {
        data = {
            products: {
                edges: mockProducts.map((p) => ({ node: p }))
            }
        };
    } else if (query.includes('query getProduct(')) {
        data = {
            product: mockProducts.find((p) => p.handle === variables?.handle) || null
        };
    } else if (query.includes('query getProductRecommendations')) {
        data = {
            productRecommendations: mockProducts.filter((p) => p.id !== variables?.productId)
        };
    } else if (query.includes('query getCart')) {
        data = {
            cart: mockCart
        };
    } else if (query.includes('mutation createCart')) {
        data = {
            cartCreate: {
                cart: mockCart
            }
        };
    }

    return {
        status: 200,
        body: { data } as T
    };
}
