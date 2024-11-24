import React from "react";

interface Step {
    id: number;
    title: string;
    state: "completed" | "current" | "upcoming";
}

interface StepProgressProps {
    steps: Step[];
}

export const StepProgress: React.FC<StepProgressProps> = ( { steps } ) => {
    return (
        <ol className="space-y-4 w-72">
            {steps.map( ( step ) => {
                // Mapping step states to colors based on the new color scheme
                const stateStyles = {
                    completed:
                        "text-softNeutral-100 border-deepTeal-600 dark:border-deepBlue-400 bg-deepTeal-500 dark:bg-deepBlue-400 dark:text-deepBlue-200", // Muted Green
                    current:
                        "text-deepBlue-600 bg-deepBlue-100 border-deepBlue-300 dark:bg-deepTeal-200 dark:border-deepTeal-700 dark:text-deepTeal-400", // Deep Teal
                    upcoming:
                        "text-softNeutral-900 bg-softNeutral-100 border-softNeutral-300 dark:bg-softNeutral-800 dark:border-softNeutral-700 dark:text-softNeutral-400", // Soft Neutral
                };

                // Icons based on state
                const icon = {
                    completed: (
                        <svg
                            className="w-5 h-5 text-deepTeal-700 dark:text-deepTeal-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5.917 5.724 10.5 15 1.5"
                            />
                        </svg>
                    ),
                    current: (
                        <svg
                            className="w-5 h-5 text-deepTeal-700 dark:text-deepTeal-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    ),
                    upcoming: (
                        <svg
                            className="w-5 h-5 text-softNeutral-500 dark:text-softNeutral-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                        >
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    ),
                };

                return (
                    <li key={step.id} className="relative">
                        <div
                            className={`w-full p-4 border rounded-lg ${ stateStyles[step.state] }`}
                            role="alert"
                            aria-live="assertive"
                        >
                            <div className="flex items-center justify-between">
                                <span className="sr-only">{step.title}</span>
                                <h3 className="font-medium">{`${ step.id }. ${ step.title }`}</h3>
                                <div className="ml-2">{icon[step.state]}</div>
                            </div>
                        </div>
                    </li>
                );
            } )}
        </ol>
    );
};
