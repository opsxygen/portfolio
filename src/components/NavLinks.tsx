'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home', icon: 'home', iconAlt: 'home-black' },
  { href: '/about', label: 'About', icon: 'about', iconAlt: 'about-black' },
  {
    href: '/projects',
    label: 'Projects',
    icon: 'project',
    iconAlt: 'project-black',
  },
  {
    href: '/products',
    label: 'Products',
    icon: 'product',
    iconAlt: 'product-black',
  },
  {
    href: '/writing',
    label: 'Writing',
    icon: 'post',
    iconAlt: 'post-black',
  },
  { href: '/stacks', label: 'Stacks', icon: 'stack', iconAlt: 'stack-black' },
];

interface NavLinksProps {
  isSidebarOpen: boolean;
}

export const NavLinks = ({ isSidebarOpen }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 mb-auto text-md">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'p-2 rounded-sm flex items-center justify-between py-2 group',
            pathname === link.href
              ? 'bg-black text-white'
              : 'bg-transparent text-black hover:bg-gray-100'
          )}
        >
          <div
            className={cn(
              'flex items-center w-full gap-2',
              isSidebarOpen ? 'justify-start' : 'justify-center'
            )}
          >
            <Image
              src={
                pathname === link.href
                  ? `/${link.icon}.svg`
                  : `/${link.iconAlt}.svg`
              }
              alt={link.label}
              width={16}
              height={16}
            />
            {isSidebarOpen && <span>{link.label}</span>}
          </div>
          {isSidebarOpen && (
            <span
              className={cn(
                'border rounded-xs bg-transparent',
                pathname === link.href
                  ? 'border-transparent'
                  : 'border-gray-200'
              )}
            >
              <Image
                src={pathname === link.href ? '/arrow.svg' : '/arrow-black.svg'}
                alt="Arrow Right"
                className="group-hover:rotate-40 transition-all duration-300"
                width={15}
                height={15}
              />
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};
