import React from "react";

interface Feature {
    name: string;
    description: string;
    icon: React.ElementType;
}

interface FeatureSectionProps {
    title: string;
    subtitle: string;
    description: string;
    features: Feature[];
    image: { src: string; alt: string; };
}

export const FeatureSection: React.FC<FeatureSectionProps> = ( {
    title,
    subtitle,
    description,
    features,
    image,
} ) => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-indigo-600">{subtitle}</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                {title}
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">{description}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map( ( feature ) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute left-1 top-1 size-5 text-indigo-600"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ) )}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt={image.alt}
                        src={image.src}
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
};
