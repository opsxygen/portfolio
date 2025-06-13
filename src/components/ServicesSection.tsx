import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="max-w-3xl mx-auto border-t border-gray-200 py-12 px-4 md:px-0">
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
        {services.map((service) => (
          <Link href={service.linkTo || ""} key={service._id}>
            <article className="border border-gray-200 rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md">
              <figure className="relative group h-60 overflow-hidden bg-gray-100 mb-6 absolute opacity-[.2] top-0 left-[50%] w-[50%]">
                {service?.image ? (
                  <Image
                    src={urlFor(service.image).url()}
                    alt={service.image.alt || "Site Logo"}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all"
                  />
                ) : (
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
                      className="lucide lucide-image"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                )}
              </figure>
              <div className="absolute flex items-start justify-center gap-4 flex-col top-0 left-0 w-full h-full z-10 p-6">
                <h3 className="text-[1.125rem] font-medium">{service.title}</h3>
                <p className="text-[0.75rem] text-black bg-gray-100 rounded-[4px] inline-block py-1 px-2">
                  Starting at NGN{service.startPrice.toLocaleString()} per
                  project
                </p>

                <p className="text-black text-[0.75rem]">
                  {service.description}
                </p>

                <Button className="text-[0.75rem] bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2 group">
                  <span>More Details</span>
                  <Image
                    src="/arrow.svg"
                    alt="Arrow Right"
                    width={13}
                    height={13}
                    className="transition-all duration-300 group-hover:rotate-45"
                  />
                </Button>
              </div>
            </article>
          </Link>
        ))}
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
            <Button className="text-[0.75rem] bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2 group">
              <span>Contact</span>
              <Image
                src="/arrow.svg"
                alt="Arrow Right"
                width={13}
                height={13}
                className="transition-all duration-300 group-hover:rotate-45"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
