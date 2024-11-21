import React from "react";

interface HeroSectionProps {
    heading: string;
    subheading: string;
    primaryButton: { label: string; href: string; };
    secondaryButton: { label: string; href: string; };
    image: { src: string; alt: string; };
}

export const HeroSection: React.FC<HeroSectionProps> = ( {
    heading,
    subheading,
    primaryButton,
    secondaryButton,
    image,
} ) => {
    return (
        <div className="bg-softNeutral-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-deepTeal-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#hero-gradient)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="hero-gradient">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-white text-3xl font-semibold tracking-tight sm:text-4xl">
                            {heading}
                        </h2>
                        <p className="mt-6 text-softNeutral-200 text-lg/8">{subheading}</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href={primaryButton.href}
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-deepTeal-700 shadow-sm hover:bg-deepTeal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepTeal-700"
                            >
                                {primaryButton.label}
                            </a>
                            <a
                                href={secondaryButton.href}
                                className="text-sm/6 font-semibold text-white hover:text-softNeutral-300"
                            >
                                {secondaryButton.label} <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            alt={image.alt}
                            src={image.src}
                            width={1824}
                            height={1080}
                            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};