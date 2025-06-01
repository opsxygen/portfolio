// import HeroSection from '@/components/HeroSection';
// import ProjectsSection from '@/components/ProjectsSection';
// import ServicesSection from '@/components/ServicesSection';
// import ContactSection from '@/components/ContactSection';
// import ProductsSpotlight from '@/components/ProductsSpotlight';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function page() {
  return (
    <div className="max-h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[max-content_1fr]">
      <Sidebar />

      <section className="grid grid-rows-[max-content_1fr]">
        <Navbar />
        <main className="h-screen overflow-y-auto pb-30 md:pb-10">
          {/* <HeroSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
          <ProductsSpotlight />
          <Footer /> */}

          <Footer />
        </main>
      </section>
    </div>
  );
}
