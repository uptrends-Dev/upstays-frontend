"use client";
import React, { useState, FormEvent } from "react";

/**
 * ContactSection
 * TSX + TailwindCSS responsive section inspired by the provided mockup.
 *
 * Props:
 *  - imageSrc: optional override for the hero image
 */
export default function ContactSection({
  imageSrc = "/images/p3.jpg", // replace with your path
}: {
  imageSrc?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setForm((f) => ({ ...f, [name]: target.checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook up to your API
    console.log("Submitting form", form);
    alert("Thanks! We'll be in touch soon.");
  };

  return (
    <section className="w-full bg-[#e7e7e7]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid items-stretch gap-8 md:grid-cols-2">
          {/* Image side */}
          <div className="relative order-2 overflow-hidden md:order-1">
            <div className="relative h-72 w-full rounded-3xl md:h-full md:min-h-[520px]">
              <img
                src={imageSrc}
                alt="Roasted turkey with citrus and herbs"
                className="absolute inset-0 h-full w-full rounded-3xl object-cover md:rounded-tr-[140px] md:rounded-br-[140px]"
              />
              {/* Decorative soft vignette to mimic mock curve against the background */}
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F5F1E9]/40 to-transparent md:w-28" />
            </div>
          </div>

          {/* Form side */}
          <div className="order-1 md:order-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                Get In Touch
              </h2>

              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={onChange}
                      className="h-12 rounded-xl border border-gray-200 px-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={onChange}
                      className="h-12 rounded-xl border border-gray-200 px-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                      required
                    />
                  </div>

                  {/* <div className="flex flex-col">
                    <label htmlFor="subject" className="mb-1 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={onChange}
                        className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-gray-900 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        <option>General Inquiry</option>
                        <option>Reservations</option>
                        <option>Catering</option>
                        <option>Feedback</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M5 7l5 6 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={onChange}
                    className="h-12 rounded-xl border border-gray-200 px-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Write your message here...
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  />
                </div>

                {/* <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={onChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900/20"
                  />
                  <span className="text-sm text-gray-600">
                    Collaboratively formulate principle capital. Progressively evolve user
                  </span>
                </label> */}

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E50914] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#c10812] focus:outline-none focus:ring-2 focus:ring-[#E50914]/30 md:text-base"
                >
                  <span>SUBMIT NOW</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    <path d="M13.25 4.5l7.25 7.5-7.25 7.5v-4.5H3.5v-6h9.75v-4.5z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
