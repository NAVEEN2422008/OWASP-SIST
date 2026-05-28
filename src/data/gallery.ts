export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
    {
        id: "event-1",
        title: "Workshop Session",
        description: "Hands-on learning and secure coding practice.",
        imageUrl: "/file.svg",
    },
    {
        id: "event-2",
        title: "CTF Night",
        description: "Capture-The-Flag with mentorship and post-mortems.",
        imageUrl: "/window.svg",
    },
    {
        id: "event-3",
        title: "Community Meetup",
        description: "Research sharing and group discussions.",
        imageUrl: "/globe.svg",
    },
];

