# T144 - Blog Categories with Admin Management

## Attempt 1

**Approach:**
1. Created `src/content/blog-categories/` folder with 5 initial category files (book-launches, species-lore, world-building, writing-process, behind-scenes)
2. Added `blogCategories` collection to `src/content.config.ts` with title/description schema
3. Changed blog `category` field from hardcoded `z.enum()` to `z.string().optional()` to support dynamic categories
4. Added `blog_categories` collection to `public/admin/config.yml` (CMS-managed)
5. Changed blog post `category` from `select` widget to `relation` widget pointing to `blog_categories` collection
6. Updated blog listing page (`src/pages/blog/index.astro`) to:
   - Fetch `blogCategories` collection and build a slug-to-title map
   - Use resolved titles in filter buttons and category badges
   - Handle `?category=` URL parameter for deep-linking from blog post category badges
7. Updated `[slug].astro` to pass `categoryMap` to BlogPost layout
8. Updated `BlogPost.astro` to:
   - Accept `categoryMap` prop
   - Resolve category slugs to titles using the map (with fallback)
   - Make category badge a clickable link to `/blog/?category={slug}`

**Result:** Success

**Details:**
- Build passes: 104 pages generated
- Category titles resolve correctly (e.g., `book-launches` → "Book Launches")
- Category badges on individual blog posts link back to filtered blog listing
- URL parameter filtering works for deep-linking
- Existing blog posts with hardcoded category values (book-launches, writing-process, behind-scenes) continue to work
- New categories can be created/edited/deleted via CMS admin
