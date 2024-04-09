"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function BackButton({
    className,
    ...props
}: React.ComponentProps<typeof Button> & { className?: string }) {
    const router = useRouter();
    return (
        <Button
            className={className}
            onClick={() => router.back()}
            variant="outline"
            {...props}
        >
            <ArrowLeft />
            Back
        </Button>
    );
}
