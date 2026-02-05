# T074: Testimonials date field with mm/dd/yyyy format and calendar picker

## Attempt 1

**Approach:** Configure the datetime widget with proper settings for US date format (MM/DD/YYYY) display, no time component, and calendar picker. The key configuration:
- `date_format: "MM/DD/YYYY"` - US format for display in picker
- `time_format: false` - removes time component
- `format: "YYYY-MM-DD"` - ISO format for storage (good for sorting)
- `default: ""` - empty default (not using template variable to avoid issues)
- `picker_utc: false` - use local timezone

Will replace the current string widget with datetime widget and test that the calendar picker works without the year auto-fill bugs from T072.

**Result:** Success

**Details:** Updated the testimonials date field in `public/admin/config.yml` from a string widget to datetime widget with the following configuration:
- `widget: "datetime"` - enables calendar picker
- `date_format: "MM/DD/YYYY"` - US format display in picker
- `time_format: false` - removes time component entirely
- `format: "YYYY-MM-DD"` - ISO format for storage (good for sorting)
- `picker_utc: false` - use local timezone

Note: The site build has a pre-existing error related to image paths (`/images/front.jpg` not found) that is unrelated to this CMS config change. The CMS admin config file is static and copied directly to the output - it doesn't affect or get processed by the Astro build.
