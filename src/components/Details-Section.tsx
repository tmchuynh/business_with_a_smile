import { CheckIcon, LockIcon, ShieldIcon, CloudIcon, ServerIcon, KeyIcon, DatabaseIcon, WifiIcon } from 'lucide-react';

const serviceFeatures = [
    {
        title: 'Brand-Driven Visuals',
        description:
            'Consistent use of colors, fonts, and imagery to create a recognizable identity. Eye-catching designs that strike the right balance between style and functionality.',
        icon: <CheckIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Mobile Optimization',
        description:
            'With most users accessing websites on mobile devices, responsive design ensures an effortless experience across all screen sizes. A mobile-first approach improves usability and keeps you competitive.',
        icon: < LockIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Supports Digital Marketing Initiatives',
        description:
            'A well-designed website amplifies the effectiveness of SEO, PPC, and social media campaigns, helping you attract and retain more customers.',
        icon: <ShieldIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Optimized Performance',
        description:
            'Speed matters. Fast-loading pages reduce bounce rates and enhance the user experience. Features like image compression and content delivery networks (CDNs) boost performance.',
        icon: <ShieldIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Strategic Call-to-Actions (CTAs)',
        description:
            'Purposefully placed CTAs encourage users to take meaningful actions, from purchasing products to signing up for newsletters.',
        icon: <CloudIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Increases Customer Engagement',
        description:
            'User-friendly experiences encourage visitors to stay longer and interact with your content.',
        icon: <DatabaseIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Builds Credibility',
        description:
            'A professional, polished design reassures visitors of your business’s reliability and expertise.',
        icon: <ServerIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Maximizes Revenue Potential',
        description:
            'Conversion-focused designs streamline processes like checkout or inquiry forms, turning interest into action.',
        icon: <WifiIcon className="h-7 w-7 text-white" />,
    },
];

export default function DetailsSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold text-teal-600">Core Elements</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Exceptional Web Design
                    </p>
                    <p className="mt-6 text-lg text-gray-600">
                        A thoughtfully designed website is the foundation of your online presence. It’s often the first touchpoint for potential customers, making it a key opportunity to showcase your brand and create a positive, lasting impression.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {serviceFeatures.map( ( feature, index ) => (
                            <div key={index} className="relative pl-16">
                                <dt className="text-base font-semibold text-gray-900">
                                    <div className="absolute left-0 top-0 flex items-center justify-center rounded-lg bg-teal-600 p-2">
                                        {feature.icon}
                                    </div>
                                    {feature.title}
                                </dt>
                                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                            </div>
                        ) )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
