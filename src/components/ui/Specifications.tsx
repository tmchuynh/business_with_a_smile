import React from "react";

interface Feature {
    name: string;
    description: string;
}

interface SpecificationsProps {
    title: string;
    description: string;
    features: Feature[];
    images: { src: string; alt: string; }[];
}

export const Specifications: React.FC<SpecificationsProps> = ( {
    title,
    description,
    features,
    images,
} ) => {
    return (
        <div className="bg-softNeutral-50">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-deepTeal-700 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-softNeutral-700 dark:text-softNeutral-300">
                        {description}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map( ( feature, index ) => (
                            <div key={index} className="border-t border-softNeutral-300 pt-4">
                                <dt className="font-medium text-deepTeal-700">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-softNeutral-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ) )}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    {images.map( ( image, index ) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg bg-softNeutral-100 shadow-lg"
                        />
                    ) )}
                </div>
            </div>
        </div>
    );
};