import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function FormLayout() {
    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-blue-600/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-blue-800">Profile</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">
                        This information will be displayed publicly, so be careful what you share.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-blue-700">
                                Username
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-blue-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-blue-500 sm:text-sm">workcation.com/</span>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="janesmith"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-blue-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm/6 font-medium text-blue-700">
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    defaultValue={''}
                                    aria-describedby="about-help"
                                />
                            </div>
                            <p id="about-help" className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-blue-700">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon aria-hidden="true" className="size-12 text-blue-300" />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50"
                                >
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-blue-700">
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-blue-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-blue-300" />
                                    <div className="mt-4 flex text-sm/6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Information Section */}
                <div className="border-b border-blue-600/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-blue-800">Personal Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* First Name */}
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm/6 font-medium text-blue-700">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* Last Name */}
                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-blue-700">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-blue-700">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* Country */}
                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm/6 font-medium text-blue-700">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm/6"
                                    required
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        {/* Street Address */}
                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm/6 font-medium text-blue-700">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm/6 font-medium text-blue-700">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* State/Province */}
                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm/6 font-medium text-blue-700">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>

                        {/* Postal Code */}
                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm/6 font-medium text-blue-700">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="postal-code"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm/6"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-blue-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
