import { CheckCircle, Globe, Phone } from 'lucide-react';

const features = [
    {
        name: 'Tailored Solutions',
        description: 'No cookie-cutter approaches here. Every website and strategy is customized to align with your unique goals and brand identity.',
        icon: <Phone className="h-8 w-8 text-deepTeal-100" />,
    },
    {
        name: 'Results-Driven Focus',
        description: 'We prioritize creating websites and strategies that deliver ROI, from increased conversions to long-term business growth.',
        icon: <Globe className="h-8 w-8 text-deepTeal-100" />,
    },
    {
        name: 'Seamless Collaboration',
        description: 'Communication is key. We keep you informed, involved, and confident throughout the process.',
        icon: <CheckCircle className="h-8 w-8 text-deepTeal-100" />,
    },
    {
        name: 'Ongoing Support',
        description: 'Whether maintaining your website or providing continuous business guidance, we’re here for the long haul.',
        icon: <CheckCircle className="h-8 w-8 text-deepTeal-100" />,
    },
];

export default function OurFeatures() {
    return (
        <>
            <div className="relative isolate bg-white dark:bg-softGray-900 px-6 py-2 lg:py-10 lg:px-8 lg:max-w-6xl mx-auto">
                <div className="mx-auto max-w-4xl text-center">
                    <h6>Features</h6>
                    <h1>
                        Elevate Your Business with Us
                    </h1>
                    <h2>
                        Investing in exceptional web design is investing in your business’s growth and success. A website that combines functionality, performance, and brand representation can captivate your audience and drive measurable results.
                        We don’t just build websites or offer our services—we partner with you to achieve measurable success.
                    </h2>
                </div>

                <div className="mx-auto grid max-w-lg grid-cols-1 gap-12 sm:mt-11 sm:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-4">
                    {features.map( ( feature ) => (
                        <div
                            key={feature.name}
                            className="group relative flex flex-col items-center justify-between rounded-3xl bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 p-8 text-center hover:-translate-y-6 shadow-lg transition-all duration-500 ease-in-out"
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className='text-white'>{feature.name}</h3>
                            <p className="mt-2 text-sm text-softNeutral-200">{feature.description}</p>
                        </div>
                    ) )}
                </div>
            </div>
        </>
    );
}
