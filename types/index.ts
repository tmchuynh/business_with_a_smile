export interface Product {
    name: string;
    price: string;
    href: string;
    breadcrumbs: { id: number; name: string; href: string; }[];
    images: { src: string; alt: string; }[];
    description: string;
    highlights: string[];
    details: string;
    reviews: { href: string; average: number; totalCount: number; };
    features: { name: string; description: string; }[];
}


export interface ProductImage {
    src: string;
    alt: string;
}

export interface FormData {
    name: string;
    email: string;
    style?: string;
    website: string;
    payment: string;
    preset?: string;

    message?: string;
    dueDate: Date;
    phone: string;
    communicationMethod: string;
    attachments?: File[];
    discordUsername?: string;
}

export interface PaymentPlan {
    name: string;
    id: string;
    price: number | string;
    description: string;
    features: string[];
    benefits: string[];
    details: string[];
    discounts: number;
    fee: number;
    firstPayment: number;
    popular: boolean;
    paymentSchedule: PaymentScheduleItem[];
}

export interface Prices {
    website: Object;
    payment: Object;
    date: Object;
    style?: Object;
    firstPayment: Object;
    total: Object;
}

export interface PaymentScheduleItem {
    title: string;
    date: string;
    description: string;
}

export interface Preset {
    value: string;
    description: string;
}

export interface Styles {
    name: string;
    description: string;
}

export interface Stats {
    id: number;
    name: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

export interface Project {
    title: string;
    description: string;
    imgUrl: string;
}

export interface Testimonial {
    name: string;
    text: string;
    company?: string;
    rating: number;
}

export interface Website {
    name: string;
    id: string;
    introduction: string;
    description: string;
    startingPrice: number;
    ideal_payment_plan: string;
    popular: boolean;
    who: string[];
    occasions: string[];
    other_info: Object;
}