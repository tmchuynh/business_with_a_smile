import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-softGray-950 py-12 text-gray-900 dark:text-gray-400 dark:bg-softGray-900 dark:border-softGray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-softNeutral-50">Get in Touch</h3>
                        <p className="mb-4 ">
                            Let’s bring your ideas to life. Get in touch with our team to discuss your project.
                        </p>
                        <a
                            href="mailto:contact@yourcompany.com"
                            className="text-deepTeal-600 hover:text-deepTeal-200 font-semibold dark:text-deepBlue-400 "
                        >
                            contact@yourcompany.com
                        </a>
                        <div className="mt-6 flex gap-8">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="h-8 w-8 hover:text-deepTeal-400 text-deepTeal-600 dark:text-deepBlue-300 dark:hover:text-deepBlue-500 transition-all" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-8 w-8 hover:text-deepTeal-400 text-deepTeal-600 dark:text-deepBlue-300 dark:hover:text-deepBlue-500 transition-all" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-8 w-8 hover:text-deepTeal-400 text-deepTeal-600 dark:text-deepBlue-300 dark:hover:text-deepBlue-500 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-softNeutral-50">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-softNeutral-50">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/web-design" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Web Design
                                </a>
                            </li>
                            <li>
                                <a href="/ecommerce" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    E-commerce Solutions
                                </a>
                            </li>
                            <li>
                                <a href="/seo" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    SEO Services
                                </a>
                            </li>
                            <li>
                                <a href="/branding" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Branding & Strategy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 dark:text-softNeutral-50">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/portfolio" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-deepTeal-400 dark:hover:text-deepBlue-400">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/faq" className="hover:text-deepTeal-400">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-deepTeal-600 dark:border-deepBlue-400 pt-6 text-center">
                    <p className="text-sm dark:text-softNeutral-50">
                        &copy; 2024 Your Web Design Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
