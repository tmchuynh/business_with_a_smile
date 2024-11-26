import Image from "next/image";

interface HeaderImageProps {
    url: string;
    alt?: string;
}

export const HeaderImage: React.FC<HeaderImageProps> = ( { url, alt } ) => {
    return (
        <>
            <div className="w-full h-[17rem] relative mb-10 overflow-clip">
                <Image
                    src={url}
                    height={10}
                    width={10000}
                    priority={true}
                    alt={alt || url}
                    className="shadow-sm"
                />
            </div>
        </>
    );
};
