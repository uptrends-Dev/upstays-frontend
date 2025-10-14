import HeroSection from "@/components/website/landingPage/HeroSection";
import PropertyBanner from "@/components/website/landingPage/PropertyBanner";
import PropertyHero from "@/components/website/landingPage/PropertyHero";
import ServicesWeProvide from "@/components/website/landingPage/ServicesWeProvide";
const items = [
  { title: "Residential", image: "/images/p3.jpg" },
  { title: "Industrial", image: "/images/p3.jpg" },
  { title: "Asset Management", image: "/images/p3.jpg" },
  { title: "Financial Support", image: "/images/p3.jpg" },
];
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesWeProvide
        subheading="This time there's no stopping us. Straightenin’ the curves, flattenin’ the hills…"
        items={items}
      />
      <PropertyHero />
      <PropertyBanner />
    </div>
  );
}
