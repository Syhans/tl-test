"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TestButton() {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
    };
    return <Button onClick={handleClick}>Test Button {clickCount}</Button>;
}
