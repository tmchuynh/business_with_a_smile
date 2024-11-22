import { CheckIcon } from 'lucide-react';

export default function HeaderSection() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-teal-600">Exceptional Web Design</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Representing Your Brand and Driving Business Success</p>
                            <p className="mt-6 text-lg text-gray-600">
                                In today’s digital landscape, your website is more than just an online platform—it’s a vital representation of your brand. Outstanding web design goes beyond visual appeal; it’s about delivering a user experience that effectively embodies your business values while driving growth.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Brand Identity
                                    </dt>
                                    <dd className="inline pl-2">A cohesive, professional design reflects your company’s values and builds trust.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Improved User Experience (UX)
                                    </dt>
                                    <dd className="inline pl-2">Smooth navigation and fast loading keep users engaged and satisfied.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Higher Conversions
                                    </dt>
                                    <dd className="inline pl-2">Strategic layouts and compelling calls to action turn visitors into customers.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        SEO-Driven Traffic
                                    </dt>
                                    <dd className="inline pl-2">Design that integrates SEO best practices helps your site rank higher in search results.

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
