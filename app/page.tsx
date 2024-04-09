import Link from "next/link";
import Image from "next-image-export-optimizer";

import SomeMeme from "@/assets/images/meme.jpg";
import { Button } from "@/components/ui/button";

export default async function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Link href="/1">
                <Button>hello there</Button>
            </Link>
            <Link href="/2">
                <Button>general kenobi</Button>
            </Link>
            <Image src={SomeMeme} alt="some meme" />
        </div>
    );
}
