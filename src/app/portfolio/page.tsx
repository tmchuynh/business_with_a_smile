import Image from "next/image";
import { projects } from "../../../types/constants";
import { HeaderImage } from "@/components/ui/header-image";

export default function PortfolioSection() {

    return (
        <div className="bg-white dark:bg-softGray-900">
            <HeaderImage url={'/images/mountain.jpg'} />
            <div className="text-center">
                <h6>Our Portfolio</h6>
                <h1>
                    Showcasing Our Expertise
                </h1>
                <h2>
                    Explore a selection of projects we’ve delivered for our clients, highlighting innovation, creativity, and results.
                </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-11/12 mx-auto">
                {projects.map( ( project, idx ) => (
                    <div key={idx} className="group relative hover:scale-105 transition-all duration-300 border-2 border-softNeutral-50 rounded-xl shadow-lg overflow-hidden motion-reduce:transition-none">
                        <div className="w-full h-64 relative">
                            <Image
                                src={project.imgUrl}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6 bg-softNeutral-50 dark:bg-softGray-900">
                            <h3>{project.title}</h3>
                            <p className="mt-2 text-sm text-softNeutral-600">{project.description}</p>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    );
}
