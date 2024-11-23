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
        <ol className="relative border-l border-gray-200">
            {items.map( ( item, index ) => (
                <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-teal-100 rounded-full -left-3 ring-8 ring-white">
                        <svg
                            className="w-3 h-3 text-teal-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm3 11H7v-2h6v2z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                        {item.title}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                        {item.date}
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500">
                        {item.description}
                    </p>
                </li>
            ) )}
        </ol>
    );
};
