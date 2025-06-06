import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProjectCard from '@/components/ProjectCard';
import { PortableTextComponent } from '@/components/PortableTextComponent';

import { Metadata } from 'next';

export type paramsType = Promise<{ slug: string }>;
type PageProps = {
  params: paramsType;
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWritingBySlug(slug);

  if (!writing) {
    return {
      title: 'Writing Not Found',
      description: 'The requested writing could not be found.',
    };
  }

  return {
    title: `${writing.title}`,
    description: writing.description,
    openGraph: {
      title: writing.title,
      description: writing.description,
      images: writing.mainImage
        ? [
            {
              url: urlFor(writing.mainImage).url(),
              width: 1200,
              height: 630,
              alt: writing.mainImage.alt || writing.title,
            },
          ]
        : [],
    },
  };
}

export default async function WritingPage({ params }: PageProps) {
  const { slug } = await params;
  const [writing, randomWritings] = await Promise.all([
    getWritingBySlug(slug),
    getRandomWritings(2, slug),
  ]);

  if (!writing) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <main className="border-b pb-8 mb-8">
      <div className="max-w-3xl mx-auto py-12 px-4 md:px-0 grid gap-4">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-medium mb-2">
            {writing.title}
          </h1>

          <div className="flex items-center justify-start gap-10">
            <article>
              <span className="text-gray-500 text-[12px]">Date</span>
              <p className="text-[14px]">{formatDate(writing.publishedAt)}</p>
            </article>
            <article>
              <span className="text-gray-500 text-[12px]">Category</span>
              <p className="text-[14px]">{writing.category}</p>
            </article>
          </div>
        </header>

        {writing.mainImage && (
          <div className="relative h-130 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(writing.mainImage).url()}
              alt={writing.mainImage.alt || writing.title}
              fill
              priority
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          {writing.body && <PortableTextComponent value={writing.body} />}
        </div>

        {randomWritings.length > 0 && (
          <section className="">
            <h3 className="text-[20px] font-medium mb-6 border-t pt-8 pb-4">
              More Writings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {randomWritings.map((randomWriting) => (
                <ProjectCard key={randomWriting._id} project={randomWriting} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

async function getWritingBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
   _id,
  title,
  slug,
  mainImage,
  category,
  body,
  publishedAt,
  }`;

  const writing = await client.fetch(query, { slug });
  return writing || null;
}

async function getRandomWritings(limit: number, excludeSlug: string) {
  // First, get all project IDs except the current one
  const allWritings = await client.fetch(
    `*[_type == "post" && slug.current != $excludeSlug]{
      _id,
      title,
      slug,
      mainImage,
      category,
      body,
      publishedAt
  }`,
    { excludeSlug }
  );

  // Shuffle the array and pick the first 'limit' items
  const shuffled = [...allWritings].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}
