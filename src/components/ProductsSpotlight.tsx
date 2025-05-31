import React from 'react'
 
import Link from 'next/link'

const ProductsSpotlight = () => {
  return (
    <section className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Products spotlight</h2>
          <p className="text-gray-600">
            Some of the recent product releases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
                  <path d="m7.5 4.27 9 5.15"/>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">UI Components Kit</h3>
              <p className="text-sm text-gray-600 mb-3">
                A comprehensive collection of UI components for modern web applications.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$49</span>
                <Link href="#" className="text-sm text-blue-600 hover:underline">View Details</Link>
              </div>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-template">
                  <rect width="18" height="7" x="3" y="3" rx="1"/>
                  <rect width="9" height="7" x="3" y="14" rx="1"/>
                  <rect width="5" height="7" x="16" y="14" rx="1"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Portfolio Template</h3>
              <p className="text-sm text-gray-600 mb-3">
                A clean and modern portfolio template for designers and creatives.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$29</span>
                <Link href="#" className="text-sm text-blue-600 hover:underline">View Details</Link>
              </div>
            </div>
          </div>
          
          {/* Product Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Design System Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                A comprehensive guide to creating and implementing design systems.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">$39</span>
                <Link href="#" className="text-sm text-blue-600 hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSpotlight
