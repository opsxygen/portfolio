'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchProduct, SearchProject } from '@/sanity/lib/searchQueries';

type SearchResultsProps = {
  projects: SearchProject[];
  products: SearchProduct[];
  isLoading: boolean;
  onResultClick: () => void;
};

export const SearchResults: React.FC<SearchResultsProps> = ({
  projects,
  products,
  isLoading,
  onResultClick,
}) => {
  const hasResults = projects.length > 0 || products.length > 0;

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 max-h-[70vh] overflow-y-auto">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!hasResults) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 max-h-[70vh] overflow-y-auto">
        <p className="text-center py-8 text-gray-500">No results found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-h-[70vh] overflow-y-auto">
      {projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3 border-b pb-2">Projects</h3>
          <div className="space-y-3">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={onResultClick}
              >
                {project.mainImage?.url ? (
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={project.mainImage.url}
                      alt={project.mainImage.alt || project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-500">No img</span>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-sm">{project.title}</h4>
                  <p className="text-xs text-gray-500">
                    {project.service} • {project.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {products.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-3 border-b pb-2">Products</h3>
          <div className="space-y-3">
            {products.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product._id}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={onResultClick}
              >
                {product.mainImage?.url ? (
                  <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={product.mainImage.url}
                      alt={product.mainImage.alt || product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-500">No img</span>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
