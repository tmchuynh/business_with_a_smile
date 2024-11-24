import NumberTicker from "./number-ticker";

const stats = [
    { id: 16, name: 'Maintenance contracts', value: 6, suffix: "contracts" },
    { id: 1, name: 'Websites designed and developed', value: 150, suffix: "websites" },
    { id: 15, name: 'Average project duration', value: 8, suffix: "weeks" },
    { id: 3, name: 'Websites launched per month', value: 7, suffix: "websites" },
    { id: 8, name: 'Customer satisfaction rate', value: 92, suffix: "%" },
    { id: 2, name: 'Clients served', value: 25, suffix: "clients" },
];

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