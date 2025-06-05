import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Project } from '@/sanity/lib/queries';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <article className="border border-gray-200 rounded-lg overflow-hidden group">
      <figure className="relative group h-60 bg-gray-100">
        {project?.mainImage ? (
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.mainImage.alt || 'Site Logo'}
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
      <div className="p-4">
        <h3 className="font-medium text-base mb-2">{project.title}</h3>

        <p className="text-[0.75rem] text-gray-600 mb-3 line-clamp-2">
          {project.description}
        </p>

        <p className="text-[0.75rem] text-gray-500">
          {project.service} — {formatDate(project.publishedAt)}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
