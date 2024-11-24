"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { website_types } from "../../../../types/constants";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { decodeUrlSafeBase64 } from "@/lib/utils";

export default function WebsiteTypes() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    const searchParams = useSearchParams();
    const index = searchParams.get( 'index' );
    const websiteType = website_types[parseInt( decodeUrlSafeBase64( index! ) )];

    return (
        <div className="py-10 lg:py-52 px-6 mt-16 lg:px-8 h-max">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h6>Flexible Payment Options</h6>
                <h1>{websiteType.name}</h1>
                <h2>
                    {websiteType.introduction}
                </h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="p-8 space-y-4">
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </div>
                {mounted && (
                    <Button
                        variant={isDarkMode ? "secondary" : "default"}
                    >Choose This Type</Button>
                )}

            </div>
        </div>
    );
}