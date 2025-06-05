'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useMediaQuery } from 'react-responsive';
import { NavLinks } from './NavLinks';
import { SocialLinks } from './SocialLinks';
import { Search } from './Search';
import { SiteSettings } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const Sidebar = ({ siteSettings }: { siteSettings: SiteSettings }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isMobile) setIsSidebarOpen(false);
    if (isTablet) setIsSidebarOpen(false);
    if (!isMobile && !isTablet) setIsSidebarOpen(true);
  }, [isMobile, isTablet]);

  return (
    <div className="relative pr-5">
      {!isMobile && (
        <div className="absolute right-3 z-40 top-[2rem]">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer group w-5 h-5 p-1 bg-black rounded-full"
          >
            <Image
              src="/chevron.svg"
              alt="chevron"
              width={16}
              height={16}
              className={cn(
                'w-full h-full rotate-180 transition-all duration-300',
                isSidebarOpen ? 'rotate-180' : 'rotate-0'
              )}
            />
          </button>
        </div>
      )}
      <aside
        className={cn(
          'sticky bg-white grid-rows-[max-content_max-content_1fr] h-screen border-r border-gray-200 p-4 py-6 overflow-y-auto flex-1 z-30 transition-all duration-300',
          isSidebarOpen ? 'w-60' : 'w-max',
          isMobile ? 'hidden' : 'grid'
        )}
      >
        <header className="flex gap-3 items-center mb-10">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
            {siteSettings?.logo ? (
              <Image
                src={urlFor(siteSettings.logo).url()}
                alt={siteSettings.logo.alt || 'Site Logo'}
                fill
                className="object-cover"
                sizes="40px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                <span>{siteSettings?.siteTitle?.match(/\b\w/g)?.join('')}</span>
              </div>
            )}
          </div>
          {isSidebarOpen && (
            <article>
              <h3 className="text-base text-black font-medium">
                {siteSettings?.siteTitle}
              </h3>
              <p className="text-sm text-gray-500">
                {siteSettings?.siteSubtitle}
              </p>
            </article>
          )}
        </header>

        <section>
          <NavLinks isSidebarOpen={isSidebarOpen} />

          <SocialLinks isSidebarOpen={isSidebarOpen} />
        </section>

        <section className="flex justify-end">
          <Search isSidebarOpen={isSidebarOpen} />
        </section>
      </aside>
    </div>
  );
};

export default Sidebar;
