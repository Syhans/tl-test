"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function TestButton() {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
    };
    return <Button onClick={handleClick}>Test Button {clickCount}</Button>;
}
