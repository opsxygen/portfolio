import React from 'react'
 
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
          {/* Placeholder for profile image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-600">
            <span>AK</span>
          </div>
        </div>
        <div className="hidden md:block">
          <h3 className="font-medium">Akwamfon Portfolio</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
        </div>
      </div>
      
      <Button variant="outline" className="flex items-center gap-2">
        <span>Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="6" y2="6"/>
          <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </Button>
    </header>
  )
}

export default Header
