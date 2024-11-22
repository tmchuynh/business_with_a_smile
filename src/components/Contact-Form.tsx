"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn, formatDate } from "@/lib/utils";

// Define the site_styles array for the dropdown options
const site_styles = [
    {
        name: "Professional + Elegant",
        icon: () => <span className="text-deepTeal-700">🖤</span>,
        description: "A clean and sleek look for a more refined aesthetic."
    },
    {
        name: "Bold + Fierce",
        icon: () => <span className="text-red-700">🔥</span>,
        description: "Embrace boldness with a fierce and powerful design."
    },
    {
        name: "Classic + Modern",
        icon: () => <span className="text-indigo-700">🎨</span>,
        description: "A perfect blend of timeless elegance and contemporary style."
    },
    {
        name: "Colorful + Friendly",
        icon: () => <span className="text-yellow-500">🌈</span>,
        description: "Vibrant and welcoming, ideal for a joyful atmosphere."
    },
    {
        name: "Monotone + Welcoming",
        icon: () => <span className="text-gray-700">⚪</span>,
        description: "A minimalist approach with a welcoming, neutral tone."
    },
];

const website_demand = [
    {
        name: "Content-Based Website",
        icon: () => <span className="text-deepTeal-700">🖤</span>,
        description: "A clean and sleek look for a more refined aesthetic."
    },
    {
        name: "Professional Business Website",
        icon: () => <span className="text-red-700">🔥</span>,
        description: "Embrace boldness with a fierce and powerful design."
    },
    {
        name: "Custom Website",
        icon: () => <span className="text-indigo-700">🎨</span>,
        description: "A perfect blend of timeless elegance and contemporary style."
    },
];

// Define the schema for the form using zod
const FormSchema = z.object( {
    name: z
        .string()
        .min( 2, { message: "Full name must be at least 2 characters." } )
        .max( 100, { message: "Full name cannot exceed 100 characters." } ),

    email: z
        .string()
        .email( { message: "Please enter a valid email address." } )
        .min( 5, { message: "Email address must be at least 5 characters." } ),

    style: z
        .string(),

    website: z
        .string(),

    dueDate: z
        .string(),

    demand: z
        .string(),

    message: z
        .string()
        .min( 10, { message: "Message must be at least 10 characters." } )
        .max( 1000, { message: "Message cannot exceed 1000 characters." } ),
} );

export default function ContactForm() {

    const [date, setDate] = React.useState<Date>();


    // 1. Define the form using `useForm` hook
    const form = useForm<z.infer<typeof FormSchema>>( {
        resolver: zodResolver( FormSchema ),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            website: "",
            dueDate: "",
            style: "",
        },
    } );

    // 2. Define a submit handler
    function onSubmit( data: z.infer<typeof FormSchema> ) {
        toast( {
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify( data, null, 2 )}</code>
                </pre>
            ),
        } );
    }

    return (
        <section className="bg-white py-16 px-16 relative isolate w-11/12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-base font-semibold text-teal-600">Bring Your Vision to Life</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    Contact Us
                </p>
                <p className="mt-4 text-lg text-gray-600">
                    Ready to take the next step? Reach out to us today, and let’s turn your ideas into reality. Whether you’re looking for a fresh website design, expert advice, or innovative solutions, we’re here to help you succeed.
                </p>
            </div>
            <div className="my-16 mx-auto max-w-2xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-8">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>This is your public display name.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormDescription>Your contact email.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Website Demand Field */}
                        <FormField
                            control={form.control}
                            name="website"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a website" />
                                            </SelectTrigger>
                                        </FormControl>
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
                                    <FormDescription>Select the website type you're interested in.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Due Date Field */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Estimated Due Date</FormLabel>
                                    <FormControl>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? formatDate( date ) : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormControl>
                                    <FormDescription>Select the estimated due date for the project.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Website Style Field */}
                        <FormField
                            control={form.control}
                            name="style"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Website Style</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a style" />
                                            </SelectTrigger>
                                        </FormControl>
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
                                    <FormDescription>Select the style that best suits your business.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Message Field */}
                        <FormField
                            name="message"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Your Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="message"
                                            rows={4}
                                            placeholder="Write your message here..."
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
}
