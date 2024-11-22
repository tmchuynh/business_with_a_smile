"use client";

import React from "react";

interface Callout {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
}

interface CalloutsGridProps {
    title: string;
    callouts: Callout[];
}

export const CalloutsGrid: React.FC<CalloutsGridProps> = ( {
    title,
    callouts,
} ) => {
    return (
        <div className="bg-softNeutral-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl sm:text-center lg:max-w-none lg:text-left">
                    <h2 className="text-3xl font-bold text-deepTeal-700">{title}</h2>

                    <div className="mt-12 grid grid-cols-1sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
                        {callouts.map( ( callout ) => (
                            <div key={callout.name} className="group relative">
                                <img
                                    alt={callout.imageAlt}
                                    src={callout.imageSrc}
                                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                                />
                                <h3 className="mt-6 text-sm font-medium text-deepTeal-600">
                                    <a
                                        href={callout.href}
                                        className="relative z-10 group-hover:text-deepTeal-900"
                                    >
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-softNeutral-700 group-hover:text-deepTeal-700">
                                    {callout.description}
                                </p>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>
        </div>
    );
};
