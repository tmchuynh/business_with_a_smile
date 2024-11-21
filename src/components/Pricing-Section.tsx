import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$29',
        description: "The perfect plan if you're just getting started with our product.",
        features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
        featured: false,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$99',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        href: '#',
        priceMonthly: '$49',
        description: "Unlock powerful features and increased support.",
        features: [
            '50 products',
            'Up to 50,000 subscribers',
            'Advanced analytics',
            'Priority support response time',
            'Marketing automations',
            'Custom integrations',
            'Premium templates',
        ],
        featured: false,
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#4fd1c5] to-[#2b6cb0] opacity-30"
                />
            </div>
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-teal-600">Pricing</h2>
                <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                loyalty, and driving sales.
            </p>
            <div className="mx-auto mt-16 grid items-center max-w-lg grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
                {tiers.map( ( tier, tierIdx ) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-teal-900 h-[44rem] shadow-2xl' : 'bg-white/60 h-[40rem] sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                            'rounded-3xl p-8 ring-1 ring-teal-900/10 sm:p-10 h-full flex flex-col justify-between',
                        )}
                    >
                        <div>
                            <h3
                                id={tier.id}
                                className={classNames( tier.featured ? 'text-teal-400' : 'text-teal-600', 'text-base/7 font-semibold' )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-3 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        tier.featured ? 'text-white' : 'text-gray-900',
                                        'text-5xl font-semibold tracking-tight',
                                    )}
                                >
                                    {tier.priceMonthly}
                                </span>
                                <span className={classNames( tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base' )}>
                                    /month
                                </span>
                            </p>
                            <p className={classNames( tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7' )}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                                    'mt-4 space-y-2 text-sm/6 sm:mt-8',
                                )}
                            >
                                {tier.features.map( ( feature ) => (
                                    <li key={feature} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                tier.featured ? 'text-teal-400' : 'text-teal-600',
                                                'h-5 w-8 flex-none',
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ) )}
                            </ul>
                        </div>
                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? 'bg-teal-500 text-white shadow-sm hover:bg-teal-400 focus-visible:outline-teal-500'
                                    : 'text-teal-600 ring-1 ring-inset ring-teal-200 hover:ring-teal-300 focus-visible:outline-teal-600',
                                'block rounded-md px-3.5 py-3 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-6',
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
