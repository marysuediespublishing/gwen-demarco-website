# T075 - Cap fanned book covers at 3 max, remove "+N" badge

## Attempt 1

**Approach:** Read series.astro to check current implementation and make requested changes.

**Result:** Success (Already Implemented)

**Details:**
Upon reviewing `src/pages/series.astro`, the requested changes have already been implemented in a previous commit:

1. **Book cover limit:** Line 185 already uses `.slice(0, 3)` to cap at 3 books max
2. **No "+N" badge:** There is no "+N" orange circle badge in the current code - it was already removed
3. **Layout:** Books display side-by-side with slight overlap (-20px marginLeft), not with rotation/fanning

The current implementation at lines 184-226:
- Shows max 3 book covers per series
- Uses side-by-side overlapping layout (not fanned)
- No additional books indicator badge exists

No code changes needed - the todo requirements are already satisfied by the current implementation.
