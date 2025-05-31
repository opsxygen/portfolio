'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getSiteSettings } from '@/sanity/lib/getSiteSettings';
 

// Fallback socials in case Sanity data is not available
const fallbackSocials = [
    { href: '#', label: 'Facebook', initial: 'FB' },
    { href: '#', label: 'Twitter', initial: 'TW' },
    { href: '#', label: 'Dribbble', initial: 'DB' },
    { href: '#', label: 'Behance', initial: 'BE' },
];

export const SocialLinks = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
    const pathname = usePathname();
    const [socialLinks, setSocialLinks] = useState(fallbackSocials);
    
    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const settings = await getSiteSettings();
                if (settings.socialLinks && settings.socialLinks.length > 0) {
                    // Transform Sanity social links to match the format we need
                    const formattedLinks = settings.socialLinks.map(link => ({
                        href: link.url,
                        label: link.platform.charAt(0).toUpperCase() + link.platform.slice(1), // Capitalize platform name
                        initial: link.initials
                    }));
                    setSocialLinks(formattedLinks);
                }
            } catch (error) {
                console.error('Failed to fetch social links:', error);
            }
        };
        
        fetchSocialLinks();
    }, []);
    
    return (
        <div className="mt-8 border-t py-10">
        {isSidebarOpen && (
          <h4 className="text-md font-medium mb-3">Online</h4>
        )}
        <div className="flex flex-col gap-1 text-sm">
          {socialLinks.map((social) => (
            <Link
              key={social.initial}
              href={social.href}
              className={cn(
                'p-2 rounded-sm flex items-center justify-between py-2 group',
                pathname === social.href
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-100'
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'border rounded-xs bg-gray-100 text-gray-500 border-gray-200 px-[.2rem]'
                  )}
                >
                  {social.initial}
                </span>
                {isSidebarOpen && <span>{social.label}</span>}
              </div>
              {isSidebarOpen && (
                <span
                  className={cn(
                    'border rounded-xs bg-transparent px-[.2rem] py-[.2rem]',
                    pathname === social.href
                      ? 'border-transparent'
                      : 'border-gray-200'
                  )}
                >
                  <Image
                    src={
                      pathname === social.href
                        ? '/arrow.svg'
                        : '/arrow-black.svg'
                    }
                    alt="Arrow Right"
                    className="group-hover:rotate-40 transition-all duration-300"
                    width={15}
                    height={15}
                  />
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    )
}