import { clsx, type ClassValue } from "clsx";
import { format } from 'date-fns';
import { twMerge } from "tailwind-merge";

export function cn( ...inputs: ClassValue[] ) {
    return twMerge( clsx( inputs ) );
}

export function formatDate( date: Date | undefined ): string {
    if ( !date ) return 'Pick a date'; // fallback message if no date is provided
    return format( date, 'MMMM dd, yyyy' ); // e.g., October 15, 2024
}

export const formatPhoneNumber = ( value: string ) => {
    const phoneNumber = value.replace( /\D/g, "" ); // Remove non-numeric characters
    const match = phoneNumber.match( /^(\d{0,3})(\d{0,3})(\d{0,4})$/ );

    if ( match ) {
        return `(${ match[1] }) ${ match[2] }-${ match[3] }`.trim();
    }

    return value;
};

export function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}