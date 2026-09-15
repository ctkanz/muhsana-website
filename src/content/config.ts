import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    badge: z.string(),
    order: z.number().default(0),
    heroImage: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    galleryImages: z.array(z.string()),
    mainHeading: z.string(),
    leadParagraph: z.string(),
    paragraphs: z.array(z.string()),
    quote: z.string().optional(),
    externalLinks: z.array(z.object({
      icon: z.string(),
      tag: z.string(),
      title: z.string(),
      desc: z.string(),
      url: z.string(),
      btnText: z.string(),
    })).optional(),
    sidebarMeta: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
    embeddedVideoYoutubeUrl: z.string().optional(),
    prevProject: z.object({
      slug: z.string(),
      title: z.string(),
    }).optional(),
    nextProject: z.object({
      slug: z.string(),
      title: z.string(),
    }).optional(),
  }),
});

const artworksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    displayTitle: z.string(),
    category: z.string(),
    categoryLabel: z.string().optional(),
    badge: z.string(),
    order: z.number().default(0),
    desc: z.string(),
    cardDesc: z.string(),
    coverImage: z.string(),
    images: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
  artworks: artworksCollection,
};
