import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "flex items-center justify-center gap-2 whitespace-nowrap rounded-md w-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-md px-3.5 py-3 text-center text-sm font-semibold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-deepTeal-600 text-white shadow-md hover:bg-deepTeal-500 focus-visible:outline-deepTeal-600",
                destructive:
                    "bg-richRed-500 text-softNeutral-50 hover:bg-richRed-700 shadow-md",
                outline:
                    "text-deepTeal-600 ring-1 ring-inset ring-deepTeal-200 shadow-sm hover:ring-deepTeal-300 focus-visible:outline-deepTeal-600",
                secondary:
                    "bg-deepBlue-500 text-softNeutral-50 hover:bg-deepBlue-600 shadow-md",
                ghost:
                    "hover:bg-accentGold-100 hover:text-accentGold-500 hover:bg-transparent",
                link:
                    "text-deepTeal-500 underline-offset-4 hover:underline",
                success:
                    "bg-green-600 text-softNeutral-50 hover:bg-green-700 shadow-md",
                neutral:
                    "bg-softNeutral-200 text-softNeutral-800 hover:bg-softNeutral-100 shadow-md",
            },
            size: {
                default: "h-9 px-4 py-5 w-full",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ( { className, variant, size, asChild = false, ...props }, ref ) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn( buttonVariants( { variant, size, className } ) )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
