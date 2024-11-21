"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState( false );

    const handleScroll = () => {
        if ( window.scrollY > 300 ) {
            setIsVisible( true );
        } else {
            setIsVisible( false );
        }
    };

    useEffect( () => {
        window.addEventListener( "scroll", handleScroll );

        return () => {
            window.removeEventListener( "scroll", handleScroll );
        };
    }, [] );

    const scrollToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth",
        } );
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 rounded-full p-3 shadow-lg transition-opacity duration-300 ease-in-out",
                isVisible
                    ? "bg-teal-600 text-white opacity-100"
                    : "opacity-0 pointer-events-none",
                "hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            )}
            aria-label="Back to Top"
        >
            <ChevronUp className="h-6 w-6" />
        </button>
    );
};

export default BackToTopButton;
