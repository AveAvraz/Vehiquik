"use client"; // This makes it a Client Component

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Fetch banner data by position
async function getBannerData(position = "main") {
  const query = `
    *[_type == 'banner' && isActive == true && position == $position]{
      title,
      "current_slug": slug.current,
      image
    }[0]
  `;
  const data = await client.fetch(query, { position });
  return data;
}

export default function Pbanner({ position = "main" }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const bannerData = await getBannerData(position);
      setData(bannerData);
    }
    fetchData();
  }, [position]);

  if (!data || !data.image) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>No active banner available.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden pt-[7vh] flex items-center justify-center min-h-screen">
      <Image
        src={urlFor(data.image).url()}
        alt={data.current_slug}
        width={1920}
        height={200}
        style={{ objectFit: "cover" }}
        priority={true}
        className="opacity-90"
      />
      <div>
        <h1>Pbanner </h1>
      </div>
    </div>
  );
}
