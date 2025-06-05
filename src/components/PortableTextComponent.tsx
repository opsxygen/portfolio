/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableTextComponents, PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface PortableTextComponentProps {
  value: any;
}

export const PortableTextComponent: React.FC<PortableTextComponentProps> = ({
  value,
}) => {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className="mb-4 text-[14px]">{children}</p>,
      h1: ({ children }) => <h1 className="text-[28px] font-medium mb-4 mt-8">{children}</h1>,
      h2: ({ children }) => <h2 className="text-[20px] font-medium mb-3 mt-6">{children}</h2>,
      h3: ({ children }) => <h3 className="text-[18px] font-medium mb-2 mt-5">{children}</h3>,
      h4: ({ children }) => <h4 className="text-[16px] font-medium mb-2 mt-4">{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
          {children}
        </blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
          {children}
        </code>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2 text-[14px]">{children}</li>,
      number: ({ children }) => <li className="mb-2 text-[14px]">{children}</li>,
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) return null;
        return (
          <div className="my-6 rounded-lg overflow-hidden">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || ' '}
              width={1200}
              height={630}
              className="w-full h-auto"
              priority={false}
            />
            {value.caption && (
              <p className="text-center text-sm text-gray-500 mt-2">
                {value.caption}
              </p>
            )}
          </div>
        );
      },
    },
  };

  return (
    <div className="prose max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
};
