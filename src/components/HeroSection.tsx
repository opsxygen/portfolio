import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[1.75rem] max-w-[22ch] font-medium mb-8 md:text-left leading-[1.2]">
          Transforming Ideas into Stunning Digital Experiences
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-4 mb-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200">
            {/* TODO: This should come from sanity siteSettings - Site Logo */}
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xl">
              <span>AK</span>
            </div>
          </div>

          <div>
            {/* TODO: This should come from sanity siteSettings - Site Title */}
            <h2 className="text-[1.125rem] font-semibold">
              Akwamfon Portfolio
            </h2>
            {/* TODO: This should come from sanity siteSettings - Site Subtitle */}
            <p className="text-[0.75rem] text-gray-600">Product Designer</p>
          </div>
        </div>

        <p className="text-[0.875rem] max-w-[70ch] text-gray-700 mb-8">
          {/* TOOD: This should come from sanity siteSettings - Site Description */}
          Welcome to my portfolio! I am a passionate Product Designer, Web
          Designer, and Solopreneur with a keen eye for detail and a commitment
          to creating exceptional user experiences. Dive in to explore my work
          and discover how I can help bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/about" className='w-full md:w-auto grid'>
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

          <Link href="/contact" className='w-full md:w-auto grid'>
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
