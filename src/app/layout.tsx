import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getSiteSettings } from '@/sanity/lib/getSiteSettings';
import { urlFor } from '@/sanity/lib/image';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: `${settings.siteTitle} - ${settings.siteSubtitle}`,
    description: settings.siteDescription,
    icons: {
      icon: urlFor(settings.logo).url(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
