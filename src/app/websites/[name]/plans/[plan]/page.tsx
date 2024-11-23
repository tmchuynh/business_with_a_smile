"use client";

import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { paymentPlans } from "../../../../../../types";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { decodeUrlSafeBase64 } from "@/lib/utils";

export default function PaymentDetails() {
    const router = useRouter();

    const planName = useParams().id!.toString();
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
                <h1 className="text-4xl font-bold text-gray-900">{plan.name}</h1>
                <p className="mt-4 text-lg text-gray-600">{plan.description}</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* In-depth Details */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
                    <ul className="space-y-4 text-gray-700">
                        {plan.details.map( ( detail, index ) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <p className="ml-3">{detail}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Features */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
                    <ul className="space-y-2 text-gray-700">
                        {plan.features.map( ( feature, index ) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" aria-hidden="true" />
                                <p className="ml-3">{feature}</p>
                            </li>
                        ) )}
                    </ul>
                </div>

                {/* Payment Timeline */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Schedule</h2>
                    <Timeline items={plan.paymentSchedule} />
                </div>

                {/* Call-to-Action */}
                <div className="text-center">
                    <Button variant="default" className="py-3 px-6" onClick={() => navigate()}>
                        Choose {plan.name}
                    </Button>
                </div>
            </div>
        </div>
    );
}
