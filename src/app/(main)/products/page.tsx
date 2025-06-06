import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import ProductCard from '@/components/ProductCard';

const Products = async () => {
  // Fetch projects
  const products = await client.fetch<Product[]>(
    `*[_type == "product"] | order(_createdAt desc)`
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
            Products spotlight
          </h2>
          <p className="text-gray-600 text-[0.875rem] max-w-[65ch]">
            Some of the recent product releases.
          </p>
        </article>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.slug.current}`} key={product._id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
