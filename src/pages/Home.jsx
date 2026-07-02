import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Portfolio from "../components/sections/Portfolio";
import Pricing from "../components/sections/Pricing";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}