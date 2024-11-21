import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define badge variants with associated styles
const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-deepTeal-500 text-softNeutral-50 shadow hover:bg-deepTeal-400",
                secondary:
                    "border-transparent bg-deepBlue-500 text-softNeutral-50 hover:bg-deepBlue-400",
                destructive:
                    "border-transparent bg-richRed-500 text-softNeutral-50 shadow hover:bg-richRed-400",
                outline:
                    "border-softNeutral-300 text-softNeutral-800 hover:border-softNeutral-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

// BadgeProps now extends both HTML div attributes and variant props
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

// Badge component to render with variant styles
function Badge( { className, variant, ...props }: BadgeProps ) {
    return (
        <div
            className={cn( badgeVariants( { variant } ), className )}
            {...props}
            role="status" // Ensuring proper role for accessibility
        />
    );
}

export { Badge, badgeVariants };
