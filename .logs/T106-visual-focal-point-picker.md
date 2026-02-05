# T106 - Visual Focal Point Picker Widget for Artwork Thumbnails

## Task Summary
Replace the numeric focal_x/focal_y fields with a custom Decap CMS widget that provides a visual interface for setting the focal point on artwork thumbnails.

## Requirements
- Create a custom Decap CMS widget (public/admin/focal-point-widget.js)
- Display uploaded artwork image in admin with clickable/draggable focal point picker
- Show preview thumbnail crop using the species page card aspect ratio (4:3)
- Store value as combined field (e.g., "50,50")
- Register widget in public/admin/index.html
- Update config.yml to use the new widget
- Update Astro content schema

## References
- Species page uses `aspect-[4/3]` for card images (src/pages/species.astro:84)
- Current artwork schema has focal_x and focal_y as separate number fields
- Decap CMS custom widget docs: https://decapcms.org/docs/custom-widgets/

---

## Attempt 1

**Approach:** Create a custom Decap CMS widget using React (since Decap CMS is built on React) that:
1. Shows the uploaded image with an overlay crosshair marker
2. Clicking anywhere on the image updates the focal point
3. Shows a live preview of how the 4:3 crop will look
4. Stores the value as "X,Y" string format

**Result:** Success

**Details:**
1. Created `public/admin/focal-point-widget.js` - Custom Decap CMS widget that:
   - Displays the uploaded artwork image with a clickable crosshair overlay
   - Allows clicking anywhere on the image to set the focal point
   - Shows a live 4:3 thumbnail preview with the crop applied
   - Has manual X/Y input fields for fine-tuning
   - Styled with urban fantasy theme (dark background, purple accents, ember orange highlights)
   - Shows helpful instructions when no image is uploaded

2. Updated `public/admin/index.html`:
   - Added script include for focal-point-widget.js
   - Registered the widget with `CMS.registerWidget('focal-point', FocalPointControl, FocalPointPreview)`

3. Updated `public/admin/config.yml`:
   - Replaced separate `focal_x` and `focal_y` fields with single `focal_point` field
   - Uses custom `focal-point` widget
   - Default value: "50,50"
   - Added helpful hint text

4. Updated `src/content.config.ts`:
   - Changed artwork schema to use `focal_point: z.string().default('50,50')`
   - Kept optional `focal_x` and `focal_y` for backwards compatibility

5. Created `src/utils/focal-point.ts`:
   - `parseFocalPoint(focalPoint)` - Parse "X,Y" string to { x, y } object
   - `focalPointToObjectPosition(focalPoint)` - Convert to CSS object-position value
   - `getObjectPosition(data)` - Helper supporting both old and new field formats

6. Updated `src/content/artwork/test-image.md`:
   - Migrated from old `focal_x`/`focal_y` fields to new `focal_point: "50,50"`

7. Build passes (90 pages, 2.60s)
