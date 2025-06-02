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

export default function page() {
  return (
    <div className="max-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[max-content_1fr]">
      <Sidebar />

      <section className="grid grid-rows-[max-content_1fr]">
        <Navbar />
        <main className="h-screen overflow-y-auto pb-30 md:pb-10">
          <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <ProductsSpotlight />
          <TestimonialsSection />
          <StackSection />
          <WritingsSection />
          <Footer />
        </main>
      </section>
    </div>
  );
}
