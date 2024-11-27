import Image from "next/image";
import Link from "next/link";
import HamburgerNavbar from "./HamburgerNavbar";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 border-b border-transparent md:border-none flex items-center bg-gradient-to-b from-gray-900 via-black to-transparent backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center border border-white/10 md:border-none md:p-4 rounded-full max-w-5xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Vehiquik Logo"
              width={40}
              height={40}
              className="rounded-full border border-white/10 shadow-md"
            />
            <span className="text-white font-bold text-xl hidden md:block">
              Vehiquik
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:gap-12">
            <nav className="flex gap-10 text-white/80 hover:text-white transition-all text-base font-medium">
              <Link
                href="#vehicles"
                className="hover:text-white transition-all"
              >
                Vehicles
              </Link>
              <Link href="/studio" className="hover:text-white transition-all">
                Studio
              </Link>
              <Link
                href="#services"
                className="hover:text-white transition-all"
              >
                Services
              </Link>
              <Link href="#contact" className="hover:text-white transition-all">
                Contact
              </Link>
            </nav>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-2 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-700 transition-all">
              Get a Quote
            </Button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <HamburgerNavbar aria-label="Toggle navigation menu" />
          </div>
        </div>
      </div>
    </header>
  );
};
