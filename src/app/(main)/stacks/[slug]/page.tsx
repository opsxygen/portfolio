import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import StackCard from '@/components/StackCard';
import { Button } from '@/components/ui/button';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
  const stack = await getStackBySlug(params.slug);

  if (!stack) {
    return {
      title: 'Stack Not Found',
      description: 'The requested stack could not be found.',
    };
  }

  return {
    title: `${stack.name} | ${stack.tagline}`,
    description: stack.description,
    openGraph: {
      title: stack.name,
      description: stack.description,
      images: stack.logo
        ? [
            {
              url: urlFor(stack.logo).url(),
              width: 1200,
              height: 630,
              alt: stack.logo.alt || stack.name,
            },
          ]
        : [],
    },
  };
}

export default async function StackPage({ params }: PageProps) {
  const [stack, randomStacks] = await Promise.all([
    getStackBySlug(params.slug),
    getRandomStacks(3, params.slug),
  ]);

  if (!stack) {
    notFound();
  }

  return (
    <main className="border-b pb-8 mb-8">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0 grid gap-4">
        <article className="bg-[#05050508] group relative flex flex-col md:flex-row items-start gap-4 justify-start p-4 rounded-xl transition-colors hover:bg-gray-50 border">
          <div className="relative w-[64px] h-[64px] flex items-center justify-center rounded-md bg-gray-100">
            {stack.logo ? (
              <Image
                src={urlFor(stack.logo).url()}
                alt={stack.logo.alt}
                width={50}
                height={50}
                className="rounded-md w-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100">
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
            )}
          </div>
          <div className="flex justify-between items-stretch md:items-center flex-col md:flex-row gap-4">
            <article className="space-y-2 text-black">
              <div className="">
                <h3 className="text-[20px] font-medium">{stack.name}</h3>
                <p className="text-[14px] text-gray-500">{stack.tagline}</p>
              </div>
              <p className="text-[14px] text-gray-500 max-w-[65ch]">{stack.description}</p>
            </article>

            <Button className="flex items-center gap-2">
              Visit site
              <Image
                src="/arrow.svg"
                alt="arrow-right"
                width={15}
                height={15}
              />
            </Button>
          </div>
        </article>

        {randomStacks.length > 0 && (
          <section className="">
            <h3 className="text-[20px] font-medium mb-6 border-t pt-8 pb-4">
              Other Stack
            </h3>
            <p className="text-gray-600 text-[0.875rem] max-w-[65ch]">
              Software & services I use in my workflow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {randomStacks.map((randomStack) => (
                <StackCard key={randomStack._id} stack={randomStack} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

async function getStackBySlug(slug: string) {
  const query = `*[_type == "stack" && slug.current == $slug][0] {
   _id,
  name,
  tagline,
  description,
  logo,
  slug
  }`;

  const stack = await client.fetch(query, { slug });
  return stack || null;
}

async function getRandomStacks(limit: number, excludeSlug: string) {
  // First, get all project IDs except the current one
  const allStacks = await client.fetch(
    `*[_type == "stack" && slug.current != $excludeSlug]{
  _id,
  name,
  tagline,
  description,
  logo,
  slug
  }`,
    { excludeSlug }
  );

  // Shuffle the array and pick the first 'limit' items
  const shuffled = [...allStacks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}
