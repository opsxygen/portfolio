'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from './ui/button';
import { getSiteSettings } from '@/sanity/lib/getSiteSettings';
import { SiteSettings } from '@/sanity/lib/queries';

const index = [
  { label: 'Main Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const resources = [
  { label: 'Project', href: '/projects' },
  { label: 'Product', href: '/products' },
  { label: 'Blog', href: '/writing' },
  { label: 'Stack', href: '/stacks' },
];

const contact = [
  { label: 'Email', href: 'mailto:akwamfon@gmail.com' },
  { label: 'Discord', href: 'https://discord.com/users/akwamfon' },
  { label: 'Calendly', href: 'https://calendly.com/akwamfon' },
];

const fallbackSocials = [
  { href: '#', label: 'Facebook', initial: 'FB' },
  { href: '#', label: 'Twitter', initial: 'TW' },
  { href: '#', label: 'Dribbble', initial: 'DB' },
  { href: '#', label: 'Behance', initial: 'BE' },
];

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [socialLinks, setSocialLinks] = useState(fallbackSocials);
  useEffect(() => {
    // Fetch site settings
    const fetchSettings = async () => {
      const settings = await getSiteSettings();
      setSiteSettings(settings);
    };

    fetchSettings();
  }, []);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const settings = await getSiteSettings();
        if (settings.socialLinks && settings.socialLinks.length > 0) {
          // Transform Sanity social links to match the format we need
          const formattedLinks = settings.socialLinks.map((link) => ({
            href: link.url,
            label:
              link.platform.charAt(0).toUpperCase() + link.platform.slice(1), // Capitalize platform name
            initial: link.initials,
          }));
          setSocialLinks(formattedLinks);
        }
      } catch (error) {
        console.error('Failed to fetch social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email) return;
  
    setIsSubmitting(true);
  
    try {
      const formId = process.env.NEXT_PUBLIC_KIT_FORM_ID;
      const apiKey = process.env.NEXT_PUBLIC_KIT_API_V3;
  
      if (!formId || !apiKey) {
        throw new Error('Missing ConvertKit API key or Form ID');
      }
  
      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
          // Optional: you can add `first_name` here if you have it
          // first_name: firstName
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setSubscriptionStatus('success');
        setEmail('');
      } else {
        console.error('Subscription failed:', data);
        setSubscriptionStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubscriptionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const formattedDate = format(currentTime, 'MMM d, yyyy - h:mm:ss a');
  const location = 'FTC, Nigeria'; // This would typically come from a geolocation API or user settings

  return (
    <footer className="w-full bg-white py-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-gray-50 rounded-lg mb-10">
          <div className="grid items-center gap-y-4 grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-10 border bg-[#fafafa] px-[1.25rem] py-[2.5rem] rounded-2xl">
            <article>
              <h3 className="text-[1.125rem] font-medium mb-1">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-600 mb-4 text-[0.875rem]">
                Join now and never miss out on our stuff again.
              </p>
            </article>

            <form
              onSubmit={handleSubscribe}
              className="grid grid-cols-2 md:flex gap-2 bg-[#05050508] px-3 py-1 md:py-2 rounded-full"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow border-none focus:outline-none px-4 md:px-3 focus:ring-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                size="default"
                disabled={isSubmitting}
                className="bg-[#14142B] hover:bg-[#14142B]/90 text-white rounded-full"
              >
                Subscribe
              </Button>
            </form>

            {subscriptionStatus === 'success' && (
              <p className="mt-2 text-green-600">Thanks for subscribing!</p>
            )}

            {subscriptionStatus === 'error' && (
              <p className="mt-2 text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>

        {/* Date and Time */}
        <div className="border-b border-gray-200 pb-10 mb-6">
          <p className="text-[1.5rem] md:text-[2rem] font-medium">
            {formattedDate}
          </p>
          <p className="text-gray-600">Local time in {location}</p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-b pt-6 pb-10">
          {/* Index Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Index</h4>
            <ul className="space-y-2">
              {index.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              {contact.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="font-medium text-lg mb-4">Portfolio</h4>
            <ul className="space-y-2">
              {socialLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left text-gray-600 text-sm">
          <p>Copyright © {siteSettings?.siteTitle}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
