"use client";

import Testimonials from "@/components/Testimonials";
import OurFeatures from "@/components/Why-Us";
import PersonalizedWebsite from "@/components/Personalized-Website";
import HeaderSection from "@/components/Header-Section";
import { HeaderImage } from "@/components/ui/header-image";
import Stats from "@/components/ui/stats";
import { useState, useEffect } from "react";

export default function Home() {
    const [isClient, setIsClient] = useState( false );

    useEffect( () => {
        setIsClient( true ); // Runs only on the client
    }, [] );
    return (
        isClient ? (
            <>
                <HeaderSection />
                <PersonalizedWebsite />
                <HeaderImage url={'/images/mountain.jpg'} />
                <OurFeatures />
                <Stats />
                <Testimonials />
            </>
        ) : (
            <div>
                Loading...
            </div>
        )
    );
}
