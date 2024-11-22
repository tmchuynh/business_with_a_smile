import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-teal-800 py-12 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Get in Touch</h3>
                    <p className="text-lg text-gray-300">
                        Let’s bring your ideas to life. Get in touch with our team to discuss your project.
                    </p>
                    <a
                        href="mailto:contact@yourcompany.com"
                        className="text-teal-400 hover:text-teal-100 font-semibold text-lg"
                    >
                        contact@yourcompany.com
                    </a>
                    <div className="mt-6 flex justify-center gap-8">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="h-8 w-8 text-gray-300 hover:text-teal-300 transition-all" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-8 w-8 text-gray-300 hover:text-teal-300 transition-all" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-8 w-8 text-gray-300 hover:text-teal-300 transition-all" />
                        </a>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-500 pt-6">
                    <p className="text-gray-300 text-sm">&copy; 2024 Your Web Design Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
