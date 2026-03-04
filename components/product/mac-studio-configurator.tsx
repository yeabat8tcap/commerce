import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { Product } from 'lib/local/types';
import Image from 'next/image';

export function MacStudioConfigurator({ product }: { product: Product }) {
    return (
        <div className="flex flex-col border-neutral-200 dark:border-neutral-700 bg-[#fbfbfb] dark:bg-black w-full min-h-screen">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-12 w-full">
                {/* Left Column - Sticky Image and Title */}
                <div className="md:w-1/2 flex flex-col">
                    <div className="sticky top-24">
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] dark:text-gray-100 mb-2 font-display">
                            Your new Mac Studio.
                        </h1>
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#86868b] mb-12 font-display">
                            Just the way you want it.
                        </h2>
                        <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                            <Image
                                src={product.featuredImage.url}
                                alt="Mac Studio"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column - Specs and Pricing */}
                <div className="md:w-1/2 flex flex-col pt-4 md:pt-[140px]">
                    <div className="flex flex-col gap-6 w-full text-[15px] text-[#1d1d1f] dark:text-gray-200">
                        {/* Core Specs */}
                        <div className="border-b border-[#d2d2d7] dark:border-neutral-800 pb-6">
                            <h3 className="font-semibold text-xl mb-4">Mac Studio with M3 Ultra chip</h3>
                            <ul className="list-none space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>32-core CPU, 80-core GPU, 32-core Neural Engine</span>
                                </li>
                                <li className="flex items-start text-blue-600 dark:text-blue-400 font-medium">
                                    <span className="mr-2">✧</span>
                                    <span>Built for Apple Intelligence</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>512GB unified memory</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>16TB SSD storage</span>
                                </li>
                            </ul>
                        </div>

                        {/* Ports & Expansion */}
                        <div className="border-b border-[#d2d2d7] dark:border-neutral-800 pb-6">
                            <ul className="list-none space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <div>
                                        <span className="font-semibold">Front ports:</span> Two Thunderbolt 5 ports, SDXC card slot
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <div>
                                        <span className="font-semibold">Back ports:</span> Four Thunderbolt 5 ports, two USB-A ports, HDMI port, 10Gb Ethernet port, 3.5 mm headphone jack
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Support for up to eight external displays</span>
                                </li>
                            </ul>
                        </div>

                        {/* Software */}
                        <div className="border-b border-[#d2d2d7] dark:border-neutral-800 pb-6">
                            <ul className="list-none space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Final Cut Pro License</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Logic Pro License</span>
                                </li>
                            </ul>
                        </div>

                        {/* Shipping */}
                        <div className="bg-[#f5f5f7] dark:bg-neutral-900 rounded-2xl p-6 mt-4 flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <div>
                                    <div className="font-semibold mb-1">Ships:</div>
                                    <div className="text-gray-600 dark:text-gray-400">Next day delivery</div>
                                    <div className="text-sm mt-1">Free Shipping</div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Sticky Bottom Area */}
                        <div className="bg-[#f5f5f7] dark:bg-neutral-900 rounded-2xl p-6 mt-4 mb-24">
                            <div className="flex flex-col gap-1 mb-6">
                                <div className="text-3xl font-semibold tracking-tight">
                                    <Price amount={product.priceRange.maxVariantPrice.amount} currencyCode={product.priceRange.maxVariantPrice.currencyCode} />
                                </div>
                                <div className="text-sm text-gray-500">One-time payment</div>
                            </div>

                            <div className="w-full">
                                <AddToCart product={product} />
                            </div>

                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200 dark:border-neutral-800">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[13px]">Still deciding?</span>
                                    <span className="text-[12px] text-gray-500">Save all your configurations for later.</span>
                                </div>
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                        </svg>
                                        Save
                                    </button>
                                    <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
