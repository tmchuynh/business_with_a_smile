"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
    const router = useRouter();

    function navigate( id: string ) {
        router.push( `/payments/plans/${ id }` );
    }
    return (
        <>
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
                    <div className="mx-auto max-w-4xl text-center mt-14">
                        <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">
                            Are You a Student?
                        </h4>
                        <p className="mt-6 text-lg text-softNeutral-600">
                            Enjoy a 60% discount on your first purchase with our exclusive student discount.
                        </p>
                        <form className="flex items-center gap-3 justify-center mx-auto my-3">
                            <Input
                                placeholder="Enter your student email address"
                                className="py-5"
                            />
                            <Button className="w-1/4">Submit</Button>
                        </form>
                    </div>
                    {tiers.map( ( tier, tierIdx ) => (
                        <div
                            key={`${ tier.id }_${ tierIdx }`}
                            className={classNames(
                                tier.featured ? 'relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 h-[45rem] shadow-2xl hover:scale-105' : 'bg-white/60 h-[39rem] sm:mx-8 lg:mx-0 hover:ring-teal-500',
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
            </div>



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
                                    ? 'relative bg-gradient-to-br from-deepTeal-500 to-deepBlue-900 text-white shadow-xl hover:scale-105'
                                    : 'bg-white/60 ring-1 ring-teal-200 hover:ring-teal-500',
                                'rounded-3xl p-8 ring-1 ring-teal-900/10 hover:shadow-xl flex flex-col justify-between space-y-4 transition-all duration-300'
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
        </>
    );
}

function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

const tiers = [
    {
        name: 'Personal Website',
        id: 'tier-personal',
        href: '#',
        priceStartingAt: '$800',
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
        name: 'Informational Website',
        id: 'tier-informational',
        href: '#',
        priceStartingAt: '$1,000',
        description: 'Provide information and resources to visitors.',
        features: [
            'Up to 5 pages',
            'Content management system setup',
            'SEO optimization',
            'Responsive design',
            'Contact form',
            '1 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Blog',
        id: 'tier-blog',
        href: '#',
        priceStartingAt: '$1,000',
        description: 'Perfect for writers and content creators to share articles and updates.',
        features: [
            'Up to 5 pages',
            'Responsive blog design',
            'SEO-optimized blog templates',
            'Content management system setup',
            'Social media integration',
            '1 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Content Website',
        id: 'tier-content-website',
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
            'Custom contact forms',
            'Google Maps integration',
            '3 revision cycles',
            'Basic analytics setup',
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
            'Ongoing maintenance options',
        ],
        featured: true,
    },
];

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
        price: "6",
        description: "Spread the cost over several months with equal payments.",
        features: [
            "20% deposit upfront to begin the project",
            "Equal monthly payments over 6 months",
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