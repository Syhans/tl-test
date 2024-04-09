import fs from "fs";
import path from "path";

import { BackButton } from "@/components/back-button";
import { Post } from "@/components/post";

export async function generateStaticParams() {
    const postIds = fs.readdirSync("posts");
    return postIds.map((postId) => ({
        postId: path.parse(postId).name,
    }));
}

export default async function Page({ params }: { params: { postId: string } }) {
    const { postId } = params;
    const content = await import(`@/posts/${postId}.json`);
    return (
        <div className="py-4 space-y-4">
            <BackButton />
            <div className="flex justify-center">
                <article className="max-w-2xl">
                    <Post content={content.default} />
                </article>
            </div>
        </div>
    );
}
