'use client';

import { useState, useEffect, useRef } from 'react';
import { SearchResult } from '@/sanity/lib/searchQueries';
import { searchContent } from '@/sanity/lib/searchService';
import { SearchResults } from './SearchResults';
import { useDebounce } from '@/lib/hooks/useDebounce';



export const Search = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult>({ projects: [], products: [] });
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus the search input when the search modal opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Search when the debounced search term changes
  useEffect(() => {
    const performSearch = async () => {
      if (debouncedSearchTerm.trim().length === 0) {
        setSearchResults({ projects: [], products: [] });
        return;
      }

      setIsLoading(true);
      try {
        const results = await searchContent(debouncedSearchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedSearchTerm]);

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm('');
    setSearchResults({ projects: [], products: [] });
  };

  return (
    <>
      {isSearchOpen && (
        <section className="px-5 fixed w-full h-screen z-50">
          <div
            onClick={handleCloseSearch}
            className="fixed top-0 left-0 w-full h-screen z-30 inset-0 bg-gray-900/60 bg-opacity-50 py-50 flex justify-center"
          ></div>
          <div className="relative flex flex-col items-center justify-center z-40 max-w-xl mx-auto md:mt-[calc(100vh-80svh)] mt-[calc(100vh-100svh)]">
            <div className="w-full relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects & products..."
                className="w-full p-4 px-6 border bg-white border-gray-200 rounded-xl hover:border-gray-300 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
            
            {(searchTerm.trim().length > 0 || isLoading) && (
              <div className="w-full mt-2">
                <SearchResults
                  projects={searchResults.projects}
                  products={searchResults.products}
                  isLoading={isLoading}
                  onResultClick={handleCloseSearch}
                />
              </div>
            )}
          </div>
        </section>
      )}
      
      <section className="flex items-end">
        <div className="mt-8 grid w-full">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-center rounded-sm cursor-pointer border w-full border-gray-200 bg-gray-100 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          )}

          {isSidebarOpen && (
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                readOnly
                onClick={() => setIsSearchOpen(true)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
