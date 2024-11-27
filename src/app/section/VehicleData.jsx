import VehicleClientSide from "./VehicleClientSide"; 
import { client } from "@/sanity/lib/client";

async function getData() {
const query = `
*[_type == "vehicle"] {
  _id,
  model,
  "slug":slug.current,
  price,
  categories[]->{
    _id,
    make,
    slug
  },
  previewImage {
    asset->{
      _id,
      url
    },
    alt
  },
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
}

`;
 const data = await client.fetch(query);
  return data;
  //{ props: { data, // Passing data as props },revalidate: 60, // Revalidate every 60 seconds};
}

export default async function VehicleData() {
  // Fetch the data
  const data = await getData();

  // Now pass the fetched `data` directly to `VehicleClientSide`
  return (
    <div>
      <VehicleClientSide data={data} />
    </div>
  );
}
