"use client";

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState( {
        name: '',
        email: '',
        phone: '',
        website: '',
        urgency: 'Low',
        dueDate: '',
        projectDetails: '',
    } );

    // Handle form input changes
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setFormData( ( prevData ) => ( { ...prevData, [name]: value } ) );
    };

    // Handle form submission
    const handleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        // Handle form submission logic
        console.log( formData );
    };

    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-base/7 font-semibold text-teal-600">Contact Us</h2>
                <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                    Tell us about your project
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information Section */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                                placeholder="example@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                                placeholder="(123) 456-7890"
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="block text-sm font-medium text-gray-900">
                                Company Website
                            </label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                                placeholder="https://www.companywebsite.com"
                            />
                        </div>
                    </div>

                    {/* Project Information Section */}
                    <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-900">
                            Project Urgency
                        </label>
                        <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="dueDate" className="block text-sm font-medium text-gray-900">
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="dueDate"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                        />
                    </div>

                    {/* Project Details Section */}
                    <div>
                        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-900">
                            Project Details
                        </label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            rows={4}
                            value={formData.projectDetails}
                            onChange={handleChange}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 sm:text-sm"
                            placeholder="Tell us more about your project"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-md bg-teal-500 px-6 py-3 text-white font-semibold text-lg shadow-sm hover:bg-teal-400 focus-visible:outline-teal-500"
                        >
                            Submit Project Details
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
