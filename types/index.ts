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
    style: string;
    website: string;
    message: string;
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
    details: string[];
    isPopular: boolean;
    paymentSchedule: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
    title: string;
    date: string;
    description: string;
}

export const paymentPlans: PaymentPlan[] = [
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
        details: [
            "The 50/50 Split plan allows you to manage your budget by dividing the payment into two equal parts.",
            "An initial 50% deposit is required to commence the project, covering the initial design and development phases.",
            "The remaining 50% is due upon project completion, just before the website goes live.",
            "You will receive regular updates and have opportunities to provide feedback during the development process.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "50% deposit to start the project.",
            },
            {
                title: "Final Payment",
                date: "Before Launch",
                description: "Remaining 50% due before the site goes live.",
            },
        ],
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
        details: [
            "This plan breaks down the payment into three manageable installments aligned with project milestones.",
            "An initial 33% deposit starts the project, covering the discovery and planning phase.",
            "The second payment of 33% is due halfway through, typically after the design phase is completed.",
            "The final 34% payment is due before the website is launched.",
            "You'll receive detailed progress reports at each milestone, ensuring transparency and engagement.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "33% deposit to initiate the project.",
            },
            {
                title: "Mid-Project Payment",
                date: "Midway Point",
                description: "33% payment upon reaching the project midpoint.",
            },
            {
                title: "Final Payment",
                date: "Before Launch",
                description: "34% payment due before the website goes live.",
            },
        ],
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
        details: [
            "Designed for clients who prefer to spread out payments, this plan allows for equal monthly installments over 6 months.",
            "A 20% deposit is required upfront to initiate the project.",
            "An administrative fee is included to cover the extended payment schedule.",
            "This plan helps in managing cash flow while ensuring the project progresses without financial strain.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "20% deposit to initiate the project.",
            },
            {
                title: "Monthly Payments",
                date: "Starting the 2nd week of the project",
                description: "80% of the project cost split between 6 recurring monthly payments + $25/month.",
            },
        ]
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
        details: [
            "The Pay-as-you-go plan offers flexibility by allowing you to pay after each project phase is completed.",
            "An initial 30% deposit covers the discovery and planning phase.",
            "Subsequent payments are made at the end of each phase: design, development, testing, and deployment.",
            "This plan provides the opportunity to reassess and adjust the project scope at each stage.",
            "Ideal for clients who want granular control over the project and budget.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "30% deposit to initiate the project.",
            },
            {
                title: "Design Phase",
                date: "Due upon approval of design concepts",
                description: "20% deposit to initiate the project.",
            },
            {
                title: "Development Phase",
                date: "Due upon completion of development",
                description: "20% deposit to initiate the project.",
            },
            {
                title: "Testing and Revisions",
                date: "Due upon completion of revisions and testing",
                description: "15% deposit to initiate the project.",
            },
            {
                title: "Final Payment",
                date: "Before Launch",
                description: "15% deposit to initiate the project.",
            },
        ]
    },
    {
        name: "Subscription-based Model",
        id: "subscription-model",
        price: "Monthly or Annual",
        description: "Recurring fee for ongoing development and maintenance services.",
        features: [
            "Initial setup fee as a deposit",
            "Website development included",
            "Ongoing maintenance and support",
            "Regular updates and security patches",
            "Ideal for long-term partnerships",
        ],
        details: [
            "This model combines website development and continuous support into a subscription service.",
            "An initial setup fee is required as a deposit to begin development.",
            "Monthly or annual subscription fees cover ongoing maintenance, updates, and support.",
            "This plan is perfect for businesses seeking a long-term partnership with continuous improvements.",
            "It ensures your website remains up-to-date with the latest features and security enhancements.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Initial Deposit",
                date: "Project Start",
                description: "40% deposit to initiate the project.",
            },
            {
                title: "Website Launch",
                date: "Before Launch",
                description: "60% of the total project cost.",
            },
            {
                title: "Ongoing Maintenance and Support",
                date: "Agreed Upon Length of Time",
                description: "Monthly or annual subscription fees cover ongoing maintenance.",
            },
        ]
    },
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
        details: [
            "By paying the full amount upfront, you benefit from a generous 10% discount.",
            "This plan is similar to the Pay in Full option but offers an even greater discount as an incentive.",
            "Your project will be prioritized in our schedule, ensuring a faster turnaround.",
            "Ideal for clients ready to invest upfront to maximize savings.",
        ],
        isPopular: false,
        paymentSchedule: [
            {
                title: "Full Payment",
                date: "Project Start",
                description: "100% payment made upfront to initiate the project.",
            },
        ],
    },
    {
        name: "Deferred Payment Plan",
        id: "deferred-payment",
        price: "Flexible",
        description: "Start the project with a minimal deposit and defer payments.",
        features: [
            "15% deposit upfront to begin the project",
            "Remaining balance deferred to a 60 days after launch date",
            "Ideal for startups with cash flow constraints",
            "Flexible payment schedule",
        ],
        details: [
            "This plan allows you to start the project with a minimal upfront cost of 15% of the total project price.",
            "The remaining balance can be deferred to a date that aligns with your cash flow, typically 30 to 60 days after project completion.",
            "It's designed to help startups and small businesses that may need time to generate revenue from the new website.",
            "Flexible payment schedules can be arranged to suit your financial situation.",
            "A clear contractual agreement will outline the payment terms and due dates.",
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
                date: "60 days after launch date",
                description: "85% of the project cost.",
            },
        ]
    },
];