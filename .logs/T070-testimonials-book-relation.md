# T070 - FIX: Testimonials book field should be a relation dropdown

## References
- D001, D011

## Attempt 1

**Approach:**
1. Update public/admin/config.yml to change the testimonials collection's `bookTitle` field from `widget: string` to `widget: relation`
2. Configure the relation to point to the books collection with proper search_fields, value_field, and display_fields
3. Update existing testimonial files to use book slugs instead of full titles
4. Run build to verify changes work

**Result:** Success

**Details:**
- Changed `bookTitle` field in testimonials collection from `widget: string` to `widget: relation`
- Configured relation with:
  - `collection: "books"`
  - `search_fields: ["title"]`
  - `value_field: "{{slug}}"`
  - `display_fields: ["title"]`
- Updated 6 testimonial files to use book slugs instead of full titles:
  - sophie-feegle-fan.md: "Sophie and The Odd Ones" → `sophie-and-the-odd-ones`
  - gideon-bean-review.md: "Gideon Bean" → `gideon-bean`
  - erishum-trilogy-review.md: "The Mudlark" → `the-mudlark`
  - found-family-lover.md: "Odds and Ends" → `odds-and-ends`
  - humor-appreciation.md: "Portents and Oddities" → `portents-and-oddities`
  - asphalt coven testimonial: "Asphalt Coven" → `asphalt-coven`

**Note:** Build currently fails due to pre-existing missing image references in book files (danegriggs-*.jpg) - this is unrelated to T070 and should be addressed in a separate todo.
