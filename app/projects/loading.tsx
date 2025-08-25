import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

const ProjectsLoadingSkeleton = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />

            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Environmental Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Environment and Sanitation is committed to implementing impactful environmental projects
                            across Imo State. Our initiatives focus on waste management, conservation, climate action, and community engagement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid Skeleton */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden animate-pulse">
                                {/* Image Skeleton */}
                                <div className="h-48 bg-gray-200"></div>
                                
                                {/* Content Skeleton */}
                                <div className="p-6">
                                    {/* Title Skeleton */}
                                    <div className="h-6 bg-gray-200 rounded mb-4 w-3/4"></div>
                                    
                                    {/* Details Skeleton */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex justify-between gap-4">
                                            <div className="h-4 bg-gray-200 rounded w-16"></div>
                                            <div className="h-4 bg-gray-200 rounded w-20"></div>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <div className="h-4 bg-gray-200 rounded w-12"></div>
                                            <div className="h-4 bg-gray-200 rounded w-24"></div>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <div className="h-4 bg-gray-200 rounded w-14"></div>
                                            <div className="h-4 bg-gray-200 rounded w-32"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Description Skeleton */}
                                    <div className="space-y-2 mb-4">
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                                    </div>
                                    
                                    {/* Status Skeleton */}
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-gray-200 rounded-full mr-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsLoadingSkeleton;
