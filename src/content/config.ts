import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    image_subtitle: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
