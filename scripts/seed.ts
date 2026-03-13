import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Clearing database...');
    await prisma.cartLine.deleteMany();
    await prisma.cart.deleteMany();
    await prisma.productVariant.deleteMany();
    await prisma.product.deleteMany();

    console.log('Seeding products...');
    for (let i = 1; i <= 1; i++) {
        const title = `Mac Studio with M3 Ultra chip`;
        const handle = `mac-studio-m3-ultra`;

        const product = await prisma.product.create({
            data: {
                handle,
                title,
                description: '32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.',
                descriptionHtml: '<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>',
                options: JSON.stringify([{ id: '1', name: 'Title', values: ['Default Title'] }]),
                priceRangeMin: 63000.0,
                priceRangeMax: 63000.0,
                featuredImage: JSON.stringify({
                    url: '/images/mac-studio.png',
                    altText: 'Mac Studio with M3 Ultra chip',
                    width: 1024,
                    height: 1024
                }),
                images: JSON.stringify([{
                    url: '/images/mac-studio.png',
                    altText: 'Mac Studio with M3 Ultra chip',
                    width: 1024,
                    height: 1024
                }]),
                seo: JSON.stringify({ title, description: `${title} ($63000)` }),
                tags: JSON.stringify(['Desktop', 'Mac', 'M3 Ultra', 'Computers']),
                variants: {
                    create: [{
                        title: 'Default Title',
                        selectedOptions: JSON.stringify([{ name: 'Title', value: 'Default Title' }]),
                        price: 63000.0,
                        inventory: 1
                    }]
                }
            }
        });
        console.log(`Created product: ${product.title}`);
    }

    console.log('Seeding finished.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
