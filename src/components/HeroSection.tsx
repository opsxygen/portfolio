import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { SiteSettings } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const HeroSection = ({ siteSettings }: { siteSettings: SiteSettings }) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[1.75rem] w-full lg:max-w-[22ch] font-medium mb-8 md:text-left leading-[1.2]">
          {siteSettings?.siteTagline}
        </h1>

        <div className="flex flex-row items-center gap-2 mb-6">
          <div className="relative w-15 h-15 rounded-full overflow-hidden bg-gray-200">
            {siteSettings?.logo ? (
              <Image
                src={urlFor(siteSettings.logo).url()}
                alt={siteSettings.logo.alt || 'Site Logo'}
                width={500}
                height={500}
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                <span>{siteSettings?.siteTitle?.match(/\b\w/g)?.join('')}</span>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-[18px] font-medium">
              {siteSettings?.siteTitle}
            </h2>

            <p className="text-[12px] text-gray-600">
              {siteSettings?.siteSubtitle}
            </p>
          </div>
        </div>

        <p className="text-[0.875rem] max-w-[70ch] text-gray-700 mb-8">
          {siteSettings?.siteDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/about" className="w-full md:w-auto grid">
            <Button className="text-[0.75rem] bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
              <span>More about me</span>
              <Image
                src="/arrow.svg"
                alt="Arrow Right"
                width={15}
                height={15}
              />
            </Button>
          </Link>

          <Link href="/contact" className="w-full md:w-auto grid">
            <Button
              variant="outline"
              className="text-[0.75rem] border-gray-300"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
