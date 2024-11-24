"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { encodeUrlSafeBase64 } from "@/lib/utils";
import { website_types } from "../../types/constants";
import Link from "next/link";
import { useTheme } from "next-themes";
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

    // Dropdown functionality remains the same

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
                    <Link href="/" className="text-3xl font-bold text-teal-600 dark:text-white">
                        CompanyLogo
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400">
                        About
                    </Link>
                    <Link href="/portfolio" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Portfolio
                    </Link>
                    <Link href="/websites" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Websites
                    </Link>

                    {/* Solutions Dropdown */}
                    <div className="relative">
                        <button
                            ref={buttonRef}
                            onClick={toggleDropdown}
                            className="inline-flex items-center gap-x-1 text-sm font-semibold"
                        >
                            <span>About</span>
                            <ChevronDown aria-hidden="true" className="h-5 w-5" />
                        </button>

                        {dropdownOpen && (
                            <div
                                ref={dropdownRef}
                                className="absolute left-1/2 z-10 gap-3 mt-5 w-[55rem] -translate-x-3/4 bg-white dark:bg-softGray-900 shadow-lg rounded-lg p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl"
                            >
                                {website_types.map( ( item, index ) => (
                                    <Link
                                        href={`/websites/${ item.name }`}
                                        key={`${ item.name }_${ index }`}
                                        className="font-semibold text-gray-900 text-ellipsis dark:text-gray-300"
                                    >
                                        <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-gray-50 h-full overflow-clip dark:hover:bg-gray-600">
                                            <div className="text-lg text-deepTeal-500 dark:text-teal-400">
                                                {item.name}
                                                <p className="mt-1 text-gray-600 text-sm text-pretty dark:text-gray-400">
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
                        className="hover:text-teal-600 dark:hover:text-teal-400"
                    >
                        Pricing
                    </Link>
                    <Link href="/contact" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Contact
                    </Link>
                </nav>

                {/* Dark Mode Toggle */}
                {mounted && (
                    <Button
                        variant={isDarkMode ? "secondary" : "default"}
                        onClick={() => setTheme( theme === "dark" ? "light" : "dark" )}
                        className="p-2 w-10 h-10 rounded-full focus:outline-none "
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === "dark" ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
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
