"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { encodeUrlSafeBase64 } from "@/lib/utils";
import { website_types } from "../../types/constants";


export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState( false );

    // Explicitly define the type of refs
    const dropdownRef = useRef<HTMLDivElement>( null );
    const buttonRef = useRef<HTMLButtonElement>( null );

    const toggleDropdown = () => setDropdownOpen( !dropdownOpen );

    // Close dropdown when clicking outside
    useEffect( () => {
        const handleClickOutside = ( event: MouseEvent ) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains( event.target as Node ) &&
                buttonRef.current && !buttonRef.current.contains( event.target as Node )
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
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#" className="text-3xl font-bold text-teal-600">CompanyLogo</a>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
                    <a href="/" className="hover:text-teal-600">Home</a>
                    <a href="/about" className="hover:text-teal-600">About</a>
                    <a href="/portfolio" className="hover:text-teal-600">Portfolio</a>
                    <a href="/websites" className="hover:text-teal-600">Websites</a>

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
                            <div ref={dropdownRef} className="absolute left-1/2 z-10 gap-3 mt-5 w-[55rem] -translate-x-3/4 bg-white shadow-lg rounded-lg p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-7xl">
                                {website_types.map( ( item, index ) => (
                                    <a href={`/websites/${ item.name }`} key={`${ item.name }_${ index }`} className="font-semibold text-gray-900 text-ellipsis">
                                        <div className="group relative flex items-start gap-x-6 rounded-lg p-4 hover:bg-gray-50 h-full overflow-clip">
                                            <div className="text-lg text-deepTeal-500">
                                                {item.name}
                                                <p className="mt-1 text-gray-600 text-sm text-pretty">{item.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ) )}
                            </div>
                        )}
                    </div>

                    <a href={`/websites/${ encodeUrlSafeBase64( "business" ) }/plans`} className="hover:text-teal-600">Pricing</a>
                    <a href="/contact" className="hover:text-teal-600">Contact</a>
                </nav>

                <div className="md:hidden">
                    <a href="#" className="inline-block py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500">
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
}
