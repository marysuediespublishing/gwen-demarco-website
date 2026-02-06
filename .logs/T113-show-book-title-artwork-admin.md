# T113 - Show book title alongside artwork title in admin list view

## Attempt 1

**Approach:** Add a `summary` field to the artwork collection in public/admin/config.yml. The summary template will display "{{title}} - {{book}}" to show both the artwork title and the associated book in the admin list view.

Note: Since the book field is a relation widget that stores the book slug (not title), the summary will display the slug value. This matches the pattern used in the testimonials collection (T073).

**Result:** Success

**Details:** Added `summary: "{{title}} - {{book}}"` to the artwork collection in public/admin/config.yml. This displays both the artwork title and book slug in the admin list view. The book field is a relation widget storing slugs, so the summary shows values like "Sophie Portrait - sophie-and-the-odd-ones". Build verified successful (94 pages).
