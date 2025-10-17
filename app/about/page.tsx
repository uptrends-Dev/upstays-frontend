import PagesHero from "@/components/utils/PagesHero";
import WhatWeProvide from "@/components/website/about/WhatWeProvide";
import PropertyBanner from "@/components/website/landingPage/PropertyBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <PagesHero title={"About"} bgSrc={"/images/p2.jpg"} crumbs={[{ label: "Home", href: "/" }]} />
      <WhatWeProvide />
      <PropertyBanner />
    </div>
  );
};

export default page;
