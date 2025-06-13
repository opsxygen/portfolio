import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { Post } from "@/sanity/lib/queries";

const formatDateYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    // month: 'long',
  });
};
const formatDateMonthYear = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};
const formatDateMonthYearDay = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const About = async () => {
  const [
    siteSettings,
    projects,
    posts,
    certifications,
    workExperience,
    education,
  ] = await Promise.all([
    // Site settings
    client.fetch(`*[_type == \"siteSettings\"][0]`),

    // Projects
    client.fetch(`*[_type == \"project\"] | order(_createdAt desc)`),

    // Writings (posts)
    client.fetch(`*[_type == \"post\"] | order(publishedAt desc)`),

    // Certifications
    client.fetch(`*[_type == \"certifications\"] | order(_createdAt desc)`),

    // Work Experience
    client.fetch(`*[_type == \"workExperience\"] | order(_createdAt desc)`),

    // Education
    client.fetch(`*[_type == \"education\"] | order(_createdAt desc)`),
  ]);

  return (
    <main className="py-12 md:py-16 md:pb-5 px-4 border-b mb-8">
      <div className="max-w-3xl mx-auto">
        {/* Back to homepage link */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-[14px] text-gray-500 hover:text-gray-900 flex items-center gap-1"
          >
            <Image
              src="/arrow-left.svg"
              alt="arrow-left"
              width={15}
              height={15}
            />
            Back to homepage
          </Link>

          {/* About */}
          <section className="py-10 border-b">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-row items-center gap-2 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  {siteSettings?.logo ? (
                    <Image
                      src={urlFor(siteSettings.logo).url()}
                      alt={siteSettings.logo.alt || "Site Logo"}
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                      <span>
                        {siteSettings?.siteTitle?.match(/\b\w/g)?.join("")}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-[18px] font-semibold">
                    {siteSettings?.siteTitle}
                  </h2>

                  <p className="text-[12px]">{siteSettings?.siteSubtitle}</p>
                </div>
              </div>
              <span className="text-[20px] font-medium ">About</span>
              <p className="text-[0.875rem] max-w-[70ch] mt-3 text-gray-700 mb-8">
                {siteSettings?.siteDescription}
              </p>

              <div className="flex flex-row gap-2">
                <Link href="/projects">
                  <Button className="text-[0.75rem] bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
                    <span>My projects</span>
                    <Image
                      src="/arrow.svg"
                      alt="Arrow Right"
                      width={15}
                      height={15}
                    />
                  </Button>
                </Link>

                <Link href="/contact">
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

          {/* Contact */}
          <section className="grid gap-4 pt-8 border-b pb-8">
            <span className="text-[20px] font-medium">Contact</span>

            <ul className="grid gap-2">
              {siteSettings.socialLinks.map(
                (s: { initials: string; url: string; platform: string }) => (
                  <li key={s.initials}>
                    <Link
                      href={s.url}
                      className="max-w-xs grid grid-cols-2 text-[14px]"
                    >
                      <span className="capitalize">{s.platform}</span>
                      <span>
                        <span className="border rounded-xs bg-gray-100 text-gray-500 border-gray-200 px-[.2rem]">
                          {s.initials}
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Education */}
          <section className="grid gap-4 pt-8 border-b pb-8">
            <span className="text-[20px] font-medium">Education</span>

            <ul className="grid gap-[30px]">
              {education.map(
                (s: {
                  endDate: string;
                  url: string;
                  university: string;
                  degree: string;
                  description: string;
                }) => (
                  <Link key={s.degree} href={s.url || "#"}>
                    <li
                      key={s.endDate}
                      className="grid grid-cols-1 md:grid-cols-[10rem_1fr] text-[14px]"
                    >
                      <span className="capitalize text-[#4b5563] mb-2 md:mb-0">
                        {formatDateYear(s.endDate)}
                      </span>

                      <article className="flex flex-col">
                        <span className="mb-2 text-[#4b5563]">{s.degree}</span>
                        <span className="font-medium mb-1">{s.university}</span>
                        <p className="max-w-[54ch] text-[#4b5563]">
                          {s.description}
                        </p>
                      </article>
                    </li>
                  </Link>
                )
              )}
            </ul>
          </section>

          {/* Projects */}
          <section className="grid gap-4 pt-8 border-b pb-8">
            <span className="text-[20px] font-medium">Projects</span>

            <ul className="grid gap-[30px]">
              {projects.map(
                (s: {
                  title: string;
                  fullTitle: string;
                  url: string;
                  service: string;
                  description: string;
                  publishedAt: string;
                }) => (
                  <li
                    key={s.fullTitle}
                    className="grid grid-cols-1 md:grid-cols-[10rem_1fr] text-[14px]"
                  >
                    <span className="capitalize text-[#4b5563]  mb-2 md:mb-0">
                      {formatDateMonthYear(s.publishedAt)}
                    </span>
                    <article className="flex flex-col">
                      <Link
                        href={s.url || "#"}
                        className="mb-2 text-[#4b5563] flex items-center gap-2 hover:underline group"
                      >
                        <span className="text-[#4b5563]">{s.fullTitle}</span>
                        <Image
                          src="/arrow-black.svg"
                          alt="arrow-right"
                          width={14}
                          height={14}
                          className="group-hover:rotate-45 transition-all duration-300"
                        />
                      </Link>

                      <span className="font-medium mb-1">{s.service}</span>
                      <p className="max-w-[54ch] text-[#4b5563]">
                        {s.description}
                      </p>
                    </article>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Work experience */}
          <section className="grid gap-4 pt-8 border-b pb-8">
            <span className="text-[20px] font-medium">Work experience</span>

            <ul className="grid gap-[30px]">
              {workExperience.map(
                (s: {
                  position: string;
                  company: string;
                  description: string;
                  startDate: string;
                  endDate: string;
                  url: string;
                }) => (
                  <li
                    key={s.position}
                    className="grid grid-cols-1 md:grid-cols-[10rem_1fr] text-[14px]"
                  >
                    <span className="capitalize text-[#4b5563] mb-2 md:mb-0">
                      {formatDateMonthYear(s.startDate)} - <br />
                      {formatDateMonthYear(s.endDate)}
                    </span>
                    <article className="flex flex-col">
                      <Link
                        href={s.url || "#"}
                        className="mb-2 text-[#4b5563] flex items-center gap-2 hover:underline group"
                      >
                        {s.position}
                        <Image
                          src="/arrow-black.svg"
                          alt="arrow-right"
                          width={14}
                          height={14}
                          className="group-hover:rotate-45 transition-all duration-300"
                        />
                      </Link>
                      <span className="font-medium mb-1">{s.company}</span>
                      <p className="max-w-[54ch] text-[#4b5563]">
                        {s.description}
                      </p>
                    </article>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Certifications */}
          <section className="grid gap-4 pt-8 border-b pb-8">
            <span className="text-[20px] font-medium">Certifications</span>

            <ul className="grid gap-[30px]">
              {certifications.map(
                (s: {
                  name: string;
                  school: string;
                  endDate: string;
                  url: string;
                }) => (
                  <li
                    key={s.name}
                    className="grid grid-cols-1 md:grid-cols-[10rem_1fr] text-[14px]"
                  >
                    <span className="capitalize text-[#4b5563] mb-2 md:mb-0">
                      {formatDateMonthYear(s.endDate)}
                    </span>
                    <article className="flex flex-col">
                      <Link
                        href={s.url || "#"}
                        className="mb-2 text-[#4b5563] flex items-center gap-2 hover:underline group"
                      >
                        <span className="font-medium  text-[#4b5563]">
                          {s.school}
                        </span>
                        <Image
                          src="/arrow-black.svg"
                          alt="arrow-right"
                          width={14}
                          height={14}
                          className="group-hover:rotate-45 transition-all duration-300"
                        />
                      </Link>

                      <span className="">{s.name}</span>
                    </article>
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Writing */}
          <section className="grid gap-4 pt-8">
            <span className="text-[20px] font-medium">Writing</span>

            <ul className="grid gap-[30px]">
              {posts.map((s: Post) => (
                <li
                  key={s.title}
                  className="grid grid-cols-1 md:grid-cols-[10rem_1fr] text-[14px]"
                >
                  <span className="capitalize text-[#4b5563] mb-3 md:mb-0">
                    {formatDateMonthYearDay(s.publishedAt)}
                  </span>
                  <ArticleCard article={s} aboutPage />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default About;
