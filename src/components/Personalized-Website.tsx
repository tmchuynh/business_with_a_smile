import { CheckIcon, CloudIcon, DatabaseIcon, LockIcon, ServerIcon, ShieldIcon, WifiIcon } from 'lucide-react';

const reasons = [
    {
        title: 'Showcase Your Unique Brand Identity',
        description:
            'A personalized website ensures that your unique voice, colors, and style are woven into every page, creating a distinct impression that sets you apart from competitors.',
        icon: <CheckIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Highlight Your Strengths',
        description:
            'Your business has unique strengths—whether it’s unparalleled customer service, innovative products, or expertise. A customized website focuses on what makes you exceptional and communicates that to your audience.',
        icon: <LockIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Reflect Your Personality',
        description:
            'Your website is an extension of you. From its tone and layout to visuals and messaging, a tailored site brings your personality to life, creating deeper connections with your audience.',
        icon: <ShieldIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Connect with Your Audience',
        description:
            'People connect with authenticity. A personalized website creates a relatable, authentic experience that builds trust and engagement with your visitors.',
        icon: <CloudIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Drive Engagement Through Purposeful Design',
        description:
            'A custom site is designed with your goals in mind. Strategic calls-to-action, intuitive navigation, and targeted content ensure your visitors stay engaged and take meaningful actions.',
        icon: <DatabaseIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Build a Lasting Impression',
        description:
            'A personalized, polished website reflects professionalism and credibility, ensuring visitors remember your business for all the right reasons.',
        icon: <ServerIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Support Your Business Goals',
        description:
            'Every aspect of your website can be honed to match your objectives, whether it’s driving sales, generating leads, or showcasing your expertise.',
        icon: <WifiIcon className="h-7 w-7 text-white" />,
    },
    {
        title: 'Adapt to Your Unique Needs',
        description:
            'From custom integrations to tailored features, a personalized website adapts to your specific business model, helping you work smarter, not harder.',
        icon: <CloudIcon className="h-7 w-7 text-white" />,
    },
];


export default function PersonalizedWebsite() {
    return (
        <div className="bg-white dark:bg-softGray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h6>Key Foundations</h6>
                    <h1>
                        Personalized Web Design
                    </h1>
                    <h2>
                        Your website is more than just an online presence—it’s a reflection of your business. A custom-designed site highlights your unique strengths, tells your story, and creates a memorable first impression that sets you apart from the competition.
                    </h2>
                </div>

                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {reasons.map( ( feature, index ) => (
                            <div key={index} className="relative pl-16">
                                <dt className="text-base font-semibold text-softNeutral-900 dark:text-deepBlue-400">
                                    <div className="absolute left-0 top-0 flex items-center justify-center rounded-lg bg-teal-600 dark:bg-deepBlue-300 p-2 ">
                                        {feature.icon}
                                    </div>
                                    {feature.title}
                                </dt>
                                <p>{feature.description}</p>
                            </div>
                        ) )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
