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
    dueDate: string;
    phone: string;
    communicationMethod: string;
    attachments?: File[];
    discordUsername?: string;
}

export interface PaymentPlan {
    name: string;
    id: string;
    price: string;
    description: string;
    features: string[];
    benefits: string[];
    details: string[];
    popular: boolean;
    paymentSchedule: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
    title: string;
    date: string;
    description: string;
}
