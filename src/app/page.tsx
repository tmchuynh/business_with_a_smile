import Testimonials from "@/components/Testimonials";
import OurFeatures from "@/components/Why-Us";
import PersonalizedWebsite from "@/components/Personalized-Website";
import HeaderSection from "@/components/Header-Section";
import { HeaderImage } from "@/components/ui/header-image";
import Stats from "@/components/ui/stats";

export default function Home() {
    return (
        <>
            <HeaderSection />
            <PersonalizedWebsite />
            <HeaderImage url={'/images/mountain.jpg'} />
            <OurFeatures />
            <Stats />
            <Testimonials />
        </>
    );
}
