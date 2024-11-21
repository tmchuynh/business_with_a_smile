import { Zap, Phone, Globe, CheckCircle } from 'lucide-react';

export default function FeatureSection() {
    const features = [
        {
            name: 'Customizable Designs',
            description: 'Create beautiful, personalized designs for your brand with ease.',
            icon: <Zap className="h-8 w-8 text-teal-500" />,
        },
        {
            name: 'Responsive Layouts',
            description: 'Your content will look great on any screen, whether it’s mobile, tablet, or desktop.',
            icon: <Phone className="h-8 w-8 text-teal-500" />,
        },
        {
            name: 'Global Reach',
            description: 'Target your audience anywhere in the world with multi-language support and flexible integrations.',
            icon: <Globe className="h-8 w-8 text-teal-500" />,
        },
        {
            name: 'Real-Time Analytics',
            description: 'Track and analyze your performance in real-time to make data-driven decisions.',
            icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
        },
    ];

    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-teal-600">Features</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Powerful Tools to Enhance Your Workflow
                </p>
            </div>

            <div className="mt-16 mx-auto grid max-w-lg grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-4">
                {features.map( ( feature ) => (
                    <div
                        key={feature.name}
                        className="group relative flex flex-col items-center justify-between rounded-3xl bg-teal-100 p-8 text-center shadow-lg ring-1 ring-teal-200 hover:ring-teal-400 transition-all duration-300 ease-in-out"
                    >
                        <div className="mb-4 text-teal-600 group-hover:text-teal-500">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-teal-600">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                    </div>
                ) )}
            </div>
        </div>
    );
}
