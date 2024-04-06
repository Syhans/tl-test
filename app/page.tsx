import Link from "next/link";
import Image from "next-image-export-optimizer";

import SomeMeme from "@/assets/images/meme.jpg";
import { Button } from "@/components/ui/button";

export default async function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Button>
                <Link href="/1">hello there</Link>
            </Button>
            <Button>
                <Link href="/2">hello there 2</Link>
            </Button>
            <Image src={SomeMeme} alt="some meme" />
        </div>
    );
}
