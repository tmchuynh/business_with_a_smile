"use client";

import { useTheme } from "next-themes";
import { cva } from "class-variance-authority";
import { Toaster as Sonner } from "sonner";
import "../../app/globals.css";
import { cn } from "@/lib/utils";

type ToasterProps = React.ComponentProps<typeof Sonner> & {
    variant?: "default" | "error" | "success" | "warning" | "info";
    icons?: "error" | "success" | "warning" | "info" | "loading";
};

const toastVariants = cva( "toaster group", {
    variants: {
        variant: {
            default: "bg-softNeutral-100 text-softNeutral-900 shadow-xl",
            error: "bg-richRed-500 text-softNeutral-50 shadow-xl",
            success: "bg-deepTeal-400 text-softNeutral-100 shadow-xl",
            warning: "bg-[#fdc500] text-softNeutral-900 shadow-xl",
            info: "bg-deepBlue-400 text-softNeutral-100 shadow-xl",
        },
    },
    defaultVariants: {
        variant: "default",
    },
} );

const Toaster = ( {
    variant = "default",
    icons = "info",
    className = "",
    ...props
}: ToasterProps ) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className={cn( toastVariants( { variant } ), className )}

            toastOptions={{
                duration: 5000,
                classNames: {
                    toast: toastVariants( { variant } ),
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            }}
            {...props}
        />
    );
};

export { Toaster };


// https://sonner.emilkowal.ski/toaster
// https://animations.dev/