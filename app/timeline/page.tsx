import { Timeline } from "@/components/ui/timeline";

const testArray = [
    {
        title: "Title 1",
        content: "Content 1",
        link: "/1",
    },
    {
        title: "Title 2",
        content: "Content 2",
        link: "/2",
    },
    {
        title: "Title 3",
        // content: "Content 3",
        link: "/3",
    },
];

export default async function Page() {
    return (
        <>
            <Timeline items={testArray} />
        </>
    );
}
