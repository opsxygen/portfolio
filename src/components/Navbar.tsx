'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { SocialLinks } from './SocialLinks';
import { getSiteSettings } from '@/sanity/lib/getSiteSettings';
import { SiteSettings } from '@/sanity/lib/queries';
import Image from 'next/image';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Fetch site settings
    const fetchSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };

    fetchSettings();
  }, []);

  if (!mounted) return null;
  return (
    <nav className="sticky top-0 z-20 py-3 bg-white w-full border-b border-gray-200 flex gap-2 items-center justify-end">
      <section
        className={cn(
          'transition-all duration-300 ease-in-out w-full px-4',
          isMobile ? 'block' : 'hidden'
        )}
      >
        <div className="flex items-center justify-between w-full">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
            {siteSettings?.logo?.url ? (
              <Image
                src={siteSettings.logo.url}
                alt={siteSettings.logo.alt || 'Site Logo'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                <span>{siteSettings?.siteTitle.match(/\b\w/g)?.join('')}</span>
              </div>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex items-center gap-2"
          >
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
            {!menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={cn(
            'w-full z-50 pt-20 overflow-hidden transition-all duration-300 ease-in-out overflow-y-auto',
            menuOpen ? 'max-h-max py-4' : 'max-h-0 py-0'
          )}
        >
          <NavLinks isSidebarOpen={true} />
          <SocialLinks isSidebarOpen={true} />
        </div>
      </section>

      <div className={cn('gap-2 px-6', isMobile ? 'hidden' : 'flex')}>
        <Button
          variant="outline"
          size="sm"
          className="flex text-xs px-4 py-[.1rem] items-center gap-2 rounded-full font-normal"
        >
          <span className="animate-pulse bg-green-500 h-2 w-2 rounded-full"></span>
          Available for work
        </Button>
        <Link href="/">
          <Button
            variant="default"
            size="sm"
            className="flex text-xs px-4 py-[.1rem] items-center gap-2 rounded-full font-normal"
          >
            Book an appointment
            <Image src="/arrow.svg" alt="calendar" width={12} height={12} />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
