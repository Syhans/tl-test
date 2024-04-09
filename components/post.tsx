import Image from "next-image-export-optimizer";

import images from "@/assets/images";
import {
    H1,
    H2,
    H3,
    H4,
    InlineCode,
    Large,
    Lead,
    Muted,
    P,
    Quote,
    Small,
} from "@/components/ui/typography";

export function Post({
    content,
}: Readonly<{ content: Record<"type" | "content", string>[] }>) {
    return (
        <div className="space-y-6">
            {content.map((item, index) => {
                switch (item.type) {
                    case "h1":
                        return <H1 key={index}>{item.content}</H1>;
                    case "h2":
                        return <H2 key={index}>{item.content}</H2>;
                    case "h3":
                        return <H3 key={index}>{item.content}</H3>;
                    case "h4":
                        return <H4 key={index}>{item.content}</H4>;
                    case "p":
                        return <P key={index}>{item.content}</P>;
                    case "blockquote":
                        return <Quote key={index}>{item.content}</Quote>;
                    // TODO: list
                    // case "list"
                    case "code":
                        return (
                            <InlineCode key={index}>{item.content}</InlineCode>
                        );
                    case "Lead":
                        return <Lead key={index}>{item.content}</Lead>;
                    case "Large":
                        return <Large key={index}>{item.content}</Large>;
                    case "Small":
                        return <Small key={index}>{item.content}</Small>;
                    case "Muted":
                        return <Muted key={index}>{item.content}</Muted>;
                    case "image":
                        const src = images[item.content];
                        return (
                            <Image
                                key={index}
                                src={src.default}
                                alt={item.content}
                                className="w-full rounded-lg"
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
}
