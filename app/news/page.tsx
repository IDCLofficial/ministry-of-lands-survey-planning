import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import NewsContent from "@/components/NewsContent";
import SearchSection from "@/components/SearchSection";
import SearchLoadingSkeleton from "@/components/SearchLoadingSkeleton";
import { Suspense } from "react";

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>
}

export default async function News({searchParams}: PageProps) {
    const { category, page } = await searchParams;

    let categoryString = category;
    if (typeof category !== 'string') {
        categoryString = "";
    }

    let pageString = page;
    if (typeof page !== 'string') {
        pageString = "1";
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.NEWS} />

            <Suspense fallback={<SearchLoadingSkeleton />}>
                <SearchSection />
            </Suspense>
            {/* Main Content Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
                <section className="py-16 bg-gray-50">
                    <div className="px-4 sm:px-6 lg:px-20">
                        <Suspense fallback={<LoadingState />}>
                            <NewsContent category={categoryString} page={pageString}/>
                        </Suspense>
                    </div>
                </section>
            </AnimatedEntrance>
        </div>
    );
}

const LoadingState: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Loading */}
            <div className="lg:w-1/4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="animate-pulse">
                        <div className="h-10 bg-gray-200 rounded mb-6"></div>
                        <div className="space-y-3">
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                            <div className="h-8 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Loading */}
            <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="animate-pulse">
                                <div className="h-48 bg-gray-200"></div>
                                <div className="p-6">
                                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                    <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
                                    <div className="space-y-2 mb-4">
                                        <div className="h-4 bg-gray-200 rounded"></div>
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

