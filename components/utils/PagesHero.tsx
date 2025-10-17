import React from "react";
import Image from "next/image";
import Link from "next/link";

type Crumb = { label?: string; href?: string };

export default function PagesHero({
  title ="",
  bgSrc = "",
  crumbs = [{ label: "", href: "" }],
}: {
  title?: string;
  bgSrc?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate h-[42vh] min-h-[320px] w-full overflow-hidden bg-slate-900 text-white sm:h-[48vh]">
      {/* Background image */}
      <Image
      
        src={bgSrc}
        alt={title}
        fill
        priority={false}
        sizes="100vw"
        className="pointer-events-none select-none object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <nav aria-label="Breadcrumbs" className="mt-4 text-sm sm:text-base">
          <ol className="flex items-center gap-3 text-white/80">
            {crumbs.map((c, i) => {
              return (
                <li key={i} className="flex items-center gap-3">
                  <Link href={"/"}>
                    <div>{c.label} /</div>
                  </Link>
                  <div className="text-red-300">{title}</div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
