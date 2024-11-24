import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define alert variants for different styles
const alertVariants = cva(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default: "bg-softNeutral-50 text-softNeutral-900 border-softNeutral-200",
                destructive:
                    "border-richRed-500/50 text-richRed-500 dark:border-richRed-700 dark:text-richRed-400 [&>svg]:text-richRed-500",
                success:
                    "border-deepTeal-500/50 text-deepTeal-500 dark:border-deepTeal-700 dark:text-deepTeal-400 [&>svg]:text-deepTeal-500",
                info:
                    "border-deepBlue-500/50 text-deepBlue-500 dark:border-deepBlue-700 dark:text-deepBlue-400 [&>svg]:text-deepBlue-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

// Alert component that accepts variant props to dynamically set the style
const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>( ( { className, variant, ...props }, ref ) => (
    <div
        ref={ref}
        role="alert"
        className={cn( alertVariants( { variant } ), className )}
        {...props}
    />
) );
Alert.displayName = "Alert";

// AlertTitle component for the alert's heading
const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>( ( { className, ...props }, ref ) => (
    <h5
        ref={ref}
        className={cn( "mb-1 font-medium leading-none tracking-tight", className )}
        {...props}
    />
) );
AlertTitle.displayName = "AlertTitle";

// AlertDescription component for the alert's description
const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "text-sm [&_p]:leading-relaxed", className )}
        {...props}
    />
) );
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
