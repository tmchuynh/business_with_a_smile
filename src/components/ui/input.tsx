import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ( { className, type, ...props }, ref ) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-9 w-full ring-1 ring-deepTeal-200 rounded-md border border-deepTeal-600 dark:border-softNeutral-50 dark:ring-softNeutral-500 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-softNeutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
