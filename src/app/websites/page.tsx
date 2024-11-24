"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames, encodeUrlSafeBase64 } from '@/lib/utils';
import ImportanceOfWebDesign from '@/components/Importance-of-Web-Design';
import { tiers } from '../../../types/constants';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Pricing() {
    const router = useRouter();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    function navigate( name: string ) {
        router.push( `/websites/${ encodeUrlSafeBase64( name ) }/plans` );
    }

    return (
        <>
            <div className="relative isolate bg-white dark:bg-softGray-900 px-6 py-28 lg:px-8">
                <div className="text-center mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h6>
                            Pricing Plans
                        </h6>
                        <h1>
                            Find the Perfect Customizations for Your Needs
                        </h1>
                        <h2 className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-softNeutral-600 dark:text-softNeutral-50 sm:text-xl">
                            Explore affordable pricing options designed to help you engage
                            your audience, build lasting customer loyalty, and boost your
                            sales.
                        </h2>
                    </div>
                </div>

                <div className="mx-auto grid items-center max-w-lg grid-cols-1 mt-20 gap-8 lg:max-w-6xl lg:grid-cols-3">
                    <div className="mx-auto max-w-4xl text-center">
                        <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 dark:text-deepBlue-400 text-4xl">
                            Are You a Student?
                        </h4>
                        <p className="mt-6 text-lg text-softNeutral-600 dark:text-softNeutral-50">
                            Enjoy a 60% discount on your first purchase with our exclusive
                            student discount.
                        </p>
                        <p className="mt-2 text-lg text-softNeutral-600 dark:text-softNeutral-50">
                            Simply upload a photo of your current student ID card with your
                            project submission.
                        </p>
                    </div>

                    {tiers.map( ( tier, tierIdx ) => (
                        <div
                            key={`${ tier.id }_${ tierIdx }`}
                            className={classNames(
                                tier.featured
                                    ? "relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 shadow-2xl hover:scale-105"
                                    : "bg-white dark:bg-gray-200 ring-teal-200 hover:ring-teal-300 ",
                                "rounded-3xl ring-1 ring-deepTeal-900/10 p-8 transition-all duration-300 flex flex-col justify-between mx-8 lg:mx-0  h-[37rem]"
                            )}
                        >
                            <div className="flex flex-col justify-evenly h-[25rem]">
                                <div>
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.featured
                                                ? "text-softNeutral-200 "
                                                : "text-deepTeal-600 dark:text-deepBlue-600",
                                            "text-base/7 font-semibold "
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    <p className="mt-3 flex items-baseline gap-x-2">
                                        <span
                                            className={classNames(
                                                tier.featured
                                                    ? "text-white"
                                                    : "text-softNeutral-900 ",
                                                "text-5xl font-semibold tracking-tight"
                                            )}
                                        >
                                            {tier.priceStartingAt}
                                        </span>
                                    </p>
                                    <p
                                        className={classNames(
                                            tier.featured
                                                ? "text-softNeutral-300"
                                                : "text-softNeutral-600 dark:text-softNeutral-900",
                                            "mt-6 text-base/7"
                                        )}
                                    >
                                        {tier.description}
                                    </p>
                                </div>
                                <ul
                                    role="list"
                                    className={classNames(
                                        tier.featured
                                            ? "text-softNeutral-300"
                                            : "text-softNeutral-600 dark:text-softNeutral-900",
                                        "mt-4 space-y-2 text-sm/6 sm:mt-8"
                                    )}
                                >
                                    {tier.features.map( ( feature ) => (
                                        <li key={feature} className="flex gap-x-2">
                                            <CheckIcon
                                                aria-hidden="true"
                                                className={classNames(
                                                    tier.featured
                                                        ? "text-deepTeal-300"
                                                        : "text-deepTeal-600",
                                                    "h-5 w-8 flex-none"
                                                )}
                                            />
                                            {feature}
                                        </li>
                                    ) )}
                                </ul>
                            </div>
                            {mounted && (
                                <Button
                                    variant={
                                        tier.featured
                                            ? isDarkMode
                                                ? "outline"
                                                : "default"
                                            : isDarkMode
                                                ? "secondary"
                                                : "outline"
                                    }
                                    className="mt-8"
                                    onClick={() => navigate( tier.name )}
                                >
                                    Get Started Today
                                </Button>
                            )}
                        </div>
                    ) )}

                    <div className="mx-auto max-w-4xl text-center">
                        <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 dark:text-deepBlue-400 text-4xl">
                            Need ongoing maintenance?
                        </h4>
                        <p className="mt-6 text-lg text-softNeutral-600 dark:text-softNeutral-50">
                            Upgrade with our add-ons for ongoing maintenance and support.
                        </p>
                        <form className="flex items-center gap-3 justify-center mx-auto my-3">
                            {mounted && (
                                <Button
                                    className="w-3/4"
                                    variant={isDarkMode ? "secondary" : "default"}
                                >
                                    Upgrade Today
                                </Button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <ImportanceOfWebDesign />
        </>
    );
}
