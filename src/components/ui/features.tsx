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
        <div className="overflow-hidden bg-softNeutral-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Text Section */}
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-lg font-semibold text-deepTeal-700">
                                {subtitle}
                            </h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-deepTeal-900 sm:text-5xl">
                                {title}
                            </p>
                            <p className="mt-6 text-lg text-softNeutral-700">{description}</p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base text-softNeutral-700 lg:max-w-none">
                                {features.map( ( feature ) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-deepTeal-900">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="absolute left-1 top-1 size-5 text-deepTeal-600"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ) )}
                            </dl>
                        </div>
                    </div>

                    {/* Image Section */}
                    <img
                        alt={image.alt}
                        src={image.src}
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-deepTeal-500/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    );
};
