import Image from "next/image";
import Banner from "../section/Banner";
import VehicleData from "../section/VehicleData";
import ParallaxBanner from "@/components/custom/Pbanner"; // Import ParallaxBanner
import ScrollAnimatedSection from "@/components/custom/ScrollAnimatedSection"; // Import ScrollAnimatedSection
import { Header } from "../section/Header";  
export default function Home() {
  return (
    <><Header />
      {/* Parallax Banner */}
      <ParallaxBanner />

      {/* Existing Banner */}
      <Banner />

      {/* Scroll Animated Section */}
      <ScrollAnimatedSection />

      {/* Vehicle Data */}
      <VehicleData />
    </>
  );
}
