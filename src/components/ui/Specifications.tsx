import React from "react";

interface Feature {
    name: string;
    description: string;
}

interface SpecificationsProps {
    title: string;
    description: string;
    features: Feature[];
}

export const Specifications: React.FC<SpecificationsProps> = ( {
    title,
    description,
    features,
} ) => {
    return (
        <div className="bg-white dark:bg-softGray-900">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-6xl lg:grid-cols-3 lg:px-8">
                {/* Text Section */}
                <div className="flex flex-col items-start h-72">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>


                <dl className="mt-16 grid grid-cols-1 col-span-1 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-y-16 lg:gap-x-8 lg:col-span-2">
                    {features.map( ( feature, index ) => (
                        <div key={index} className="border-t border-deepTeal-600 dark:border-deepBlue-400 pt-4">
                            <h6>{feature.name}</h6>
                            <p>
                                {feature.description}
                            </p>
                        </div>
                    ) )}
                </dl>

            </div>
        </div>
    );
};
