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
                const stateStyles = {
                    completed: "text-green-700 border-green-300 bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400",
                    current: "text-blue-700 bg-blue-100 border-blue-300 dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400",
                    upcoming: "text-gray-900 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",
                };

                const icon = {
                    completed: (
                        <svg
                            className="w-4 h-4"
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
                            className="rtl:rotate-180 w-4 h-4"
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
                    upcoming: null,
                };

                return (
                    <li key={step.id}>
                        <div
                            className={`w-full p-4 border rounded-lg ${ stateStyles[step.state] }`}
                            role="alert"
                        >
                            <div className="flex items-center justify-between">
                                <span className="sr-only">{step.title}</span>
                                <h3 className="font-medium">{`${ step.id }. ${ step.title }`}</h3>
                                {icon[step.state]}
                            </div>
                        </div>
                    </li>
                );
            } )}
        </ol>
    );
};
