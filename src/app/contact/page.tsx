"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn, decodeUrlSafeBase64, formatDate, formatPhoneNumber } from "@/lib/utils";
import { yupResolver } from '@hookform/resolvers/yup';
import { addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { FormData, PaymentPlan, Preset, Prices, Styles, Website } from "../../../types";
import { paymentPlans, presets, site_styles, website_types } from "../../../types/constants";
import { useTheme } from "next-themes";
import { HeaderImage } from "@/components/ui/header-image";
import { useEffect, useRef, useState } from "react";

const validationSchema: yup.ObjectSchema<FormData> = yup.object().shape( {
    name: yup.string().required( 'Name is required' ),
    email: yup.string().email( 'Invalid email' ).required( 'Email is required' ),
    style: yup.string(),
    payment: yup.string().required( 'Please select a payment plan' ),
    website: yup.string().required( 'Please select a website type' ),
    message: yup.string(),
    preset: yup.string(),
    dueDate: yup.date().required( 'Please select a due date' ),
    phone: yup.string().required( 'Phone number is required' ),
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

    const [prices, setPrices] = useState<Prices>( {
        website: {},
        payment: {},
        date: {},
        style: {},
        firstPayment: {},
        total: {},
    } );

    const fileInputRef = useRef<HTMLInputElement>( null );
    const [fileToChangeIndex, setFileToChangeIndex] = useState<number | null>( null );
    const [openPopover, setOpenPopover] = useState( false );
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';


    const [date, setDate] = useState<Date | undefined>( undefined );
    const [phone, setPhone] = useState( "" );
    const [mounted, setMounted] = useState( false );
    useEffect( () => setMounted( true ), [] );


    const handleDateSelect = ( selectedDate: Date | undefined ) => {
        const minDate = new Date();
        minDate.setMonth( minDate.getMonth() + 2 );

        if ( selectedDate && selectedDate >= minDate ) {
            setDate( selectedDate );
            const days = calculateDateDifference( new Date, selectedDate );
            const months = ( days / 30 ).toFixed( 2 );
            prices.date = { [`${ months } months`]: days };
            console.log( prices );
            setValue( "dueDate", selectedDate );
            setOpenPopover( false );
        }
    };

    const calculateDateDifference = ( date1: Date, date2: Date ) => {
        const utcDate1 = Date.UTC( date1.getFullYear(), date1.getMonth(), date1.getDate() );
        const utcDate2 = Date.UTC( date2.getFullYear(), date2.getMonth(), date2.getDate() );

        const differenceInMilliseconds = Math.abs( utcDate2 - utcDate1 );
        return differenceInMilliseconds / ( 1000 * 60 * 60 * 24 );
    };

    const handleFileChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        if ( event.target.files ) {
            const files = Array.from( event.target.files );
            const currentFiles = getValues( 'attachments' ) ?? [];

            if ( fileToChangeIndex !== null && fileToChangeIndex >= 0 ) {
                currentFiles[fileToChangeIndex] = files[0];
            } else {
                currentFiles.push( ...files );
            }

            setValue( 'attachments', currentFiles );
            setFileToChangeIndex( null );
            event.target.value = '';
        }
    };

    // Remove individual file
    const handleRemoveFile = ( index: number ) => {
        const currentFiles = getValues( 'attachments' ) ?? [];
        const newFiles = currentFiles.filter( ( _, i ) => i !== index );
        setValue( 'attachments', newFiles );
    };

    // Remove all files
    const handleRemoveAllFiles = () => {
        setValue( 'attachments', [] );
    };

    const handlePhoneChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const formattedPhone = formatPhoneNumber( e.target.value );
        if ( formattedPhone.replace( /\D/g, '' ).length <= 10 ) {
            setValue( 'phone', formattedPhone );
        }
    };

    const findItem = <T extends { name?: string; description?: string; }>(
        items: T[],
        key: string,
        value: string
    ): T | undefined => {
        return items.find( ( item ) => item[key as keyof T] === value );
    };

    const updatePrices = ( key: keyof Prices, data: object ) => {
        setPrices( ( prevPrices ) => ( {
            ...prevPrices,
            [key]: data,
        } ) );
        console.log( 'Prices:', prices );
    };

    const searchParams = useSearchParams();
    const paymentPlanParam = searchParams.get( 'paymentMethod' );
    const websiteTypeParam = searchParams.get( 'website' );

    const parsePrice = ( priceStr: string ): number => {
        const numericStr = priceStr.replace( /[^0-9.-]+/g, '' );
        return parseFloat( numericStr );
    };

    useEffect( () => {
        if ( paymentPlanParam && websiteTypeParam ) {
            const payment = decodeUrlSafeBase64( paymentPlanParam );
            const tier = decodeUrlSafeBase64( websiteTypeParam );

            const plan = findItem( paymentPlans, 'name', payment );
            const website = findItem( website_types, 'name', tier );

            if ( plan ) {
                setValue( 'payment', plan.name );
                updatePrices( 'payment', { name: plan.name, amount: plan.firstPayment } );
                const fee = prices.total.amount + plan.fee;
                console.log( "fee: ", fee );
                updatePrices( 'total', { amount: fee } );
            }

            if ( website ) {
                setValue( 'website', website.name );
                updatePrices( 'website', { name: website.name, price: website.startingPrice } );
                updatePrices( 'total', { amount: website.startingPrice } );
            }

            if ( website && plan ) {
                const percentage = plan.firstPayment / 100;
                const firstPayment = website.startingPrice * percentage;
                updatePrices( "firstPayment", { amount: firstPayment } );
            }

            console.log( 'Payment:', plan?.name );
            console.log( 'Website:', website?.name );
        }
    }, [paymentPlanParam, websiteTypeParam] );

    const onSubmit = ( data: FormData ) => {
        console.log( {
            title: 'Form Submitted',
            description: data,
        } );
    };

    // Get the current attachments from the form state
    const attachments = watch( "attachments" );
    const communicationMethod = watch( 'communicationMethod' );

    const findStyle = ( style: string ): Styles => {
        const styleIndex = site_styles.findIndex( styles => styles.name === style );
        const styles = site_styles[styleIndex];
        prices.style = { ["name"]: styles.name };
        console.log( prices );
        return site_styles[styleIndex];
    };

    const findPreset = ( preset: string ): Preset => {
        const presetIndex = presets.findIndex( p => p.description === preset );
        const months = presets[presetIndex];
        prices.date = { [months.description]: parseInt( removeLetters( months.value ) ) };
        console.log( prices );
        return presets[presetIndex];
    };

    function removeLetters( value: string ) {
        return value.replace( /[^0-9]/g, "" );
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
                <h2 className="mt-4 text-lg text-softNeutral-600 dark:text-softNeutral-200">
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
                            <p className="mt-1 text-sm text-softNeutral-600 dark:text-softNeutral-200">
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
                            <p className="mt-1 text-sm text-softNeutral-600 dark:text-softNeutral-200">
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
                                                type="button"
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
                                                disabled={{ before: new Date( new Date().setMonth( ( new Date() ).getMonth() + 2 ) ) }}
                                                initialFocus
                                            />
                                            <Controller
                                                name="preset"
                                                control={control}
                                                render={( { field } ) => (
                                                    <Select
                                                        onValueChange={( value ) => {
                                                            const days = removeLetters( value );
                                                            setDate( addDays( new Date(), parseInt( days ) ) );
                                                            const months = parseInt( days ) / 30;
                                                            field.onChange( `${ months } months` );
                                                            findPreset( `${ months } months` );
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
                                                onValueChange={( newValue ) => {
                                                    field.onChange( newValue );

                                                    const plan = findItem( paymentPlans, 'name', newValue );

                                                    if ( plan ) {
                                                        console.log( plan );
                                                        updatePrices( 'payment', {
                                                            name: plan.name,
                                                            amount: plan.firstPayment
                                                        } );

                                                        // Calculate the new total amount
                                                        const newTotalAmount = prices.website.price + plan.fee;

                                                        // Update prices.total.amount
                                                        updatePrices( 'total', { amount: newTotalAmount } );

                                                        const percentage = plan.firstPayment / 100;
                                                        const firstPayment = percentage * newTotalAmount;
                                                        updatePrices( 'firstPayment', { amount: firstPayment } );
                                                        console.log( prices );
                                                    }
                                                }}
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
                                                onValueChange={( newValue ) => {
                                                    // Update the form field value
                                                    field.onChange( newValue );

                                                    // Find the selected website type
                                                    const website = findItem( website_types, 'name', newValue );

                                                    // Update the prices state
                                                    if ( website ) {
                                                        updatePrices( 'website', {
                                                            name: website.name,
                                                            price: website.startingPrice,
                                                        } );
                                                        updatePrices( 'total', { amount: website.startingPrice } );

                                                        const percentage = prices.payment.amount / 100;
                                                        const firstPayment = percentage * website.startingPrice;
                                                        updatePrices( 'firstPayment', { amount: firstPayment } );
                                                    }
                                                }}
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
                                                onValueChange={( newValue ) => {
                                                    field.onChange( newValue );
                                                    findStyle( newValue );
                                                }}
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
                            <p className="mt-1 text-sm text-softNeutral-600 dark:text-softNeutral-200">
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
                        </div>
                    </div>

                    {/* Section 4: Estimated Payments */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-5">
                        <div className="md:col-span-1">
                            <h3>
                                Estimated Payments
                            </h3>
                            <p className="mt-1 text-sm text-softNeutral-600 dark:text-softNeutral-200">
                                Review the estimated payments based on your selected website type, payment plan, and due dates.
                            </p>
                            <p className="font-bold mt-5 text-sm text-softNeutral-600 dark:text-softNeutral-200">
                                Note: This is only the estimated cost. You will be sent the actual quoted amount to your email address within 3-5 business days.
                            </p>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            {/* Payment Summary */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                    Payment Breakdown
                                </label>
                                <div className="border border-softNeutral-300 dark:border-softNeutral-700 rounded-lg p-4">
                                    <ul className="space-y-3">
                                        {/* {calculatedPayments.map((payment, index) => (
                        <li key={index} className="flex justify-between">
                            <div>
                                <span className="font-medium text-deepTeal-600 dark:text-deepBlue-400">
                                    {payment.label}
                                </span>
                                <p className="text-sm text-softNeutral-600 dark:text-softNeutral-400">
                                    Due: {payment.dueDate}
                                </p>
                            </div>
                            <p className="font-semibold text-softNeutral-900 dark:text-softNeutral-50">
                                ${payment.amount.toFixed(2)}
                            </p>
                        </li>
                    ))} */}
                                    </ul>
                                </div>
                            </div>

                            {/* Fees Information */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                    Additional Fees
                                </label>
                                <div className="text-sm text-softNeutral-600 dark:text-softNeutral-400">
                                    <p>
                                        Any applicable fees are calculated based on your payment plan and due dates. Please ensure timely payments to avoid late charges.
                                    </p>
                                </div>
                            </div>

                            {/* Total Payment */}
                            <div className="flex justify-between items-center border-t border-softNeutral-300 dark:border-softNeutral-700 pt-4">
                                <h4 className="text-lg font-medium text-deepTeal-700 dark:text-deepBlue-400">
                                    Total Estimated Cost
                                </h4>
                                <p className="text-xl font-semibold text-softNeutral-900 dark:text-softNeutral-50">
                                    {/* ${totalCost.toFixed(2)} */}
                                </p>
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