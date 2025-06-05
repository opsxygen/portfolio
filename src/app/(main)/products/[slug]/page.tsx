import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import { PortableTextComponent } from '@/components/PortableTextComponent';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gallery } from '@/components/Gallery';

import { Metadata } from 'next';

export type paramsType = Promise<{ slug: string }>;
type PageProps = {
  params: paramsType;
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | ${product.tagline}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.mainImage
        ? [
            {
              url: urlFor(product.mainImage).url(),
              width: 1200,
              height: 630,
              alt: product.mainImage.alt || product.name,
            },
          ]
        : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const [product, randomProducts] = await Promise.all([
    getProductBySlug(slug),
    getRandomProducts(3, slug),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <main className="border-b pb-8 mb-8">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0 grid gap-8">
        <header className="mb-8">
          <h1 className="text-[28px] font-medium mb-1">{product.name}</h1>
          <h3 className="text-[16px] mb-2">{product.tagline}</h3>
          <p className="text-[14px]">{product.description}</p>
        </header>

        <section>
          <Gallery media={product.gallery} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={product.liveDemo} target="_blank" className="w-full grid">
            <Button className="flex items-center gap-2" variant="outline">
              Live Demo
              <Image
                src="/arrow-black.svg"
                alt="Arrow Right"
                width={15}
                height={15}
              />
            </Button>
          </Link>
          <Link href={product.liveDemo} target="_blank" className="w-full grid">
            <Button className="flex items-center gap-2">
              Buy - NGN{product.price.toLocaleString()}
              <Image
                src="/arrow.svg"
                alt="Arrow Right"
                width={15}
                height={15}
              />
            </Button>
          </Link>
        </section>

        <section>
          <PortableTextComponent value={product.body} />
        </section>

        {randomProducts.length > 0 && (
          <section>
            <h3 className="text-[20px] font-medium mb-6 border-t pt-8 pb-4">
              More Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {randomProducts.map((randomProduct) => (
                <ProductCard key={randomProduct._id} product={randomProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

async function getProductBySlug(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
   _id,
  name,
  tagline,
  description,
  mainImage,
  slug,
  gallery[],
  body,
  liveDemo,
  price,
  buy
  }`;

  const project = await client.fetch(query, { slug });
  return project || null;
}

async function getRandomProducts(limit: number, excludeSlug: string) {
  // First, get all project IDs except the current one
  const allProducts = await client.fetch(
    `*[_type == "product" && slug.current != $excludeSlug]{
      _id,
      name,
      slug,
      tagline,
      mainImage,
      description,
      gallery[],
      body,
      liveDemo,
      price,
      buy
  }`,
    { excludeSlug }
  );

  // Shuffle the array and pick the first 'limit' items
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}
