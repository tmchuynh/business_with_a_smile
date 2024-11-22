import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from 'date-fns';

export function cn( ...inputs: ClassValue[] ) {
    return twMerge( clsx( inputs ) );
}

export function formatDate( date: Date | undefined ): string {
    if ( !date ) return 'Pick a date'; // fallback message if no date is provided
    return format( date, 'MMMM dd, yyyy' ); // e.g., October 15, 2024
}
