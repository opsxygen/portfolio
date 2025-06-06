import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Stack } from '@/sanity/lib/queries';
import StackCard from './StackCard';

const StackSection = ({ stack }: { stack: Stack[] }) => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 md:px-0 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-[1.25rem] font-medium mb-2">Stack</h2>
        <p className="text-[0.875rem] text-gray-600 max-w-[60ch]">
          Software & services I use in my workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {stack.map((tech) => (
          <StackCard key={tech._id} stack={tech} />
        ))}
      </div>

      <div className="mt-4">
        <Link href="/stacks">
          <Button variant="default" className="flex items-center gap-2">
            <span>More</span>
            <Image src="/arrow.svg" alt="arrow-right" width={15} height={15} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StackSection;
