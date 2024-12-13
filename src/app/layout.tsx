import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/ui/backToTop";
export const metadata: Metadata = {
    title: {
        template: '%s | TMCH',
        default: 'Home | TMCH',
    },
    description: "",
};

export default function RootLayout( {
    children,
}: Readonly<{
    children: React.ReactNode;
}> ) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="dark:bg-softGray-900">
                <Providers>
                    <Header />
                    {children}
                    <BackToTopButton />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
