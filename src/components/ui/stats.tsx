import { stats } from "../../../types/constants";
import NumberTicker from "./number-ticker";

export default function Stats() {
    return (
        <div className="bg-white dark:bg-softGray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map( ( stat ) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-lg font-medium text-softNeutral-700 dark:text-softNeutral-300 dark:font-semibold">
                                {stat.name}
                            </dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-deepTeal-700 dark:text-softNeutral-200 sm:text-5xl">
                                {/* NumberTicker for the numeric value */}
                                <NumberTicker
                                    value={stat.value}
                                    direction="up"
                                    decimalPlaces={0}
                                    className="mr-2 dark:text-deepBlue-400"
                                />
                                {/* Append the word/suffix */}
                                <span>{stat.suffix}</span>
                            </dd>
                        </div>
                    ) )}
                </dl>
            </div>
        </div>
    );
}