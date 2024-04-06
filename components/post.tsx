export function Post({ content }: { content: string }) {
    return <pre>{JSON.stringify(content, null, 2)}</pre>;
}
