"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn, decodeUrlSafeBase64, formatDate, formatPhoneNumber, phoneRegExp } from "@/lib/utils";
import { yupResolver } from '@hookform/resolvers/yup';
import { addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { FormData } from "../../../types";
import { paymentPlans, presets, site_styles, website_types } from "../../../types/constants";
import { useTheme } from "next-themes";
import { HeaderImage } from "@/components/ui/header-image";

const validationSchema: yup.ObjectSchema<FormData> = yup.object().shape( {
    name: yup.string().required( 'Name is required' ),
    email: yup.string().email( 'Invalid email' ).required( 'Email is required' ),
    style: yup.string(),
    payment: yup.string().required( 'Please select a payment plan' ),
    website: yup.string().required( 'Please select a website type' ),
    message: yup.string(),
    preset: yup.string(),
    dueDate: yup.string().required( 'Please select a due date' ),
    phone: yup.string().matches( phoneRegExp, 'Phone number is not valid' ).required( 'Phone number is required' ),
    communicationMethod: yup.string().required( 'Please select a communication method' ),
    discordUsername: yup.string().when( 'communicationMethod', ( value: any, schema: any ) => {
        const communicationMethod = value as string;
        if ( communicationMethod === 'Discord' ) {
            return schema.required( 'Please enter your Discord username' );
        }
        return schema.notRequired();
    } ),
    attachments: yup.array().of( yup.mixed<File>().required() ),
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
            payment: '',
            website: '',
            message: '',
            preset: '',
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

    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState( false );
    React.useEffect( () => {
        setMounted( true );
    }, [] );

    const isDarkMode = theme === 'dark';

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

    const searchParams = useSearchParams();
    const paymentPlan = searchParams.get( "paymentMethod" );
    const websiteType = searchParams.get( "website" );

    // Only decode if the value exists
    let payment: string | null = null;
    let tier: string | null = null;

    if ( paymentPlan ) {
        payment = decodeUrlSafeBase64( paymentPlan );
    }

    if ( websiteType ) {
        tier = decodeUrlSafeBase64( websiteType );
    }

    if ( payment && tier ) {
        const paymentIndex = paymentPlans.findIndex( plan => plan.name === payment );
        const websiteIndex = website_types.findIndex( site => site.name == tier );
        const plan = paymentPlans[paymentIndex];
        const website = website_types[websiteIndex];
        setValue( "payment", plan.name );
        setValue( "website", website.name );
    }

    return (
        <section className="pb-16 relative">
            <HeaderImage url={'/images/mountain.jpg'} />
            <div className="text-center mb-12">
                <h6>
                    Bring Your Vision to Life
                </h6>
                <h1>
                    Contact Us
                </h1>
                <h2>
                    Ready to take the next step? Reach out to us today, and let’s turn
                    your ideas into reality.
                </h2>
            </div>

            <div className="my-16 mx-auto px-4 md:px-16 w-11/12">
                <form
                    onSubmit={handleSubmit( onSubmit )}
                    className="space-y-12 divide-y"
                >
                    {/* Section 1: Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="md:col-span-1">
                            <h3>
                                Personal Information
                            </h3>
                            <p>
                                Tell us about yourself and how to reach you.
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                    Name
                                </label>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={( { field } ) => (
                                        <Input
                                            {...field}
                                            placeholder="John Doe"
                                            className="mt-1"
                                        />
                                    )}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email and Phone Number Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
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
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Number Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
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
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Preferred Method of Communication and Discord Username */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Preferred Method of Communication Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Preferred Method of Communication
                                    </label>
                                    <Controller
                                        name="communicationMethod"
                                        control={control}
                                        render={( { field } ) => (
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a method" >
                                                        {field.value || "Select a method"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Phone">
                                                        <span className="mt-1 text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                            Phone
                                                        </span>
                                                    </SelectItem>
                                                    <SelectItem value="Discord">
                                                        <span className="mt-1 text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                            Discord
                                                        </span>
                                                    </SelectItem>
                                                    <SelectItem value="Email">
                                                        <span className="mt-1 text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                            Email
                                                        </span>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.communicationMethod && (
                                        <p className="text-sm text-red-500">
                                            {errors.communicationMethod.message}
                                        </p>
                                    )}
                                </div>

                                {/* Discord Username Field */}
                                {communicationMethod === "Discord" && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                            Discord Username
                                        </label>
                                        <Controller
                                            name="discordUsername"
                                            control={control}
                                            render={( { field } ) => (
                                                <Input
                                                    {...field}
                                                    placeholder="@YourDiscordUsername"
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
                                                {errors.discordUsername.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-5">
                        <div className="md:col-span-1">
                            <h3>
                                Project Details
                            </h3>
                            <p>
                                Let us know more about your project requirements.
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            {/* Estimated Due Date and Chosen Payment Plan */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                                {/* Estimated Due Date Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Estimated Due Date
                                    </label>
                                    <Popover open={openPopover} onOpenChange={setOpenPopover}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "flex justify-start items-center text-left font-normal py-3",
                                                    !date && "text-muted-foreground"
                                                )}
                                                aria-label="Select a date"
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? formatDate( date ) : "Pick a date"}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 my-2 space-y-3 border-none">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={handleDateSelect}
                                                disabled={{ before: minDate }}
                                                initialFocus
                                            />
                                            <Controller
                                                name="preset"
                                                control={control}
                                                render={( { field } ) => (
                                                    <Select
                                                        onValueChange={( value ) => {
                                                            const days = value.replace( /[a-zA-Z\s]/g, "" ).trim();
                                                            setDate( addDays( new Date(), parseInt( days ) ) );
                                                            const months = parseInt( days ) / 30;
                                                            field.onChange( `${ months } months` );
                                                        }}
                                                        value={field.value}
                                                    >
                                                        <SelectTrigger className="dark:text-softNeutral-50">
                                                            <SelectValue placeholder="Select a Preset" >
                                                                {field.value || "Select a Preset"}
                                                            </SelectValue>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {presets.map( ( length, index ) => (
                                                                <SelectItem
                                                                    key={`${ length } days_${ index }`}
                                                                    value={length.value}
                                                                >
                                                                    {length.description}
                                                                </SelectItem>
                                                            ) )}
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    {errors.dueDate && (
                                        <p className="text-sm text-red-500">
                                            {errors.dueDate.message}
                                        </p>
                                    )}
                                </div>

                                {/* Chosen Payment Plan Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Chosen Payment Plan
                                    </label>
                                    <Controller
                                        name="payment"
                                        control={control}
                                        render={( { field } ) => (
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a payment plan">
                                                        {field.value || "Select a payment plan"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {paymentPlans.map( ( plan, index ) => (
                                                        <SelectItem
                                                            key={`${ plan.name }_${ index }`}
                                                            value={plan.name}
                                                        >
                                                            <div className="block pr-6">
                                                                <p className="text-md text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                                    {plan.name}
                                                                </p>
                                                                <p className="text-sm dark:text-softNeutral-200">{plan.description}</p>
                                                            </div>
                                                        </SelectItem>
                                                    ) )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />

                                    {errors.payment && (
                                        <p className="text-sm text-red-500">
                                            {errors.payment.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Website Type and Website Style Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Website Type Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Website Type
                                    </label>
                                    <Controller
                                        name="website"
                                        control={control}
                                        render={( { field } ) => (
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a website type">
                                                        {field.value || "Select a website type"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {website_types.map( ( type, index ) => (
                                                        <SelectItem
                                                            key={`${ type.name }_${ index }`}
                                                            value={type.name}
                                                        >
                                                            <div className="block pr-6">
                                                                <p className="text-md text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                                    {type.name}
                                                                </p>
                                                                <p className="text-sm dark:text-softNeutral-200">{type.description}</p>
                                                            </div>
                                                        </SelectItem>
                                                    ) )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.website && (
                                        <p className="text-sm text-red-500">
                                            {errors.website.message}
                                        </p>
                                    )}
                                </div>

                                {/* Website Style Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Website Style
                                    </label>
                                    <Controller
                                        name="style"
                                        control={control}
                                        render={( { field } ) => (
                                            <Select
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a style">
                                                        {field.value || "Select a style"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {site_styles.map( ( style, index ) => (
                                                        <SelectItem
                                                            key={`${ style.name }_${ index }`}
                                                            value={style.name}
                                                        >
                                                            <div className="block pr-6">
                                                                <p className="text-md text-deepTeal-500 dark:text-deepBlue-400 font-bold">
                                                                    {style.name}
                                                                </p>
                                                                <p className="text-sm dark:text-softNeutral-200">{style.description}</p>
                                                            </div>
                                                        </SelectItem>
                                                    ) )}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    {errors.style && (
                                        <p className="text-sm text-red-500">
                                            {errors.style.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-5">
                        <div className="md:col-span-1">
                            <h3>
                                Additional Information
                            </h3>
                            <p>
                                Any additional details or files you'd like to share.
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            {/* Attachments */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
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
                                        <>
                                            {mounted && (
                                                <Button
                                                    variant={isDarkMode ? "outline" : "default"}
                                                    onClick={() => fileInputRef.current?.click()}
                                                >
                                                    Choose File
                                                </Button>
                                            )}
                                        </>
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
                                <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
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
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>
                            {mounted && (
                                <Button
                                    variant={isDarkMode ? "secondary" : "default"}
                                    type="submit"
                                    className="justify-self-end w-full md:w-auto"
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}