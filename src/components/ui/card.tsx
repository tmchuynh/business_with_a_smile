import { cn } from "@/lib/utils";
import * as React from "react";

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border border-deepTeal-600 dark:border-deepBlue-400 bg-softNeutral-50 text-softNeutral-900 shadow-lg dark:bg-softNeutral-800 dark:text-softNeutral-200",
            className
        )}
        {...props}
    />
) );
Card.displayName = "Card";

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "flex flex-col space-y-1.5 p-6", className )}
        {...props}
    />
) );
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "font-semibold leading-none tracking-tight text-deepTeal-700 dark:text-deepTeal-400", className )}
        {...props}
    />
) );
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "text-sm text-softNeutral-500 dark:text-softNeutral-400", className )}
        {...props}
    />
) );
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "p-6 pt-0", className )}
        {...props}
    />
) );
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>( ( { className, ...props }, ref ) => (
    <div
        ref={ref}
        className={cn( "flex items-center p-6 pt-0", className )}
        {...props}
    />
) );
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
