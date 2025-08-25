"use client";
import React, { useState } from "react";
import MediaViewer from "./MediaViewer";
import MediaCard from "./MediaCard";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

interface MediaItem {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    title: string;
}

interface MediaGalleryProps {
    mediaItems: MediaItem[];
    currentlyViewing: string;
    mediaCount: number;
    page: number;
}

export default function MediaGallery({ mediaItems, currentlyViewing, mediaCount, page }: MediaGalleryProps) {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const router = useRouter();

    const openViewer = (index: number) => {
        router.replace(`/media?viewing=${mediaItems[index].id}`);
    };

    const closeViewer = () => {
        router.replace(`/media`);
    };

    const navigateToMedia = (index: number) => {
        setCurrentMediaIndex(index);
        router.replace(`/media?viewing=${mediaItems[index].id}`);
    };
    
    React.useEffect(() => {
        if (!currentlyViewing) {
            setViewerOpen(false);
            return;
        };
        const isAvailable = mediaItems.findIndex(item => item.id === currentlyViewing);
        if (isAvailable === -1) {
            setViewerOpen(false);
            router.replace(`/media`);
            return;
        }
        setViewerOpen(true);
        setCurrentMediaIndex(isAvailable);
    }, [currentlyViewing]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaItems.map((item, index) => (
                    <MediaCard
                        key={item.id}
                        item={item}
                        index={index}
                        onClick={() => openViewer(index)}
                    />
                ))}
            </div>

            {/* Media Viewer Modal */}
            <MediaViewer
                mediaItems={mediaItems}
                currentIndex={currentMediaIndex}
                isOpen={viewerOpen}
                onClose={closeViewer}
                onNavigate={navigateToMedia}
            />
            <Pagination
                currentPage={page}
                pageSize={10}
                totalCount={mediaCount}
                showFirstLast={false}
                type="media"
            />
        </>
    );
}