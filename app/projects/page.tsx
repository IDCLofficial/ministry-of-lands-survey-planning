import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";
import { contentfulService } from "@/utils/contentful";
import { Project } from "@/utils/contentful/types";
import Link from "next/link";
import { Suspense } from "react";
import ProjectsLoadingSkeleton from "./loading";
import EmptyState from "../../components/EmptyState";
import Pagination from "@/components/Pagination";
import { slugify } from "@/utils";

interface DisplayProject {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    partners: string;
    src: string;
}

interface PageProps {
    searchParams: Promise<{ [key: string]: string }>
}

const transformNewsData = (newsData: Project[]): DisplayProject[] => {
    return newsData.map((news) => ({
        id: news.sys.id,
        title: news.fields.projectTitle,
        description: (news.fields.projectDescription || '').slice(0, 100) + '...',
        startDate: news.fields.startDate || '',
        endDate: news.fields.proposedEndDate || '',
        status: new Date(news.fields.proposedEndDate || '').getTime() > new Date().getTime() ? 'Ongoing' : 'Completed',
        partners: news.fields.partners?.map((partner) => partner.fields.title).join(", ") || "",
        src: news.fields.projectImage?.fields.file.url ? `https:${news.fields.projectImage?.fields.file.url}` : "",
    }));
}

const fetchNewsData = async (page: string, ministryId: string) => {
    try {
        const newsData = await contentfulService.getProjectsByMinistryId(ministryId, parseInt(page));

        if (!newsData) {
            return { data: [], error: null };
        }

        console.log({
            newsData: newsData[0],
            ministryId,
            page
        });

        const transformedNews = transformNewsData(newsData);
        return { data: transformedNews, error: null };
    } catch (error) {
        console.error('Error fetching news data:', error);
        return { data: [], error: error instanceof Error ? error.message : 'Failed to fetch projects' };
    }
};

const fetchProjectsCount = async (ministryId: string) => {
    try {
        const count = await contentfulService.getProjectsCountByMinistryId(ministryId);
        return count;
    } catch (error) {
        console.error('Error fetching projects count:', error);
        return 0;
    }
};


export default async function Projects({ searchParams }: PageProps) {
    const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

    if (!ministryId) {
        return <div>Ministry ID not found</div>
    }
    const { page } = await searchParams;

    let pageString = page;
    if (typeof page !== 'string') {
        pageString = "1";
    }

    return (
        <Suspense fallback={<ProjectsLoadingSkeleton />}>
            <ProjectsContent page={pageString} ministryId={ministryId} />
        </Suspense>
    );
}

const ProjectsContent = async ({ page, ministryId }: { page: string, ministryId: string }) => {
    const result = await fetchNewsData(page, ministryId);
    const { data: projects, error } = result;
    const projectsCount = await fetchProjectsCount(ministryId);

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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Initiatives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our key projects and initiatives aimed at modernizing land administration, enhancing urban development,
                            and providing efficient services to the people of Imo State. Each project reflects our commitment to transparency,
                            digital transformation, and sustainable development in land management and urban planning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    {error || projectsCount === 0 ? (
                        <div className="flex justify-center">
                            <div className="max-w-5xl w-full">
                                <EmptyState type="no-content" />
                            </div>
                        </div>
                    ) : !!projectsCount && projects.length === 0 ? (
                        <div className="flex justify-center">
                            <div className="max-w-5xl w-full">
                                <EmptyState btnLink="/projects" type="page-no-content" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 h-fit md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects && projects.map((project, index) => {
                                    return (
                                        <AnimatedEntrance
                                            key={project.id}
                                            {...ANIMATION_PRESETS.CARD_FADE_UP}
                                            delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                        >
                                            <div className="bg-white border group cursor-pointer border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                                <Link href={`/projects/${slugify(project.title)}?id=${project.id}`} className="absolute inset-0 h-full w-full z-10" />
                                                <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                                    <Image
                                                        src={project.src || '/assets/no-image.png'}
                                                        alt={project.title}
                                                        width={400}
                                                        height={200}
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-green-600">
                                                        {project.title}
                                                    </h3>
                                                    <div className="space-y-3 text-sm">
                                                        <div className="flex justify-between gap-4">
                                                            <span className="text-gray-600">Start date</span>
                                                            <span className="text-gray-900 text-right">{project.startDate}</span>
                                                        </div>
                                                        <div className="flex justify-between gap-4">
                                                            <span className="text-gray-600">End date</span>
                                                            <span className="font-medium text-right">{project.endDate}</span>
                                                        </div>
                                                        {project.partners && <div className="flex justify-between gap-4">
                                                            <span className="text-gray-600">Partners</span>
                                                            <span className="text-gray-900 text-right">{project.partners}</span>
                                                        </div>}
                                                    </div>
                                                    <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex items-center mt-4 text-green-600 text-sm">
                                                        <span className={`w-2 h-2 rounded-full mr-2 ${project.status === "Ongoing" ? "bg-green-500" : "bg-gray-500"}`}></span>
                                                        {project.status}
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedEntrance>
                                    );
                                })}
                            </div>
                            <Pagination
                                currentPage={parseInt(page)}
                                totalCount={projectsCount}
                                pageSize={10}
                                className="mt-10"
                                type="projects"
                            />
                        </>
                    )}
                </div>
            </section>
        </div>
    );
}
