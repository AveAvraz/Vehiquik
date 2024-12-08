import Image from "next/image";
import Banner from "../section/Banner";
import VehicleData from "../section/VehicleData";
import ParallaxBanner from "@/components/custom/Pbanner"; // Import ParallaxBanner
import ScrollAnimatedSection from "@/components/custom/ScrollAnimatedSection"; // Import ScrollAnimatedSection
import { Navigation } from "../section/Navigation";
import Hero from "../section/Hero";
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen over-flow-hidden">
      {/* Parallax Banner */}
      <Navigation />

      {/* Hero */}
      <Hero />

      {/* Parallax Banner */}
      <ParallaxBanner />

      {/* Existing Banner */}
      <Banner />

      {/* Scroll Animated Section */}
      <ScrollAnimatedSection />

      {/* Vehicle Data */}
      <VehicleData />
    </main>
  );
}
