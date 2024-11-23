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
import { FormData } from "../../../types";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addDays } from "date-fns";

// Updated site_styles array with more styles
const site_styles = [
    { name: "Luxury + Premium", description: "High-end design for luxury brands." },
    { name: "Corporate + Formal", description: "Professional design suitable for corporate entities." },
    { name: "Professional + Elegant", description: "A clean and sleek look for a more refined aesthetic." },
    { name: "Classic + Modern", description: "A perfect blend of timeless elegance and contemporary style." },
    { name: "Dark Mode + Sleek", description: "Modern design with dark themes for a sleek look." },
    { name: "Minimalist + Clean", description: "Simplistic design focusing on essential elements." },
    { name: "Bold + Fierce", description: "Embrace boldness with a fierce and powerful design." },
    { name: "Futuristic + Innovative", description: "Cutting-edge design with modern technologies." },
    { name: "Vibrant + Dynamic", description: "Energetic and lively design to engage users." },
    { name: "Artistic + Creative", description: "Unique and creative design to showcase artistry." },
    { name: "Retro + Vintage", description: "Nostalgic design with vintage elements." },
    { name: "Playful + Whimsical", description: "Fun and whimsical design to delight users." },
    { name: "Rustic + Natural", description: "Earthy tones and textures for a natural feel." },
];

// Updated website_types array with more types
const website_types = [
    { name: "Blog", description: "Focus on delivering content such as articles, blogs, or news." },
    { name: "Landing Page", description: "Single-page website focused on a specific marketing goal." },
    { name: "Event Website", description: "Promote events and manage registrations." },
    { name: "Custom Website", description: "Tailored solutions to meet unique business needs." },
    { name: "Personal Website", description: "Share personal content and build a personal brand." },
    { name: "Portfolio Website", description: "Showcase your work and projects to potential clients." },
    { name: "Informational websites", description: "Provide information and resources to visitors, and can be used to educate, entertain, or promote a cause." },
    { name: "Membership Website", description: "Offer exclusive content to registered members." },
    { name: "Professional Business Website", description: "Represent your business with a professional online presence." },
    { name: "Non-Profit Organization Website", description: "Promote your cause, engage with supporters, increase donations, and more." },
    { name: "Transactional/eCommerce websites", description: "Allow visitors to purchase products or services, and can be used to sell physical goods, digital products, or services." },
];

const formatPhoneNumber = ( value: string ) => {
    const phoneNumber = value.replace( /\D/g, "" ); // Remove non-numeric characters
    const match = phoneNumber.match( /^(\d{0,3})(\d{0,3})(\d{0,4})$/ );

    if ( match ) {
        return `(${ match[1] }) ${ match[2] }-${ match[3] }`.trim();
    }

    return value;
};


const validationSchema: yup.ObjectSchema<FormData> = yup.object().shape( {
    name: yup.string().required( 'Name is required' ),
    email: yup.string().email( 'Invalid email' ).required( 'Email is required' ),
    style: yup.string().required( 'Please select a website style' ),
    website: yup.string().required( 'Please select a website type' ),
    message: yup.string().required( 'Message is required' ),
    dueDate: yup.string().required( 'Please select a due date' ),
    phone: yup.string().required( 'Phone number is required' ),
    communicationMethod: yup.string().required( 'Please select a communication method' ),
    discordUsername: yup.string().when( 'communicationMethod', ( value: any, schema: any ) => {
        const communicationMethod = value as string;
        if ( communicationMethod === 'discord' ) {
            return schema.required( 'Please enter your Discord username' );
        }
        return schema.notRequired();
    } ),
    attachments: yup.array().of( yup.mixed<File>().required() ).required(),
} );

export default function ContactForm() {
    const {
        control,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors },
    } = useForm<FormData>( {
        defaultValues: {
            name: '',
            email: '',
            style: '',
            website: '',
            message: '',
            dueDate: undefined,
            phone: '',
            communicationMethod: '',
            attachments: [],
            discordUsername: '',
        },
        resolver: yupResolver( validationSchema ),
    } );

    const [formattedDate, setFormattedDate] = React.useState<string>( '' );
    const [date, setDate] = React.useState<Date | undefined>( undefined );
    const fileInputRef = React.useRef<HTMLInputElement>( null );
    const [selectedFiles, setSelectedFiles] = React.useState<File[]>( [] );
    const [phone, setPhone] = React.useState( "" );
    const [openPopover, setOpenPopover] = React.useState( false );
    const [fileToChangeIndex, setFileToChangeIndex] = React.useState<number | null>( null );

    // Calculate the date 2 months in the future
    const minDate = new Date();
    minDate.setMonth( minDate.getMonth() + 2 );

    // Handle date selection
    const handleDateSelect = ( selectedDate: Date | undefined ) => {
        if ( selectedDate && selectedDate >= minDate ) {
            setDate( selectedDate );
            setFormattedDate( formattedDate );
            setValue( "dueDate", formattedDate );
            setOpenPopover( false );
        }
    };

    const handleFileChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        if ( event.target.files ) {
            const files = Array.from( event.target.files );

            const currentFiles = getValues( "attachments" ) ?? [];

            if ( fileToChangeIndex !== null && fileToChangeIndex >= 0 ) {
                // Replace the file at the specific index
                currentFiles[fileToChangeIndex] = files[0];
                setValue( "attachments", currentFiles );
            } else {
                // Add new files
                const newFiles = currentFiles.concat( files );
                setValue( "attachments", newFiles );
            }

            // Reset fileToChangeIndex
            setFileToChangeIndex( null );

            // Reset the file input value
            event.target.value = '';
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

    const handlePhoneChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const formattedPhone = formatPhoneNumber( e.target.value );
        if ( formattedPhone.replace( /\D/g, "" ).length <= 10 ) {
            setPhone( formattedPhone ); // Set formatted phone number in the state
        }
    };

    const onSubmit = ( data: FormData ) => {
        console.log( {
            title: "Form Submitted",
            description: data,
        } );
    };

    // Get the current attachments from the form state
    const attachments = watch( "attachments" );
    const communicationMethod = watch( 'communicationMethod' );

    return (
        <section className="bg-white py-16 px-16 relative w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-teal-600">
                    Bring Your Vision to Life
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Contact Us
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Ready to take the next step? Reach out to us today, and let’s turn
                    your ideas into reality.
                </p>
            </div>

            <div className="my-16 mx-auto max-w-2xl">
                <form onSubmit={handleSubmit( onSubmit )} className="space-y-8">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">
                            Name
                        </label>
                        <Controller
                            name="name"
                            control={control}
                            render={( { field } ) => (
                                <Input {...field} placeholder="John Doe" className="mt-1" />
                            )}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500">
                                {String( errors.name?.message )}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">
                                Email
                            </label>
                            <Controller
                                name="email"
                                control={control}
                                render={( { field } ) => (
                                    <Input
                                        {...field}
                                        placeholder="john.doe@example.com"
                                        className="mt-1"
                                    />
                                )}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {String( errors.email?.message )}
                                </p>
                            )}
                        </div>

                        {/* Phone Number Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">
                                Phone Number
                            </label>
                            <Input
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="(123) 456-7890"
                                className="mt-1"
                            />
                            {errors.phone && (
                                <p className="text-sm text-red-500">
                                    {String( errors.phone?.message )}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Preferred Method of Communication Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">
                                Preferred Method of Communication
                            </label>
                            <Controller
                                name="communicationMethod"
                                control={control}
                                render={( { field } ) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="phone">
                                                <span>Phone</span>
                                            </SelectItem>
                                            <SelectItem value="discord">
                                                <span>Discord</span>
                                            </SelectItem>
                                            <SelectItem value="email">
                                                <span>Email</span>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.communicationMethod && (
                                <p className="text-sm text-red-500">
                                    {String( errors.communicationMethod?.message )}
                                </p>
                            )}
                        </div>
                        {/* Discord Username Field */}
                        {communicationMethod === "discord" && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-deepTeal-700">
                                    Discord Username
                                </label>
                                <Controller
                                    name="discordUsername"
                                    control={control}
                                    render={( { field } ) => (
                                        <Input
                                            {...field}
                                            placeholder="@ Your Discord Username"
                                            className="mt-1"
                                            value={field.value || ""}
                                            onChange={( e ) => {
                                                let value = e.target.value;
                                                if ( !value.startsWith( "@" ) ) {
                                                    value = "@ " + value;
                                                }
                                                field.onChange( value );
                                            }}
                                        />
                                    )}
                                />
                                {errors.discordUsername && (
                                    <p className="text-sm text-red-500">
                                        {String( errors.discordUsername?.message )}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Due Date Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">
                            Estimated Due Date
                        </label>
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
                            <PopoverContent className="w-auto p-0 my-2 space-y-3">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={handleDateSelect}
                                    disabled={{ before: minDate }}
                                    initialFocus
                                />
                                <Select
                                    onValueChange={( value ) =>
                                        setDate( addDays( new Date(), parseInt( value ) ) )
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Preset" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="60">2 months</SelectItem>
                                        <SelectItem value="90">3 months</SelectItem>
                                        <SelectItem value="120">4 months</SelectItem>
                                        <SelectItem value="240">6 months</SelectItem>
                                    </SelectContent>
                                </Select>
                            </PopoverContent>
                        </Popover>
                        {errors.dueDate && (
                            <p className="text-sm text-red-500">
                                {String( errors.dueDate?.message )}
                            </p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Website Demand Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">
                                Website Type
                            </label>
                            <Controller
                                name="website"
                                control={control}
                                render={( { field } ) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a website type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {website_types.map( ( type, index ) => (
                                                <SelectItem key={index} value={type.name}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{type.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ) )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.website && (
                                <p className="text-sm text-red-500">
                                    {String( errors.website?.message )}
                                </p>
                            )}
                        </div>

                        {/* Website Style Field */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-deepTeal-700">
                                Website Style
                            </label>
                            <Controller
                                name="style"
                                control={control}
                                render={( { field } ) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a style" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {site_styles.map( ( style, index ) => (
                                                <SelectItem key={index} value={style.name}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{style.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ) )}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.style && (
                                <p className="text-sm text-red-500">
                                    {String( errors.style?.message )}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* File Upload Field */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-deepTeal-700">
                            Attachments (optional)
                        </label>
                        <div className="space-y-2">
                            <input
                                type="file"
                                ref={fileInputRef}
                                multiple={fileToChangeIndex === null}
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            {attachments?.length === 0 ? (
                                <Button
                                    variant="outline"
                                    className="w-full text-sm font-medium text-deepTeal-700 border-deepTeal-600 hover:bg-deepTeal-500 hover:text-softNeutral-50"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    Choose File
                                </Button>
                            ) : (
                                <div>
                                    {attachments?.map( ( file, index ) => (
                                        <div
                                            key={index}
                                            className="grid grid-rows-1 grid-cols-5 items-center gap-2 my-2"
                                        >
                                            <span className="col-span-3">{file.name}</span>
                                            <Button
                                                variant="outline"
                                                className="cols-span-1"
                                                onClick={() => {
                                                    setFileToChangeIndex( index );
                                                    fileInputRef.current?.click();
                                                }}
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
                                            onClick={() => {
                                                setFileToChangeIndex( null );
                                                fileInputRef.current?.click();
                                            }}
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
                        <label className="text-sm font-medium text-deepTeal-700">
                            Your Message
                        </label>
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
                        {errors.message && (
                            <p className="text-sm text-red-500">
                                {String( errors.message?.message )}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}
