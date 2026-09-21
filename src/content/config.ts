import { defineCollection, z } from 'astro:content';

const stringList = z.array(
  z.union([
    z.string(),
    z.record(z.string())
  ])
).optional().default([]).transform(arr => (arr || []).map(item => typeof item === 'string' ? item : (Object.values(item)[0] || '')));

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().default('Nouveau Projet'),
    subtitle: z.string().optional().default(''),
    badge: z.string().optional().default('Projet'),
    order: z.number().default(0),
    heroImage: z.string().optional().default('/oeuvre/muhsana-ali.webp'),
    metaTitle: z.string().optional().default('Muhsana Ali'),
    metaDescription: z.string().optional().default('Projet par Muhsana Ali'),
    galleryImages: stringList,
    mainHeading: z.string().optional().default(''),
    leadParagraph: z.string().optional().default(''),
    paragraphs: stringList,
    quote: z.string().optional(),
    externalLinks: z.array(z.object({
      icon: z.string(),
      tag: z.string(),
      title: z.string(),
      desc: z.string(),
      url: z.string(),
      btnText: z.string(),
    })).optional().default([]),
    sidebarMeta: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional().default([]),
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
    title: z.string().default('Nouvelle Œuvre'),
    displayTitle: z.string().optional().default(''),
    category: z.string().default('sculpture'),
    categoryLabel: z.string().optional(),
    badge: z.string().optional().default('Œuvre'),
    order: z.number().default(0),
    desc: z.string().optional().default(''),
    cardDesc: z.string().optional().default(''),
    coverImage: z.string().optional().default('/oeuvre/muhsana-ali.webp'),
    images: stringList,
  }),
});

export const collections = {
  projects: projectsCollection,
  artworks: artworksCollection,
};
