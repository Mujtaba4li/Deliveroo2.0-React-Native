import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'oedwwaox',
  dataset: 'production',
  apiVersion: '2022-09-26',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
//sanity cors add http://localhost:3000 

export const urlFor = (source) => builder.image(source);