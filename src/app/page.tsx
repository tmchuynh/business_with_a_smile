import DetailsSection from "@/components/Details-Section";
import FeatureSection from "@/components/Featured-Section";
import HeaderSection from "@/components/Header-Section1";
import PaymentOptions from "@/components/Payment-Options";
import Pricing from "@/components/Pricing-Section";
import ProductPage from "@/components/Product-Page";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";



export default function Home() {
    return (
        <>
            <HeaderSection />
            <DetailsSection />
            <FeatureSection />
            <Services />
            <Testimonials />
            <Pricing />
            <PaymentOptions />
            <ProductPage />
        </>
    );
}
