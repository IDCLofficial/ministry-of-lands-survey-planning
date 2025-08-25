import { contentfulService } from "@/utils/contentful";
import SearchComponent from "./SearchComponent";
import { slugify } from "@/utils";

interface SearchSuggestion {
    id: string;
    title: string;
    slug: string;
}

export const SearchSection = async () => {
    const ministryId = process.env.NEXT_PUBLIC_MINISTRY_ID;

    if (!ministryId) {
        return null;
    }

    try {
        // Fetch blogs by ministry for suggestions
        const blogs = await contentfulService.getBlogTitlesAndSlugsByMinistryId(ministryId);

        console.log(blogs);
        
        // Transform to SearchSuggestion format
        const suggestions: SearchSuggestion[] = blogs.map((blog, index) => ({
            id: `${slugify(blog.slug)}-${index}`,
            title: blog.title,
            slug: blog.slug
        }));

        return (
            <div className="py-8 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="max-w-md mx-auto">
                        <SearchComponent 
                            suggestions={suggestions}
                            placeholder="Search news articles..."
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching blog titles:', error);
        return null;
    }
};

export default SearchSection;
