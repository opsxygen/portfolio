import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="max-w-4xl mx-auto border-t border-gray-200 py-12 px-4 md:px-0">
      <div className="mb-10">
        <h2 className="text-[1.25rem] font-medium mb-2">Work with me</h2>
        <p className="text-gray-600 text-[0.875rem] max-w-[65ch]">
          Partnering with me means embarking on a journey of creativity,
          innovation, and excellence. With years of experience in product
          design, web design, and user experience, I bring a unique blend of
          skills and insights to every project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-12">
        {/* TODO: get services from sanity */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6">
            {/* TODO: get service title from sanity */}
            <h3 className="text-[1.125rem] font-medium mb-2">Product Design</h3>
            <p className="text-[0.75rem] text-gray-600 mb-4">
              Starting at
              {/* TODO: get price from sanity */}
              NGN3,000 per project
            </p>

            <div className="relative h-40 bg-gray-100 mb-6 rounded-md">
              {/* Placeholder for service image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layers"
                >
                  <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 12.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 12.18" />
                  <path d="m22 16.18-8.58 3.91a2 2 0 0 1-1.66 0L2.6 16.18" />
                </svg>
              </div>
            </div>

            {/* TODO: get service description from sanity */}
            <p className="text-gray-700 mb-6 text-[0.75rem]">
              Creating innovative and user-centric products that solve real
              problems. This service includes research, wireframing,
              prototyping, and final design.
            </p>

            {/* TODO: get service slug from sanity */}
            <Link href="">
              <Button
                size="sm"
                variant="default"
                className="flex items-center gap-2"
              >
                <span>More Details</span>
                <Image
                  src="/arrow.svg"
                  alt="arrow-right"
                  width={15}
                  height={15}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article>
          <h3 className="text-[1.125rem] font-medium mb-1">
            Can&apos;t deside or custom request?
          </h3>
          <p className="text-[0.875rem]">
            i&apos;m flexible and probably i have a plan for you
          </p>
        </article>

        <div className="flex justify-start md:justify-end gap-2">
          {/* TODO: get site email from sanity */}
          <Link href={`"mailto:akwamfon@opsxygen.com"`}>
            <Button variant="outline" className="flex items-center gap-2">
              <span>Email me</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="default" className="flex items-center gap-2">
              <span>Contact</span>
              <Image src="/arrow.svg" alt="arrow-right" width={15} height={15} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
