import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Button } from './ui/button';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.slug.current}`}>
      <div className="border border-gray-200 rounded-lg overflow-hidden group">
        <div className="relative h-48 bg-gray-100">
          {product?.mainImage ? (
            <Image
              src={urlFor(product.mainImage).url()}
              alt={product.mainImage.alt || 'Site Logo'}
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
        </div>
        <div className="p-4">
          <article className="flex items-center flex-wrap  mb-2 gap- justify-between">
            <h3 className="font-medium text-base">{product.name}</h3>
            <span className="text-[0.875rem] font-medium border rounded-full bg-gray-100 text-black border-gray-200 px-[.2rem]">
              NGN{product.price.toLocaleString()}
            </span>
          </article>
          <p className="text-[0.75rem] text-gray-600 mb-3">{product.tagline}</p>
          <div className="grid w-full">
            <Button
              variant="outline"
              className="text-black border-black flex items-center gap-2 w-full"
            >
              View Details
              <Image
                src="/arrow-black.svg"
                alt="Arrow Right"
                width={15}
                height={15}
              />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
