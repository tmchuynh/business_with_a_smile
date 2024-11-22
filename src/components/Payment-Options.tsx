import { CheckIcon } from '@heroicons/react/20/solid';
import { Button } from './ui/button';

const paymentPlans = [
    {
        name: "Pay in Full",
        id: "full-upfront",
        price: "1",
        description: "Best for clients who want to settle upfront and avoid staggered payments.",
        features: [
            "100% payment upfront at the start of the project",
            "Dedicated project manager",
            "Priority support",
        ],
        isPopular: true,
    },
    {
        name: "50/50 Split",
        id: "fifty-fifty",
        price: "2",
        description: "A flexible payment option with two installments.",
        features: [
            "50% payment upfront at the start of the project",
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
            "25% payment upfront at the start of the project",
            "25% payment halfway through the project",
            "50% payment due before the site goes live",
            "Regular milestone-based progress reports",
        ],
        isPopular: false,
    },
    {
        name: "Extended Milestone Plan",
        id: "extended-milestones",
        price: "4",
        description: "Ideal for non-rushed projects with detailed phases.",
        features: [
            "50% payment upfront at the start of the project",
            "10% payment two weeks into the project",
            "15% payment three weeks into the project",
            "25% payment due before the site goes live",
            "Exclusive to projects with standard timelines (no rush)",
        ],
        isPopular: false,
    },
];


function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function PaymentOptions() {
    return (
        <div className="relative isolate bg-softNeutral-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-deepTeal-600">Payment Plans</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Choose a Payment Plan That Works for You
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                Flexible payment options to suit your needs. Choose a plan that fits your budget and scale your business at your own pace.
            </p>
            <div className="mx-auto m-7 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:max-w-7xl">
                {paymentPlans.map( ( plan, index ) => (
                    <div
                        key={plan.id}
                        className={classNames(
                            plan.isPopular
                                ? 'relative bg-gradient-to-br from-deepTeal-500 to-deepBlue-900 text-white shadow-xl'
                                : 'bg-white/60 ring-1 ring-teal-200  hover:ring-teal-300',
                            'rounded-3xl p-8 ring-1 ring-teal-900/10 hover:shadow-xl ease-in-out transition-all duration-300 transform hover:scale-105 flex flex-col justify-between space-y-4'
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

                                {plan.id === 'full-upfront' ? (
                                    <span
                                        className={classNames(
                                            plan.isPopular ? 'text-softNeutral-400' : 'text-softNeutral-500',
                                            'text-base'
                                        )}
                                    >
                                        payment
                                    </span>
                                ) :
                                    <span
                                        className={classNames(
                                            plan.isPopular ? 'text-softNeutral-400' : 'text-softNeutral-500',
                                            'text-base'
                                        )}
                                    >
                                        payment(s)
                                    </span>}
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
                                    'mt-4 space-y-2 text-sm/6 sm:mt-8'
                                )}
                            >
                                {plan.features.map( ( feature ) => (
                                    <li key={feature} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                plan.isPopular ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-8 flex-none',
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
                        >
                            Get Started Today
                        </Button>
                    </div>
                ) )}
            </div>
        </div>
    );
}
