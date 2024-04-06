import fs from "fs";
import path from "path";

import { Modal } from "@/components/modal";
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
        <Modal>
            <Post content={content.default} />
        </Modal>
    );
}
