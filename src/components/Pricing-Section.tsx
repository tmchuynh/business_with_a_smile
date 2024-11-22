import { CheckIcon } from '@heroicons/react/20/solid';
import { Input } from './ui/input';
import { Button } from './ui/button';

const tiers = [
    {
        name: 'Blog Website',
        id: 'tier-blog',
        href: '#',
        priceStartingAt: '$1,200',
        description: 'Perfect for writers, content creators, or businesses focused on content marketing.',
        features: [
            'Up to 10 pages',
            'Responsive blog design',
            'SEO-optimized blog post templates',
            'Content management system (e.g., WordPress)',
            'Social sharing features',
            '2 revision cycles',
        ],
        featured: false,
    },
    {
        name: 'Business/Portfolio Website',
        id: 'tier-business',
        href: '#',
        priceStartingAt: '$2,000',
        description: 'Ideal for businesses looking to showcase services and attract customers.',
        features: [
            'Up to 10 pages',
            'Responsive design for all devices',
            'Advanced SEO setup',
            'Custom forms and integrations (e.g., newsletter, booking)',
            '4 revision cycles',
            'Basic analytics setup',
        ],
        featured: true,
    },
    {
        name: 'Custom Website',
        id: 'tier-custom',
        href: '#',
        priceStartingAt: '$5,000+',
        description: 'A tailored solution to meet your unique business needs.',
        features: [
            'Unlimited pages',
            'Custom design and development',
            'Full e-commerce capabilities',
            'Complex integrations (CRM, APIs, etc.)',
            'Dedicated project manager',
            'Unlimited revision cycles',
            'Ongoing maintenance options',
        ],
        featured: false,
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-white px-6 py-28 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-deepTeal-600">Pricing</h2>
                <p className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-6xl">
                    Choose the right plan for you
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-softNeutral-600 sm:text-xl/8">
                Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
                loyalty, and driving sales.
            </p>
            <div className="mx-auto grid items-center max-w-lg grid-cols-1 mt-20 gap-8 lg:max-w-6xl lg:grid-cols-3">
                {tiers.map( ( tier, tierIdx ) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 h-[45rem] shadow-2xl' : 'bg-white/60 h-[39rem] sm:mx-8 lg:mx-0',
                            'rounded-3xl p-8 ring-1 ring-deepTeal-900/10 sm:p-10 h-full transition-all duration-300 flex flex-col justify-between',
                        )}
                    >
                        <div>
                            <h3
                                id={tier.id}
                                className={classNames( tier.featured ? 'text-softNeutral-200' : 'text-deepTeal-600', 'text-base/7 font-semibold' )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-3 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        tier.featured ? 'text-white' : 'text-softNeutral-900',
                                        'text-5xl font-semibold tracking-tight',
                                    )}
                                >
                                    {tier.priceStartingAt}
                                </span>
                            </p>
                            <p className={classNames( tier.featured ? 'text-softNeutral-300' : 'text-softNeutral-600', 'mt-6 text-base/7' )}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 space-y-2 text-sm/6 sm:mt-8',
                                )}
                            >
                                {tier.features.map( ( feature ) => (
                                    <li key={feature} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                tier.featured ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-8 flex-none',
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ) )}
                            </ul>
                        </div>
                    </div>
                ) )}
            </div>
            <div className='mx-auto max-w-4xl text-center mt-14'>
                <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">Are You a Student?</h4>
                <p className="mt-6 text-lg text-softNeutral-600">
                    Get a 60% discount on your first purchase with a student discount code.
                </p>
                <form className='flex items-center gap-3 justify-center m-auto'>
                    <Input placeholder='Enter your student email address' className='mt-3 py-5' />
                    <Button className='w-1/4'>Submit</Button>
                </form>
            </div>
        </div>
    );
}
