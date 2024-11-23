import { CheckIcon } from 'lucide-react';

export default function HeaderSection() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-teal-600">Exceptional Web Design</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Showcase Your Brand and Drive Business Growth
                            </p>
                            <p className="mt-6 text-lg text-gray-600">
                                In today’s competitive digital world, your website isn’t just an online presence—it’s a reflection of your brand’s identity and values. Great web design goes beyond aesthetics, focusing on user experience, functionality, and strategic growth.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Brand Identity
                                    </dt>
                                    <dd className="inline pl-2">
                                        A polished and cohesive design reinforces trust and showcases your company’s values.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Enhanced User Experience
                                    </dt>
                                    <dd className="inline pl-2">
                                        Intuitive navigation and fast performance keep users engaged and coming back.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Increased Conversions
                                    </dt>
                                    <dd className="inline pl-2">
                                        Thoughtful layouts and action-driven designs turn visitors into loyal customers.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        SEO-Optimized Design
                                    </dt>
                                    <dd className="inline pl-2">
                                        Built-in SEO best practices ensure higher visibility and better search engine rankings.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <img
                        src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width="2432"
                        height="1442"
                    />
                </div>
            </div>
        </div>
    );
}
