"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/hooks/use-toast";
import { cn, formatDate } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";

// Define the site_styles array for the dropdown options
const site_styles = [
    { name: "Professional + Elegant", icon: () => <span className="text-deepTeal-700">🖤</span>, description: "A clean and sleek look for a more refined aesthetic." },
    { name: "Bold + Fierce", icon: () => <span className="text-red-700">🔥</span>, description: "Embrace boldness with a fierce and powerful design." },
    { name: "Classic + Modern", icon: () => <span className="text-indigo-700">🎨</span>, description: "A perfect blend of timeless elegance and contemporary style." },
    { name: "Colorful + Friendly", icon: () => <span className="text-yellow-500">🌈</span>, description: "Vibrant and welcoming, ideal for a joyful atmosphere." },
    { name: "Monotone + Welcoming", icon: () => <span className="text-gray-700">⚪</span>, description: "A minimalist approach with a welcoming, neutral tone." }
];

// Define the website demand options
const website_demand = [
    { name: "Content-Based Website", icon: () => <span className="text-deepTeal-700">🖤</span>, description: "A clean and sleek look for a more refined aesthetic." },
    { name: "Professional Business Website", icon: () => <span className="text-red-700">🔥</span>, description: "Embrace boldness with a fierce and powerful design." },
    { name: "Custom Website", icon: () => <span className="text-indigo-700">🎨</span>, description: "A perfect blend of timeless elegance and contemporary style." }
];

const formatPhoneNumber = ( value: string ) => {
    const phoneNumber = value.replace( /\D/g, "" ); // Remove non-numeric characters
    const match = phoneNumber.match( /^(\d{0,3})(\d{0,3})(\d{0,4})$/ );

    if ( match ) {
        return `(${ match[1] }) ${ match[2] }-${ match[3] }`.trim();
    }

    return value;
};

export default function ContactForm() {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm( {
        defaultValues: {
            name: "",
            email: "",
            style: "",
            website: "",
            message: "",
            dueDate: "",
            phone: "",
            communicationMethod: "",
            attachments: [] // Store multiple files in an array
        }
    } );

    const [date, setDate] = React.useState<Date>();
    const fileInputRef = React.useRef<HTMLInputElement>( null );
    const [openPopover, setOpenPopover] = React.useState( false );
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>( [] ); // Store selected files in an array
    const [phone, setPhone] = React.useState( "" ); // Manage the phone number
    const [communicationMethod, setCommunicationMethod] = React.useState( "" ); // Preferred communication method

    // Calculate the date 2 months in the future
    const minDate = new Date();
    minDate.setMonth( minDate.getMonth() + 2 );

    // Handle date selection
    const handleDateSelect = ( selectedDate: Date | undefined ) => {
        if ( selectedDate && selectedDate >= minDate ) {
            setDate( selectedDate );
            setOpenPopover( false ); // Close popover when a valid date is selected
        }
    };

    const handlePhoneChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const formattedPhone = formatPhoneNumber( e.target.value );
        if ( formattedPhone.replace( /\D/g, "" ).length <= 10 ) {
            setPhone( formattedPhone ); // Set formatted phone number in the state
        }
    };

    // Handle file changes
    const handleFileChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        if ( event.target.files ) {
            const files = Array.from( event.target.files );
            setSelectedFiles( prevFiles => [...prevFiles, ...files] ); // Add new files to the array
            setValue( "attachments", [...selectedFiles, ...files] ); // Update form with the selected files
        }
    };

    // Remove individual file
    const handleRemoveFile = ( index: number ) => {
        const newFiles = selectedFiles.filter( ( _, i ) => i !== index ); // Remove the file at the specified index
        setSelectedFiles( newFiles );
        setValue( "attachments", newFiles ); // Update form value with the remaining files
    };

    // Remove all files
    const handleRemoveAllFiles = () => {
        setSelectedFiles( [] );
        setValue( "attachments", [] ); // Clear form value
    };

    const onSubmit = ( data: any ) => {
        toast( {
            title: "Form Submitted",
            description: JSON.stringify( data, null, 2 ),
        } );
    };

    return (
        <section className="bg-white py-16 px-16 relative w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-teal-600">Bring Your Vision to Life</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Us</p>
                <p className="mt-4 text-lg text-gray-600">
                    Ready to take the next step? Reach out to us today, and let’s turn your ideas into reality.
                </p>
            </div>

            <div className="my-16 mx-auto max-w-2xl">
                <form onSubmit={handleSubmit( onSubmit )} className="space-y-8">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            render={( { field } ) => (
                                <Input {...field} placeholder="John Doe" className="mt-1" />
                            )}
                        />
                        {errors.name && <p className="text-sm text-red-500">{String( errors.name?.message )}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={( { field } ) => (
                                <Input {...field} placeholder="john.doe@example.com" className="mt-1" />
                            )}
                        />
                        {errors.email && <p className="text-sm text-red-500">{String( errors.email?.message )}</p>}
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Phone Number</label>
                        <Input
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="(123) 456-7890"
                            className="mt-1"
                        />
                        {errors.phone && <p className="text-sm text-red-500">{String( errors.phone?.message )}</p>}
                    </div>

                    {/* Preferred Method of Communication Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Preferred Method of Communication</label>
                        <Controller
                            name="communicationMethod"
                            control={control}
                            render={( { field } ) => (
                                <Select {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a method" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="email">
                                            <span>Email</span>
                                        </SelectItem>
                                        <SelectItem value="phone">
                                            <span>Phone</span>
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.communicationMethod && <p className="text-sm text-red-500">{String( errors.communicationMethod?.message )}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Website Demand Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">Website Type</label>
                            <Controller
                                name="website"
                                control={control}
                                render={( { field } ) => (
                                    <Select {...field}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a website type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {website_demand.map( ( type, index ) => (
                                                <SelectItem key={index} value={type.name}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{type.icon()}</span>
                                                        <span>{type.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ) )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.website && <p className="text-sm text-red-500">{String( errors.website?.message )}</p>}
                        </div>


                        {/* Website Style Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">Website Style</label>
                            <Controller
                                name="style"
                                control={control}
                                render={( { field } ) => (
                                    <Select {...field}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {site_styles.map( ( style, index ) => (
                                                <SelectItem key={index} value={style.name}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{style.icon()}</span>
                                                        <span>{style.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ) )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.style && <p className="text-sm text-red-500">{String( errors.style?.message )}</p>}
                        </div>
                    </div>

                    {/* Due Date Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Estimated Due Date</label>
                        <Popover open={openPopover} onOpenChange={setOpenPopover}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] flex justify-start items-center text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    aria-label="Select a date"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? formatDate( date ) : "Pick a date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 my-2">
                                <Calendar mode="single" selected={date} onSelect={handleDateSelect} disabled={{ before: minDate }} />
                            </PopoverContent>
                        </Popover>
                        {errors.dueDate && <p className="text-sm text-red-500">{String( errors.dueDate?.message )}</p>}
                    </div>

                    {/* File Upload Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Attachments (optional)</label>
                        <div className="space-y-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                multiple
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            {selectedFiles.length === 0 ? (
                                <Button
                                    variant="outline"
                                    className="w-full text-sm font-medium text-deepTeal-700 border-deepTeal-600 hover:bg-deepTeal-500 hover:text-softNeutral-50"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Choose File
                                </Button>
                            ) : (
                                <div>
                                    {selectedFiles.map( ( file, index ) => (
                                        <div key={index} className="grid grid-rows-1 grid-cols-5 items-center gap-2 my-2">
                                            <span className="col-span-3">{file.name}</span>
                                            <Button
                                                variant="outline"
                                                className="cols-span-1"
                                                onClick={() => handleRemoveFile( index )}
                                            >
                                                Change File
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                className="cols-span-1"
                                                onClick={() => handleRemoveFile( index )}
                                            >
                                                Remove File
                                            </Button>
                                        </div>
                                    ) )}
                                    <div className="grid grid-cols-2 items-center gap-4">
                                        <Button
                                            variant="destructive"
                                            onClick={handleRemoveAllFiles}
                                        >
                                            Remove All Files
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            Upload Another File
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">Your Message</label>
                        <Textarea id="message" rows={4} placeholder="Write your message here..." {...control} />
                        {errors.message && <p className="text-sm text-red-500">{String( errors.message?.message )}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </div>
        </section>
    );
}
