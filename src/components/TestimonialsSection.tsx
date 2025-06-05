import React from 'react';
import { Testimonials } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonials }) => (
  <div className="flex-shrink-0 w-[300px] bg-[#05050508] p-6 rounded-lg border border-[#e5e7eb] flex flex-col gap-2">
    <div className="flex items-center gap-4 mb-4">
      <div className="relative w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
        {testimonial.image ? (
          <Image
            src={urlFor(testimonial.image).url()}
            alt={testimonial.image.alt}
            width={50}
            height={50}
            className="rounded-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
        )}
      </div>
      <div>
        {/* TODO: Replace with name from sanity */}
        <h4 className="font-medium font-base text-gray-900">
          {testimonial.name}
        </h4>
        {/* TODO: Replace with positon from sanity */}
        <p className="text-[0.75rem] text-gray-500">{testimonial.position}</p>
      </div>
    </div>
    {/* TODO: Replace with starCount from sanity */}
    <div className="flex mb-3">
      {[...Array(testimonial.starCount)].map((_, i) => (
        <svg
          key={i}
          className="w-[1.25rem] h-[1.25rem] text-black"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    {/* TODO: Replace with quote from sanity */}
    <p className="text-[0.75rem] text-gray-600 break-words whitespace-normal text-wrap">
      {testimonial.quote}
    </p>
  </div>
);

const TestimonialsSection = ({
  testimonials,
}: {
  testimonials: Testimonials[];
}) => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-8 border-t border-gray-200 overflow-hidden">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-[1.25rem] font-medium mb-2">
          Trusted by professionals
        </h2>
        <p className="text-[0.875rem] text-gray-600 max-w-[60ch]">
          Join our community of creative professionals where you can develop
          your talents and reach new heights in design.
        </p>
      </div>

      <div>
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
