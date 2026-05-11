import { Hero } from "@/components/sections/Hero";
import { SignatureServices } from "@/components/sections/SignatureServices";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { LocationCta } from "@/components/sections/LocationCta";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignatureServices />
      <About />
      <Gallery />
      <Testimonials />
      <Faq />
      <LocationCta />
    </>
  );
}
