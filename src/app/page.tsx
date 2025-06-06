import { client } from '@/sanity/lib/client';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';

import ProductsSpotlight from '@/components/ProductsSpotlight';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestimonialsSection';
import StackSection from '@/components/StackSection';
import WritingsSection from '@/components/WritingsSection';

export default async function page() {
  // Fetch all required data in parallel using Promise.all
  const [
    siteSettings,
    projects,
    products,
    testimonials,
    stack,
    writings,
    services,
  ] = await Promise.all([
    // Site settings
    client.fetch(`*[_type == \"siteSettings\"][0]`),
    // Projects
    client.fetch(`*[_type == \"project\"] | order(_createdAt desc)`),
    // Products
    client.fetch(`*[_type == \"product\"] | order(_createdAt desc)`),
    // Testimonials
    client.fetch(`*[_type == \"testimonials\"] | order(_createdAt desc)`),
    // Stack
    client.fetch(`*[_type == \"stack\"] | order(orderRank)`),
    // Writings (posts)
    client.fetch(`*[_type == \"post\"] | order(publishedAt desc)`),
    // Services
    client.fetch(`*[_type == \"service\"] | order(_createdAt desc)`),
  ]);

  return (
    <div className="max-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[max-content_1fr]">
      <Sidebar siteSettings={siteSettings} />

      <section className="grid grid-rows-[max-content_1fr]">
        <Navbar />
        <main className="h-screen overflow-y-auto pb-30 md:pb-10">
          <HeroSection siteSettings={siteSettings} />
          <ProjectsSection projects={projects} />
          <ServicesSection services={services} />
          <ProductsSpotlight products={products} />
          <TestimonialsSection testimonials={testimonials} />
          <StackSection stack={stack} />
          <WritingsSection writings={writings} />
          <Footer />
        </main>
      </section>
    </div>
  );
}
