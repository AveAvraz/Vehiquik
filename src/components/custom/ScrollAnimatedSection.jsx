"use client"; // Ensures it's a client-side component

import { useEffect, useRef, useState } from "react";
import { urlFor } from "@/sanity/lib/image"; // Assuming you have the URL helper
import { client } from "@/sanity/lib/client"; // Importing your sanity client

// Fetch banner data based on position (e.g., 'main', 'secondary')
async function getBannerData(position = "main") {
  const query = `
    *[_type == 'banner' && isActive == true && position == $position]{
      image
    }[0]
  `;
  const data = await client.fetch(query, { position });
  return data;
}

export default function ScrollAnimatedSection({ position = "main" }) {
  const sectionRef = useRef(null);
  const [bannerImage, setBannerImage] = useState(null);

  // Fetch the banner data
  useEffect(() => {
    async function fetchData() {
      const data = await getBannerData(position);
      if (data && data.image) {
        setBannerImage(urlFor(data.image).url());
      }
    }
    fetchData();
  }, [position]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    });

    observer.observe(sectionRef.current);
  }, []);

  return (
    <div>
      {/* Parallax Section with Dynamic Image */}
      {bannerImage && (
        <section
          className="parallax"
          style={{
            backgroundImage: `url(${bannerImage})`, // Dynamically setting the background image
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <h1 className="text-6xl font-bold text-white">SCS</h1>
        </section>
      )}

      {/* Scroll-triggered animated section */}
      <section
        ref={sectionRef}
        className="section opacity-0 transition-opacity duration-1000 p-20 bg-white"
      >
        <h2>meow meow2 is visible </h2>
        <p>This section becomes visible once you scroll down . is not visible </p>
      </section>
    </div>
  );
}
