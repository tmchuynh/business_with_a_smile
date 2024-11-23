"use client";

import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { CheckIcon } from '@heroicons/react/20/solid';
import { tiers } from '../../../types';
import { classNames } from '@/lib/utils';

export default function Pricing() {
    const router = useRouter();

    function navigate( id: string ) {
        router.push( `/websites/${ id }/plans` );
    }

    return (
        <div className="relative isolate bg-white px-6 py-28 lg:px-8">
            <div className="text-center mb-12">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold text-teal-600">Pricing Plans</h2>
                    <p className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-6xl">
                        Find the Perfect Customizations for Your Needs
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-softNeutral-600 sm:text-xl">
                    Explore affordable pricing options designed to help you engage your audience, build lasting customer loyalty, and boost your sales.
                </p>
            </div>

            <div className="mx-auto grid items-center max-w-lg grid-cols-1 mt-20 gap-8 lg:max-w-6xl lg:grid-cols-3">
                <div className="mx-auto max-w-4xl text-center">
                    <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">
                        Are You a Student?
                    </h4>
                    <p className="mt-6 text-lg text-softNeutral-600">
                        Enjoy a 60% discount on your first purchase with our exclusive student discount.
                    </p>
                    <p className="mt-2 text-lg text-softNeutral-600">
                        Simply upload a photo of your current student ID card with your project submission.
                    </p>
                </div>

                {tiers.map( ( tier, tierIdx ) => (
                    <div
                        key={`${ tier.id }_${ tierIdx }`}
                        className={classNames(
                            tier.featured ? 'relative bg-gradient-to-tl from-deepTeal-500 to-deepBlue-900 shadow-2xl hover:scale-105' : 'bg-white/60 hover:ring-teal-300',
                            'rounded-3xl ring-1 ring-deepTeal-900/10 p-8  transition-all duration-300 flex flex-col justify-between mx-8 lg:mx-0  h-[37rem]',
                        )}
                    >
                        <div className='flex flex-col justify-evenly h-[25rem]'>
                            <div>
                                <h3
                                    id={tier.id}
                                    className={classNames( tier.featured ? 'text-softNeutral-200' : 'text-deepTeal-600', 'text-base/7 font-semibold' )}
                                >
                                    {tier.name}
                                </h3>
                                <p className="mt-3 flex items-baseline gap-x-2">
                                    <span
                                        className={classNames(
                                            tier.featured ? 'text-white' : 'text-softNeutral-900',
                                            'text-5xl font-semibold tracking-tight',
                                        )}
                                    >
                                        {tier.priceStartingAt}
                                    </span>
                                </p>
                                <p className={classNames( tier.featured ? 'text-softNeutral-300' : 'text-softNeutral-600', 'mt-6 text-base/7' )}>
                                    {tier.description}
                                </p>
                            </div>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-softNeutral-300' : 'text-softNeutral-600',
                                    'mt-4 space-y-2 text-sm/6 sm:mt-8',
                                )}
                            >
                                {tier.features.map( ( feature ) => (
                                    <li key={feature} className="flex gap-x-2">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(
                                                tier.featured ? 'text-deepTeal-300' : 'text-deepTeal-600',
                                                'h-5 w-8 flex-none',
                                            )}
                                        />
                                        {feature}
                                    </li>
                                ) )}
                            </ul>
                        </div>

                        <Button
                            variant={tier.featured ? 'default' : 'outline'}
                            className="mt-8"
                            onClick={() => navigate( tier.id )}
                        >
                            Get Started Today
                        </Button>
                    </div>
                ) )}

                <div className="mx-auto max-w-4xl text-center">
                    <h4 className="mt-2 text-balance font-semibold tracking-tight text-softNeutral-900 text-4xl">
                        Need ongoing maintenance?
                    </h4>
                    <p className="mt-6 text-lg text-softNeutral-600">
                        Upgrade with our add-ons for ongoing maintenance and support.
                    </p>
                    <form className="flex items-center gap-3 justify-center mx-auto my-3">
                        <Button className="w-3/4">Upgrade Today</Button>
                    </form>
                </div>
            </div>

        </div>
    );
}
