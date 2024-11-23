import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Personal Website',
        id: 'tier-personal',
        href: '#',
        priceStartingAt: '$900',
        description: 'Share personal content and build your personal brand.',
        features: [
            'Up to 3 pages',
            'Blog integration (optional)',
            'Responsive design',
            'Social media links',
            'Contact form',
            '1 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Content Website',
        id: 'tier-blog',
        href: '#',
        priceStartingAt: '$1,000',
        description: 'Perfect for writers, content creators, or businesses focused on content marketing (ie. graphic designers, photographers, etc.).',
        features: [
            'Up to 5 pages',
            'Responsive blog design',
            'SEO-optimized blog post templates',
            'Social sharing features',
            '1 revision cycle',
        ],
        featured: true,
    },
    {
        name: 'Event Website',
        id: 'tier-event',
        href: '#',
        priceStartingAt: '$1,200',
        description: 'Promote events and manage registrations.',
        features: [
            'Event schedule and details',
            'Online registration forms',
            'Ticketing system integration',
            'Maps and location information',
            'Social media sharing',
            '1 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Informational Website',
        id: 'tier-informational',
        href: '#',
        priceStartingAt: '$1,300',
        description: 'Provide information and resources to visitors.',
        features: [
            'Up to 7 pages',
            'Content management system setup',
            'SEO optimization',
            'Responsive design',
            'Contact form',
            '2 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Portfolio Website',
        id: 'tier-portfolio',
        href: '#',
        priceStartingAt: '$1,500',
        description: 'Showcase your work and projects to potential clients.',
        features: [
            'Up to 7 pages',
            'Image and video galleries',
            'Responsive design',
            'SEO optimization',
            'Contact form',
            '2 revision cycles',
        ],
        featured: true,
    },
    {
        name: 'Non-Profit Organization Website',
        id: 'tier-nonprofit',
        href: '#',
        priceStartingAt: '$2,000',
        description: 'Promote your cause, engage supporters, and increase donations.',
        features: [
            'Up to 10 pages',
            'Donation platform integration',
            'Image and video galleries',
            'Event calendar',
            'Volunteer signup forms',
            'Responsive design',
            '2 revision cycles',
        ],
        featured: false,
    },
    {
        name: 'Professional Business Website',
        id: 'tier-business',
        href: '#',
        priceStartingAt: '$2,500',
        description: 'Ideal for businesses looking to showcase services and attract customers.',
        features: [
            'Up to 10 pages',
            'Responsive design for all devices',
            'Advanced SEO setup',
            'Image and video galleries',
            'Custom contact forms',
            '3 revision cycles',
        ],
        featured: true,
    },
    {
        name: 'Membership Website',
        id: 'tier-membership',
        href: '#',
        priceStartingAt: '$3,000',
        description: 'Offer exclusive content to registered members.',
        features: [
            'Membership management system',
            'Secure login and user profiles',
            'Content restriction settings',
            'Payment gateway integration',
            'Discussion forums (optional)',
            '3 revision cycles',
        ],
        featured: false,
    },
    {
        name: 'E-commerce Website',
        id: 'tier-ecommerce',
        href: '#',
        priceStartingAt: '$4,000',
        description: 'Sell products or services online with a secure e-commerce platform.',
        features: [
            'Product catalog setup (up to 50 products)',
            'Shopping cart and checkout system',
            'Payment gateway integration',
            'Inventory management system',
            'Order tracking and management',
            'Customer account creation',
            '3 revision cycles',
        ],
        featured: false,
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
        ],
        featured: true,
    },
];

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export default function Pricing() {
    return (
        <div className="relative isolate bg-white px-6 py-28 lg:px-8">
            <div className="text-center mb-12">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold text-teal-600">Pricing Plans</h2>
                    <p className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-6xl">
                        Find the Perfect Plan for Your Needs
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-softNeutral-600 sm:text-xl">
                    Explore affordable pricing options designed to help you engage your audience, build lasting customer loyalty, and boost your sales.
                </p>
            </div>

            <div className="mx-auto grid items-center max-w-lg grid-cols-1 mt-20 gap-8 lg:max-w-6xl lg:grid-cols-3">
                <div className="mx-auto max-w-4xl text-center">
                    <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">
                        Are You a Student?
                    </h4>
                    <p className="mt-6 text-lg text-softNeutral-600">
                        Enjoy a 60% discount on your first purchase with our exclusive student discount.
                    </p>
                    <p className="mt-2 text-lg text-softNeutral-600">
                        Simply upload a photo of your current student ID card with your project submission.
                    </p>
                </div>

                {tiers.map( ( tier, tierIdx ) => (
                    <div
                        key={`${ tier.id }_${ tierIdx }`}
                        className={classNames(
                            tier.featured ? 'relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 h-[45rem] shadow-2xl hover:scale-105' : 'bg-white/60 h-[39rem] sm:mx-8 lg:mx-0 hover:ring-teal-300',
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

                <div className="mx-auto max-w-4xl text-center">
                    <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">
                        Need ongoing maintenance?
                    </h4>
                    <p className="mt-6 text-lg text-softNeutral-600">
                        Upgrade with our add-ons for ongoing maintenance and support.
                    </p>
                    <form className="flex items-center gap-3 justify-center mx-auto my-3">
                        <Button className="w-3/4">Upgrade Today</Button>
                    </form>
                </div>
            </div>

        </div>
    );
}
