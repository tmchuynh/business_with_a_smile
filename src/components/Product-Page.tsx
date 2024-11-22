"use client";

import React from "react";
import { Specifications } from "./ui/Specifications";
import { Laptop, Shield, Cloud, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import ProductDetails from "./ui/product-details";
import { CalloutsGrid } from "./ui/CalloutsGrid";

const productImages = [
    { src: "/images/product-1.jpg", alt: "Product image 1" },
    { src: "/images/product-2.jpg", alt: "Product image 2" },
];

const features = [
    { name: "Fast Performance", description: "Get work done faster with optimized performance.", icon: Laptop },
    { name: "Top-notch Security", description: "Enhanced security features to protect your data.", icon: Shield },
    { name: "Cloud Integration", description: "Seamlessly integrate with cloud services.", icon: Cloud },
    { name: "Mobile Friendly", description: "Fully responsive design for all screen sizes.", icon: Phone },
];

const productDetails: Product = {
    name: "SuperProduct 3000",
    price: "$499",
    href: "#",
    breadcrumbs: [
        { id: 1, name: "Tech", href: "#" },
        { id: 2, name: "Electronics", href: "#" },
    ],
    images: [
        { src: "/images/product-1.jpg", alt: "Product image 1" },
        { src: "/images/product-2.jpg", alt: "Product image 2" },
        { src: "/images/product-2.jpg", alt: "Product image 2" },
        { src: "/images/product-2.jpg", alt: "Product image 2" },
    ],
    description:
        "SuperProduct 3000 is the latest innovation in tech. Packed with powerful features, it helps you achieve more in less time. Experience speed, security, and cloud integration like never before.",
    highlights: [
        "Powerful Processor",
        "Extended Battery Life",
        "High-Resolution Display",
        "Durable Build",
    ],
    details:
        "SuperProduct 3000 is equipped with a high-performance processor, long-lasting battery, stunning 4K display, and a robust build designed for all kinds of tasks.",
    reviews: { href: "#", average: 4, totalCount: 117 },
    features: [
        { name: "Fast Performance", description: "Get work done faster with optimized performance." },
        { name: "Top-notch Security", description: "Enhanced security features to protect your data." },
        { name: "Cloud Integration", description: "Seamlessly integrate with cloud services." },
        { name: "Mobile Friendly", description: "Fully responsive design for all screen sizes." },
    ],
};

const callouts = [
    {
        name: "Fast Performance",
        description: "Achieve faster load times and seamless performance across your projects.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "Fast Performance",
        href: "#fast-performance",
    },
    {
        name: "Top Security",
        description: "Ensure that your data is protected with the latest security measures.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "Top Security",
        href: "#top-security",
    },
    {
        name: "24/7 Support",
        description: "Our dedicated team is available around the clock to assist with your needs.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "24/7 Support",
        href: "#support",
    },
    {
        name: "Easy Integration",
        description: "Integrate with your existing tools and workflows with ease.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "Easy Integration",
        href: "#integration",
    },
    {
        name: "Cloud Storage",
        description: "Store your data safely and access it from anywhere with cloud storage.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "Cloud Storage",
        href: "#cloud-storage",
    },
    {
        name: "Mobile Friendly",
        description: "Ensure your website is fully responsive and looks great on mobile devices.",
        imageSrc: "https://via.placeholder.com/400x300",
        imageAlt: "Mobile Friendly",
        href: "#mobile-friendly",
    },
];

export default function ProductPage() {
    return (
        <div>




            {/* Product Details Section */}
            <ProductDetails product={productDetails} />

            <CalloutsGrid title="Key Features" callouts={callouts} />

            {/* Specifications Section */}
            <Specifications
                title="Product Specifications"
                description="Everything you need to know about the SuperProduct 3000"
                features={productDetails.features}
                images={productImages}
            />


        </div>
    );
}
