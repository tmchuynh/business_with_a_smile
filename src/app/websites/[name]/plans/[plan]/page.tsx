"use client";

import React, { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { classNames, decodeUrlSafeBase64 } from "@/lib/utils";
import { paymentPlans } from "../../../../../../types/constants";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { HeaderImage } from "@/components/ui/header-image";

export default function PaymentDetails() {
    const router = useRouter();
    const params = useParams<{ name: string; plan: string; }>();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';
    const planName = useParams().plan!.toString();
    const name = decodeUrlSafeBase64( planName );

    const plan = paymentPlans.find( ( p ) => p.name === name );

    if ( !plan ) {
        return <p>Plan not found.</p>;
    }

    function navigate() {
        const { name, plan } = params;
        router.push( `/contact?paymentMethod=${ plan }&website=${ name }` );
    }

    return (
        <div className="pb-20 h-max">
            <HeaderImage url={'/images/mountain.jpg'} />
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
                                variant={isDarkMode ? "outline" : "ghost"}
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
                    <h4>
                        How It Works
                    </h4>
                    <ul className="space-y-1">
                        {plan.details.map( ( detail, index ) => (
                            <li
                                key={index}
                                className="flex items-center"
                            >
                                <CheckIcon
                                    className={classNames(
                                        isDarkMode
                                            ? "text-deepBlue-200"
                                            : "text-deepTeal-600",
                                        "h-5 w-8 flex-none"
                                    )}
                                />
                                <p className="ml-3">{detail}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h4>
                        Features
                    </h4>
                    <ul className="space-y-1">
                        {plan.features.map( ( feature, index ) => (
                            <li
                                key={index}
                                className="flex items-center"
                            >
                                <CheckIcon
                                    className={classNames(
                                        isDarkMode
                                            ? "text-deepBlue-200"
                                            : "text-deepTeal-600",
                                        "h-5 w-8 flex-none"
                                    )}
                                />
                                <p className="ml-3">{feature}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Payment Timeline */}
                <div className="mb-12">
                    <h4 className="-mb-7">
                        Payment Schedule
                    </h4>
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
