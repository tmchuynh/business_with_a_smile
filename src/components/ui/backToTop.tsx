"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "./button";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState( false );
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    const handleScroll = () => {
        if ( window.scrollY > 400 ) {
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
        <>
            {mounted && (
                <Button
                    onClick={scrollToTop}
                    variant={isDarkMode ? "secondary" : "default"}
                    className={cn(
                        "fixed bottom-8 right-8 rounded-full w-10 h-10 p-3 shadow-lg transition-opacity duration-300 ease-in-out",
                        isVisible
                            ? " text-white opacity-100"
                            : "opacity-0 pointer-events-none",
                    )}
                    aria-label="Back to Top"
                >
                    <ChevronUp className="h-6 w-6" />
                </Button>
            )}
        </>


    );
};

export default BackToTopButton;
