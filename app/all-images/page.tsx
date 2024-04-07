import Image from "next-image-export-optimizer";

import images from "@/assets/images";

export default function AllImagesPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {Object.entries(images).map(([key, value]) => (
                <div
                    key={key}
                    className="flex flex-col items-center justify-center"
                >
                    <h1>{key}</h1>
                    <Image src={value.default} alt={key} />
                </div>
            ))}
        </div>
    );
}
