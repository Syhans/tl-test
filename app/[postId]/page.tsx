import fs from "fs";
import path from "path";

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
    return <Post content={content.default} />;
}
