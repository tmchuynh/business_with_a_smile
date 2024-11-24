"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { website_types } from "../../../../types/constants";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { classNames, decodeUrlSafeBase64 } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { features } from "process";
import { CheckIcon } from "lucide-react";

export default function WebsiteTypes() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    const searchParams = useSearchParams();
    const index = searchParams.get( 'index' );
    const website = website_types[parseInt( decodeUrlSafeBase64( index! ) )];

    return (
        <div className="py-10 lg:py-52 px-6 mt-16 lg:px-8 h-max max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h6>Flexible Payment Options</h6>
                <h1>{website.name}</h1>

                {mounted && (
                    <>
                        {website.popular ? (
                            <Badge
                                variant={isDarkMode ? "outline" : "ghost"}
                                className="mt-5 uppercase"
                            >
                                Popular
                            </Badge>
                        ) : (
                            ""
                        )}
                    </>
                )}

                <h2>{website.introduction}</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <div className="p-8 space-y-4">
                    <div>
                        <h3>Features</h3>
                        <ul>
                            {website.other_info.features.map( ( feature, index ) => (
                                <li key={index} className="flex gap-x-2">
                                    <CheckIcon
                                        className={classNames(
                                            website.popular
                                                ? "text-deepTeal-300"
                                                : "text-deepTeal-600",
                                            "h-5 w-8 flex-none"
                                        )}
                                    />
                                    {feature}
                                </li>
                            ) )}
                        </ul>
                    </div>
                </div>
                {mounted && (
                    <Button variant={isDarkMode ? "secondary" : "default"}>
                        Choose This Type
                    </Button>
                )}
            </div>
        </div>
    );
}