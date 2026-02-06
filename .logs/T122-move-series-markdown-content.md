# T122 - Move series markdown content to directly below World Building notes

## Attempt 1

**Approach:** Move the Content rendering from its standalone section (lines 421-430) to inside the right column (lg:col-span-2) directly below the World Building card, before the Reading Order card.

**Result:** Success

**Details:**
1. Added Content rendering directly below the World Building card in the right column (lg:col-span-2)
2. Removed the standalone full-width section that previously wrapped the Content
3. Kept prose prose-lg prose-invert styling for proper markdown rendering
4. Content now appears between World Building notes and Reading Order
5. Build passes successfully (94 pages in 4.78s)
