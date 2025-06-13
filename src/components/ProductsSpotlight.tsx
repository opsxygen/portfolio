import React from "react";
import { Product } from "@/sanity/lib/queries";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const ProductsSpotlight = ({ products }: { products: Product[] }) => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 md:px-0 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-[1.25rem] font-medium mb-2">Products spotlight</h2>
        <p className="text-[0.875rem] text-gray-600">
          Some of the recent product releases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-start">
        <Link href="/products" className="">
          <Button className="text-[0.75rem] bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2 group">
            <span>All products</span>
            <Image
              src="/arrow.svg"
              alt="Arrow Right"
              width={13}
              height={13}
              className="transition-all duration-300 group-hover:rotate-45"
            />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProductsSpotlight;
