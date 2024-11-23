export interface Product {
    name: string;
    price: string;
    href: string;
    breadcrumbs: { id: number; name: string; href: string; }[];
    images: { src: string; alt: string; }[];
    description: string;
    highlights: string[];
    details: string;
    reviews: { href: string; average: number; totalCount: number; };
    features: { name: string; description: string; }[];
}


export interface ProductImage {
    src: string;
    alt: string;
}

export interface FormData {
    name: string;
    email: string;
    style?: string;
    website: string;
    payment: string;

    message?: string;
    dueDate: string;
    phone: string;
    communicationMethod: string;
    attachments?: File[];
    discordUsername?: string;
}

export interface PaymentPlan {
    name: string;
    id: string;
    price: string;
    description: string;
    features: string[];
    benefits: string[];
    details: string[];
    isPopular: boolean;
    paymentSchedule: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
    title: string;
    date: string;
    description: string;
}

export const site_styles = [
    { name: "Luxury + Premium", description: "High-end design for luxury brands." },
    { name: "Corporate + Formal", description: "Professional design suitable for corporate entities." },
    { name: "Professional + Elegant", description: "A clean and sleek look for a more refined aesthetic." },
    { name: "Classic + Modern", description: "A perfect blend of timeless elegance and contemporary style." },
    { name: "Dark Mode + Sleek", description: "Modern design with dark themes for a sleek look." },
    { name: "Minimalist + Clean", description: "Simplistic design focusing on essential elements." },
    { name: "Bold + Fierce", description: "Embrace boldness with a fierce and powerful design." },
    { name: "Futuristic + Innovative", description: "Cutting-edge design with modern technologies." },
    { name: "Vibrant + Dynamic", description: "Energetic and lively design to engage users." },
    { name: "Artistic + Creative", description: "Unique and creative design to showcase artistry." },
    { name: "Retro + Vintage", description: "Nostalgic design with vintage elements." },
    { name: "Playful + Whimsical", description: "Fun and whimsical design to delight users." },
    { name: "Rustic + Natural", description: "Earthy tones and textures for a natural feel." },
];

export const website_types = [
    { name: "Blog", description: "Focus on delivering content such as articles, blogs, or news." },
    { name: "Landing Page", description: "Single-page website focused on a specific marketing goal." },
    { name: "Event Website", description: "Promote events and manage registrations." },
    { name: "Custom Website", description: "Tailored solutions to meet unique business needs." },
    { name: "Personal Website", description: "Share personal content and build a personal brand." },
    { name: "Portfolio Website", description: "Showcase your work and projects to potential clients." },
    { name: "Informational websites", description: "Provide information and resources to visitors, and can be used to educate, entertain, or promote a cause." },
    { name: "Membership Website", description: "Offer exclusive content to registered members." },
    { name: "Professional Business Website", description: "Represent your business with a professional online presence." },
    { name: "Non-Profit Organization Website", description: "Promote your cause, engage with supporters, increase donations, and more." },
    { name: "Transactional/eCommerce websites", description: "Allow visitors to purchase products or services, and can be used to sell physical goods, digital products, or services." },
];

export const tiers = [
    {
        name: 'Personal Website',
        id: 'personal',
        href: '#',
        priceStartingAt: '$900',
        description: 'Share personal content and build your personal brand.',
        features: [
            'Up to 3 pages',
            'Responsive design',
            'Social media links',
            'Contact form',
            '1 revision cycle',
        ],
        featured: false,
    },
    {
        name: 'Content Website',
        id: 'content',
        href: '#',
        priceStartingAt: '$1,000',
        description: 'Perfect for writers, content creators, or businesses focused on content marketing.',
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
        id: 'event',
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
        id: 'informational',
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
        id: 'portfolio',
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
        id: 'nonprofit',
        href: '#',
        priceStartingAt: '$2,000',
        description: 'Promote your cause, engage supporters, and increase donations.',
        features: [
            'Up to 10 pages',
            'Donation platform integration',
            'Image and video galleries',
            'Event calendar',
            'Volunteer signup forms',
            '2 revision cycles',
        ],
        featured: false,
    },
    {
        name: 'Professional Business Website',
        id: 'business',
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
        id: 'membership',
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
        id: 'ecommerce',
        href: '#',
        priceStartingAt: '$4,000',
        description: 'Sell products or services online with a secure e-commerce platform.',
        features: [
            'Product catalog setup',
            'Shopping cart and checkout system',
            'Payment gateway integration',
            'Inventory management system',
            'Customer account creation',
            '3 revision cycles',
        ],
        featured: false,
    },
    {
        name: 'Custom Website',
        id: 'custom',
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

export const paymentPlans: PaymentPlan[] = [
    {
        name: "Upfront Advantage Plan",
        id: "upfront-advantage",
        price: "1",
        description: "Maximize savings and priority service with full upfront payment.",
        features: [
            "Save 10% instantly with full payment upfront.",
            "Priority scheduling to start your project sooner.",
            "Dedicated premium support throughout your journey.",
        ],
        benefits: [
            "Save 10% instantly by paying the full amount upfront.",
            "Secure priority scheduling to start your project without delays.",
            "Enjoy dedicated, premium support throughout your project journey.",
            "Experience the efficiency and peace of mind that comes with seamless, prioritized service."
        ],
        details: [
            "Benefit from a generous 10% discount.",
            "Enjoy a faster turnaround with priority scheduling.",
            "Ideal for clients ready to invest upfront for maximum savings.",
        ],
        isPopular: true,
        paymentSchedule: [
            {
                title: "Full Payment",
                date: "Project Start",
                description: "100% payment made upfront to initiate the project.",
            },
        ],
    },
    {
        name: "50/50 Split",
        id: "fifty-fifty",
        price: "2",
        description: "Split your project cost into two easy payments.",
        features: [
            "50% upfront to begin the project.",
            "50% due before the website launch.",
            "Regular updates and feedback opportunities during development.",
        ],
        benefits: [
            "Split your project cost into two manageable payments.",
            "Start with a smaller upfront investment and pay the balance before launch.",
            "Stay on track with regular progress updates during development."
        ],
        details: [
            "Start with a manageable upfront deposit.",
            "Balance due upon completion ensures quality and satisfaction.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "50% deposit to begin development.",
            },
            {
                title: "Final Payment",
                date: "Before Launch",
                description: "Remaining 50% paid prior to website launch.",
            },
        ],
    },
    {
        name: "Three Milestone Plan",
        id: "three-milestones",
        price: "3",
        description: "Align payments with project milestones for better control.",
        features: [
            "25% upfront, 25% midway, 50% before launch.",
            "Progress updates and transparency at every stage.",
            "Flexibility to adapt as the project evolves.",
        ],
        benefits: [
            "Divide payments into three structured milestones for better control.",
            "Receive progress reports at every milestone to ensure transparency.",
            "Stay informed and engaged throughout your project."
        ],
        details: [
            "Structured payments for improved budget management.",
            "Ensures you stay informed and engaged throughout the process.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "25% to initiate the project.",
            },
            {
                title: "Mid-Project Payment",
                date: "Midway",
                description: "25% payment at project midpoint.",
            },
            {
                title: "Final Payment",
                date: "Before Launch",
                description: "50% payment due before website goes live.",
            },
        ],
    },
    {
        name: "Monthly Payment Plan",
        id: "monthly-plan",
        price: "6",
        description: "Ease your cash flow with equal monthly payments.",
        features: [
            "Spread costs over 6 months with a 20% upfront deposit.",
            "Maintain financial flexibility while the project progresses.",
            "Minimal strain on cash flow for your business.",
        ],
        benefits: [
            "Ease financial strain with equal monthly payments.",
            "Choose a 6-month  to match your budget needs.",
            "Begin your project with minimal upfront investment.",
            "Maintain financial flexibility while your project moves forward."
        ],
        details: [
            "Perfect for businesses preferring manageable monthly installments.",
            "Includes an administrative fee for extended payment schedules.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "20% deposit to start development.",
            },
            {
                title: "Monthly Payments",
                date: "Over 6 months",
                description: "Remaining balance split into 6 equal monthly payments.",
            },
        ],
    },
    {
        name: "Pay-As-You-Go Plan",
        id: "pay-as-you-go",
        price: "Varies",
        description: "Pay for each phase as it’s completed.",
        features: [
            "Granular control over costs and timelines.",
            "Payments made after each development phase is delivered.",
            "Flexibility to adjust the scope as needed.",
        ],
        benefits: [
            "Only pay for completed work at each development phase.",
            "Adjust the scope and direction of the project as needed.",
            "Manage costs effectively by controlling payments phase by phase.",
            "Retain control over both your spending and project timeline."
        ],
        details: [
            "Ideal for clients who want transparency and control.",
            "Allows you to adjust the project at every stage.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "30% deposit to initiate planning and discovery.",
            },
            {
                title: "Phase Payments",
                date: "Upon Phase Completion",
                description: "Payments made at the end of each phase: design, development, testing, and launch.",
            },
        ],
    },
    {
        name: "Subscription Plan",
        id: "subscription-model",
        price: "Monthly or Annual",
        description: "Ongoing development and maintenance for sustained success.",
        features: [
            "Continuous updates and maintenance services.",
            "Monthly or annual payments for predictable costs.",
            "Long-term support and security enhancements.",
        ],
        benefits: [
            "Get ongoing development, updates, and maintenance with ease.",
            "Enjoy consistent support and security enhancements.",
            "Spread costs predictably with monthly or annual payments.",
            "Build a long-term partnership to ensure your project’s success."
        ],
        details: [
            "Combines development and ongoing support.",
            "Perfect for businesses seeking a long-term partnership.",
        ],
        isPopular: true,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "40% deposit to begin development.",
            },
            {
                title: "Ongoing Payments",
                date: "Monthly or Annually",
                description: "Covers ongoing maintenance and support.",
            },
        ],
    },
    {
        name: "Deferred Payment Plan",
        id: "deferred-payment",
        price: "Flexible",
        description: "Start now, pay later with deferred payments.",
        features: [
            "Minimal 15% upfront deposit.",
            "Defer remaining payments for up to 60 days post-launch.",
            "Flexible payment schedules tailored to your business needs.",
        ],
        benefits: [
            "Begin your project with a minimal upfront deposit.",
            "Defer remaining payments until after project milestones are reached.",
            "Perfect for startups and businesses with cash flow constraints.",
            "Enjoy a flexible payment schedule tailored to your needs."
        ],
        details: [
            "Designed for startups or businesses with cash flow constraints.",
            "Allows you to start the project with minimal upfront costs.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "15% deposit to initiate the project.",
            },
            {
                title: "Final Payment",
                date: "Up to 60 days post-launch",
                description: "Remaining balance paid after project completion.",
            },
        ],
    },
];
