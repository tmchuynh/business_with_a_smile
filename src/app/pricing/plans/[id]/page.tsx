"use client";

import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { paymentPlans } from "../../../../../types";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function PaymentDetails() {
    const planId = useParams().id;

    const plan = paymentPlans.find( ( p ) => p.id === planId );

    if ( !plan ) {
        return <p>Plan not found.</p>;
    }

    return (
        <div className="bg-white py-16 px-6 lg:px-8">
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
                    <Button variant="default" className="py-3 px-6">
                        Choose {plan.name}
                    </Button>
                </div>
            </div>
        </div>
    );
}
