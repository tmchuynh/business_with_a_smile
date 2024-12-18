"use client";

import { classNames } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function HeaderSection() {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';


    return (
        <div className="overflow-hidden bg-white dark:bg-softGray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h6>Exceptional Web Design</h6>
                            <h1>
                                Showcase Your Brand and Drive Business Growth
                            </h1>
                            <h2 className='w-full'>
                                In today’s competitive digital world, your website isn’t just an online presence—it’s a reflection of your brand’s identity and values. Great web design goes beyond aesthetics, focusing on user experience, functionality, and strategic growth.
                            </h2>
                            <dl className="mt-10 max-w-xl space-y-8 text-softNeutral-600 dark:text-softNeutral-50 lg:max-w-none">
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold dark:text-deepBlue-400 dark:font-bold text-teal-700">
                                        <CheckIcon
                                            className={classNames(
                                                isDarkMode
                                                    ? "text-deepBlue-200"
                                                    : "text-deepTeal-600",
                                                "h-5 w-8 inline-block absolute -left-0"
                                            )}
                                        />
                                        Brand Identity
                                    </dt>
                                    <dd className="inline pl-2">
                                        A polished and cohesive design reinforces trust and showcases your company’s values.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold dark:text-deepBlue-400 dark:font-bold text-teal-700">
                                        <CheckIcon
                                            className={classNames(
                                                isDarkMode
                                                    ? "text-deepBlue-200"
                                                    : "text-deepTeal-600",
                                                "h-5 w-8 inline-block absolute -left-0"
                                            )}
                                        />
                                        Enhanced User Experience
                                    </dt>
                                    <dd className="inline pl-2">
                                        Intuitive navigation and fast performance keep users engaged and coming back.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold dark:text-deepBlue-400 dark:font-bold text-teal-700">
                                        <CheckIcon
                                            className={classNames(
                                                isDarkMode
                                                    ? "text-deepBlue-200"
                                                    : "text-deepTeal-600",
                                                "h-5 w-8 inline-block absolute -left-0"
                                            )}
                                        />
                                        Increased Conversions
                                    </dt>
                                    <dd className="inline pl-2">
                                        Thoughtful layouts and action-driven designs turn visitors into loyal customers.
                                    </dd>
                                </div>
                                <div className="relative pl-9">
                                    <dt className="inline font-semibold dark:text-deepBlue-400 dark:font-bold text-teal-700">
                                        <CheckIcon
                                            className={classNames(
                                                isDarkMode
                                                    ? "text-deepBlue-200"
                                                    : "text-deepTeal-600",
                                                "h-5 w-8 inline-block absolute -left-0"
                                            )}
                                        />
                                        SEO-Optimized Design
                                    </dt>
                                    <dd className="inline pl-2">
                                        Built-in SEO best practices ensure higher visibility and better search engine rankings.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <Image
                        src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        priority={true}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width="2432"
                        height="1442"
                    />
                </div>
            </div>
        </div>
    );
}
