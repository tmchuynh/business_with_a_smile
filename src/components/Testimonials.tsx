import { Star } from 'lucide-react';
import Marquee from './ui/marquee';

const testimonials = [
    {
        name: 'Jessica Harper',
        text: 'The team at [Company Name] was incredible! They took the time to understand our needs and delivered a website that exceeded our expectations. The process was smooth, and the support post-launch has been amazing.',
        rating: 5,
    },
    {
        name: 'Thomas Harris',
        company: 'GreenWay Solutions',
        text: 'We partnered with [Company Name] for our e-commerce site, and they really brought our vision to life. The attention to detail, from design to functionality, was top-notch. We’ve seen a significant boost in traffic and sales.',
        rating: 5,
    },
    {
        name: 'Olivia Martinez',
        company: 'QuickFit Apparel',
        text: 'I couldn’t be happier with the website redesign that [Company Name] delivered. They were responsive, creative, and helped us streamline the user experience. The result is a clean, modern site that perfectly matches our brand.',
        rating: 4,
    },
    {
        name: 'Matthew Clark',
        company: 'Glamour Cosmetics',
        text: 'We had a complex set of requirements, and [Company Name] delivered on every aspect. They took the time to understand our needs, and the project was completed on time. Our website is now faster, cleaner, and much easier to navigate.',
        rating: 4,
    },
    {
        name: 'Sarah Williams',
        company: 'Redstone Realty',
        text: 'The [Company Name] team completely revamped our property listings site. They worked closely with us throughout the project and made sure we were always in the loop. The final product is stunning and user-friendly.',
        rating: 5,
    },
    {
        name: 'David Johnson',
        company: 'WebTech Innovators',
        text: 'As a tech company ourselves, we were picky about the website we wanted, and [Company Name] nailed it. From the design to the backend, their attention to detail and technical expertise were outstanding. Highly recommend!',
        rating: 5,
    },
    {
        name: 'Emma Dawson',
        company: 'BrightWave Marketing',
        text: 'Working with [Company Name] was an absolute pleasure. From the initial consultation to the final launch, their team was professional, creative, and delivered a website that perfectly represents our brand. We’ve already seen an increase in engagement!',
        rating: 5,
    },
    {
        name: 'Jacob Thompson',
        company: 'CleanTech Solutions',
        text: 'We approached [Company Name] for a complete redesign of our website, and they didn’t disappoint. The team listened to our feedback and provided great insights, resulting in a modern, user-friendly website that functions seamlessly.',
        rating: 5,
    },
    {
        name: 'Lily Foster',
        company: 'FitTech Innovations',
        text: 'The website [Company Name] designed for us has been a game-changer. It’s fast, responsive, and beautifully designed. Our clients love it, and we’re seeing an uptick in inquiries and conversions. Highly recommend them for any web project!',
        rating: 5,
    },
    {
        name: 'Daniel Scott',
        company: 'Alpha Ventures',
        text: 'Our new website is exactly what we envisioned—simple, sleek, and easy to navigate. The [Company Name] team understood our business goals and delivered a website that aligns perfectly with our vision. It was an excellent experience from start to finish.',
        rating: 4,
    },
    {
        name: 'Charlotte Green',
        company: 'EcoWorld',
        text: 'We needed a website that could showcase our sustainability efforts and products, and [Company Name] did just that. They were easy to work with, communicated effectively, and helped us create a site that resonates with our audience. Our online presence has never been better.',
        rating: 5,
    },
    {
        name: 'John Miller',
        company: 'TechForge Solutions',
        text: 'The team at [Company Name] was fantastic! They delivered a responsive and feature-rich website that works perfectly on all devices. Their technical expertise and creative approach really set them apart from other agencies we’ve worked with.',
        rating: 5,
    },
    {
        name: 'Sophia Bell',
        company: 'UrbanX Design',
        text: 'Our new site is exactly what we wanted, and more! The user experience is fantastic, and the design is modern and sleek. The team at [Company Name] delivered on all fronts and provided valuable recommendations for improving our online presence.',
        rating: 4,
    },
    {
        name: 'Ryan Brooks',
        company: 'CloudSpace Hosting',
        text: 'I’m so pleased with the website that [Company Name] developed for us. They took our vague ideas and turned them into a stunning, functional site. They were professional throughout, and the project was completed on time and within budget.',
        rating: 5,
    },
    {
        name: 'Grace Lee',
        company: 'MoonTech Innovations',
        text: 'The [Company Name] team exceeded our expectations. Their process was collaborative, and they truly understood our needs. The new website is intuitive, stylish, and performs beautifully on all devices. I would highly recommend them for any web development project.',
        rating: 5,
    },
    {
        name: 'Michael Smith',
        company: 'Global Supply Co.',
        text: 'Working with [Company Name] was a great experience. They made the entire web development process easy and stress-free. They created a clean, professional website that represents our brand perfectly. The project was completed ahead of schedule, too!',
        rating: 4,
    },
];


const midpoint = Math.floor( testimonials.length / 2 );
const firstHalf = testimonials.slice( 0, midpoint );
const secondHalf = testimonials.slice( midpoint );

export default function Testimonials() {
    return (
        <section className="py-20 lg:py-32 w-full">
            <div className="max-w-screen-2xl mx-auto text-center">
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-teal-600">What Our Clients Say</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Client Testimonials
                    </p>
                    <p className="text-lg text-softNeutral-600 mt-4 mb-12">
                        Discover what our clients have to say about their experiences with our outstanding services and results.
                    </p>
                </div>

                <Marquee reverse={true}>
                    {/* Row 1 */}
                    <div className="flex gap-8 flex-col lg:flex-row">
                        {firstHalf.map( ( testimonial, index ) => (
                            <div
                                key={`${ testimonial.name }_${ index }`}
                                className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between"
                                style={{ width: '30rem' }}
                            >
                                <div>
                                    <div className="text-left mb-6">
                                        <h3 className="text-xl font-semibold text-deepTeal-600">{testimonial.name}</h3>
                                        {testimonial.company ? (
                                            <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                        ) : ''}
                                    </div>
                                    <p className="text-gray-700 mb-6 text-left">{testimonial.text}</p>
                                </div>
                                <div className="flex space-x-1 self-end">
                                    {[...Array( 5 )].map( ( _, i ) => (
                                        i < testimonials[1].rating ? (
                                            <Star key={i} fill="#004B45" color="#004B45" className="w-5 h-5" />
                                        ) : (
                                            <Star key={i} className="text-teal-600 w-5 h-5" />
                                        )
                                    ) )}
                                </div>
                            </div>
                        ) )}
                    </div>
                </Marquee>

                <Marquee reverse={false}>
                    {/* Row 2 */}
                    <div className="flex gap-8 flex-col lg:flex-row">
                        {secondHalf.map( ( testimonial, index ) => (
                            <div
                                key={`${ testimonial.name }_${ index }`}
                                className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between"
                                style={{ width: '30rem' }}
                            >
                                <div>
                                    <div className="text-left mb-6">
                                        <h3 className="text-xl font-semibold text-deepTeal-600">{testimonial.name}</h3>
                                        {testimonial.company ? (
                                            <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                        ) : ''}
                                    </div>
                                    <p className="text-gray-700 mb-6 text-left">{testimonial.text}</p>
                                </div>
                                <div className="flex space-x-1 self-end">
                                    {[...Array( 5 )].map( ( _, i ) => (
                                        i < testimonials[1].rating ? (
                                            <Star key={i} fill="#004B45" color="#004B45" className="w-5 h-5" />
                                        ) : (
                                            <Star key={i} className="text-teal-600 w-5 h-5" />
                                        )
                                    ) )}
                                </div>
                            </div>
                        ) )}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
