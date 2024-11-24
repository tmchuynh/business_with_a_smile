// Timeline.tsx (As provided)

import React from "react";

interface TimelineItem {
    title: string;
    date: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ( { items } ) => {
    return (
        <ol className="border-l border-gray-200">
            {items.map( ( item, index ) => (
                <div key={index} className="relative">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full -left-5 ">
                            <svg
                                className="w-3 h-3 text-teal-600 dark:text-deepBlue-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm3 11H7v-2h6v2z" />
                            </svg>
                        </span>
                    </li>
                    <div className="mx-10">
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-gray-50">
                            {item.title}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-deepBlue-400">
                            {item.date}
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                            {item.description}
                        </p>
                    </div>
                </div>
            ) )}
        </ol>
    );
};
