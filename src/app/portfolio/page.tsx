import { projects } from "../../../types/constants";

export default function PortfolioSection() {

    return (
        <div className="bg-white dark:bg-softGray-900 py-24 px-6 sm:px-8 lg:px-16">
            <div className="text-center mb-12">
                <h6>Our Portfolio</h6>
                <h1>
                    Showcasing Our Expertise
                </h1>
                <h2>
                    Explore a selection of projects we’ve delivered for our clients, highlighting innovation, creativity, and results.
                </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {projects.map( ( project, idx ) => (
                    <div key={idx} className="group relative bg-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <img
                            src={project.imgUrl}
                            alt={project.title}
                            className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-110"
                        />
                        <div className="p-6">
                            <h3>{project.title}</h3>
                            <p className="mt-2 text-sm text-softNeutral-600">{project.description}</p>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    );
}
