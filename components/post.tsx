import Image from "next-image-export-optimizer";

import images from "@/assets/images";

export function Post({
    content,
}: Readonly<{ content: Record<"type" | "content", string>[] }>) {
    return (
        <div className="flex flex-col items-center justify-center">
            {content.map((item, index) => {
                switch (item.type) {
                    case "title":
                        return (
                            <h1 key={index} className="text-4xl">
                                {item.content}
                            </h1>
                        );
                    case "text":
                        return <p key={index}>{item.content}</p>;
                    case "image":
                        const src = images[item.content];
                        return (
                            <Image
                                key={index}
                                src={src.default}
                                alt={item.content}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
