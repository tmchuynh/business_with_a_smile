import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-4 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-deepTeal-500 text-softNeutral-50 shadow-md dark:bg-deepBlue-500",
                secondary:
                    "border-transparent bg-deepBlue-500 text-softNeutral-50 shadow-md",
                destructive:
                    "border-transparent bg-richRed-500 text-softNeutral-50 shadow-md",
                ghost:
                    "text-accentGold-500 bg-transparent shadow-md",
                outline:
                    "border-softNeutral-300 dark:text-softNeutral-100 text-softNeutral-800 shadow-md shadow-deepBlue-400/40",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge( { className, variant, ...props }: BadgeProps ) {
    return (
        <div
            className={cn( badgeVariants( { variant } ), className )}
            {...props}
            role="status"
        />
    );
}

export { Badge, badgeVariants };
