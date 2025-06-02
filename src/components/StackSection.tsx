import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const technologies = [
  {
    name: 'Framer',
    slug: 'framer',
    tagline: 'Website builder',
    logo: '/tech/framer.svg',
  },
  {
    name: 'Figma',
    slug: 'figma',
    tagline: 'Design tool',
    logo: '/tech/figma.svg',
  },
];

const StackSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-[1.25rem] font-medium mb-2">Stack</h2>
        <p className="text-[0.875rem] text-gray-600 max-w-[60ch]">
          Software & services I use in my workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* TODO: Stacks should come from sanity */}
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex gap-2 items-center justify-start p-3 rounded-xl transition-colors hover:bg-gray-50 border"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100">
              {/* TODO: Stack logo should come from sanity */}
              {/* Placeholder for project image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
            </div>
            <article className="text-black">
              {/* TODO: Stack name should come from sanity */}
              <h3 className="text-[0.875rem] font-medium">{tech.name}</h3>
              {/* TODO: Stack tagline should come from sanity */}
              <p className="text-[0.75rem] text-gray-500">{tech.tagline}</p>
            </article>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link href="/stack">
          <Button variant="default" className="flex items-center gap-2">
            <span>More</span>
            <Image src="/arrow.svg" alt="arrow-right" width={15} height={15} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StackSection;
