import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Mock data - replace with Sanity data
const articles = [
  {
    id: 1,
    title: 'The Art of Minimalist Design',
    date: 'May 15, 2023',
    category: 'Design',
    image: '/placeholder-article1.jpg',
    slug: 'the-art-of-minimalist-design',
  },
];

const ArticleCard = ({ article }: {
  article: {
    id: number;
    title: string;
    date: string;
    category: string;
    image: string;
    slug: string;
  }
}) => (
  <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
    <div className="aspect-video bg-gray-100 overflow-hidden">
      {/* TODO: Replace with actual image from Sanity */}
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
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        {/* TODO: Category should come from Sanity */}
        <span>{article.category}</span>
        <span>•</span>
        {/* TODO: Date should come from Sanity */}
        <span>{article.date}</span>
      </div>
      {/* TODO: Title should come from Sanity */}
      <h3 className="text-base font-medium ">
        {article.title}
      </h3>
    </div>
  </article>
);

const WritingsSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-[1.25rem] font-medium mb-2">
          Latest articles & publications
        </h2>
        <p className="text-[0.875rem] text-gray-600 max-w-[60ch]">
          Discover the latest industry news, insights, and trends in a few
          clicks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      <div className="">
        <Link href="/writings">
          <Button variant="default" className="flex items-center gap-2">
            <span>All articles</span>
            <Image src="/arrow.svg" alt="arrow-right" width={15} height={15} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WritingsSection;
