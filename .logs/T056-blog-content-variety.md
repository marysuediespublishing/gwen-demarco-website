# T056 - Add more blog content variety

## Attempt 1

**Approach:** Create 4 new blog posts to add variety to the blog content:
1. "Writing Tips" - Gwen's advice on crafting paranormal romance
2. "Character Spotlight: Sophie Feegle" - Deep dive into the main character
3. "World-Building: A Guide to Supernatural Creatures" - Overview of the species in Gwen's books
4. "Behind the Scenes: My Writing Process" - Personal look at how Gwen writes

Will follow the existing blog post format with frontmatter including title, description, pubDate, tags, category, and readingTime.

**Result:** Success

**Details:** Created 4 new blog posts:
1. `writing-tips-paranormal-romance.md` - 5 tips for writing paranormal romance (pubDate: 2024-06-15, category: writing-process)
2. `character-spotlight-sophie-feegle.md` - Deep dive into Sophie Feegle character (pubDate: 2023-05-20, category: behind-scenes)
3. `world-building-supernatural-creatures.md` - Guide to supernatural creatures across all series (pubDate: 2024-09-10, category: world-building)
4. `behind-the-scenes-writing-process.md` - Author's writing process (pubDate: 2024-04-08, category: behind-scenes)

Initial build failed due to invalid category values. Fixed categories to use valid enum values from schema:
- 'behind-the-scenes' → 'behind-scenes'
- 'characters' → 'behind-scenes'
- 'writing' → 'writing-process'

Build verified successfully after fixes.
