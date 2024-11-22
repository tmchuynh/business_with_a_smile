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