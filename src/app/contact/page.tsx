"use client";

export const dynamic = "force-dynamic";

import { PricingDetails } from "@/components/Price-Details";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { HeaderImage } from "@/components/ui/header-image";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { cn, decodeUrlSafeBase64, formatCurrency, formatDate, formatPhoneNumber } from "@/lib/utils";
import { yupResolver } from '@hookform/resolvers/yup';
import { addDays, setDate } from "date-fns";
import { CalendarIcon, CheckCheck, CircleAlert, Info, Loader, OctagonAlert } from "lucide-react";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from 'yup';
import { FormData, PaymentPlan, Preset, Prices, Styles, Website } from "../../../types";
import { paymentPlans, presets, site_styles, website_types } from "../../../types/constants";

const validationSchema: yup.ObjectSchema<FormData> = yup.object().shape( {
    name: yup.string().required( 'Name is required' ),
    email: yup.string().email( 'Invalid email' ).required( 'Email is required' ),
    style: yup.string(),
    payment: yup.string().required( 'Please select a payment plan' ),
    website: yup.string().required( 'Please select a website type' ),
    message: yup.string(),
    preset: yup.string(),
    dueDate: yup.date().required( 'Please select a due date' ),
    phone: yup
        .string()
        .required( 'Phone number is required' )
        .test(
            'valid-phone',
            'Please enter a valid phone number',
            ( value ) => {
                const digits = value ? value.replace( /\D/g, '' ) : '';
                return digits.length === 10;
            }
        ),

    communicationMethod: yup
        .string()
        .required( 'Please select a communication method' ),
    discordUsername: yup.string().when( 'communicationMethod', ( communicationMethod, schema ) => {
        if ( communicationMethod && communicationMethod.toString().toLowerCase() === 'discord' ) {
            return schema.required( 'Please enter your Discord username' );
        }
        return schema.nullable();
    } ),
    attachments: yup.array().of( yup.mixed<File>().required() ),
} );


export default function ContactForm() {
    const searchParams = useSearchParams();
    const paymentPlan = searchParams.get( "paymentMethod" );
    const websiteType = searchParams.get( "website" );

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
        website: { name: '', startingPrice: 0 },
        payment: { name: '', discountedPrice: 0, fee: 0, discount: 0, firstPayment: 0 },
        date: { months: '', days: 0, date: formatDate( new Date() ) },
        style: { name: '' },
        firstPayment: { amount: 0 },
        total: { amount: 0 },
    } );

    const fileInputRef = useRef<HTMLInputElement>( null );
    const [fileToChangeIndex, setFileToChangeIndex] = useState<number | null>( null );
    const [openPopover, setOpenPopover] = useState( false );
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const [date, setDate] = useState<Date | undefined>( undefined );
    const [dialogOpen, setDialogOpen] = useState( false );
    const [selectedMonth, setSelectedMonth] = useState<Date | null>( null );
    const [mounted, setMounted] = useState( false );

    useEffect( () => {
        setMounted( true );
        console.log( prices );
    }, [] );

    useEffect( () => {
        if ( paymentPlan && websiteType ) {
            const payment = decodeUrlSafeBase64( paymentPlan );
            const tier = decodeUrlSafeBase64( websiteType );

            findPaymentPlan( payment );
            findWebsite( tier );
        }
    }, [paymentPlan, websiteType] );

    useEffect( () => {
        const phoneValue = getValues( 'phone' );
        if ( phoneValue ) {
            setValue( 'phone', phoneValue );
        }
    }, [watch( 'phone' )] );

    const showErrorsAsToasts = () => {
        let delay = 0;
        console.log( errors );
        const icons = {
            success: <CheckCheck className="pr-2 h-7 w-7" />,
            info: <Info className="pr-2 h-7 w-7" />,
            warning: <CircleAlert className="pr-2 h-7 w-7" />,
            error: <OctagonAlert className="pr-2 h-7 w-7" />,
            loading: <Loader className="pr-2 h-7 w-7" />,
        };
        for ( const [key, value] of Object.entries( errors ) ) {
            setTimeout( () => {
                toast( value.message, {
                    icon: icons.error
                } );
            }, delay );
            delay += 1000;
        }
    };

    const handleDateSelect = ( selectedDate: Date | undefined ) => {
        const minDate = new Date();
        minDate.setMonth( minDate.getMonth() + 2 );

        if ( selectedDate && selectedDate >= minDate ) {
            setDate( selectedDate );
            setSelectedMonth( new Date( selectedDate.getFullYear(), selectedDate.getMonth(), 1 ) );
            const days = calculateDateDifference( new Date, selectedDate );
            const months = ( days / 30 ).toFixed( 2 );

            const date = new Date();
            const monthsAmount = parseInt( removeLetters( months ) );
            date.setMonth( date.getMonth() + monthsAmount );

            setPrices( ( prevPrices ) => ( {
                ...prevPrices,
                date: {
                    months: `${ months } months`,
                    days: days,
                    date: formatDate( selectedDate ),
                }
            } ) );
            prices.date = { ['months']: `${ months } months`, ['days']: days, ['date']: formatDate( selectedDate ) };
            setValue( "dueDate", selectedDate );
            updateTotal();
            console.log( prices );
            setOpenPopover( false );
        }
    };


    const findPreset = ( preset: string ): Preset | null => {
        const presetTime = presets.find( p => p.description === preset );
        if ( presetTime ) {
            const date = new Date();
            const monthsAmount = parseInt( removeLetters( presetTime.description ) );
            date.setMonth( date.getMonth() + monthsAmount );

            const daysAmount = Math.trunc( monthsAmount / 30 );

            const newDate = addDays( new Date(), daysAmount );
            setDate( newDate );
            setSelectedMonth( new Date( newDate.getFullYear(), newDate.getMonth(), 1 ) );

            setPrices( ( prevPrices ) => ( {
                ...prevPrices,
                date: {
                    months: presetTime.description,
                    days: parseInt( removeLetters( presetTime.value ) ),
                    date: formatDate( date ),
                }
            } ) );

            prices.date = { ['months']: `${ monthsAmount } months`, ['days']: parseInt( removeLetters( presetTime.value ) ), ['date']: formatDate( date ) };

            setValue( "dueDate", date );
            updateTotal();
            console.log( prices );
            return presetTime;
        }
        return null;
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

    const formatPhoneNumber = ( value: string ) => {
        if ( !value ) return value;

        // Remove all non-digit characters
        const phoneNumber = value.replace( /\D/g, '' );

        // Limit to 10 digits
        const phoneNumberLength = phoneNumber.length;
        if ( phoneNumberLength < 4 ) return phoneNumber;
        if ( phoneNumberLength < 7 ) {
            return `(${ phoneNumber.slice( 0, 3 ) }) ${ phoneNumber.slice( 3 ) }`;
        }
        return `(${ phoneNumber.slice( 0, 3 ) }) ${ phoneNumber.slice(
            3,
            6
        ) }-${ phoneNumber.slice( 6, 10 ) }`;
    };

    const updateTotal = () => {
        let totalPayment = prices.website.startingPrice;
        const dateDays = prices.date.days;
        let fee = prices.payment.fee;
        let discountedPrice = totalPayment;

        const discountPercent = prices.payment.discount;
        const startingPrice = prices.website.startingPrice;
        const firstPaymentPercentage = prices.payment.firstPayment;
        let firstPayment = startingPrice;


        if ( dateDays > 45 && dateDays < 90 ) {
            fee += 10;
        } else if ( dateDays <= 45 ) {
            fee += 50;
        }

        totalPayment += fee;

        if ( discountPercent !== 0 ) {
            const percentage = discountPercent / 100;
            const discountedPrice = totalPayment - ( totalPayment * percentage );
            totalPayment = discountedPrice;
        }
        prices.total = { ["amount"]: totalPayment };

        if ( firstPaymentPercentage !== 100 ) {
            firstPayment = totalPayment - ( firstPaymentPercentage / 100 );
        } else {
            firstPayment = totalPayment;
        }
        prices.firstPayment = { ["amount"]: firstPayment };

        setPrices( ( prevPrices ) => ( {
            ...prevPrices,
            total: { ["amount"]: totalPayment },
            payment: {
                name: prevPrices.payment.name,
                firstPayment: prevPrices.payment.firstPayment,
                fee: prevPrices.payment.fee,
                discount: prevPrices.payment.discount,
                discountedPrice: discountedPrice
            },
            firstPayment: { ["amount"]: firstPayment },
        } ) );

        console.log( prices );
    };

    const findPaymentPlan = ( plan: string ): PaymentPlan | null => {
        const payment = paymentPlans.find( p => p.name === plan );
        if ( payment ) {
            setPrices( ( prevPrices ) => ( {
                ...prevPrices,
                payment: {
                    name: payment.name,
                    firstPayment: payment.firstPayment,
                    fee: payment.fee,
                    discount: payment.discounts,
                },
                total: { ["amount"]: prices.website.startingPrice + payment.fee }
            } ) );
            setValue( "payment", payment.name );
            prices.payment = { ["name"]: payment.name, ["firstPayment"]: payment.firstPayment, ["fee"]: payment.fee, ["discount"]: payment.discounts };
            updateTotal();
            return payment;
        }

        return null;
    };

    const findWebsite = ( website: string ): Website | null => {
        const site = website_types.find( site => site.name === website );
        if ( site ) {
            setValue( "website", site.name );
            setPrices( ( prevPrices ) => ( {
                ...prevPrices,
                website: {
                    name: site.name,
                    startingPrice: site.startingPrice,
                },
            } ) );
            prices.website = { ["name"]: site.name, ["startingPrice"]: site.startingPrice };
            prices.total = { ["amount"]: site.startingPrice };
            updateTotal();
            return site;
        }
        return null;
    };


    const onSubmit = ( data: FormData ) => {
        console.log( {
            title: 'Form Submitted',
            description: data,
        } );
        showErrorsAsToasts();
        setDialogOpen( true );
        setPrices( ( prevPrices ) => ( {
            ...prevPrices,
            website: {
                name: '',
                startingPrice: 0,
            },
            payment: {
                name: '',
                firstPayment: 0,
                fee: 0,
                discount: 0,
            },
            date: {
                months: '',
                days: 0,
                date: formatDate( new Date() ),
            },
            style: {
                name: '',
            },
            firstPayment: {
                amount: 0,
            },
            total: { amount: 0 },
        } ) );
        prices.website = { ["name"]: '', ["startingPrice"]: 0 };
        prices.payment = { ["name"]: '', ["firstPayment"]: 0, ["fee"]: 0, ["discount"]: 0 };
        prices.date = { ["months"]: '', ["days"]: 0, ["date"]: formatDate( new Date() ) };
        prices.style = { ["name"]: '' };
        prices.firstPayment = { ["amount"]: 0 };
        prices.total = { ["amount"]: 0 };
        setDate( new Date() );
        setSelectedMonth( new Date() );
        setValue( "name", '' );
        setValue( 'email', '' );
        setValue( 'phone', '' );
        setValue( 'style', '' );
        setValue( 'payment', '' );
        setValue( 'website', '' );
        setValue( 'message', '' );
        setValue( 'preset', '' );
        setValue( 'dueDate', new Date() );
        setValue( 'communicationMethod', '' );
        setValue( 'attachments', [] );
        setValue( 'discordUsername', '' );
    };

    // Get the current attachments from the form state
    const attachments = watch( "attachments" );
    const communicationMethod = watch( 'communicationMethod' );
    console.log( 'Communication Method:', communicationMethod );

    const findStyle = ( style: string ): Styles => {
        const styleIndex = site_styles.findIndex( styles => styles.name === style );
        const styles = site_styles[styleIndex];
        setPrices( ( prevPrices ) => ( {
            ...prevPrices,
            style: {
                name: styles.name,
            }
        } ) );
        return site_styles[styleIndex];
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
                    onSubmit={handleSubmit( onSubmit, showErrorsAsToasts )}
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
                                </div>

                                {/* Phone Number Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                        Phone Number
                                    </label>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        render={( { field } ) => (
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder="Phone Number"
                                                autoComplete="tel"
                                                onChange={( e ) => {
                                                    const inputVal = e.target.value;
                                                    const formattedPhone = formatPhoneNumber( inputVal );

                                                    // Update only if digits are less than or equal to 10
                                                    const digits = inputVal.replace( /\D/g, '' );
                                                    if ( digits.length <= 10 ) {
                                                        field.onChange( formattedPhone );
                                                    }
                                                }}
                                            />
                                        )}
                                    />

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
                                                onValueChange={( newValue ) => {
                                                    field.onChange( newValue );
                                                }}
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
                                </div>

                                {/* Chosen Payment Plan Field */}
                                <div className="space-y-2 payment-selector">
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
                                                    findPaymentPlan( newValue );
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
                                </div>
                            </div>

                            {/* Website Type and Website Style Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 website-selector">
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
                                                    findWebsite( newValue );
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
                        </div>
                        <div className="md:col-span-2 space-y-6">
                            {/* Payment Summary */}
                            <div className="space-y-2">
                                <div className="border border-softNeutral-300 dark:border-softNeutral-700 rounded-lg p-4">
                                    <PricingDetails prices={prices} />
                                </div>
                            </div>

                            {/* Fees Information */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium font-sans text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                    Additional Fees
                                </label>
                                <div className="text-sm text-softNeutral-600 dark:text-softNeutral-400">
                                    <p>
                                        Applicable fees, if any, will be calculated based on the selected payment plan and due dates. Kindly adhere to the payment schedule to avoid potential late fees or additional charges.
                                    </p>
                                </div>
                            </div>

                            {/* Disclaimer Information */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium font-sans text-deepTeal-700 dark:text-deepBlue-400 md:tracking-widest">
                                    Disclaimer
                                </label>
                                <div className="text-sm text-softNeutral-600 dark:text-softNeutral-400">
                                    <p>
                                        Please note that the displayed cost is an estimate. A detailed and finalized quote will be sent to your provided email address within 3–5 business days.
                                    </p>
                                </div>
                            </div>

                            {mounted && (
                                <Button
                                    variant={isDarkMode ? "secondary" : "default"}
                                    type="submit"
                                    className="justify-self-start w-full md:w-auto"
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                </form>

                {/* Toaster */}
                <Toaster position="top-right" richColors variant="error" />

                {/* Alert Dialog */}
                <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Form Submitted Successfully</AlertDialogTitle>
                            <AlertDialogDescription>
                                Thank you! Your form has been successfully submitted. We’ll get back to
                                you shortly.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            {mounted && (
                                <Button
                                    variant={isDarkMode ? "secondary" : "default"}
                                    onClick={() => setDialogOpen( false )}>
                                    Close
                                </Button>
                            )}
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </section>
    );
}