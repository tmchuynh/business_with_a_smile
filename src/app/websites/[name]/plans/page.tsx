"use client";

import { Button } from '@/components/ui/button';
import { CheckIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter } from "next/navigation";
import { classNames, encodeUrlSafeBase64 } from '@/lib/utils';
import { paymentPlans } from '../../../../../types';


export default function PaymentOptions() {
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split( '/' ).filter( Boolean );
    const name = segments.length > 1 ? decodeURIComponent( segments[1] ) : '';

    function navigate( plan: string ) {
        router.push( `/websites/${ name }/plans/${ encodeUrlSafeBase64( plan ) }` );
    }

    return (
        <div className="relative isolate bg-softNeutral-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center mb-12">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold text-teal-600">Flexible Payment Options</h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                        Find the Payment Plan That Fits You Best
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-gray-600 sm:text-xl">
                    We offer customizable payment plans designed to meet your budget and business goals.
                    Select a plan that works for you and grow your business with confidence.
                </p>
            </div>
            <div className="mx-auto m-7 grid h-screen max-w-lg grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-8 lg:max-w-7xl">
                {paymentPlans.map( ( plan, index ) => (
                    <div
                        key={`${ plan.id }_${ index }`}
                        className={classNames(
                            plan.isPopular
                                ? 'relative bg-gradient-to-br from-deepTeal-500 to-deepBlue-900 text-white shadow-xl'
                                : 'bg-white/60 ring-1 ring-teal-200 hover:ring-teal-300',
                            'rounded-3xl p-8 ring-1 ring-teal-900/10 hover:shadow-xl flex flex-col justify-between space-y-4'
                        )}
                    >
                        <div>
                            <h3
                                id={plan.id}
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-200' : 'text-deepTeal-600',
                                    'text-xl font-semibold'
                                )}
                            >
                                {plan.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        plan.isPopular ? 'text-white' : 'text-softNeutral-900',
                                        'text-4xl font-semibold tracking-tight'
                                    )}
                                >
                                    {plan.price}
                                </span>
                                <span
                                    className={classNames(
                                        plan.isPopular ? 'text-softNeutral-400' : 'text-softNeutral-500',
                                        'text-base'
                                    )}
                                >
                                    {['Varies'].includes( plan.price ) ? '' : ['1', 'Flexible'].includes( plan.price ) ? 'payment' : 'payments'}
                                </span>
                            </p>
                            <p
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 text-base'
                                )}
                            >
                                {plan.description}
                            </p>

                            <ul
                                role="list"
                                className={classNames(
                                    plan.isPopular ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 space-y-2 text-sm sm:mt-8'
                                )}
                            >
                                {plan.benefits.map( ( benefit, index ) => (
                                    <li key={`${ benefit }_${ index }`} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                plan.isPopular ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-5 flex-none',
                                            )}
                                        />
                                        {benefit}
                                    </li>
                                ) )}
                            </ul>
                        </div>

                        <Button
                            variant={plan.isPopular ? 'default' : 'outline'}
                            className="mt-8"
                            onClick={() => navigate( plan.name )}
                        >
                            View Details
                        </Button>
                    </div>
                ) )}
            </div>
        </div>
    );
}
