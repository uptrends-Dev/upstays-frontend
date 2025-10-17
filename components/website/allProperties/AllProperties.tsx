"use client";
import React from 'react'
import PagesHero from "@/components/utils/PagesHero";
import ProoertyCard from "@/components/utils/ProoertyCard";
import { getAllProperies } from "@/lib/apis/propertyApi";
import { useEffect, useState } from "react";
const AllProperties = () => {
    const [items, setItems] = useState<[]>([]);
  
    useEffect(() => {
      (async () => {
        try {
          const res = await getAllProperies();
          const data = res.data;
          setItems(data ?? []);
          console.log(data);
        } catch (e) {
          console.error(e);
        }
      })();
    }, []);

  return (
   <div>
      <PagesHero
        title={"All Properties"}
        bgSrc={"/images/p3.jpg"}
        crumbs={[{ label: "Home", href: "/" }]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 h-1 w-24 rounded bg-red-500" />
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            All Properties List
          </h2>

          <p className="mx-auto my-5 max-w-3xl text-balance text-sm text-muted-foreground md:text-base">
            The weather started getting rough...
          </p>
          <div
            className={`grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3`}
          >
            {items.map((e, i) => (
              <ProoertyCard item={e} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AllProperties