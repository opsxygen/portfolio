import React from 'react'
import { Button } from './ui/button'

const ServicesSection = () => {
  return (
    <section className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Work with me</h2>
          <p className="text-gray-600">
            Partnering with me means embarking on a journey of creativity, innovation, and excellence. 
            With years of experience in product design, web design, and user experience, 
            I bring a unique blend of skills and insights to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service Card 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Product Design</h3>
              <p className="text-sm text-gray-600 mb-4">Starting at $3,000 per project</p>
              
              <div className="relative h-40 bg-gray-100 mb-6 rounded-md">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
                    <path d="m22 12.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.18"/>
                    <path d="m22 16.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 16.18"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Creating innovative and user-centric products that solve real problems. 
                This service includes research, wireframing, prototyping, and final design.
              </p>
              
              <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-sm text-gray-600 mb-4">Starting at $2,500 per project</p>
              
              <div className="relative h-40 bg-gray-100 mb-6 rounded-md">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <line x1="3" x2="21" y1="9" y2="9"/>
                    <line x1="9" x2="9" y1="21" y2="9"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Designing visually appealing and highly functional websites. 
                This service covers responsive design, UI/UX design, and integration with content management systems.
              </p>
              
              <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
              <p className="text-sm text-gray-600 mb-4">Starting at $4,000 per project</p>
              
              <div className="relative h-40 bg-gray-100 mb-6 rounded-md">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M12 18h.01"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Crafting intuitive and engaging mobile applications for iOS and Android. 
                This service includes user research, wireframing, prototyping, and final UI design.
              </p>
              
              <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Service Card 4 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">User Experience (UX) Design</h3>
              <p className="text-sm text-gray-600 mb-4">Starting at $3,500 per project</p>
              
              <div className="relative h-40 bg-gray-100 mb-6 rounded-md">
                {/* Placeholder for service image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Enhancing the overall user experience of digital products. 
                This service covers user research, usability testing, and interaction design.
              </p>
              
              <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                <span>More Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
