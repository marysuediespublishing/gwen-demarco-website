# T071 - FIX: Testimonials date field should be date-only, not datetime

## Attempt 1

**Approach:** Update the testimonials collection date field in public/admin/config.yml to use date-only format instead of datetime. Will set `date_format: "YYYY-MM-DD"`, `time_format: false`, and `format: "YYYY-MM-DD"` as specified in the todo.

**Result:** Success

**Details:** Updated the testimonials date field in public/admin/config.yml from a simple inline datetime widget to a multi-line configuration with:
- `date_format: "YYYY-MM-DD"` - displays dates in YYYY-MM-DD format
- `time_format: false` - disables time component entirely
- `format: "YYYY-MM-DD"` - stores dates in YYYY-MM-DD format

The change is at lines 154-159 of config.yml. Build verification shows a pre-existing unrelated image asset error (gideon-bean-ebook.jpg) that was present before this change. The CMS config change itself is correct and complete.
