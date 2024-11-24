"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Eye, Lightbulb, PenTool, ShieldCheck, Star, Users } from "lucide-react";
import { HeaderImage } from "@/components/ui/header-image";

export default function AboutPage() {
    const { theme } = useTheme();
    const router = useRouter();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

    function navigate() {
        router.push( `/contact` );
    }

    return (
        <div className="text-softNeutral-800 dark:text-softNeutral-200">
            <HeaderImage url={'/images/mountain.jpg'} />
            {/* Values Section with Cards */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h6>
                            Guiding Principles That Define Us
                        </h6>
                        <h1>
                            Our Values
                        </h1>
                        <h2>
                            Our core values drive everything we do, shaping the way we work and the solutions we create. Let’s build something meaningful together.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <Lightbulb className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Innovation</h6>
                            <p>
                                Innovation is at the heart of everything we do. We thrive on exploring new ideas, embracing change, and finding creative solutions to challenges. Our commitment to innovation drives us to deliver exceptional value and stay ahead in an ever-evolving digital landscape.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <ShieldCheck className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Integrity</h6>
                            <p>
                                Integrity is the foundation of our work. With honesty and transparency at our core, we foster trust and build lasting relationships with our clients. Every decision we make reflects our unwavering commitment to doing what’s right, ensuring your success is always our priority.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <Star className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Excellence</h6>
                            <p>
                                Excellence is our standard, not an option. We are dedicated to delivering high-quality solutions that not only meet but consistently exceed expectations. With an unwavering focus on precision, innovation, and client satisfaction, we strive to set the benchmark in everything we do.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <Users className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Customer Focus</h6>
                            <p>
                                Our customers are the center of everything we do. By deeply understanding your needs, goals, and challenges, we deliver tailored solutions that drive exceptional value and lasting satisfaction. Your success is our success.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <PenTool className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Creativity</h6>
                            <p>
                                Creativity fuels our approach to every project. We thrive on crafting fresh ideas, innovative designs, and unique solutions that stand out. For us, creativity isn’t just a process—it’s a mindset that shapes every decision.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center bg-white border-2 border-softNeutral-50 dark:bg-softGray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-4">
                                <Eye className="h-10 w-10 text-deepTeal-200 dark:text-deepBlue-300" />
                            </div>
                            <h6>Vision</h6>
                            <p>
                                We are committed to looking beyond the immediate needs of today, helping you prepare for the opportunities and challenges of tomorrow. With a clear vision of success, we design solutions that evolve with your business and the ever-changing digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="text-center mb-12">
                        <h6>
                            Crafting Stories That Matter
                        </h6>
                        <h1>
                            Ready to Start Your Project?
                        </h1>
                        <h2>
                            Together, we can transform your ideas into something extraordinary. Reach out to us today and let’s make it happen!
                        </h2>
                    </div>

                    {mounted && (
                        <Button
                            className="w-1/4 mx-auto"
                            onClick={() => navigate()}
                            variant={isDarkMode ? "secondary" : "default"}
                        >
                            Start Today
                        </Button>
                    )}
                </div>
            </section>

            {/* Hero Section */}
            <section className="py-16 px-6">
                <div className="text-center mb-12">
                    <h6>
                        Crafting Stories That Matter
                    </h6>
                    <h1>
                        About Us
                    </h1>
                    <h2>
                        At our core, we’re passionate about transforming ideas into impactful realities. Let’s collaborate and create something extraordinary together.
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="w-1/2 mr-9 text-balance">
                        <p>
                            At [Your Company Name], we’re more than just web developers – we’re partners in your digital journey. Passionate about crafting exceptional websites, we focus on helping businesses thrive and grow in today’s ever-evolving digital world.
                        </p>
                        <p>
                            Our team of skilled professionals brings together creativity, innovation, and technical expertise to deliver tailored solutions that align perfectly with your vision and goals. Whether you’re a startup looking to establish an online presence, a growing business aiming to expand your reach, or a seasoned brand seeking a refresh, we’re here to create a website that reflects your unique identity and values.
                        </p>
                        <p>
                            We believe that every business is one-of-a-kind, which is why we don’t do cookie-cutter solutions. Instead, we take the time to understand your needs, challenges, and aspirations, ensuring that the websites we build are not only visually stunning but also functional, user-friendly, and optimized for success.
                        </p>
                        <p>
                            With a deep commitment to quality and client satisfaction, we pride ourselves on delivering results that exceed expectations. From responsive designs that work flawlessly on any device to seamless integrations that enhance user experience, we’re dedicated to making your online presence a true representation of your brand’s excellence.
                        </p>
                        <p>
                            At the heart of what we do is a simple belief: your success is our success. Let’s work together to create a digital platform that drives growth, engages your audience, and sets you apart in the competitive online landscape.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <Image
                            src="/images/tech.jpeg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h6>
                            The People Behind the Vision
                        </h6>
                        <h1>
                            Meet The Team
                        </h1>
                        <h2>
                            Our dedicated team is here to bring your ideas to life. Together, we’ll collaborate to create solutions that inspire, engage, and deliver results.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Team Member 1"
                                width={200}
                                height={200}
                                className="rounded-full mb-4 transition-all duration-300 hover:scale-110 shadow-md dark:shadow-deepBlue-400/50 dark:shadow-lg"
                            />
                            <h3>Jane Doe</h3>
                            <p>CEO & Founder</p>
                        </div>
                        {/* Team Member 2 */}
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Team Member 2"
                                width={200}
                                height={200}
                                className="rounded-full mb-4 transition-all duration-300 hover:scale-110 shadow-md dark:shadow-deepBlue-400/50 dark:shadow-lg"
                            />
                            <h3>John Smith</h3>
                            <p>Lead Developer</p>
                        </div>
                        {/* Team Member 3 */}
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src="/images/avatar.jpg"
                                alt="Team Member 3"
                                width={200}
                                height={200}
                                className="rounded-full mb-4 transition-all duration-300 hover:scale-110 shadow-md dark:shadow-deepBlue-400/50 dark:shadow-lg"
                            />
                            <h3>Emily Johnson</h3>
                            <p>Design Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-pretty">
                    <div className="text-center mb-12">
                        <h6>
                            Turning Ideas Into Impact
                        </h6>
                        <h1>
                            Our Mission
                        </h1>
                        <h2>
                            Let’s take your vision to the next level. Together, we’ll create solutions that bring your ideas to life and drive meaningful results.
                        </h2>
                    </div>

                    <p>
                        At our core, our mission is to empower businesses to reach new heights. We strive to craft websites that go beyond aesthetics—websites that captivate, inspire, and deliver real impact. Our goal is to create digital experiences that not only showcase your brand's unique essence but also drive growth, amplify visibility, and transform your vision into measurable success.
                    </p>
                    <p>
                        We believe that every business has untapped potential waiting to be unleashed. Through innovative designs, seamless functionality, and user-centered strategies, we aim to turn your website into a powerful tool that engages audiences, builds connections, and elevates your brand. Your success is our purpose, and every project we undertake is a testament to that unwavering commitment.
                    </p>

                </div>
            </section>

            {/* Background Story */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-pretty">
                    <div className="text-center mb-12">
                        <h6>
                            Every Great Story Starts with a Vision
                        </h6>
                        <h1>
                            Our Story
                        </h1>
                        <h2>
                            Let us help you bring your vision to life. Together, we’ll turn your ideas into a compelling story that drives success and inspires action.
                        </h2>
                    </div>
                    <p>
                        Established in 2010, we started as a small startup with a bold mission: to empower businesses by delivering cutting-edge web solutions. Armed with big dreams and a passion for innovation, we embarked on a journey to transform how businesses establish and grow their online presence.
                    </p>
                    <p>
                        What began as a modest operation quickly gained momentum as we partnered with businesses across industries, from local entrepreneurs to global enterprises. Over the years, we’ve evolved into a full-service digital agency, offering a comprehensive range of services designed to help our clients thrive in an increasingly digital world.
                    </p>
                    <p>
                        Our journey has been driven by a steadfast commitment to quality, innovation, and client success. At our core, we believe that a website should do more than look good—it should be a powerful tool that drives engagement, enhances user experiences, and achieves tangible results. This belief has shaped every project we’ve taken on and every solution we’ve delivered.
                    </p>
                    <p>
                        As we’ve grown, so has our dedication to staying ahead of the curve. From embracing the latest technologies to refining our strategies for an ever-evolving digital landscape, we continue to push boundaries to ensure our clients always have a competitive edge.
                    </p>
                    <p>
                        Today, our story is not just about where we’ve been—it’s about where we’re headed. We remain passionate about helping businesses succeed online, working tirelessly to craft solutions that reflect their unique identity, meet their goals, and create lasting impact. At [Your Company Name], our story is about empowering yours.
                    </p>

                </div>
            </section>
        </div>
    );
}
