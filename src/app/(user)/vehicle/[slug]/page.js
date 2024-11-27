import "@/app/globals.css";
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // <-- Make sure Image is imported

async function getVehicleData(slug) {
  const query = `
    *[_type == "vehicle" && slug.current == "${slug}"] {
     _id,
     model,
     "slug": slug.current,
     price,
     description,
     categories[]->{
       _id,
       make,
       slug
     },
     mainImage {
       asset->{
         _id,
         url  
       },
       alt
     }
   }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function SelectedVehicle({ params }) {
  const { slug } = params;
  const data = await getVehicleData(slug);

  if (!data) {
    return (
      <div className="w-full min-h-screen pt-[9vh] bg-gray-900 text-gray-100">
        <div className="container mx-auto px-4 lg:px-8 py-12 dark:prose-invert max-w-4xl">
          <article className="prose prose-xl dark:prose-invert max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-extra-bold leading-tight">
                Vehicle not found
              </h1>
            </header>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-[9vh] bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 lg:px-8 py-12 dark:prose-invert max-w-4xl">
        <article className="prose prose-xl dark:prose-invert max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold leading-tight">
              {data.model}
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              {data.description}
            </p>
          </header>

          {/* Corrected Image Rendering */}
          {data.mainImage && data.mainImage.asset && (
            <div className="relative w-full h-[500px] lg:h-[600px] mb-12 overflow-hidden rounded-lg shadow-lg">
              <Image
                key={data._id}
                src={data.mainImage.asset.url} // Correct URL access
                alt={data.mainImage.alt || data.slug} // Use alt from data.mainImage.alt
                fill
                objectFit="cover"
                priority={true}
                className="rounded"
              />
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
