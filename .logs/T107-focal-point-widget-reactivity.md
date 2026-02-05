# T107 - FIX: Focal point widget should update immediately when artwork image is uploaded

## Attempt 1

**Approach:**
The current focal point widget uses `componentDidUpdate` with a shallow comparison of `prevProps.entry !== this.props.entry` to detect image changes. This doesn't reliably detect changes to the image field within the same entry because Decap CMS may use immutable data structures where the entry reference doesn't change but the nested data does.

Fix by:
1. In `componentDidUpdate`, compare the actual image value instead of the entry reference
2. Use `prevProps.entry.getIn(['data', 'image'])` vs `this.props.entry.getIn(['data', 'image'])` for comparison
3. Also handle the case where image changes from empty to a blob URL (newly uploaded images show as blob URLs before save)
4. Consider adding a polling mechanism as fallback if Decap's immutable updates aren't triggering componentDidUpdate properly

**Result:** Success

**Details:**
- Updated `componentDidUpdate` to compare the actual image value using `getImageFromEntry()` helper
- The helper uses `entry.getIn(['data', 'image'])` for Immutable.js data structures (Decap CMS standard)
- Added fallback handling for plain objects
- Updated `findImageUrl()` to use the same helper for consistency
- Build passes successfully (90 pages generated)
