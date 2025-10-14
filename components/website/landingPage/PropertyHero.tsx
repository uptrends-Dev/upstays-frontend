"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

type ServiceItem = {
  kind: "service";
  title: string;
  image: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  href?: string;
};

type PropertyItem = {
  kind: "property";
  title: string;
  image: string;
  location: string;
  description: string;
  price: string;
  status: "FOR RENT" | "FOR SALE";
};

interface SectionProps {
  heading: string;
  subheading?: string;
  items: Array<ServiceItem | PropertyItem>;
}

const DefaultFactoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M3 20h18v-2H3v2Zm2-4h14V4l-6 3V4L8 7V4H5v12Z" />
  </svg>
);

type Item = ServiceItem | PropertyItem;

const Card: React.FC<{ item: Item }> = ({ item }) => {
  if (item.kind === "service") {
    const Icon = item.Icon ?? DefaultFactoryIcon;
    return (
      <motion.article className="group relative overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="absolute left-4 top-4 z-10 rounded-md bg-emerald-600 p-3 text-white shadow">
          <Icon className="h-6 w-6" />
        </div>

        <div className="relative z-10">
          <div className="relative bg-emerald-600 px-5 py-3 text-white">
            <h3 className="text-sm font-extrabold tracking-wide md:text-base">
              {item.title.toUpperCase()}
            </h3>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article className="group relative overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={`absolute top-4 right-4 rounded-md p-2 text-white bg-red
        `}
      >
        {item.status}
      </div>

      <div className="relative z-10">
        <div className="relative bg-gray-200 px-5 py-3 text-darkGray">
          <h3 className="text-lg font-extrabold">{item.title}</h3>
          <p className="mt-2 text-sm">
            <MapPin className=" inline text-red scale-90" /> {item.location}
          </p>
          <p className="mt-2 text-sm">{item.description}</p>
          <hr className="text-black/20" />
          <p className="mt-2 font-bold text-red">{item.price}</p>
        </div>
      </div>
    </motion.article>
  );
};

const Section: React.FC<SectionProps> = ({ heading, subheading, items }) => (
  <section className="mx-auto w-full max-w-7xl px-4 py-12">
    <div className="mb-10 text-center">
      <div className="mx-auto mb-3 h-1 w-24 rounded bg-red-500" />
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mx-auto mt-3 max-w-3xl text-balance text-sm text-muted-foreground md:text-base">
          {subheading}
        </p>
      )}
    </div>

    <div className={`grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3`}>
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </section>
);

const PropertyHero: React.FC = () => {
  const propertyItems: PropertyItem[] = [
    {
      kind: "property",
      title: "Sweet Home for Small Family",
      image: "/images/p4.jpg",
      location: "Boston, USA",
      description: "Till the one day when the lady met this fellow...",
      price: "$256,596",
      status: "FOR RENT",
    },
    {
      kind: "property",
      title: "Sweet Home for Small Family",
      image: "/images/p4.jpg",
      location: "Boston, USA",
      description: "Till the one day when the lady met this fellow...",
      price: "$256,596",
      status: "FOR RENT",
    },
    {
      kind: "property",
      title: "Sweet Home for Small Family",
      image: "/images/p4.jpg",
      location: "Boston, USA",
      description: "Till the one day when the lady met this fellow...",
      price: "$256,596",
      status: "FOR SALE",
    },
  ];

  return (
    <div>
      <Section
        heading="New Properties List"
        subheading="The weather started getting rough..."
        items={propertyItems}
      />
    </div>
  );
};

export default PropertyHero;
