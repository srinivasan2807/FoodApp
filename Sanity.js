
import imageUrlBuilder from "@sanity/image-url";
// sanity.cli.js
import { createClient } from "@sanity/client";

 const client = createClient({
    projectId: "xm9drzvh",
    dataset: "production",
    useCdn:true,
    apiVersion:"2023-01-01"
});

const imageBuilder = imageUrlBuilder(client);
export const urlFor = (source) => imageBuilder.image(source);

export default client;
