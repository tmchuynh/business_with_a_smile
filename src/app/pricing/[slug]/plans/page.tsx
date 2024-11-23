"use client";

import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter } from "next/navigation";

const paymentPlans = [
    {
        name: "Upfront Advantage Plan",
        id: "upfront-advantage",
        price: "1",
        description: "Maximize Savings and Get Priority Service with Upfront Payment.",
        benefits: [
            "Save 10% instantly by paying the full amount upfront.",
            "Secure priority scheduling to start your project without delays.",
            "Enjoy dedicated, premium support throughout your project journey.",
            "Experience the efficiency and peace of mind that comes with seamless, prioritized service."
        ],
        isPopular: true,
    },
    {
        name: "50/50 Installment Plan",
        id: "fifty-fifty",
        price: "2",
        description: "Simplify Your Payments with Two Easy Installments.",
        benefits: [
            "Split your project cost into two manageable payments.",
            "Start with a smaller upfront investment and pay the balance before launch.",
            "Stay on track with regular progress updates during development."
        ],
        isPopular: false,
    },
    {
        name: "Three-Step Milestone Plan",
        id: "three-milestones",
        price: "3",
        description: "Budget-Friendly Payments Aligned with Project Milestones.",
        benefits: [
            "Divide payments into three structured milestones for better control.",
            "Receive progress reports at every milestone to ensure transparency.",
            "Stay informed and engaged throughout your project."
        ],
        isPopular: false,
    },
    {
        name: "Flexible Monthly Plan",
        id: "monthly-plan",
        price: "6",
        description: "Spread Payments Over Time with a Monthly Schedule.",
        benefits: [
            "Ease financial strain with equal monthly payments.",
            "Choose a 6-month  to match your budget needs.",
            "Begin your project with minimal upfront investment.",
            "Maintain financial flexibility while your project moves forward."
        ],
        isPopular: false,
    },
    {
        name: "Pay-As-You-Go Plan",
        id: "pay-as-you-go",
        price: "Varies",
        description: "Pay Per Phase for Maximum Flexibility.",
        benefits: [
            "Only pay for completed work at each development phase.",
            "Adjust the scope and direction of the project as needed.",
            "Manage costs effectively by controlling payments phase by phase.",
            "Retain control over both your spending and project timeline."
        ],
        isPopular: false,
    },
    {
        name: "Ongoing Subscription Plan",
        id: "subscription-model",
        price: "Monthly or Annual",
        description: "A Recurring Plan for Continuous Development and Maintenance.",
        benefits: [
            "Get ongoing development, updates, and maintenance with ease.",
            "Enjoy consistent support and security enhancements.",
            "Spread costs predictably with monthly or annual payments.",
            "Build a long-term partnership to ensure your project’s success."
        ],
        isPopular: true,
    },
    {
        name: "Deferred Payment Plan",
        id: "deferred-payment",
        price: "Flexible",
        description: "Start Now, Pay Later with a Deferred Payment Schedule.",
        benefits: [
            "Begin your project with a minimal upfront deposit.",
            "Defer remaining payments until after project milestones are reached.",
            "Perfect for startups and businesses with cash flow constraints.",
            "Enjoy a flexible payment schedule tailored to your needs."
        ],
        isPopular: false,
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function PaymentOptions() {
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split( '/' ).filter( Boolean );
    const website = segments.length > 1 ? decodeURIComponent( segments[1] ) : '';

    function navigate( name: string ) {
        router.push( `/pricing/${ website }/plans/${ encodeURIComponent( name ) }` );
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
            <div className="mx-auto m-7 grid h-screen max-w-lg grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-8 lg:max-w-7xl">
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
                                {plan.benefits.map( ( benefit, index ) => (
                                    <li key={`${ benefit }_${ index }`} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                plan.isPopular ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-5 flex-none',
                                            )}
                                        />
                                        {benefit}
                                    </li>
                                ) )}
                            </ul>
                        </div>

                        <Button
                            variant={plan.isPopular ? 'default' : 'outline'}
                            className="mt-8"
                            onClick={() => navigate( plan.name )}
                        >
                            View Details
                        </Button>
                    </div>
                ) )}
            </div>
        </div>
    );
}
