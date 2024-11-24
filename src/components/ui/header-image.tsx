import Image from "next/image";

interface HeaderImageProps {
    url: string;
    alt?: string;
}

export const HeaderImage: React.FC<HeaderImageProps> = ( { url, alt } ) => {
    return (
        <>
            <div className="w-full h-[17rem] relative mb-10">
                <Image
                    src={url}
                    layout="fill"
                    loading="lazy"
                    alt={alt || url}
                    objectFit="cover"
                    objectPosition="center"
                    className="shadow-sm"
                />
            </div>
        </>
    );
};
