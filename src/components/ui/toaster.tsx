"use client";

import { useToast } from "@/components/hooks/use-toast";
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map( function ( { id, title, description, action, ...props } ) {
                return (
                    <Toast
                        key={id}
                        {...props}
                        className="bg-softNeutral-800 text-softNeutral-50"
                        role="alert"
                        aria-live="assertive"
                    >
                        <div className="grid gap-1">
                            {title && <ToastTitle className="font-semibold">{title}</ToastTitle>}
                            {description && (
                                <ToastDescription className="text-sm text-softNeutral-400">
                                    {description}
                                </ToastDescription>
                            )}
                        </div>
                        {action && <div className="mt-2">{action}</div>}
                        <ToastClose className="absolute top-2 right-2 text-softNeutral-400 hover:text-softNeutral-200" />
                    </Toast>
                );
            } )}
            <ToastViewport />
        </ToastProvider>
    );
}
