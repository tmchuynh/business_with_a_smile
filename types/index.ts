interface Product {
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


interface ProductImage {
    src: string;
    alt: string;
}

interface FormData {
    name: string;
    email: string;
    style: string;
    website: string;
    message: string;
    dueDate: Date | undefined; // Changed from Date | null
    phone: string;
    communicationMethod: string;
    attachments: File[];
}
