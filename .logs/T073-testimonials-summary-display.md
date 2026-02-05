# T073 - ENHANCE: Show book title alongside reviewer name in Testimonials list view

## Attempt 1

**Approach:** Add a `summary` field to the testimonials collection in config.yml. The summary template will use the field names `reviewerName` and `bookTitle` to display "Reviewer Name - Book Title" in the CMS list view.

**Result:** Success

**Details:** Added `summary: "{{reviewerName}} - {{bookTitle}}"` to the testimonials collection configuration at line 136. The CMS list view will now show entries like "John Doe - Spirit Marked" instead of generic identifiers.
