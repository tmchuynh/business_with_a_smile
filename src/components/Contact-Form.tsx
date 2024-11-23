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

// Updated site_styles array with more styles
const site_styles = [
    { name: "Professional + Elegant", icon: () => <span className="text-deepTeal-700">🖤</span>, description: "A clean and sleek look for a more refined aesthetic." },
    { name: "Bold + Fierce", icon: () => <span className="text-red-700">🔥</span>, description: "Embrace boldness with a fierce and powerful design." },
    { name: "Classic + Modern", icon: () => <span className="text-indigo-700">🎨</span>, description: "A perfect blend of timeless elegance and contemporary style." },
    { name: "Minimalist + Clean", icon: () => <span className="text-gray-500">➖</span>, description: "Simplistic design focusing on essential elements." },
    { name: "Vibrant + Dynamic", icon: () => <span className="text-orange-500">⚡</span>, description: "Energetic and lively design to engage users." },
    { name: "Rustic + Natural", icon: () => <span className="text-green-700">🌿</span>, description: "Earthy tones and textures for a natural feel." },
    { name: "Retro + Vintage", icon: () => <span className="text-brown-700">📻</span>, description: "Nostalgic design with vintage elements." },
    { name: "Futuristic + Innovative", icon: () => <span className="text-blue-500">🚀</span>, description: "Cutting-edge design with modern technologies." },
    { name: "Artistic + Creative", icon: () => <span className="text-purple-500">🎭</span>, description: "Unique and creative design to showcase artistry." },
    { name: "Corporate + Formal", icon: () => <span className="text-black">🏢</span>, description: "Professional design suitable for corporate entities." },
    { name: "Playful + Whimsical", icon: () => <span className="text-pink-500">🎈</span>, description: "Fun and whimsical design to delight users." },
    { name: "Luxury + Premium", icon: () => <span className="text-yellow-800">💎</span>, description: "High-end design for luxury brands." },
    { name: "Dark Mode + Sleek", icon: () => <span className="text-black">🌑</span>, description: "Modern design with dark themes for a sleek look." }
];

// Updated website_types array with more types
const website_types = [
    { name: "Custom Website", icon: () => <span className="text-indigo-700">✨</span>, description: "Tailored solutions to meet unique business needs." },
    { name: "Blog", icon: () => <span className="text-deepTeal-700">📝</span>, description: "Focus on delivering content such as articles, blogs, or news." },
    { name: "Professional Business Website", icon: () => <span className="text-blue-700">🏢</span>, description: "Represent your business with a professional online presence." },
    { name: "Transactional/eCommerce websites", icon: () => <span className="text-green-500">🛒</span>, description: "Allow visitors to purchase products or services, and can be used to sell physical goods, digital products, or services." },
    { name: "Portfolio Website", icon: () => <span className="text-purple-500">🎨</span>, description: "Showcase your work and projects to potential clients." },
    { name: "Landing Page", icon: () => <span className="text-red-500">🚩</span>, description: "Single-page website focused on a specific marketing goal." },
    { name: "Non-Profit Organization Website", icon: () => <span className="text-teal-500">🤝</span>, description: "Promote your cause, engage with supporters, increase donations, and more." },
    { name: "Membership Website", icon: () => <span className="text-yellow-500">🔑</span>, description: "Offer exclusive content to registered members." },
    { name: "Portfolio websites", icon: () => <span className="text-blue-500">💬</span>, description: "Build a online portfolio or brochure website for your creative profession." },
    { name: "Event Website", icon: () => <span className="text-pink-500">🎉</span>, description: "Promote events and manage registrations." },
    { name: "Personal Website", icon: () => <span className="text-gray-700">👤</span>, description: "Share personal content and build a personal brand." },
    { name: "Informational websites", icon: () => <span className="text-orange-700">📂</span>, description: "Provide information and resources to visitors, and can be used to educate, entertain, or promote a cause." }
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
    const { control, handleSubmit, setValue, watch, getValues, formState: { errors } } = useForm<FormData>( {
        defaultValues: {
            name: "",
            email: "",
            style: "",
            website: "",
            message: "",
            dueDate: undefined,
            phone: "",
            communicationMethod: "",
            attachments: []
        }
    } );

    const [date, setDate] = React.useState<Date | undefined>( undefined );
    const fileInputRef = React.useRef<HTMLInputElement>( null );
    const [openPopover, setOpenPopover] = React.useState( false );

    // Get the current attachments from the form state
    const attachments = watch( "attachments" );

    // Calculate the date 2 months in the future
    const minDate = new Date();
    minDate.setMonth( minDate.getMonth() + 2 );

    // Handle date selection
    const handleDateSelect = ( selectedDate: Date | undefined ) => {
        if ( selectedDate && selectedDate >= minDate ) {
            setDate( selectedDate );
            setValue( "dueDate", selectedDate );
            setOpenPopover( false );
        }
    };

    // Handle file changes
    const handleFileChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        if ( event.target.files ) {
            const files = Array.from( event.target.files );
            setValue( "attachments", files );
        }
    };

    // Remove individual file
    const handleRemoveFile = ( index: number ) => {
        const currentFiles = getValues( "attachments" );
        const newFiles = currentFiles.filter( ( _, i ) => i !== index );
        setValue( "attachments", newFiles );
    };

    // Remove all files
    const handleRemoveAllFiles = () => {
        setValue( "attachments", [] );
    };

    const onSubmit = ( data: FormData ) => {
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
                        <Controller
                            name="phone"
                            control={control}
                            render={( { field } ) => (
                                <Input
                                    {...field}
                                    value={formatPhoneNumber( field.value )}
                                    onChange={( e ) => field.onChange( formatPhoneNumber( e.target.value ) )}
                                    placeholder="(123) 456-7890"
                                    className="mt-1"
                                />
                            )}
                        />
                        {errors.phone && <p className="text-sm text-red-500">{String( errors.phone?.message )}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Preferred Method of Communication Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">Preferred Method of Communication</label>
                            <Controller
                                name="communicationMethod"
                                control={control}
                                render={( { field } ) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
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

                        {/* Due Date Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">Estimated Due Date</label>
                            <Popover open={openPopover} onOpenChange={setOpenPopover}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "flex justify-start items-center text-left font-normal",
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

                    </div>



                    <div className="grid grid-cols-2 gap-4">
                        {/* Website Demand Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">Website Type</label>
                            <Controller
                                name="website"
                                control={control}
                                render={( { field } ) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a website type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {website_types.map( ( type, index ) => (
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
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
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
                            {attachments.length === 0 ? (
                                <Button
                                    variant="outline"
                                    className="w-full text-sm font-medium text-deepTeal-700 border-deepTeal-600 hover:bg-deepTeal-500 hover:text-softNeutral-50"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Choose File
                                </Button>
                            ) : (
                                <div>
                                    {attachments.map( ( file, index ) => (
                                        <div key={index} className="grid grid-rows-1 grid-cols-5 items-center gap-2 my-2">
                                            <span className="col-span-3">{file.name}</span>
                                            <Button
                                                variant="outline"
                                                className="cols-span-1"
                                                onClick={() => fileInputRef.current?.click()}
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
                        <Controller
                            name="message"
                            control={control}
                            render={( { field } ) => (
                                <Textarea
                                    {...field}
                                    id="message"
                                    rows={4}
                                    placeholder="Write your message here..."
                                />
                            )}
                        />
                        {errors.message && <p className="text-sm text-red-500">{String( errors.message?.message )}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </div>
        </section>
    );
}
