'use client';
import React from 'react';
import { Send } from 'lucide-react';

type Props = {
  imageSrc?: string;
  imageAlt?: string;
  onSubmit?: (data: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }) => void | Promise<void>;
};

export default function ContentNowSection({
  imageSrc = '/images/p2.jpg',
  imageAlt = 'Calm river with wooden boat',
  onSubmit,
}: Props) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: String(fd.get('firstName') || ''),
      lastName: String(fd.get('lastName') || ''),
      email: String(fd.get('email') || ''),
      subject: String(fd.get('subject') || ''),
      message: String(fd.get('message') || ''),
    };
    if (onSubmit) await onSubmit(data);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We’r always happy to help.
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          If you have any questions, leave a request we will call you back!
        </p>
      </div>

      {/* Split layout */}
      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        {/* Left: Image */}
        <div className="order-2 md:order-1">
          <div className="overflow-hidden rounded-[42px] border border-gray-200 shadow-sm">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="order-1 md:order-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
                  First Name :
                </label>
                <input
                  name="firstName"
                  placeholder="First Name"
                  className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
                  required
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-gray-700">
                  Last Name :
                </label>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Email :
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Subject :
              </label>
              <input
                name="subject"
                placeholder="Subject"
                className="h-12 w-full rounded-md border border-gray-300 bg-white px-4 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Your Message :
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
