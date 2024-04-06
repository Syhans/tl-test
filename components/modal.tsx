"use client";
import { useRouter } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <Dialog
            onOpenChange={() => {
                router.back();
            }}
            defaultOpen
        >
            <DialogContent className="overflow-y-auto h-[95vh] max-w-[95vw] gap-0 block">
                {children}
            </DialogContent>
        </Dialog>
    );
}
