import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProductsSpotlight = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-[1.25rem] font-medium mb-2">Products spotlight</h2>
        <p className="text-[0.875rem] text-gray-600">
          Some of the recent product releases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Card 1 */}
        <div className="border border-gray-200 rounded-lg overflow-hidden group">
          <div className="relative h-48 bg-gray-100">
            {/* Placeholder for product image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package"
              >
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>
          </div>
          <div className="p-4">
            <article className="flex items-center justify-between">
              <h3 className="font-medium text-base mb-2">UI Components Kit</h3>
              <span className="text-[0.875rem] font-medium border rounded-full bg-gray-100 text-black border-gray-200 px-[.2rem]">
                NGN49
              </span>
            </article>
            <p className="text-[0.75rem] text-gray-600 mb-3">
              A comprehensive collection of UI components for modern web
              applications.
            </p>
            <div className="flex justify-between items-center">
              <Link href="#" className="grid w-full text-sm text-blue-600">
                <Button variant="outline" className='text-black border-black' >View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSpotlight;
