import { CodeIcon, MonitorIcon, PenToolIcon, ServerIcon } from 'lucide-react';

const services = [
    {
        name: 'Web Development',
        description: 'Custom web development solutions tailored to your business needs.',
        icon: <CodeIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'UI/UX Design',
        description: 'Creating user-centric designs with a focus on experience and functionality.',
        icon: <MonitorIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'Graphic Design',
        description: 'Designing visually stunning graphics for all your marketing and branding needs.',
        icon: <PenToolIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'IT Solutions',
        description: 'Providing expert IT infrastructure, support, and cloud solutions.',
        icon: <ServerIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'Web Development',
        description: 'Custom web development solutions tailored to your business needs.',
        icon: <CodeIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'UI/UX Design',
        description: 'Creating user-centric designs with a focus on experience and functionality.',
        icon: <MonitorIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'Graphic Design',
        description: 'Designing visually stunning graphics for all your marketing and branding needs.',
        icon: <PenToolIcon className="h-10 w-10 text-deepTeal-500" />,
    },
    {
        name: 'IT Solutions',
        description: 'Providing expert IT infrastructure, support, and cloud solutions.',
        icon: <ServerIcon className="h-10 w-10 text-deepTeal-500" />,
    },
];

export default function Services() {
    return (
        <section className="bg-white py-16 px-6 relative isolate">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-teal-600">Core Elements</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    Exceptional Web Design
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Helping businesses with tailored solutions for success
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {services.map( ( service, index ) => (
                    <div
                        key={`${ service.name }_${ index }`}
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 w-72 border-deepTeal-500 border-2"
                    >
                        <div className="flex justify-center items-center bg-teal-100 p-4 rounded-full mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-teal-700">{service.name}</h3>
                        <p className="mt-3 text-gray-600 text-center">{service.description}</p>
                        <a
                            href="#"
                            className="mt-6 text-teal-500 font-semibold hover:underline"
                        >
                            Learn More
                        </a>
                    </div>
                ) )}
            </div>
        </section>
    );
}
