"use client";

import React from "react";
import { Icon } from "lucide-react";
import { starNorth } from '@lucide/lab';


interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ( { product } ) => {

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <img
                        alt={product.images[0].alt}
                        src={product.images[0].src}
                        className="hidden aspect-[3/4] size-full shadow-lg bg-softNeutral-100 rounded-lg object-cover lg:block"
                    />
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <img
                            alt={product.images[1].alt}
                            src={product.images[1].src}
                            className="aspect-[3/2] size-full shadow-lg bg-softNeutral-100 rounded-lg object-cover"
                        />
                        <img
                            alt={product.images[2].alt}
                            src={product.images[2].src}
                            className="aspect-[3/2] size-full shadow-lg bg-softNeutral-100 rounded-lg object-cover"
                        />
                    </div>
                    <img
                        alt={product.images[3].alt}
                        src={product.images[3].src}
                        className="aspect-[4/5] size-full shadow-lg bg-softNeutral-100 object-cover sm:rounded-lg lg:aspect-[3/4]"
                    />
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div>
                        <h1 className="text-2xl text-teal-800 font-bold tracking-tight  sm:text-3xl">{product.name}</h1>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-deepBlue-700">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="space-y-2 text-sm">
                                    {product.highlights.map( ( highlight ) => (
                                        <li key={highlight} className="text-gray-400 flex">
                                            <Icon iconNode={starNorth}
                                                aria-hidden="true"
                                                className={'text-deepBlue-600 h-5 w-8 flex-none'}
                                            />
                                            {highlight}
                                        </li>
                                    ) )}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-deepBlue-700">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
