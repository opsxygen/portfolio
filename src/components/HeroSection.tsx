import React from 'react'
 
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">
          Transforming Ideas into Stunning Digital Experiences
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xl">
              <span>AK</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">Akwamfon Portfolio</h2>
            <p className="text-gray-600">Product Designer</p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-8">
          Welcome to my portfolio! I am a passionate Product Designer, Web Designer, and
          Solopreneur with a keen eye for detail and a commitment to creating exceptional user experiences.
          Dive in to explore my work and discover how I can help bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
            <span>More about me</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Button>
          
          <Button variant="outline" className="border-gray-300">
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
