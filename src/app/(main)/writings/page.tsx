import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import ArticleCard from '@/components/ArticleCard';

const Writings = async () => {
  // Fetch projects
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(_createdAt desc)`
  );

  return (
    <main className="border-b pb-8 mb-8">
      <div className="max-w-3xl mx-auto py-12 px-4 md:px-0">
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
        </div>

        <article className="mb-8">
          <h2 className="text-[1.25rem] font-medium mb-2">
            Latest articles & publications
          </h2>
          <p className="text-gray-600 text-[0.875rem] max-w-[65ch]">
            Discover the latest industry news, insights, and trends in a few
            clicks.
          </p>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link href={`/writings/${post.slug.current}`} key={post._id}>
              <ArticleCard article={post} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Writings;
