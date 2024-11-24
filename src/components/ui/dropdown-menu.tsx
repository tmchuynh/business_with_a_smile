import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Action {
    name: string;
    description?: string;
    href: string;
    icon: React.ComponentType<React.ComponentProps<"svg">>;
}

interface DropdownMenuProps {
    label: string;
    solutions: Action[];
    callsToAction?: Action[]; // Now optional
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ( {
    label,
    solutions,
    callsToAction = [], // Default to an empty array if not provided
} ) => {
    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-deepTeal-700 hover:text-deepTeal-900 focus:outline-none focus:ring-2 focus:ring-deepTeal-500">
                <span>{label}</span>
                <ChevronDownIcon className="w-5 h-5" />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white dark:bg-softGray-900 text-sm shadow-lg ring-1 ring-deepTeal-500/5">
                    <div className="p-4">
                        {solutions.map( ( item ) => (
                            <div
                                key={item.name}
                                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-deepTeal-50"
                            >
                                <div className="mt-1 flex w-11 h-11 flex-none items-center justify-center rounded-lg bg-softNeutral-100 group-hover:bg-softNeutral-200">
                                    <item.icon

                                        className="w-6 h-6 text-deepTeal-600 group-hover:text-deepTeal-800"
                                    />
                                </div>
                                <div>
                                    <a
                                        href={item.href}
                                        className="font-semibold text-deepTeal-700 hover:text-deepTeal-900"
                                    >
                                        {item.name}
                                        <span className="absolute inset-0" />
                                    </a>
                                    {item.description && (
                                        <p className="mt-1 text-softNeutral-600">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) )}
                    </div>

                    {/* Conditionally render the calls to action if any */}
                    {callsToAction.length > 0 && (
                        <div className="grid grid-cols-2 divide-x divide-softNeutral-300 bg-softNeutral-50">
                            {callsToAction.map( ( item ) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-deepTeal-700 hover:bg-deepTeal-100"
                                >
                                    <item.icon

                                        className="w-5 h-5 flex-none text-softNeutral-500"
                                    />
                                    {item.name}
                                </a>
                            ) )}
                        </div>
                    )}
                </div>
            </PopoverPanel>
        </Popover>
    );
};
