import { ShopifyCart, ShopifyCollection, ShopifyProduct } from "./types";

const mockProducts: ShopifyProduct[] = [
  {
    id: "gid://shopify/Product/13",
    handle: "dell-pro-max-gb300",
    availableForSale: true,
    title: "Dell Pro Max with GB300",
    description:
      "NVIDIA Grace 72 Core Neoverse V2. NVIDIA DGX B300 288GB HBM3e and RTX PRO 1000. 496 GB LPDDR5X. 16 TB Gen4 SSD. MaxCool liquid-cooling technology for peak AI workload efficiency. 1600 W Titanium power supply.",
    descriptionHtml:
      "<ul><li>NVIDIA Grace 72 Core Neoverse V2</li><li>NVIDIA DGX B300 288GB HBM3e and RTX PRO 1000</li><li>496 GB LPDDR5X</li><li>16 TB Gen4 SSD</li><li>MaxCool liquid-cooling technology</li><li>1600 W Titanium power supply</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "380000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "380000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/13",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "380000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/dell-pro-max.png",
      altText: "Dell Pro Max with GB300",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/dell-pro-max.png",
            altText: "Dell Pro Max with GB300",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Dell Pro Max with GB300",
      description: "Dell Pro Max with GB300 ($380000)",
    },
    tags: ["Desktop", "AI", "NVIDIA GB300", "Computers"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/1",
    handle: "mac-studio",
    availableForSale: true,
    title: "Apple Mac Studio",
    description:
      "Empower your creativity with Mac Studio. Compact design with extreme performance.",
    descriptionHtml:
      "<p>Empower your creativity with Mac Studio. Compact design with extreme performance.</p>",
    options: [
      { id: "1", name: "Chip", values: ["M2 Max", "M2 Ultra"] },
      { id: "2", name: "RAM", values: ["32GB", "64GB", "128GB"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "3999.0", currencyCode: "USD" },
      minVariantPrice: { amount: "1999.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/1",
            title: "M2 Max / 32GB",
            availableForSale: true,
            selectedOptions: [
              { name: "Chip", value: "M2 Max" },
              { name: "RAM", value: "32GB" },
            ],
            price: { amount: "1999.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Apple Mac Studio",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Apple Mac Studio",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: { title: "Apple Mac Studio", description: "Apply Mac Studio" },
    tags: ["Desktop", "Mac"],
    updatedAt: new Date().toISOString(),
  },

  {
    id: "gid://shopify/Product/2",
    handle: "mac-mini",
    availableForSale: true,
    title: "Apple Mac Mini",
    description:
      "More muscle. More hustle. Mac Mini is the compact desktop with massive power.",
    descriptionHtml:
      "<p>More muscle. More hustle. Mac Mini is the compact desktop with massive power.</p>",
    options: [
      { id: "3", name: "Chip", values: ["M2", "M2 Pro"] },
      { id: "4", name: "RAM", values: ["8GB", "16GB", "32GB"] },
    ],
    priceRange: {
      maxVariantPrice: { amount: "1299.0", currencyCode: "USD" },
      minVariantPrice: { amount: "599.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/2",
            title: "M2 / 8GB",
            availableForSale: true,
            selectedOptions: [
              { name: "Chip", value: "M2" },
              { name: "RAM", value: "8GB" },
            ],
            price: { amount: "599.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-mini.png",
      altText: "Apple Mac Mini",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-mini.png",
            altText: "Apple Mac Mini",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: { title: "Apple Mac Mini", description: "Apple Mac Mini" },
    tags: ["Desktop", "Mac"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/3",
    handle: "mac-studio-m3-ultra-1",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (1/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/3",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/4",
    handle: "mac-studio-m3-ultra-2",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (2/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/4",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/5",
    handle: "mac-studio-m3-ultra-3",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (3/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/5",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/6",
    handle: "mac-studio-m3-ultra-4",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (4/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/6",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/7",
    handle: "mac-studio-m3-ultra-5",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (5/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/7",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/8",
    handle: "mac-studio-m3-ultra-6",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (6/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/8",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/9",
    handle: "mac-studio-m3-ultra-7",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (7/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/9",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/10",
    handle: "mac-studio-m3-ultra-8",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (8/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/10",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/11",
    handle: "mac-studio-m3-ultra-9",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (9/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/11",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "gid://shopify/Product/12",
    handle: "mac-studio-m3-ultra-10",
    availableForSale: true,
    title: "Mac Studio with M3 Ultra chip (10/10)",
    description:
      "32-core CPU, 80-core GPU, 32-core Neural Engine. 512GB unified memory. 16TB SSD storage. Two Thunderbolt 5 ports, SDXC card slot. Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack. Support for up to eight external displays. Accessory Kit. Software: Final Cut Pro License, Logic Pro License, Photos, iMovie, GarageBand, Pages, Numbers, Keynote, macOS. Next day delivery included.",
    descriptionHtml:
      "<ul><li>32-core CPU, 80-core GPU, 32-core Neural Engine</li><li>512GB unified memory</li><li>16TB SSD storage</li><li>Two Thunderbolt 5 ports, SDXC card slot</li><li>Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5mm headphone jack</li><li>Support for up to eight external displays</li><li>Accessory Kit</li><li>Final Cut Pro License</li><li>Logic Pro License</li><li>Photos, iMovie, GarageBand</li><li>Pages, Numbers, Keynote</li><li>macOS</li><li>Next day delivery included</li></ul>",
    options: [{ id: "1", name: "Title", values: ["Default Title"] }],
    priceRange: {
      maxVariantPrice: { amount: "63000.0", currencyCode: "USD" },
      minVariantPrice: { amount: "63000.0", currencyCode: "USD" },
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/12",
            title: "Default Title",
            availableForSale: true,
            selectedOptions: [{ name: "Title", value: "Default Title" }],
            price: { amount: "63000.0", currencyCode: "USD" },
          },
        },
      ],
    },
    featuredImage: {
      url: "/images/mac-studio.png",
      altText: "Mac Studio with M3 Ultra chip",
      width: 1024,
      height: 1024,
    },
    images: {
      edges: [
        {
          node: {
            url: "/images/mac-studio.png",
            altText: "Mac Studio with M3 Ultra chip",
            width: 1024,
            height: 1024,
          },
        },
      ],
    },
    seo: {
      title: "Mac Studio with M3 Ultra chip",
      description: "Mac Studio with M3 Ultra chip ($63000)",
    },
    tags: ["Desktop", "Mac", "M3 Ultra"],
    updatedAt: new Date().toISOString(),
  },
];

const mockCollections: ShopifyCollection[] = [
  {
    handle: "computers",
    title: "Computers",
    description: "Powerful desktop computers and laptops.",
    seo: { title: "Computers", description: "Computers" },
    updatedAt: new Date().toISOString(),
  },
];

const mockMenus = {
  "next-js-frontend-header-menu": [
    { title: "All", url: "/search" },
    { title: "Computers", url: "/search/computers" },
  ],
  "next-js-frontend-footer-menu": [
    { title: "About us", url: "/about" },
    { title: "Privacy Policy", url: "/privacy" },
  ],
};

const mockCart: ShopifyCart = {
  id: "gid://shopify/Cart/1",
  checkoutUrl: "https://mock.myshopify.com/checkout",
  cost: {
    subtotalAmount: { amount: "0.0", currencyCode: "USD" },
    totalAmount: { amount: "0.0", currencyCode: "USD" },
    totalTaxAmount: { amount: "0.0", currencyCode: "USD" },
  },
  lines: { edges: [] },
  totalQuantity: 0,
};

export async function mockShopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}): Promise<{ status: number; body: T }> {
  console.log(
    "MOCK FETCH:",
    query.slice(0, 100).replace(/\s+/g, " "),
    variables,
  );

  let data: any = {};

  if (query.includes("query getMenu")) {
    const handle = variables?.handle || "next-js-frontend-header-menu";
    data = {
      menu: {
        items: mockMenus[handle as keyof typeof mockMenus] || [],
      },
    };
  } else if (query.includes("query getCollections")) {
    data = {
      collections: {
        edges: mockCollections.map((c) => ({ node: c })),
      },
    };
  } else if (query.includes("query getCollection(")) {
    data = {
      collection:
        mockCollections.find((c) => c.handle === variables?.handle) || null,
    };
  } else if (query.includes("query getCollectionProducts")) {
    data = {
      collection: {
        products: {
          edges: mockProducts.map((p) => ({ node: p })),
        },
      },
    };
  } else if (query.includes("query getProducts")) {
    data = {
      products: {
        edges: mockProducts.map((p) => ({ node: p })),
      },
    };
  } else if (query.includes("query getProduct(")) {
    data = {
      product: mockProducts.find((p) => p.handle === variables?.handle) || null,
    };
  } else if (query.includes("query getProductRecommendations")) {
    data = {
      productRecommendations: mockProducts.filter(
        (p) => p.id !== variables?.productId,
      ),
    };
  } else if (query.includes("query getCart")) {
    data = {
      cart: mockCart,
    };
  } else if (query.includes("mutation createCart")) {
    data = {
      cartCreate: {
        cart: mockCart,
      },
    };
  }

  return {
    status: 200,
    body: { data } as T,
  };
}
