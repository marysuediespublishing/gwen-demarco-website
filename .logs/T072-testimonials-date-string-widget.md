# T072 - FIX: Testimonials date field auto-fills year as 1900 when typing

## Attempt 1

**Approach:** Replace the datetime widget with a string widget for the testimonials date field. The datetime widget has known issues with manual year entry. Using a string widget with a hint for the expected format (YYYY-MM-DD) will provide a simpler, more reliable input experience.

**Result:** Success

**Details:** Updated `public/admin/config.yml` testimonials collection date field from:
```yaml
- label: "Date"
  name: "date"
  widget: "datetime"
  date_format: "YYYY-MM-DD"
  time_format: false
  format: "YYYY-MM-DD"
```

To:
```yaml
- label: "Date"
  name: "date"
  widget: "string"
  default: "2025-01-01"
  hint: "Enter date as YYYY-MM-DD (e.g., 2025-02-04)"
```

This avoids the buggy datetime picker entirely and provides a simple text input with clear instructions.

**Note:** Build verification shows a pre-existing image path error unrelated to this change (gideon-bean.md references `/images/gideon-bean-ebook.jpg` in unstaged changes, but the committed version uses a different path). The config.yml change itself is correct.
