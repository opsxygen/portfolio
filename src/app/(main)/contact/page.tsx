'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { client } from '@/sanity/lib/client';
import { faqsQuery, FAQ } from '@/sanity/lib/queries';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// Define the form schema with Zod
const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
});

// Define the type for our form data
type ContactFormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    // @ts-expect-error: zodResolver is not compatible with useForm
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoadingFaqs, setIsLoadingFaqs] = useState(true);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Submit form data to Formspree
      const response = await fetch('https://formspree.io/f/xrbkzvqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Reset form after successful submission
      reset();
      setFormSubmitted(true);

      // Hide success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  // Fetch FAQs from Sanity
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setIsLoadingFaqs(true);
        const fetchedFaqs = await client.fetch<FAQ[]>(faqsQuery);
        setFaqs(fetchedFaqs);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setIsLoadingFaqs(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Back to homepage link */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
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

      {/* Contact Form Section */}
      <div className="mb-16">
        <h1 className="text-[1.25rem] font-medium mb-2">Let&apos;s Connect</h1>
        <p className="text-gray-600 mb-8 text-[0.875rem]">
          Ready to bring your ideas to life? Let&apos;s collaborate! Whether you
          need product design, a website, or UX/UI solutions, I&apos;m here to
          help. Reach out to discuss your project!
        </p>

        {formSubmitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
            Thank you for your message! I will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                {...register('firstName')}
                className={`w-full p-3 border bg-[#fafafa] ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                {...register('lastName')}
                className={`w-full p-3 border bg-[#fafafa] ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              {...register('email')}
              className={`w-full p-3 border bg-[#fafafa] ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+234 812 345 6789"
              {...register('phone')}
              className="w-full p-3 border bg-[#fafafa] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Leave me a message..."
              {...register('message')}
              rows={5}
              className={`w-full p-3 border bg-[#fafafa] ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              size="default"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-[1.25rem] font-medium mb-2">Questions? Answers.</h2>
        <p className="text-gray-600 mb-8 text-[0.875rem]">
          Find solutions to common queries here.
        </p>

        <div className="space-y-4">
          {isLoadingFaqs ? (
            // Loading state
            <div className="text-center py-8">
              <p>Loading FAQs...</p>
            </div>
          ) : (
            // Display FAQs from Sanity
            faqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md overflow-hidden bg-[#fafafa]"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="border rounded-xs bg-gray-100 text-gray-500 border-gray-200 px-[.3rem] text-xl">
                    {activeQuestion === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {activeQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-3 bg-gray-50 overflow-hidden"
                    >
                      <p className="text-gray-700">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
