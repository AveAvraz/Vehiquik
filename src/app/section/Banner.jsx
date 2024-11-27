import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

async function getBannerData(position) {
  const query = `
   *[_type == 'banner' && isActive == true && position == $position] {
      title,
      "slug": slug.current,
      image
    }
  `;
  const data = await client.fetch(query, { position });
  return data;
}

export default async function Banner({ position = "main" }) {
  const data = await getBannerData(position);

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p>No active banner available.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {data.map((banner, index) => (
        <div key={index} className="relative w-full h-full">
          <Image
            src={urlFor(banner.image).url()}
            alt={banner.slug}
            fill
            style={{ objectFit: "cover" }}
            priority={true}
            className="opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 opacity-80"></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
              BANNER
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
