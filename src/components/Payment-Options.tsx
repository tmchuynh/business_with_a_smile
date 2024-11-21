import { CheckIcon } from '@heroicons/react/20/solid';

const paymentPlans = [
    {
        name: 'Basic Monthly',
        id: 'plan-basic-monthly',
        price: '$19',
        description: 'Ideal for individuals and small businesses.',
        features: ['1 Payment Method', '3 Credit Cards', 'Standard Analytics', 'Email Support'],
        isPopular: false,
        frequency: 'per month',
    },
    {
        name: 'Basic Annual',
        id: 'plan-basic-annual',
        price: '$199',
        description: 'Save more with our annual plan.',
        features: ['1 Payment Method', '3 Credit Cards', 'Standard Analytics', 'Email Support'],
        isPopular: true,
        frequency: 'per year',
    },
    {
        name: 'Premium Monthly',
        id: 'plan-premium-monthly',
        price: '$49',
        description: 'For growing businesses that need more features.',
        features: ['Unlimited Payment Methods', '50 Credit Cards', 'Advanced Analytics', '24/7 Support'],
        isPopular: false,
        frequency: 'per month',
    },
    {
        name: 'Premium Annual',
        id: 'plan-premium-annual',
        price: '$499',
        description: 'Unlock additional features with our annual plan.',
        features: ['Unlimited Payment Methods', '50 Credit Cards', 'Advanced Analytics', '24/7 Support'],
        isPopular: true,
        frequency: 'per year',
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function PaymentOptions() {
    return (
        <div className="relative isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-teal-600">Payment Plans</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Choose a Payment Plan That Works for You
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                Flexible payment options to suit your needs. Choose a plan that fits your budget and scale your business at your own pace.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:max-w-7xl">
                {paymentPlans.map( ( plan ) => (
                    <div
                        key={plan.id}
                        className={classNames(
                            plan.isPopular ? 'relative bg-teal-900 text-white shadow-lg' : 'bg-white/60',
                            'rounded-3xl p-8 ring-1 ring-teal-900/10 hover:shadow-xl transition-all duration-300 flex flex-col justify-between',
                        )}
                    >
                        <div>
                            <h3
                                id={plan.id}
                                className={classNames( plan.isPopular ? 'text-teal-400' : 'text-teal-600', 'text-base/7 font-semibold' )}
                            >
                                {plan.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        plan.isPopular ? 'text-white' : 'text-gray-900',
                                        'text-5xl font-semibold tracking-tight',
                                    )}
                                >
                                    {plan.price}
                                </span>
                                <span className={classNames( plan.isPopular ? 'text-gray-400' : 'text-gray-500', 'text-base' )}>
                                    {plan.frequency}
                                </span>
                            </p>
                            <p className={classNames( plan.isPopular ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7' )}>
                                {plan.description}
                            </p>
                        </div>
                        <ul
                            role="list"
                            className={classNames(
                                plan.isPopular ? 'text-gray-300' : 'text-gray-600',
                                'mt-8 space-y-3 text-sm/6 sm:mt-10',
                            )}
                        >
                            {plan.features.map( ( feature ) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className={classNames(
                                            plan.isPopular ? 'text-teal-400' : 'text-teal-600',
                                            'h-6 w-5 flex-none',
                                        )}
                                    />
                                    {feature}
                                </li>
                            ) )}
                        </ul>
                        <a
                            href="#"
                            className={classNames(
                                plan.isPopular
                                    ? 'bg-teal-500 text-white shadow-sm hover:bg-teal-400 focus-visible:outline-teal-500'
                                    : 'text-teal-600 ring-1 ring-inset ring-teal-200 hover:ring-teal-300 focus-visible:outline-teal-600',
                                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ) )}
            </div>
        </div>
    );
}
