'use client';

import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';

interface SearchSuggestion {
    id: string;
    title: string;
    slug: string;
}

interface SearchComponentProps {
    suggestions?: SearchSuggestion[];
    placeholder?: string;
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
    suggestions = [],
    placeholder = "Search news articles..."
}) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const router = useRouter();
    
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const debouncedQuery = useDebounce(query, 300);

    // Filter suggestions based on debounced query
    useEffect(() => {
        if (debouncedQuery.trim()) {
            const filtered = suggestions.filter(suggestion =>
                suggestion.title.toLowerCase().includes(debouncedQuery.toLowerCase())
            ).slice(0, 8); // Limit to 8 suggestions
            setFilteredSuggestions(filtered);
            setIsOpen(filtered.length > 0);
        } else {
            setFilteredSuggestions([]);
            setIsOpen(false);
        }
        setFocusedIndex(-1);
    }, [debouncedQuery, suggestions]);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedIndex(prev => 
                    prev < filteredSuggestions.length - 1 ? prev + 1 : 0
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex(prev => 
                    prev > 0 ? prev - 1 : filteredSuggestions.length - 1
                );
                break;
            case 'Enter':
                e.preventDefault();
                if (focusedIndex >= 0 && filteredSuggestions[focusedIndex]) {
                    handleSuggestionClick(filteredSuggestions[focusedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setFocusedIndex(-1);
                inputRef.current?.blur();
                break;
        }
    };

    const handleSuggestionClick = (suggestion: SearchSuggestion) => {
        setQuery(suggestion.title);
        setIsOpen(false);
        setFocusedIndex(-1);
        suggestionsOnClick(suggestion);
    };

    const clearSearch = () => {
        setQuery('');
        setIsOpen(false);
        setFocusedIndex(-1);
        inputRef.current?.focus();
    };

    const highlightMatch = (text: string, query: string) => {
        if (!query.trim()) return text;
        
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, index) => 
            regex.test(part) ? (
                <span key={index} className="bg-yellow-200 font-medium">
                    {part}
                </span>
            ) : part
        );
    };

    const suggestionsOnClick = async (suggestion: SearchSuggestion) => {
        console.log(suggestion.slug);
        router.push(`/news/${suggestion.slug}`);
    };

    return (
        <div ref={searchRef} className="relative w-full max-w-md">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="h-4 w-4 text-gray-400" />
                </div>
                
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        if (filteredSuggestions.length > 0) {
                            setIsOpen(true);
                        }
                    }}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
                
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors duration-200"
                    >
                        <FaTimes className="h-4 w-4 text-gray-400" />
                    </button>
                )}
            </div>

            {/* Dropdown */}
            {isOpen && filteredSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                    <div className="py-1">
                        {filteredSuggestions.map((suggestion, index) => (
                            <button
                                key={suggestion.id}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className={`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-150 ${
                                    index === focusedIndex ? 'bg-green-50 border-l-2 border-green-500' : ''
                                }`}
                                onMouseEnter={() => setFocusedIndex(index)}
                            >
                                <div className="flex items-center space-x-3">
                                    <FaSearch className="h-3 w-3 text-gray-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-900 truncate">
                                        {highlightMatch(suggestion.title, debouncedQuery)}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                    
                    {query && filteredSuggestions.length === 0 && (
                        <div className="px-4 py-3 text-sm text-gray-500 text-center">
                            No results found for &ldquo;{query}&rdquo;
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
