# T003 - Set up Decap CMS with local backend

## Attempt 1

**Approach:** Create Decap CMS admin interface by:
1. Creating public/admin/index.html (copied from dane-griggs-website, adapted for Gwen DeMarco)
2. Creating public/admin/config.yml with all collections adapted for urban fantasy theme
3. Enabling local_backend: true for local development
4. Adapting collections for Gwen's content (species instead of aliens, urban fantasy categories)

Key adaptations needed:
- Change author default from "Dane Griggs" to "Gwen DeMarco"
- Update blog categories for urban fantasy (species-lore, world-building, writing-process, behind-scenes)
- Keep similar collection structure but with urban fantasy terminology
- Update site_url and display_url placeholders

**Result:** Success

**Details:**
- Created public/admin/index.html with Decap CMS script and urban fantasy styled preview templates
- Created public/admin/config.yml with all collections:
  - books (with Gwen DeMarco as default author)
  - series
  - blog (with urban fantasy categories: species-lore, world-building, writing-process, behind-scenes)
  - testimonials
  - characters
  - settings
  - species (with abilities field instead of biology notes)
  - locations
  - pages (with urban fantasy icon options)
- Enabled local_backend: true for local development
- Preview templates styled with urban fantasy colors (#0a0a0f background, #6b46c1 accents)
- Build passes successfully (warnings about empty content directories expected)
