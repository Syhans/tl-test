import fs from "fs";
import dynamic from "next/dynamic";
import path from "path";

export async function generateStaticParams() {
    const posts = fs.readdirSync("components/posts");
    return posts.map((post) => ({ post: path.parse(post).name }));
}

export default async function Page({ params }: { params: { post: string } }) {
    const { post } = params;
    const PostComponent = dynamic(() => import(`@/components/posts/${post}`));
    return (
        <>
            <h1>{post}</h1>
            <PostComponent />
        </>
    );
}
