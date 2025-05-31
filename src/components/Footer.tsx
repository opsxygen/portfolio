import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Akwamfon Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Dribbble
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
