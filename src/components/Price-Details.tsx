import React from "react";
import { Prices } from "../../types";
import { formatCurrency } from "@/lib/utils";

export const PricingDetails: React.FC<{ prices: Prices; }> = ( { prices } ) => {
    return (
        <>
            {/* Website Details */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Website Type
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {prices.website.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Price: {formatCurrency( prices.website.price )}
                </p>
            </div>

            {/* Style Details */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Website Style
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {prices.style.name}
                </p>
            </div>

            {/* Payment Details */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Payment Plan
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {prices.payment.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Percentage: {prices.payment.percentage}%
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Fee: {formatCurrency( prices.payment.fee )}
                </p>
                {prices.payment.discount > 0 && (
                    <p className="text-gray-600 dark:text-gray-300">
                        Discount: {formatCurrency( prices.payment.discount )}
                    </p>
                )}
            </div>

            {/* First Payment */}
            <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    First Payment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {formatCurrency( prices.firstPayment.amount )}
                </p>
            </div>

            {/* Total Amount */}
            <div className="border-t pt-4 mt-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Total Amount
                </h3>
                <p className="text-2xl font-bold text-deepTeal-600 dark:text-deepTeal-400">
                    {formatCurrency( prices.total.amount )}
                </p>
            </div>
        </>
    );
};