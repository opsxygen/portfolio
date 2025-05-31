import { client } from './client';
import { SiteSettings, siteSettingsQuery } from './queries';

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const settings = await client.fetch<SiteSettings>(siteSettingsQuery);
    return settings;
  } catch (error) {
    console.error('Failed to fetch site settings:', error);
    // Return fallback data if fetch fails
    return {
      siteTitle: 'Akwamfon Portfolio',
      siteSubtitle: 'Personal Portfolio',
      siteDescription: 'Product Designer',
      logo: {
        url: '',
        alt: 'AK'
      },
      socialLinks: []
    };
  }
}
