import HeroSection from "../../components/HeroSection";
import EventsSection from "../../components/EventsSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { Suspense } from "react";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>
}

export default async function Events({ searchParams }: PageProps) {
    const { page } = await searchParams;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.EVENTS} />
            {/* Upcoming Events Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                            Upcoming Events
                        </h2>
                    </AnimatedEntrance>
                    <Suspense fallback={<LoadingState />}>
                        <EventsSection page={page} />
                    </Suspense>
                </div>

            </section>
        </div>
    );
}

const LoadingState: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-5">
                        <div className="h-6 bg-gray-200 rounded mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                        <div className="space-y-2 mb-4">
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                        <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};