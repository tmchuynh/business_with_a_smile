"use client";

import { cn } from "@/lib/utils";
import { ChevronUp, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState( false );
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === "dark";

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
            {/* Back to Top Button */}
            {mounted && (
                <Button
                    onClick={scrollToTop}
                    variant={isDarkMode ? "secondary" : "default"}
                    className={cn(
                        "group fixed bottom-24 right-8 rounded-full w-10 h-10 p-3 shadow-lg transition-opacity duration-300 ease-in-out",
                        isVisible ? "text-white opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    aria-label="Back to Top"
                >
                    <ChevronUp className="h-6 w-6" />

                    {/* Description on Hover */}
                    <span className="absolute right-12 bottom-3 text-softNeutral-800 dark:text-softNeutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        Back to Top
                    </span>
                </Button>
            )}

            {/* Dark Mode Toggle */}
            {mounted && (
                <Button
                    variant={isDarkMode ? "secondary" : "default"}
                    onClick={() => setTheme( theme === "dark" ? "light" : "dark" )}
                    className={cn(
                        "group fixed bottom-10 right-8 p-2 w-10 h-10 rounded-full shadow-lg focus:outline-none transition-opacity duration-300 ease-in-out",
                        isVisible ? "text-white opacity-100" : "opacity-0 pointer-events-none"
                    )}
                    aria-label="Toggle Dark Mode"
                >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}

                    {/* Description on Hover */}
                    <span className="absolute right-12 bottom-3 text-softNeutral-800 dark:text-softNeutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        Toggle Dark Mode
                    </span>
                </Button>
            )}

        </>
    );
};

export default BackToTopButton;
