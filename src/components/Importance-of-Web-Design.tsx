import { CodeIcon, MonitorIcon, PenToolIcon, ServerIcon } from 'lucide-react';

const services = [
    {
        name: 'Meet Your Audience Where They Are',
        description: 'Over 50% of web traffic comes from mobile devices. A responsive website adapts to any screen size, ensuring that your audience gets a consistent and user-friendly experience, no matter how they access your site.',
        icon: <CodeIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Boost Search Engine Rankings',
        description: 'Search engines like Google prioritize mobile-friendly websites in search results. Responsive web design can help improve your SEO performance, making your business more discoverable online.',
        icon: <MonitorIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Save Time and Costs',
        description: 'Instead of maintaining separate desktop and mobile sites, responsive web design offers a unified solution. This reduces maintenance efforts, saving you both time and money in the long run.',
        icon: <PenToolIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Stay Competitive',
        description: 'A professional, responsive website signals that your business is modern and customer-focused. With competitors just a click away, having an outdated or non-responsive website can drive potential customers elsewhere.',
        icon: <ServerIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Increase Customer Retention',
        description: 'Did you know that 88% of users are less likely to return to a website after a poor experience?  Happy users are more likely to stay on your site longer, explore your offerings, and take meaningful actions like making a purchase or filling out a contact form.',
        icon: <CodeIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Support Multi-Channel Marketing Efforts',
        description: 'With responsive design, you can ensure that users coming from any marketing channel—whether it’s a Facebook ad or an email newsletter—have a positive experience that encourages them to engage further.',
        icon: <ServerIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Enhance Brand Credibility',
        description: 'A sleek, responsive website demonstrates professionalism and credibility. Users subconsciously associate the quality of your website with the quality of your products or services.',
        icon: <MonitorIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Simplify Website Management',
        description: 'This unified approach reduces maintenance headaches, ensures consistency across platforms, and allows you to focus on improving your content and growing your business.',
        icon: <PenToolIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
    {
        name: 'Future-Proof Your Business',
        description: 'Technology is constantly evolving, with new devices and screen sizes being released every year. This adaptability makes responsive web design a smart long-term investment for your business.',
        icon: <ServerIcon className="h-10 w-10 text-deepTeal-500 dark:text-deepBlue-500" />,
    },
];

export default function ImportanceOfWebDesign() {
    return (
        <section className="bg-white dark:bg-softGray-900 py-16 px-16 relative isolate w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h6>Core Foundations</h6>
                <h1>
                    Why Responsive Web Design is Essential for Your Business
                </h1>
                <h2>
                    In today’s digital world, your website must perform flawlessly across all devices. Responsive web design ensures your site looks and works perfectly on smartphones, tablets, and desktops. Modern users expect fast, intuitive, and visually appealing experiences—responsive design delivers just that. It’s not just a feature, but a necessity to stay competitive, improve search rankings, and drive conversions.
                </h2>
            </div>
            <div className="grid grid-cols-3 gap-8 text-center mx-auto">
                {services.map( ( service, index ) => (
                    <div
                        key={`${ service.name }_${ index }`}
                        className="flex flex-col items-center justify-center bg-white dark:bg-softGray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-deepTeal-500 dark:border-deepBlue-400 border-2"
                    >
                        <div className="flex justify-center items-center bg-teal-100 dark:bg-deepBlue-100 p-4 rounded-full mb-4">
                            {service.icon}
                        </div>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                ) )}
            </div>
        </section>
    );
}
