import React from 'react'

import { Button } from './ui/button'

const ProjectsSection = () => {
  return (
    <section className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">My Latest Works</h2>
          <p className="text-gray-600">
            I present my top-tier projects, meticulously crafted with unwavering passion,
            simplicity, boundless creativity, and unparalleled attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Project Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">EcoShop</h3>
              <p className="text-sm text-gray-600 mb-3">
                Development of an e-commerce platform focused on sustainable and eco-friendly products.
              </p>
              <p className="text-xs text-gray-500">E-commerce — July 2024</p>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">GreenThumb</h3>
              <p className="text-sm text-gray-600 mb-3">
                Development of a mobile application designed to help users manage and care for their plants.
              </p>
              <p className="text-xs text-gray-500">Mobile App Design — May 2023</p>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="relative h-48 bg-gray-100">
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">FoodieFiesta</h3>
              <p className="text-sm text-gray-600 mb-3">
                Development of an online reservation system designed to streamline the dining experience.
              </p>
              <p className="text-xs text-gray-500">Web App Design — Sept 2022</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="border-gray-300 flex items-center gap-2">
            <span>All projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
