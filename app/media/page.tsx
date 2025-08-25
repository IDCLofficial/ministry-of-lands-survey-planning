import { Suspense } from "react";
import HeroSection from "../../components/HeroSection";
import MediaSection from "../../components/MediaSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>
}

function MediaSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="animate-pulse">
                {/* Filter buttons skeleton */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-10 w-20 bg-gray-200 rounded"></div>
                    ))}
                </div>
                
                {/* Media grid skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <div className="aspect-video bg-gray-200 rounded-lg"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
                
                {/* Pagination skeleton */}
                <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-10 w-10 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default async function Media({ searchParams }: PageProps) {
    const { viewing, page } = await searchParams;

    const pageNumber = parseInt(page) || 1;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.MEDIA} />

            {/* Media Gallery Section */}
            <Suspense fallback={<MediaSkeleton />}>
                <MediaSection currentlyViewing={viewing} page={pageNumber.toString()} />
            </Suspense>
        </div>
    );
}
