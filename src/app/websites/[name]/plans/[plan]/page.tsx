"use client";

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { decodeUrlSafeBase64 } from "@/lib/utils";
import { paymentPlans } from "../../../../../../types/constants";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

export default function PaymentDetails() {
    const router = useRouter();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';
    const planName = useParams().plan!.toString();
    console.log( planName );
    const name = decodeUrlSafeBase64( planName );

    const plan = paymentPlans.find( ( p ) => p.name === name );

    if ( !plan ) {
        return <p>Plan not found.</p>;
    }

    const params = useParams<{ name: string; plan: string; }>();

    function navigate() {
        const { name, plan } = params;
        router.push( `/contact?paymentMethod=${ plan }&website=${ name }` );
    }

    return (
        <div className="py-10 lg:py-52 px-6 mt-16 lg:px-8 h-max">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h6>Payment Option</h6>
                <h1>
                    {plan.name}
                </h1>
                <h2>
                    {plan.description}
                </h2>
                {mounted && (
                    <>
                        {plan.popular ? (
                            <Badge
                                variant={isDarkMode ? "outline" : "default"}
                                className="mt-5 uppercase"
                            >
                                Popular
                            </Badge>
                        ) : (
                            ""
                        )}
                    </>
                )}
            </div>

            <div className="max-w-3xl mx-auto">
                {/* In-depth Details */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-deepTeal-600 dark:text-deepBlue-500">
                        How It Works
                    </h2>
                    <ul className="space-y-4">
                        {plan.details.map( ( detail, index ) => (
                            <li
                                key={index}
                                className="flex items-center dark:text-softNeutral-200"
                            >
                                <CheckIcon
                                    className="h-6 w-6 text-deepTeal-600 dark:text-deepBlue-400 mt-1 flex-shrink-0"

                                />
                                <p className="ml-3">{detail}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-deepTeal-600 dark:text-deepBlue-500">
                        Features
                    </h2>
                    <ul className="space-y-2">
                        {plan.features.map( ( feature, index ) => (
                            <li
                                key={index}
                                className="flex items-center dark:text-softNeutral-200"
                            >
                                <CheckIcon
                                    className="h-6 w-6 text-deepTeal-600 dark:text-deepBlue-400 mt-1 flex-shrink-0"

                                />
                                <p className="ml-3">{feature}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Payment Timeline */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-deepTeal-600 dark:text-deepBlue-500 -mb-6">
                        Payment Schedule
                    </h2>
                    <Timeline items={plan.paymentSchedule} />
                </div>

                {/* Call-to-Action */}
                <div className="text-center">
                    {mounted && (
                        <Button
                            variant={isDarkMode ? "secondary" : "default"}
                            className="py-3 px-6"
                            onClick={() => navigate()}
                        >
                            Choose {plan.name}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
