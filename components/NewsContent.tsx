import Image from "next/image";
import Link from "next/link";
import AnimatedEntrance from "./AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaNewspaper } from "react-icons/fa6";
import { contentfulService } from "@/utils/contentful";
import { Category, NewsPost } from "@/utils/contentful/types";
import { getRelativeTime } from "@/utils";
import Pagination from "./Pagination";
import { MdOutlineFindInPage } from "react-icons/md";

interface DisplayNews {
    id: string;
    title: string;
    category: string;
    excerpt: string;
    image: string;
    postedDays: string;
    slug: string
}




const NewsContent: React.FC<{ category: string, page: string }> = async ({ category, page }) => {
    const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

    if (!ministryId) {
        return <div>Ministry ID not found</div>
    }
    // Transform NewsPost to DisplayNews format
    const transformNewsData = (newsItems: NewsPost[]): DisplayNews[] => {
        return newsItems.map((item: NewsPost) => ({
            id: item.sys.id,
            title: item.fields.title,
            category: item.fields.category?.fields.category_name || "",
            excerpt: item.fields.content.content[0].content[0].value,
            image: (item.fields.featuredImage?.fields.file.url) || "",
            postedDays: item.sys.createdAt,
            slug: item.fields.slug
        }));
    };

    // Transform Category data to simplified format
    const transformCategoryData = (categories: Category[]) => {
        return categories.map((item: Category) => ({
            name: item.fields.category_name,
            id: item.sys.id,
        }));
    };

    // Fetch news data from Contentful
    const fetchNewsData = async (categoryId: string) => {
        try {
            let newsData: NewsPost[] = [];
            if (!categoryId || categoryId.toLowerCase() === "") {
                newsData = await contentfulService.getBlogsByMinistry(ministryId, parseInt(page));
            } else {
                newsData = await contentfulService.getBlogsByCategoryId(categoryId, ministryId, parseInt(page));
            }

            const transformedNews = transformNewsData(newsData);
            return transformedNews;
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const fetchNewsCount = async (categoryId: string) => {
        try {
            if (!categoryId || categoryId.toLowerCase() === "") {
                const newsCount = await contentfulService.getBlogCountByMinistry(ministryId);
                return newsCount;
            } else {
                const newsCount = await contentfulService.getBlogCountByCategoryId(categoryId, ministryId);
                return newsCount;
            }
        } catch (error) {
            console.error('Error fetching news count:', error);
            return 0;
        }
    };

    // Fetch categories data from Contentful
    const fetchCategoriesData = async () => {
        try {
            const categoriesData = await contentfulService.getCategories();
            const transformedCategories = transformCategoryData(categoriesData);
            return transformedCategories;
        } catch (error) {
            console.error('Error fetching categories data:', error);
        }
    };


    const categories = await fetchCategoriesData();
    const news = await fetchNewsData(category);
    const newsCount = await fetchNewsCount(category);

    if (newsCount === 0) {
        return <EmptyState type="no-content" />;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[0]}>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">

                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">CATEGORIES</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={`/news`} className={
                                        (category.toLowerCase() === "all" || category.toLowerCase() === "")
                                            ? "block px-3 py-2 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                            : "block px-3 py-2 bg-green-100 text-green-800 rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                    }>
                                        All News
                                    </Link>
                                </li>
                                {!!categories?.length && categories.map((categoryItem) => (
                                    <li key={categoryItem.id}>
                                        <Link href={`/news?category=${categoryItem.id}`} className={
                                            categoryItem.id.toLowerCase() === category.toLowerCase()
                                                ? "block px-3 py-2 bg-green-500 text-white rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                                : "block px-3 py-2 bg-green-100 text-green-800 rounded text-sm font-medium hover:bg-green-200 transition-colors duration-300"
                                        }>
                                            {categoryItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedEntrance>
            </div>

            <div className="lg:w-3/4">
                {news && news.length === 0 && <EmptyState type="page-no-content" />}
                {news && news.length > 0 && <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
                    {news.map((article, index) => (
                        <AnimatedEntrance
                            key={index}
                            {...ANIMATION_PRESETS.CARD_FADE_UP}
                            delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                            className="h-full"
                        >
                            <Link href={`/news/${article.slug}`} className="group block h-full">
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                    <div className="h-48 relative">
                                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2 w-fit absolute top-2 left-2 z-10">
                                            {article.category}
                                        </span>
                                        <Image
                                            src={article.image.startsWith("//") ? article.image.replace("//", "https://") : article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <h3 className="capitalize font-bold text-gray-900 group-hover:text-blue-500 mb-2 transition-colors duration-300">
                                            {article.title.toLowerCase()}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                            {article.excerpt.slice(0, 150) + "..."}
                                        </p>
                                        <div
                                            className="flex-1"
                                        />
                                        <span className="text-orange-500 hover:text-orange-600 text-xs font-medium transition-colors duration-300">
                                            Posted {getRelativeTime(article.postedDays)}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedEntrance>
                    ))}
                </div>}
                {news && news.length > 0 && <Pagination
                    pageSize={10}
                    totalCount={newsCount}
                    category={category}
                    showFirstLast={false}
                    siblingCount={2}
                    className="mt-5 w-full"
                    currentPage={parseInt(page)}
                    type="news"
                />}
            </div>
        </div>
    );
};


interface EmptyStateProps {
    type?: "no-content" | "page-no-content";
}

const EmptyState: React.FC<EmptyStateProps> = ({ type = "no-content" }) => {
    const config = {
        "no-content": {
            title: "No News Available",
            description:
                "There are currently no news articles available. Updates and announcements will appear here as they become available.",
            icon: <FaNewspaper className="text-green-600" size={32} />,
            bg: "bg-green-100",
            btnText: "View All News",
            btnLink: "/news",
            btnColor: "bg-green-600 hover:bg-green-700",
        },
        "page-no-content": {
            title: "No News on This Page",
            description:
                "This page has no news articles to display. Try going back or browsing other pages.",
            icon: <MdOutlineFindInPage className="text-blue-600" size={32} />,
            bg: "bg-blue-100",
            btnText: "Back to News",
            btnLink: "/news",
            btnColor: "bg-blue-600 hover:bg-blue-700",
        },
    };

    const { title, description, icon, bg, btnText, btnLink, btnColor } = config[type];

    return (
        <div>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP}>
                <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className={`w-20 h-20 rounded-full ${bg} flex items-center justify-center`}>
                            {icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-6">{description}</p>
                    <Link
                        href={btnLink}
                        className={`inline-block px-6 py-3 text-white font-medium rounded-md transition-colors duration-300 ${btnColor}`}
                    >
                        {btnText}
                    </Link>
                </div>
            </AnimatedEntrance>
        </div>
    );
};

export default NewsContent;