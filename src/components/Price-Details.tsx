import React from "react";
import { Prices } from "../../types";
import { USDollar } from "@/lib/utils";

export const PricingDetails: React.FC<{ prices: Prices; }> = ( { prices } ) => {
    return (
        <>
            <div className="pr-8 pl-2">
                {/* Website Details */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 md:col-span-2">
                        Website Type
                    </h3>
                    <div className="-mt-1">
                        <h6>
                            {prices.website.name}
                        </h6>
                        <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                            <span className="font-sans">Starting Price:</span> {USDollar.format( prices.website.startingPrice )}
                        </p>
                    </div>
                </div>

                {/* Style Details */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 md:col-span-2">
                        Website Style
                    </h3>
                    <div className="mt-1">
                        <h6>
                            {prices.style?.name}
                        </h6>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 md:col-span-2">
                        Payment Plan
                    </h3>
                    <div className="-mt-1">
                        <h6>
                            {prices.payment.name}
                        </h6>
                        <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                            <span className="font-sans">First Payment:</span> {prices.payment.firstPayment}%
                        </p>
                        {prices.payment.fee > 0 && (
                            <>
                                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                                    <span className="font-sans">Fee:</span> {USDollar.format( prices.payment.fee )}
                                </p>
                            </>
                        )}
                        {prices.payment.discount > 0 && prices.payment.discountedPrice ? (
                            <>
                                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                                    <span className="font-sans">Discount:</span> {prices.payment.discount}%
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 flex justify-between">
                                    <span className="font-sans">Discounted Price:</span> {USDollar.format( prices.payment.discountedPrice )}
                                </p>
                            </>
                        ) : ""}
                    </div>
                </div>

                {/* First Payment */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3">
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 md:col-span-2">
                        First Payment
                    </h3>
                    <div className="-mt-2 text-right">
                        <p className="text-gray-600 dark:text-gray-300">
                            {USDollar.format( prices.firstPayment.amount )}
                        </p>
                    </div>
                </div>

                {/* Total Amount */}
                <div className="border-t pt-4 mt-4 flex justify-end">
                    <div className="text-right">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white md:col-span-2">
                            Total Amount
                        </h3>
                        <p className="text-2xl font-bold text-deepTeal-600 dark:text-deepTeal-400">
                            {USDollar.format( prices.total.amount )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};