import SomeMeme from "@/assets/images/meme.jpg";
import { TestButton } from "@/components/TestButton";
import Image from "next-image-export-optimizer";

export default function Page() {
    return (
        <>
            <h1 className="text-xl">Test</h1>
            <p>Test test test.</p>
            <TestButton />
            <Image src={SomeMeme} alt="Some meme" />
        </>
    );
}
