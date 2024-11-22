"use client";

import React, { useState } from "react";
import { Icon, StarIcon } from "lucide-react";
import { starNorth } from '@lucide/lab';
import { DropdownMenu } from "./dropdown-menu";
import { Button } from "./button";


interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ( { product } ) => {
    const [selectedOption, setSelectedOption] = useState( "Professional + Elegant" );

    const solutions = [
        {
            name: "Professional + Elegant",
            href: "#",
            icon: () => <span className="text-deepTeal-700">🖤</span>,
            description: "A clean and sleek look for a more refined aesthetic."
        },
        {
            name: "Bold + Fierce",
            href: "#",
            icon: () => <span className="text-red-700">🔥</span>,
            description: "Embrace boldness with a fierce and powerful design."
        },
        {
            name: "Classic + Modern",
            href: "#",
            icon: () => <span className="text-indigo-700">🎨</span>,
            description: "A perfect blend of timeless elegance and contemporary style."
        },
        {
            name: "Colorful + Friendly",
            href: "#",
            icon: () => <span className="text-yellow-500">🌈</span>,
            description: "Vibrant and welcoming, ideal for a joyful atmosphere."
        },
        {
            name: "Monotone + Welcoming",
            href: "#",
            icon: () => <span className="text-gray-700">⚪</span>,
            description: "A minimalist approach with a welcoming, neutral tone."
        },
    ];

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
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl text-teal-800 font-bold tracking-tight  sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {/* Loop through the rating to display filled or outline stars */}
                                    {[0, 1, 2, 3, 4].map( ( rating ) => (
                                        // Use filled star if the current rating is equal to or greater than the index
                                        product.reviews.average > rating ? (
                                            <StarIcon
                                                key={rating}
                                                fill="true"
                                                aria-hidden="true"
                                                className="text-gray-900 size-5 shrink-0"
                                            />
                                        ) : (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className="text-gray-200 size-5 shrink-0"
                                            />
                                        )
                                    ) )}
                                </div>
                                <p className="sr-only">{product.reviews.average} out of 5 stars</p>
                                <a
                                    href={product.reviews.href}
                                    className="ml-3 text-sm font-medium text-deepBlue-600 hover:text-deepBlue-500"
                                >
                                    {product.reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Dropdown menu for options */}
                            <DropdownMenu label="Choose your Style" solutions={solutions} />
                            <Button
                                type="submit"
                                className="mt-64"
                            >
                                Get Started Today
                            </Button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
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

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default ProductDetails;
