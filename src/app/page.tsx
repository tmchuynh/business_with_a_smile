import HeaderSection from "@/components/Header-Section1";
import Testimonials from "@/components/Testimonials";
import ImportanceOfWebDesign from "@/components/Importance-of-Web-Design";
import OurFeatures from "@/components/Why-Us";
import PersonalizedWebsite from "@/components/Personalized-Website";


export default function Home() {
    return (
        <>
            <HeaderSection />
            <PersonalizedWebsite />
            <OurFeatures />
            <ImportanceOfWebDesign />
            <Testimonials />
        </>
    );
}
