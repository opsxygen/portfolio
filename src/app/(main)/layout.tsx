import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch site settings
  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0]`);

  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 md:grid-cols-[max-content_1fr]">
      <Sidebar siteSettings={siteSettings} />

      <main className="grid grid-rows-[max-content_1fr]">
        <Navbar />
        <main className="h-[calc(100vh-5rem)] pb-30 md:pb-10 overflow-y-auto">
          {children}
          <Footer />
        </main>
      </main>
    </div>
  );
}
