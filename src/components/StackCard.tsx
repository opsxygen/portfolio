import { Stack } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const StackCard = ({ stack }: { stack: Stack }) => {
  return (
    <Link href={`/stacks/${stack.slug.current}`}>
      <article
        key={stack.name}
        className="group relative flex gap-2 items-center justify-start p-3 rounded-xl transition-colors hover:bg-gray-50 border"
      >
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100">
          {stack.logo ? (
            <Image
              src={urlFor(stack.logo).url()}
              alt={stack.logo.alt}
              width={50}
              height={50}
              className="rounded-md"
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
        <article className="text-black">
          <h3 className="text-[0.875rem] font-medium">{stack.name}</h3>
          <p className="text-[0.75rem] text-gray-500">{stack.tagline}</p>
        </article>
      </article>
    </Link>
  );
};

export default StackCard;
