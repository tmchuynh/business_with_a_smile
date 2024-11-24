"use client";

import { encodeUrlSafeBase64 } from "@/lib/utils";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { website_types } from "../../types/constants";
import { Button } from "./ui/button";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState( false );

    // Explicitly define the type of refs
    const dropdownRef = useRef<HTMLDivElement>( null );
    const buttonRef = useRef<HTMLButtonElement>( null );
    const { theme, setTheme } = useTheme();

    // Ensure the component is mounted before accessing theme
    const [mounted, setMounted] = useState( false );
    useEffect( () => setMounted( true ), [] );

    React.useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    const toggleDropdown = () => setDropdownOpen( !dropdownOpen );

    useEffect( () => {
        const handleClickOutside = ( event: MouseEvent ) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains( event.target as Node ) &&
                buttonRef.current &&
                !buttonRef.current.contains( event.target as Node )
            ) {
                setDropdownOpen( false );
            }
        };

        document.addEventListener( "click", handleClickOutside );

        return () => {
            document.removeEventListener( "click", handleClickOutside );
        };
    }, [] );

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
                    <Link
                        href="/portfolio"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/websites"
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Websites
                    </Link>

                    {/* Solutions Dropdown */}
                    <div className="relative">
                        <button
                            ref={buttonRef}
                            onClick={toggleDropdown}
                            className="inline-flex items-center gap-x-1 text-sm font-semibold"
                        >
                            <span className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400">
                                About
                            </span>
                            <ChevronDown className="h-5 w-5" />
                        </button>

                        {dropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute left-1/2 z-10 gap-3 mt-5 w-[55rem] -translate-x-3/4 bg-white dark:bg-softGray-900 dark:border-softNeutral-100 border shadow-lg rounded-lg p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl"
                            >
                                {website_types.map( ( item, index ) => (
                                    <Link
                                        href={`/websites/${ encodeUrlSafeBase64( item.name ) }?index=${ encodeUrlSafeBase64( ( index ).toString() ) }`}
                                        key={`${ item.name }_${ index }`}
                                        className="font-semibold text-softNeutral-900 text-ellipsis dark:text-softNeutral-300"
                                        onClick={() => setDropdownOpen( false )} // Close dropdown when a link is clicked
                                    >
                                        <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-softNeutral-50 dark:hover:bg-softGray-950 h-full overflow-clip">
                                            <div className="text-lg text-deepTeal-500 dark:text-deepTeal-400">
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

                    <Link
                        href={`/websites/${ encodeUrlSafeBase64( "business" ) }/plans`}
                        className="hover:text-deepTeal-600 dark:hover:text-deepBlue-400"
                    >
                        Pricing
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
