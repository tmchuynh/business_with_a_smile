import { clsx, type ClassValue } from "clsx";
import { format } from 'date-fns';
import { twMerge } from "tailwind-merge";

export function cn( ...inputs: ClassValue[] ) {
    return twMerge( clsx( inputs ) );
}

export function formatDate( date: Date | undefined ): string {
    if ( !date ) return 'Pick a date';
    return format( date, 'MMMM dd, yyyy' );
}

export const formatPhoneNumber = ( value: string ) => {
    const phoneNumber = value.replace( /\D/g, "" );
    const match = phoneNumber.match( /^(\d{0,3})(\d{0,3})(\d{0,4})$/ );

    if ( match ) {
        return `(${ match[1] }) ${ match[2] }-${ match[3] }`.trim();
    }

    return value;
};

export function classNames( ...classes: string[] ) {
    return classes.filter( Boolean ).join( ' ' );
}

export const encodeUrlSafeBase64 = ( str: string ): string => {
    let base64 = btoa( unescape( encodeURIComponent( str ) ) );
    return base64.replace( /\+/g, "-" ).replace( /\//g, "_" ).replace( /=+$/, "" );
};

export const decodeUrlSafeBase64 = ( str: string ): string => {
    let base64 = str.replace( /-/g, "+" ).replace( /_/g, "/" );
    while ( base64.length % 4 ) {
        base64 += "=";
    }
    return decodeURIComponent( escape( atob( base64 ) ) );
};

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


export const formatCurrency = ( amount: number ): string => {
    return `$${ amount.toFixed( 2 ).replace( /\d(?=(\d{3})+\.)/g, '$&,' ) }`;
};

export let USDollar = new Intl.NumberFormat( 'en-US', {
    style: 'currency',
    currency: 'USD',
} );