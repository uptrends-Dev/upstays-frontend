"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ServiceItem = {
  title: string;
  image: string;
  // optional: pass a small icon (24px-ish) for the green badge
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
  description?: string;
};

interface ServicesProps {
  heading?: string;
  subheading?: string;
  items: ServiceItem[];
}

const DefaultFactoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M3 20h18v-2H3v2Zm2-4h14V4l-6 3V4L8 7V4H5v12Z" />
  </svg>
);

const ServicesWeProvide: React.FC<ServicesProps> = ({
  heading = "SERVICES WE PROVIDE",
  subheading,
  items,
}) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <div className="mx-auto mb-3 h-1 w-24 rounded bg-red-500" />
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto mt-3 max-w-3xl text-balance text-sm text-muted-foreground md:text-base">
            {subheading}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, image, Icon = DefaultFactoryIcon, href }, i) => {
          const Card = (
            <motion.article
              key={title + i}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl shadow-md ring-1 ring-black/5"
            >
              {/* Background image */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority={i < 2}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Top-left green badge */}
              <div className="absolute left-4 top-4 z-10 rounded-md bg-red p-3 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>

              {/* Bottom ribbon with diagonal corner */}
              <div className="relative z-10">
                <div className="relative bg-red px-5 py-3 text-white">
                  <h3 className="text-sm font-extrabold tracking-wide md:text-base">
                    {title.toUpperCase()}
                  </h3>

                  {/* right-bottom diagonal accent (orange) */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 -bottom-3 h-6 w-6 rotate-45 bg-darkGray"
                  />
                </div>
              </div>

              {/* Focus ring & hover lift */}
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-emerald-600/0 transition group-hover:-translate-y-0.5 group-hover:shadow-lg group-focus-within:ring-2 group-focus-within:ring-emerald-600/60" />
            </motion.article>
          );

          return href ? (
            <a key={title + i} href={href} className="focus:outline-none">
              {Card}
            </a>
          ) : (
            Card
          );
        })}
      </div>
    </section>
  );
};

export default ServicesWeProvide;
