import { StarIcon } from "lucide-react";
import { BorderBeam } from "./ui/border-beam";

const testimonials = [
    {
        name: "Leslie Alexander",
        company: "SavvyCal",
        text: "Laborum quis quam. Dolorum et aud qua. Voluptas numquam delectus nihil. Aut enim doloremptue et ipsum.",
        rating: 5,
    },
    {
        name: "Brenna Goyette",
        company: "SavvyCal",
        text: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero.",
        rating: 4,
    },
    {
        name: "Leonard Krasner",
        company: "SavvyCal",
        text: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi qui velit incidunt excepit rerum.",
        rating: 4,
    },
    {
        name: "Floyd Miles",
        company: "SavvyCal",
        text: "Architecto libero natus est. Est quam debitis officiin emti atque et ut non. Sunt reciliecis.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-100 py-12 px-6 ">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-base font-semibold text-deepTeal-600">Lives Impacted</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    Past Business Partners
                </p>
                <p className="text-lg mt-6 text-gray-600 mb-12">
                    Hear from our satisfied clients who have experienced our exceptional
                    services and results.
                </p>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Large testimonial */}
                    <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-xl relative">
                        <BorderBeam duration={3} size={900} borderWidth={3} />
                        <div className="flex text-start space-x-4 mb-6">
                            <div>
                                <h3 className="font-semibold text-xl">{testimonials[1].name}</h3>
                                <p className="text-gray-500 text-sm">{testimonials[1].company}</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-800 mb-6">{testimonials[1].text}</p>
                        <div className="flex items-center space-x-1">
                            {/* Render filled and unfilled stars based on rating */}
                            {[...Array( 5 )].map( ( _, i ) => (
                                i < testimonials[1].rating ? (
                                    <StarIcon key={i} fill="#18578C" color="#18578C" className="w-5 h-5" />
                                ) : (
                                    <StarIcon key={i} className="text-deepBlue-600 w-5 h-5" />
                                )
                            ) )}
                        </div>
                    </div>

                    {/* Smaller testimonials */}
                    <div className="md:w-1/3 flex flex-col space-y-6 ">
                        {testimonials.map( ( testimonial, index ) =>
                            index !== 1 ? (
                                <div
                                    key={testimonial.name}
                                    className="p-8 shadow-md bg-white rounded-lg"
                                >
                                    <div className="mb-4">
                                        <h4 className="font-medium text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                                    </div>
                                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                                    <div className="flex items-center space-x-1 justify-center">
                                        {/* Render filled and unfilled stars based on rating */}
                                        {[...Array( 5 )].map( ( _, i ) => (
                                            i < testimonial.rating ? (
                                                <StarIcon key={i} fill="#18578C" color="#18578C" className="w-5 h-5" />
                                            ) : (
                                                <StarIcon key={i} className="text-deepBlue-600 w-5 h-5" />
                                            )
                                        ) )}
                                    </div>
                                </div>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
