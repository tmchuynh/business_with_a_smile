import { Star } from 'lucide-react';
import Marquee from './ui/marquee';

const testimonials = [
    {
        name: 'Leslie Alexander',
        company: 'SavvyCal',
        text: 'Laborum quis quam. Dolorum et aud qua. Voluptas numquam delectus nihil. Aut enim doloremptue et ipsum.',
        rating: 5,
    },
    {
        name: 'Brenna Goyette',
        company: 'SavvyCal',
        text: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.',
        rating: 4,
    },
    {
        name: 'Brenna Goyette',
        company: 'SavvyCal',
        text: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.',
        rating: 4,
    },
    {
        name: 'Brenna Goyette',
        company: 'SavvyCal',
        text: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.',
        rating: 4,
    },
    {
        name: 'Leonard Krasner',
        company: 'SavvyCal',
        text: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi qui velit incidunt excepit rerum.',
        rating: 4,
    },
    {
        name: 'Floyd Miles',
        company: 'SavvyCal',
        text: 'Architecto libero natus est. Est quam debitis officiin emti atque et ut non. Sunt reciliecis.',
        rating: 5,
    },
];

const midpoint = Math.floor( testimonials.length / 2 );
const firstHalf = testimonials.slice( 0, midpoint );
const secondHalf = testimonials.slice( midpoint );

export default function Testimonials() {
    return (
        <section className="bg-softNeutral-50 py-20 lg:py-32 w-full">
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
                                className="bg-white p-8 rounded-lg shadow-md"
                            >
                                <div className="text-left mb-6">
                                    <h3 className="text-xl font-semibold text-deepTeal-600">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                </div>
                                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                                <div className="flex space-x-1">
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
                                className="bg-white p-8 rounded-lg shadow-md"
                            >
                                <div className="text-left mb-6">
                                    <h3 className="text-xl font-semibold text-deepTeal-600">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                </div>
                                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                                <div className="flex space-x-1">
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
