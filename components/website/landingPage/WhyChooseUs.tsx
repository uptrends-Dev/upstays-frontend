import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

/**
 * WhyChooseUs Section (TSX + Tailwind)
 * -------------------------------------------------
 * - Drop this component anywhere in your app.
 * - Replace `imageSrc` with your own asset (local or remote).
 */

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Find Your Dream Home",
    description: "Efficient problem-solving, insightful market analysis",
  },
  {
    title: "Find Your Dream Home",
    description: "Efficient problem-solving, insightful market analysis",
  },
  {
    title: "Rent Or Buy A House",
    description: "Efficient problem-solving, insightful market analysis",
  },
];

export default function WhyChooseUs({
  imageSrc = "/images/p4.jpg",
}: {
  imageSrc?: string;
}) {
  return (
    <section className="relative isolate w-full  bg-gradient-to-b from-neutral-900 via-zinc-900 to-darkGray text-white">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red via-red-300 to-red" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Person / visual + blurb card */}
          <div className="relative h-[60vh] ">
            <div className="  h-[55vh] relative z-0  w-full overflow-hidden rounded-2xl bg-neutral-800/50 ring-1 ring-white/10">
              {/* image */}
              {/* Use next/image in Next.js if desired */}
              <Image
                width={500}
                height={500}
                src={imageSrc}
                alt="Happy homeowner holding house keys"
                className=" h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* floating blurb card */}
            <div className="pointer-events-none absolute -bottom-8 left-1/2 z-10 w-[88%] -translate-x-1/2 rounded-xl border border-white/10 bg-neutral-900/70 p-6 backdrop-blur sm:w-[82%]">
              <p className="text-center text-sm leading-relaxed text-neutral-200">
                Inceptos per consectetur consequat proin. Lorem ipsum
                consectetur consequat dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor.
              </p>
              <div className="mt-5 flex justify-center">
                <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-800 px-5 py-3 text-sm font-medium text-white shadow-inner transition hover:-translate-y-0.5 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400">
                  KNOW MORE
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="relative ">
            <p className="text-xs font-semibold tracking-widest text-neutral-300/70">
              WHY CHOOSE US?
            </p>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Let Us Help You Get Your Dream Home
            </h2>

            <ul className="mt-8  divide-y divide-white/10 rounded-2xl border border-white/10 bg-neutral-900/40">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-4 p-6">
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-900/40 ring-1 ring-rose-400/30">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-300">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
