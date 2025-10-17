import React from "react";
import { Megaphone, Tag, RefreshCw, ShoppingCart } from "lucide-react";

/**
 * What We Provide (TSX + Tailwind)
 * -------------------------------------------------
 * - Light section with centered title & subtitle
 * - Two-column grid of features (icon + heading + paragraph)
 */

type Item = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const DEFAULT_ITEMS: Item[] = [
  {
    title: "Presenting Your Property",
    description:
      "Duis sed odio sit amet nibh vtate cursusus sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidunt auctor ornare odio. Sede non mauris vitae erat conquat.",
    icon: <Megaphone className="h-10 w-10" />,
  },
  {
    title: "Renting Or Selling",
    description:
      "Duis sed odio sit amet nibh vtate cursusus sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidunt auctor ornare odio. Sede non mauris vitae erat conquat.",
    icon: <Tag className="h-10 w-10" />,
  },
  {
    title: "Property Exchange",
    description:
      "Duis sed odio sit amet nibh vtate cursusus sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidunt auctor ornare odio. Sede non mauris vitae erat conquat.",
    icon: <RefreshCw className="h-10 w-10" />,
  },
  {
    title: "Buying A Property",
    description:
      "Duis sed odio sit amet nibh vtate cursusus sit amet mauris morbi accum ipsum velit nam nec tellus viele a odio tincidunt auctor ornare odio. Sede non mauris vitae erat conquat.",
    icon: <ShoppingCart className="h-10 w-10" />,
  },
];

export default function WhatWeProvide({
  title = "What We Provide?",
  subtitle = "Duis aute irure dolor in reprehenderit in voluputed velit esse dolore",
  items = DEFAULT_ITEMS,
}: {
  title?: string;
  subtitle?: string;
  items?: Item[];
}) {
  return (
    <section className="w-full bg-[#f2f7fb] py-20 text-slate-700">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500 sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="mt-1 inline-flex shrink-0 items-center justify-center rounded-full bg-red-100 p-4 text-red ring-1 ring-red-300/30">
                {/* icon */}
                <div className="[&>*]:stroke-[1.5]">{it.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {it.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  {it.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Usage:
 * <WhatWeProvide />
 */
