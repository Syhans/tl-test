import Image from "next-image-export-optimizer";

import SomeMeme from "@/assets/images/meme.jpg";

export default async function Page() {
    return (
        <>
            <h1>Some Meme</h1>
            <Image src={SomeMeme} alt="Some Meme" />
        </>
    );
}
