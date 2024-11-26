"use client";

import React from "react";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

const MessageSentDialogWithAnimation = () => {
    const [open, setOpen] = React.useState( false );

    const handleSendMessage = () => {
        // Simulate sending a message
        setOpen( true );
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <button
                className="px-4 py-2 bg-deepTeal-600 text-white rounded-md"
                onClick={handleSendMessage}
            >
                Send Message
            </button>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <button className="hidden" />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <div className="relative flex flex-col items-center space-y-4">
                        {/* Airplane Animation */}
                        <div className="absolute top-0 animate-fly">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-deepTeal-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10l11 2m0 0l-2 11m2-11l8-8m-8 8L3 21"
                                />
                            </svg>
                        </div>
                        {/* Dialog Content */}
                        <AlertDialogHeader>
                            <AlertDialogTitle>Message Sent</AlertDialogTitle>
                            <AlertDialogDescription>
                                Thank you! Your message has been successfully sent. We’ll get back
                                to you shortly.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setOpen( false )}>
                                Close
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default MessageSentDialogWithAnimation;
