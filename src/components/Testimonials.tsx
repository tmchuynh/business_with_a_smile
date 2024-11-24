"use client";

import { Star } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { testimonials } from '../../types/constants';
import Marquee from './ui/marquee';

export default function Testimonials() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState( false );
    useEffect( () => {
        setMounted( true );
    }, [] );

    const midpoint = Math.floor( testimonials.length / 2 );
    const firstHalf = testimonials.slice( 0, midpoint );
    const secondHalf = testimonials.slice( midpoint );

    const isDarkMode = theme === 'dark';

    return (
        <section className="py-10 lg:py-20 w-full">
            <div className="max-w-screen-2xl mx-auto text-center">
                <div className="text-center mb-12">
                    <h6>What Our Clients Say</h6>
                    <h1>
                        Client Testimonials
                    </h1>
                    <h2>
                        Discover what our clients have to say about their experiences with our outstanding services and results.
                    </h2>
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
                                        <h3>{testimonial.name}</h3>
                                        {testimonial.company ? (
                                            <p className="text-softNeutral-500 text-sm dark:text-deepBlue-900">{testimonial.company}</p>
                                        ) : ''}
                                    </div>
                                    <p className="text-softNeutral-700 mb-6 text-left">{testimonial.text}</p>
                                </div>
                                <div className="flex space-x-1 self-end">
                                    {[...Array( 5 )].map( ( _, i ) => (
                                        i < testimonials[1].rating ? (
                                            <Star key={i} fill="#004B45" color="#004B45" className="w-5 h-5" />
                                        ) : (
                                            <Star key={i} className="text-deepTeal-600 w-5 h-5" />
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
                                className="bg-white  p-8 rounded-lg shadow-md flex flex-col justify-between"
                                style={{ width: '30rem' }}
                            >
                                <div>
                                    <div className="text-left mb-6">
                                        <h3>{testimonial.name}</h3>
                                        {testimonial.company ? (
                                            <p className="text-softNeutral-500 text-sm dark:text-deepBlue-900">{testimonial.company}</p>
                                        ) : ''}
                                    </div>
                                    <p className="text-softNeutral-700 mb-6 text-left">{testimonial.text}</p>
                                </div>
                                <div className="flex space-x-1 self-end">
                                    {[...Array( 5 )].map( ( _, i ) => (
                                        i < testimonials[1].rating ? (
                                            <Star key={i} fill="#004B45" color="#004B45" className="w-5 h-5" />
                                        ) : (
                                            <Star key={i} className="text-deepTeal-600 w-5 h-5" />
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
