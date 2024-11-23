import PaymentOptions from "@/components/Payment-Options";
import Pricing from "@/components/Pricing-Section";
import { useRouter } from "next/router";

export default function PricingPage() {
    const router = useRouter();

    function navigate( id: string ) {
        router.push( `/payments/plans/${ id }` );
    }
    return (
        <>
            <Pricing />
            <PaymentOptions />
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
        name: 'Landing Page',
        id: 'tier-landing',
        href: '#',
        priceStartingAt: '$800',
        description: 'Single-page website focused on a specific marketing goal.',
        features: [
            'Custom design',
            'Call-to-action integration',
            'Lead capture forms',
            'Basic SEO setup',
            'Social media integration',
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