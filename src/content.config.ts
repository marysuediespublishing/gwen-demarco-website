import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Books collection - individual book entries
const books = defineCollection({
  loader: glob({ base: './src/content/books', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    author: z.string().default('Gwen DeMarco'),
    description: z.string(),
    cover: z.string().optional(),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    pubDate: z.coerce.date(),
    rating: z.number().min(0).max(5).default(0),
    ratingCount: z.number().default(0),
    species: z.array(z.string()).default([]),
    heatLevel: z.enum(['mild', 'medium', 'spicy']).default('medium'),
    setting: z.array(z.string()).default([]),
    genres: z.array(z.string()).default([]),
    isKU: z.boolean().default(true),
    amazonUrl: z.string().url().optional(),
    goodreadsUrl: z.string().url().optional(),
    price: z.string().optional(),
    wordCount: z.number().optional(),
    pageCount: z.number().optional(),
    status: z.enum(['published', 'pre-order', 'upcoming', 'draft']).default('published'),
    featured: z.boolean().default(false),
  }),
});

// Series collection - book series groupings
const series = defineCollection({
  loader: glob({ base: './src/content/series', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    bookCount: z.number(),
    completionStatus: z.enum(['ongoing', 'complete']).default('ongoing'),
    startDate: z.coerce.date(),
    completionDate: z.coerce.date().nullable().optional(),
    species: z.array(z.string()).default([]),
    overallRating: z.number().min(0).max(5).default(0),
    totalRatings: z.number().default(0),
    worldBuilding: z.string().optional(),
    readingOrder: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

// Blog collection - blog posts
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    bookSlug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['book-launches', 'species-lore', 'world-building', 'writing-process', 'behind-scenes']).default('writing-process'),
    readingTime: z.string().optional(),
  }),
});

// Testimonials collection - reader reviews
const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    reviewerName: z.string(),
    reviewerPlatform: z.enum(['amazon', 'goodreads', 'bookbub', 'facebook', 'email']).default('amazon'),
    rating: z.number().min(1).max(5),
    quote: z.string(),
    bookTitle: z.string().optional(),
    verified: z.boolean().default(false),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
    category: z.enum(['character-development', 'world-building', 'romance', 'humor', 'overall']).default('overall'),
  }),
});

// Characters collection - character profiles
const characters = defineCollection({
  loader: glob({ base: './src/content/characters', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    books: z.array(z.string()).default([]),
    cameos: z.array(z.string()).default([]),
    image: z.string().optional(),
    species: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// Species collection - supernatural creature types
const species = defineCollection({
  loader: glob({ base: './src/content/species', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    series: z.array(z.string()).default([]),
    image: z.string().optional(),
    physicalTraits: z.string().optional(),
    cultureNotes: z.string().optional(),
    abilities: z.string().optional(),
  }),
});

// Locations collection - settings and places
const locations = defineCollection({
  loader: glob({ base: './src/content/locations', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    environmentType: z.string().optional(),
  }),
});

// Settings collection - site configuration
const settings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    siteTitle: z.string().optional(),
    siteDescription: z.string().optional(),
    authorName: z.string().optional(),
    authorBio: z.string().optional(),
    tagline: z.string().optional(),
    socialLinks: z.object({
      facebook: z.string().optional(),
      goodreads: z.string().optional(),
      twitter: z.string().optional(),
      instagram: z.string().optional(),
      email: z.string().optional(),
      amazon: z.string().optional(),
    }).optional(),
    stats: z.object({
      booksPublished: z.number().optional(),
      pagesRead: z.string().optional(),
      readerRatings: z.string().optional(),
      seriesComplete: z.number().optional(),
      averageRating: z.string().optional(),
      totalReviews: z.string().optional(),
      goodreadsRating: z.string().optional(),
      goodreadsReviewCount: z.string().optional(),
      amazonRating: z.string().optional(),
      amazonReviewCount: z.string().optional(),
    }).optional(),
    newsletter: z.object({
      leadMagnetTitle: z.string().optional(),
      leadMagnetDescription: z.string().optional(),
      benefits: z.array(z.string()).optional(),
    }).optional(),
  }),
});

// Pages collection - CMS-editable page content
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    pageType: z.string(),
    hero: z.object({
      title: z.string().optional(),
      tagline: z.string().optional(),
    }).optional(),
    authorBio: z.object({
      mainBio: z.string().optional(),
      secondaryBio: z.string().optional(),
      tertiaryBio: z.string().optional(),
    }).optional(),
    philosophyCards: z.array(z.object({
      icon: z.enum(['sparkles', 'moon', 'fire', 'heart', 'book', 'star', 'ghost', 'wolf', 'magic', 'city']).optional(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    connectSection: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  books,
  series,
  blog,
  testimonials,
  characters,
  species,
  locations,
  settings,
  pages,
};
