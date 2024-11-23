"use client";

import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useRouter } from "next/navigation";

const paymentPlans = [
    {
        name: "Early Payment Discount",
        id: "early-payment-discount",
        price: "1",
        description: "Receive a discount by paying the full amount upfront.",
        features: [
            "100% payment upfront to initiate the project",
            "Includes a 10% discount on total project cost",
            "Priority scheduling and support",
        ],
        isPopular: true,
    },
    {
        name: "50/50 Split",
        id: "fifty-fifty",
        price: "2",
        description: "A flexible payment option with two installments.",
        features: [
            "50% deposit upfront to start the project",
            "Remaining 50% due before the site goes live",
            "Regular updates during development",
        ],
        isPopular: false,
    },
    {
        name: "Three Milestone Plan",
        id: "three-milestones",
        price: "3",
        description: "Spread payments across three key project milestones.",
        features: [
            "33% deposit upfront to initiate the project",
            "33% payment halfway through the project",
            "Remaining 34% due before the site goes live",
            "Milestone-based progress reports",
        ],
        isPopular: false,
    },
    {
        name: "Monthly Payment Plan",
        id: "monthly-plan",
        price: "6 or 12",
        description: "Spread the cost over several months with equal payments.",
        features: [
            "20% deposit upfront to begin the project",
            "Equal monthly payments over 6 or 12 months",
            "Ideal for manageable budgeting",
            "Includes a small administrative fee",
        ],
        isPopular: false,
    },
    {
        name: "Pay-as-you-go Plan",
        id: "pay-as-you-go",
        price: "Varies",
        description: "Pay for each development phase upon completion.",
        features: [
            "30% deposit upfront to start the project",
            "Payments made after each completed phase",
            "Flexibility to adjust project scope",
            "Control over your spending",
        ],
        isPopular: false,
    },
    {
        name: "Subscription-based Model",
        id: "subscription-model",
        price: "Monthly or Annual",
        description: "Recurring fee for ongoing development and maintenance services.",
        features: [
            "Initial setup fee as a deposit (30% of total project cost)",
            "Website development included",
            "Ongoing maintenance and support",
            "Regular updates and security patches",
            "Ideal for long-term partnerships",
        ],
        isPopular: true,
    },
    {
        name: "Deferred Payment Plan",
        id: "deferred-payment",
        price: "Flexible",
        description: "Start the project with a minimal deposit and defer payments.",
        features:
            [
                "20% deposit upfront to begin the project",
                "Remaining balance deferred to 60 days after project completion",
                "Ideal for startups with cash flow constraints",
                "Flexible payment schedule",
            ],
        isPopular: false,
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function PaymentOptions() {
    const router = useRouter();

    function navigate( id: string ) {
        router.push( `/pricing/plans/${ id }` );
    }

    return (
        <div className="relative isolate bg-softNeutral-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center mb-12">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold text-teal-600">Flexible Payment Options</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                        Find the Payment Plan That Fits You Best
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
                    We offer customizable payment plans designed to meet your budget and business goals.
                    Select a plan that works for you and grow your business with confidence.
                </p>
            </div>
            <div className="mx-auto m-7 grid max-w-lg grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-8 lg:max-w-7xl">
                {paymentPlans.map( ( plan, index ) => (
                    <div
                        key={`${ plan.id }_${ index }`}
                        className={classNames(
                            plan.isPopular
                                ? 'relative bg-gradient-to-br from-deepTeal-500 to-deepBlue-900 text-white shadow-xl'
                                : 'bg-white/60 ring-1 ring-teal-200 hover:ring-teal-300',
                            'rounded-3xl p-8 ring-1 ring-teal-900/10 hover:shadow-xl flex flex-col justify-between space-y-4'
                        )}
                    >
                        <div>
                            <h3
                                id={plan.id}
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-200' : 'text-deepTeal-600',
                                    'text-xl font-semibold'
                                )}
                            >
                                {plan.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        plan.isPopular ? 'text-white' : 'text-softNeutral-900',
                                        'text-4xl font-semibold tracking-tight'
                                    )}
                                >
                                    {plan.price}
                                </span>
                                <span
                                    className={classNames(
                                        plan.isPopular ? 'text-softNeutral-400' : 'text-softNeutral-500',
                                        'text-base'
                                    )}
                                >
                                    {['Varies'].includes( plan.price ) ? '' : ['1', 'Flexible'].includes( plan.price ) ? 'payment' : 'payments'}
                                </span>
                            </p>
                            <p
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 text-base'
                                )}
                            >
                                {plan.description}
                            </p>

                            <ul
                                role="list"
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 space-y-2 text-sm sm:mt-8'
                                )}
                            >
                                {plan.features.map( ( feature ) => (
                                    <li key={feature} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                plan.isPopular ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-5 flex-none',
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ) )}
                            </ul>
                        </div>

                        <Button
                            variant={plan.isPopular ? 'default' : 'outline'}
                            className="mt-8"
                            onClick={() => navigate( plan.id )}
                        >
                            Get Started Today
                        </Button>
                    </div>
                ) )}
            </div>
        </div>
    );
}
