"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, BarChart, MessageSquare, Lock, Plug, Repeat } from "lucide-react"; // Importing Lucide icons

const solutions = [
    { name: 'Portfolio', description: 'Get a better understanding of your traffic', href: '/portfolio', icon: BarChart },
    { name: 'Services', description: 'Speak directly to your customers', href: '/services', icon: MessageSquare },
    { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: Lock },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: Plug },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: Repeat },
];

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState( false ); // State to manage dropdown visibility

    // Explicitly define the type of refs
    const dropdownRef = useRef<HTMLDivElement>( null ); // Ref for dropdown
    const buttonRef = useRef<HTMLButtonElement>( null ); // Ref for the button

    const toggleDropdown = () => setDropdownOpen( !dropdownOpen ); // Toggle the dropdown visibility

    // Close dropdown when clicking outside
    useEffect( () => {
        // Event listener to close dropdown on click outside
        const handleClickOutside = ( event: MouseEvent ) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains( event.target as Node ) &&
                buttonRef.current && !buttonRef.current.contains( event.target as Node )
            ) {
                setDropdownOpen( false ); // Close dropdown if clicked outside
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
                    <a href="#about" className="hover:text-teal-600">About</a>

                    {/* Solutions Dropdown */}
                    <div className="relative">
                        <button
                            ref={buttonRef} // Attach ref to the button
                            onClick={toggleDropdown}
                            className="inline-flex items-center gap-x-1 text-sm font-semibold"
                        >
                            <span>About</span>
                            <ChevronDown aria-hidden="true" className="h-5 w-5" />
                        </button>

                        {dropdownOpen && (
                            <div ref={dropdownRef} className="absolute left-1/2 z-10 mt-5 w-96 -translate-x-1/2 bg-white shadow-lg rounded-lg p-2">
                                {solutions.map( ( item, index ) => (
                                    <a href={item.href} key={`${ item.name }_${ index }`} className="font-semibold text-gray-900">
                                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                            <div className="mt-1 flex items-center justify-center rounded-lg bg-teal-100 group-hover:bg-teal-200 p-2 h-10 w-10">
                                                <item.icon aria-hidden="true" className="text-teal-600 group-hover:text-teal-700" />
                                            </div>
                                            <div>
                                                {item.name}
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ) )}
                            </div>
                        )}
                    </div>

                    <a href="/pricing" className="hover:text-teal-600">Pricing</a>
                    <a href="/contact" className="hover:text-teal-600">Contact</a>
                </nav>

                {/* Call to Action Button for smaller screens */}
                <div className="md:hidden">
                    <a href="#" className="inline-block py-2 px-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-500">
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
}
