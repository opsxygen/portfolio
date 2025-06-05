import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import ArticleCard from './ArticleCard';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};


const WritingsSection = ({ writings }: { writings: Post[] }) => {
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
        {writings.map((writing: Post) => (
          <ArticleCard key={writing._id} article={writing} />
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
