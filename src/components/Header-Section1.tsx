import { CheckIcon } from 'lucide-react';

export default function HeaderSection() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold text-teal-600">Deploy faster</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">A better workflow</p>
                            <p className="mt-6 text-lg text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Push to deploy.
                                    </dt>
                                    <dd className="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        SSL certificates.
                                    </dt>
                                    <dd className="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold text-teal-700">
                                        <CheckIcon className="absolute left-1 top-1 h-5 w-5 text-teal-600" />
                                        Database backups.
                                    </dt>
                                    <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
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
