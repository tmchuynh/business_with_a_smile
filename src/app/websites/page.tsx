"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { CheckIcon } from '@heroicons/react/20/solid';
import { classNames, encodeUrlSafeBase64 } from '@/lib/utils';
import ImportanceOfWebDesign from '@/components/Importance-of-Web-Design';
import { website_types } from '../../../types/constants';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Badge } from '@/components/ui/badge';
import { HeaderImage } from '@/components/ui/header-image';

export default function Pricing() {
    const router = useRouter();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    function navigate( name: string, index: number ) {
        router.push( `/websites/${ encodeUrlSafeBase64( name ) }/plans?index=${ encodeUrlSafeBase64( index.toString() ) }` );
    }

    return (
        <>
            <div className="relative isolate bg-white dark:bg-softGray-900">
                <HeaderImage url={'/images/mountain.jpg'} />
                <div className="text-center mb-12">
                    <div className="mx-auto max-w-4xl text-center">
                        <h6>Pricing Plans</h6>
                        <h1>Find the Perfect Customizations for Your Needs</h1>
                        <h2>
                            Explore affordable pricing options designed to help you engage
                            your audience, build lasting customer loyalty, and boost your
                            sales.
                        </h2>
                    </div>
                </div>

                <div className="mx-auto grid items-center max-w-lg grid-cols-1 mt-20 gap-8 lg:max-w-6xl lg:grid-cols-3">
                    <div className="mx-auto max-w-4xl text-center">
                        <h4>
                            Are You a Student?
                        </h4>
                        <p className='w-3/4 mx-auto'>
                            Enjoy a 60% discount on your first purchase with our exclusive
                            student discount.
                        </p>
                        <p className='w-3/4 mx-auto'>
                            Simply upload a photo of your current student ID card with your
                            project submission.
                        </p>
                    </div>

                    {website_types.map( ( website, index ) => (
                        <div
                            key={`${ website.id }_${ index }`}
                            className={classNames(
                                website.popular
                                    ? "relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 shadow-2xl hover:scale-105"
                                    : "bg-white dark:bg-gray-200 ring-teal-200 hover:ring-teal-300 ",
                                "rounded-3xl ring-1 ring-deepTeal-900/10 p-8 transition-all duration-300 flex flex-col justify-between mx-8 lg:mx-0  h-[37rem]"
                            )}
                        >
                            <div className="flex flex-col justify-evenly h-[25rem]">
                                <div>
                                    <div className='flex justify-between items-end'>
                                        <h3
                                            id={website.id}
                                            className={classNames(
                                                website.popular
                                                    ? "text-softNeutral-200 "
                                                    : "text-deepTeal-600 dark:text-deepBlue-600",
                                                "text-base/7 font-semibold "
                                            )}
                                        >
                                            {website.name}
                                        </h3>
                                        {mounted && (
                                            <>
                                                {website.popular ? (
                                                    <Badge
                                                        variant={isDarkMode ? "outline" : "ghost"}
                                                        className="mt-5 uppercase self-start"
                                                    >
                                                        Popular
                                                    </Badge>
                                                ) : (
                                                    ""
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <p className="mt-3 flex items-baseline gap-x-2">
                                        <span
                                            className={classNames(
                                                website.popular
                                                    ? "text-white"
                                                    : "text-softNeutral-900 ",
                                                "text-5xl font-semibold tracking-tight"
                                            )}
                                        >
                                            {website.startingPrice}
                                        </span>
                                    </p>

                                    <p
                                        className={classNames(
                                            website.popular
                                                ? "text-softNeutral-300"
                                                : "text-softNeutral-600 dark:text-softNeutral-900",
                                            "mt-6 text-base/7"
                                        )}
                                    >
                                        {website.description}
                                    </p>
                                </div>
                                <ul
                                    role="list"
                                    className={classNames(
                                        website.popular
                                            ? "text-softNeutral-300"
                                            : "text-softNeutral-600 dark:text-softNeutral-900",
                                        "mt-4 space-y-2 text-sm/6 sm:mt-8"
                                    )}
                                >
                                    {website.other_info.features.map( ( feature ) => (
                                        <li key={feature} className="flex gap-x-2">
                                            <CheckIcon
                                                className={classNames(
                                                    website.popular
                                                        ? isDarkMode
                                                            ? "text-deepBlue-200"
                                                            : "text-deepTeal-200"
                                                        : isDarkMode
                                                            ? "text-deepBlue-600"
                                                            : "text-deepTeal-500",
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
                                        website.popular
                                            ? isDarkMode
                                                ? "outline"
                                                : "default"
                                            : isDarkMode
                                                ? "secondary"
                                                : "outline"
                                    }
                                    className="mt-8"
                                    onClick={() => navigate( website.name, index )}
                                >
                                    Get Started Today
                                </Button>
                            )}
                        </div>
                    ) )}

                    <div className="mx-auto max-w-4xl text-center">
                        <h4>
                            Need ongoing maintenance?
                        </h4>
                        <p className='w-3/4 mx-auto'>
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
