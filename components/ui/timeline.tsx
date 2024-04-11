import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Card } from "./card";
import { H1, H3 } from "./typography";

type TimelineItemProps = {
    title: React.ReactNode;
    content?: React.ReactNode;
    link?: string;
    first?: boolean;
    last?: boolean;
};

function Timeline({ items }: { items: TimelineItemProps[] }) {
    return (
        <>
            {items.map((item, idx) => (
                <TimelineItem
                    key={idx}
                    title={item.title}
                    content={item.content}
                    link={item.link}
                    first={idx === 0}
                    last={idx === items.length - 1}
                />
            ))}
        </>
    );
}

function TimelineItem({
    title,
    content,
    link,
    first,
    last,
    ...props
}: TimelineItemProps) {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-1/4 flex justify-end">
                {content ? <TimelineItemTitle>{title}</TimelineItemTitle> : ""}
            </div>
            <div className="flex flex-col items-center">
                {!first ? (
                    <TimelineConnector />
                ) : (
                    <TimelineConnector className="opacity-0" />
                )}
                <TimelineDot />
                {!last ? (
                    <TimelineConnector />
                ) : (
                    <TimelineConnector className="opacity-0" />
                )}
            </div>
            <div className="w-full">
                {content ? (
                    <>
                        <TimelineItemContent link={link}>
                            {content}
                        </TimelineItemContent>
                    </>
                ) : typeof title === "string" ? (
                    <H1>{title}</H1>
                ) : (
                    title
                )}
            </div>
        </div>
    );
}
function TimelineItemTitle({
    children,
    ...props
}: {
    children?: React.ReactNode;
}) {
    return <H3>{children}</H3>;
}

function TimelineItemContent({
    children,
    className,
    link,
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    link?: string;
}) {
    return (
        <Card className={cn("w-full h-96 overflow-hidden p-2", className)}>
            <div className="flex flex-col h-full">
                <div className="grow">{children}</div>
                {link && (
                    <div className="inline-flex justify-end w-full mt-auto">
                        <Link href={link}>
                            <Button variant="ghost" size="sm">
                                <div className="flex space-x-1 items-center">
                                    read more...
                                </div>
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </Card>
    );
}

function TimelineDot() {
    return (
        <div className="w-4 h-4 bg-neutral-950 dark:bg-neutral-50 rounded-full" />
    );
}

function TimelineConnector({ className, ...props }: { className?: string }) {
    return (
        <div
            className={cn(
                "w-0.5 h-64 bg-neutral-950 dark:bg-neutral-50",
                className,
            )}
        />
    );
}

export { Timeline };
