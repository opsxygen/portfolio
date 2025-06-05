import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProjectCard from '@/components/ProjectCard';
import { PortableTextComponent } from '@/components/PortableTextComponent';

import { Metadata } from 'next';

type PageProps = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.fullTitle} | ${project.service}`,
    description: project.description,
    openGraph: {
      title: project.fullTitle,
      description: project.description,
      images: project.mainImage
        ? [
            {
              url: urlFor(project.mainImage).url(),
              width: 1200,
              height: 630,
              alt: project.mainImage.alt || project.fullTitle,
            },
          ]
        : [],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const [project, randomProjects] = await Promise.all([
    getProjectBySlug(params.slug),
    getRandomProjects(3, params.slug),
  ]);

  if (!project) {
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
            {project.fullTitle}
          </h1>

          <div className="flex items-center justify-start gap-10">
            <article>
              <span className="text-gray-500 text-[12px]">Date</span>
              <p className="text-[14px]">{formatDate(project.publishedAt)}</p>
            </article>
            <article>
              <span className="text-gray-500 text-[12px]">Service</span>
              <p className="text-[14px]">{project.service}</p>
            </article>
            <article>
              <span className="text-gray-500 text-[12px]">Client</span>
              <p className="text-[14px]">{project.client}</p>
            </article>
          </div>
        </header>

        {project.mainImage && (
          <div className="relative h-130 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.mainImage.alt || project.fullTitle}
              fill
              priority
            />
          </div>
        )}

        <section className="max-w-2xl mx-auto">
          <h3 className="text-[20px] font-medium mb-2">Project Overview</h3>
          <p className="text-gray-700 mb-6 text-[14px]">
            {project.description}
          </p>
        </section>

        <div className="max-w-3xl mx-auto">
          {project.body && (
            <PortableTextComponent value={project.body} />
          )}
        </div>

        {randomProjects.length > 0 && (
          <section className="">
            <h3 className="text-[20px] font-medium mb-6 border-t pt-8 pb-4">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {randomProjects.map((randomProject) => (
                 <ProjectCard key={randomProject._id} project={randomProject} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

async function getProjectBySlug(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    fullTitle,
    service,
    client,
    slug,
    mainImage,
    description,
    publishedAt,
    body
  }`;

  const project = await client.fetch(query, { slug });
  return project || null;
}

async function getRandomProjects(limit: number, excludeSlug: string) {
  // First, get all project IDs except the current one
  const allProjects = await client.fetch(
    `*[_type == "project" && slug.current != $excludeSlug]{
      _id,
      title,
      slug,
      service,
      mainImage,
      description,
      publishedAt
  }`,
    { excludeSlug }
  );

  // Shuffle the array and pick the first 'limit' items
  const shuffled = [...allProjects].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}
