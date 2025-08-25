export const SearchLoadingSkeleton = () => {
    return (
        <div className="py-8 bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-20">
                <div className="max-w-md mx-auto">
                    <div className="relative">
                        <div className="w-full h-11 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <div className="h-4 w-4 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchLoadingSkeleton;
