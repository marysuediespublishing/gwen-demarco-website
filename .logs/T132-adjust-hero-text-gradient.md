# T132 - Adjust hero text position and gradient - split the difference

## Attempt 1

**Approach:**
1. Change grid from `[2fr_3fr_2fr]` to `[1fr_3fr_2fr]` — reduces the empty left column from 2fr to 1fr, moving text halfway back toward the left
2. Adjust gradient to add slight darkness on far left (`lg:from-shadow-black/30`) instead of fully transparent, bump middle to 90% opacity (`lg:via-shadow-black/90`) for stronger text contrast, keep right at 50%

**Result:** Success

**Details:**
- Grid change: `lg:grid-cols-[2fr_3fr_2fr]` → `lg:grid-cols-[1fr_3fr_2fr]` (line 110)
  - Left gap is now 1fr instead of 2fr — splits the difference between original (no gap) and T131 (2fr gap)
  - Text feels balanced: not hugging the left edge, not pushed too far right
- Gradient change: `lg:from-transparent lg:via-shadow-black/85 lg:to-shadow-black/50` → `lg:from-shadow-black/30 lg:via-shadow-black/90 lg:to-shadow-black/50`
  - Far left has subtle 30% darkness instead of fully transparent — still shows hero image but with gentle tinting
  - Middle zone bumped to 90% for strong text readability
  - Right stays at 50% for book cover contrast
- Build: 94 pages, no errors
