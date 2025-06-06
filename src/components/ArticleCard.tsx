import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const ArticleCard = ({
  article,
  aboutPage,
}: {
  article: Post;
  aboutPage?: boolean;
}) => {
  if (aboutPage)
    return (
      <Link href={`/writings/${article.slug.current}`}>
        <article className="group relative flex flex-col overflow-hidden rounded-xl w-full md:max-w-md">
          <div className="aspect-video min-h-[250px] bg-gray-100 overflow-hidden rounded-b-xl">
            {article.mainImage ? (
              <Image
                src={urlFor(article.mainImage).url()}
                alt={article.mainImage.alt || 'Post Image'}
                width={500}
                height={500}
                className="object-cover h-full w-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
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
          <article className="py-4 flex-1 flex flex-col">
            <h3 className="text-base font-medium  mb-2">{article.title}</h3>
            <div className="text-[12px] text-gray-500">
              <span>{article.category}</span>
            </div>
          </article>
        </article>
      </Link>
    );

  return (
    <Link href={`/writings/${article.slug.current}`}>
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
        <div className="aspect-video min-h-[250px] bg-gray-100 overflow-hidden rounded-b-xl">
          {article.mainImage ? (
            <Image
              src={urlFor(article.mainImage).url()}
              alt={article.mainImage.alt || 'Post Image'}
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
        <article className="p-4 flex-1 flex flex-col bg-[#05050508]">
          <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
            <span>{article.category}</span>
            <span>•</span>

            <span>{formatDate(article.publishedAt)}</span>
          </div>

          <h3 className="text-base font-medium ">{article.title}</h3>
        </article>
      </article>
    </Link>
  );
};

export default ArticleCard;
