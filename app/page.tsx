import SomeMeme from "@/assets/images/meme.jpg";
import Image from "next-image-export-optimizer";

export default async function Page() {
    return (
        <>
            <h1>Some Meme</h1>
            <Image src={SomeMeme} alt="Some Meme" />
        </>
    );
}
