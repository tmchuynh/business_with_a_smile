"use client";

import { encodeUrlSafeBase64 } from "@/lib/utils";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { website_types } from "../../types/constants";
import { Button } from "./ui/button";

export default function Header() {
    // State and refs for the "Pricing" dropdown
    const [pricingDropdownOpen, setPricingDropdownOpen] = useState( false );
    const pricingDropdownRef = useRef<HTMLDivElement>( null );
    const pricingButtonRef = useRef<HTMLButtonElement>( null );

    // State and refs for the "About" dropdown
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState( false );
    const aboutDropdownRef = useRef<HTMLDivElement>( null );
    const aboutButtonRef = useRef<HTMLButtonElement>( null );

    const { theme, setTheme } = useTheme();

    // Ensure the component is mounted before accessing theme
    const [mounted, setMounted] = useState( false );
    useEffect( () => setMounted( true ), [] );

    const isDarkMode = theme === "dark";

    // Toggle functions for each dropdown
    const togglePricingDropdown = () => {
        setPricingDropdownOpen( !pricingDropdownOpen );
        // Optionally close the other dropdown
        if ( aboutDropdownOpen ) setAboutDropdownOpen( false );
    };

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen( !aboutDropdownOpen );
        // Optionally close the other dropdown
        if ( pricingDropdownOpen ) setPricingDropdownOpen( false );
    };

    useEffect( () => {
        const handleClickOutside = ( event: MouseEvent ) => {
            // Close Pricing Dropdown if clicked outside
            if (
                pricingDropdownRef.current &&
                !pricingDropdownRef.current.contains( event.target as Node ) &&
                pricingButtonRef.current &&
                !pricingButtonRef.current.contains( event.target as Node )
            ) {
                setPricingDropdownOpen( false );
            }
            // Close About Dropdown if clicked outside
            if (
                aboutDropdownRef.current &&
                !aboutDropdownRef.current.contains( event.target as Node ) &&
                aboutButtonRef.current &&
                !aboutButtonRef.current.contains( event.target as Node )
            ) {
                setAboutDropdownOpen( false );
            }
        };

        document.addEventListener( "click", handleClickOutside );

        return () => {
            document.removeEventListener( "click", handleClickOutside );
        };
    }, [pricingDropdownOpen, aboutDropdownOpen] );

    return (
        <header className="bg-white dark:bg-softGray-900">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-3xl font-bold text-deepTeal-600 dark:text-white"
                    >
                        CompanyLogo
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold text-softNeutral-800 dark:text-softNeutral-200">
                    <Link
                        href="/"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        About
                    </Link>

                    {/* About Dropdown */}
                    <div className="relative">
                        <button
                            ref={aboutButtonRef}
                            onClick={toggleAboutDropdown}
                            className="inline-flex items-center gap-x-1 text-sm font-semibold"
                        >
                            <span className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400">
                                Website Details
                            </span>
                            <ChevronDown className="h-5 w-5" />
                        </button>

                        {aboutDropdownOpen && (
                            <div
                                ref={aboutDropdownRef}
                                className="absolute left-1/2 z-10 gap-3 mt-5 w-[55rem] -translate-x-3/4 bg-white dark:bg-softGray-900 dark:border-softNeutral-100 border shadow-lg rounded-lg p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl"
                            >
                                {website_types.map( ( item, index ) => (
                                    <Link
                                        href={`/websites/${ encodeUrlSafeBase64(
                                            item.name
                                        ) }?index=${ encodeUrlSafeBase64( index.toString() ) }`}
                                        key={`${ item.name }_${ index }`}
                                        className="font-semibold text-softNeutral-900 text-ellipsis dark:text-softNeutral-300"
                                        onClick={() => setAboutDropdownOpen( false )}
                                    >
                                        <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-softNeutral-50 dark:hover:bg-softGray-950 h-full overflow-clip">
                                            <div className="text-lg text-deepTeal-500 dark:text-deepBlue-400">
                                                {item.name}
                                                <p className="mt-1 text-softNeutral-600 text-sm text-pretty dark:text-softNeutral-400">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ) )}
                            </div>
                        )}
                    </div>

                    {/* Pricing Dropdown */}
                    <div className="relative">
                        <button
                            ref={pricingButtonRef}
                            onClick={togglePricingDropdown}
                            className="inline-flex items-center gap-x-1 text-sm font-semibold"
                        >
                            <span className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400">
                                Pricing
                            </span>
                            <ChevronDown className="h-5 w-5" />
                        </button>
                        {pricingDropdownOpen && (
                            <div
                                ref={pricingDropdownRef}
                                className="absolute left-1/2 z-10 gap-3 mt-5 w-[20rem] -translate-x-1/2 bg-white dark:bg-softGray-900 dark:border-softNeutral-100 border shadow-lg rounded-lg p-2"
                            >
                                <Link
                                    href={`/websites`}
                                    className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                                    onClick={() => setPricingDropdownOpen( false )}
                                >
                                    <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-softNeutral-50 dark:hover:bg-softGray-950 h-full overflow-clip">
                                        <div className="text-lg text-deepTeal-500 dark:text-deepBlue-400">
                                            Website Prices
                                            <p className="mt-1 text-softNeutral-600 text-sm text-pretty dark:text-softNeutral-400">
                                                Discover transparent pricing for every project size.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <Link
                                    href={`/websites/${ encodeUrlSafeBase64( "business" ) }/plans`}
                                    className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                                    onClick={() => setPricingDropdownOpen( false )}
                                >
                                    <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-softNeutral-50 dark:hover:bg-softGray-950 h-full overflow-clip">
                                        <div className="text-lg text-deepTeal-500 dark:text-deepBlue-400">
                                            Payment Plans
                                            <p className="mt-1 text-softNeutral-600 text-sm text-pretty dark:text-softNeutral-400">
                                                Flexible payment options tailored to your needs.
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/portfolio"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="/contact"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Dark Mode Toggle */}
                {mounted && (
                    <Button
                        variant={isDarkMode ? "secondary" : "default"}
                        onClick={() => setTheme( theme === "dark" ? "light" : "dark" )}
                        className="group relative p-2 w-10 h-10 rounded-full focus:outline-none "
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}

                        {/* Description on Hover */}
                        <span className="absolute right-12 bottom-3 text-softNeutral-800 dark:text-softNeutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            Toggle Dark Mode
                        </span>
                    </Button>
                )}

                <div className="md:hidden">
                    <Link
                        href="#"
                        className="inline-block py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
