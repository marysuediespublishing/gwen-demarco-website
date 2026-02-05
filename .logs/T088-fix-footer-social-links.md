# T088 - Fix footer social links and Amazon logo

## Attempt 1

**Approach:** Update Footer.astro with three changes:
1. Goodreads link → https://www.goodreads.com/gwen_demarco
2. Amazon link → https://www.amazon.com/stores/Gwen-DeMarco/author/B08CHLX2TB
3. Replace inline Amazon SVG icon with circular amazon-logo.svg (created in T085)

**Result:** Success

**Details:**
- Updated Goodreads href from `https://www.goodreads.com/author/show/20624281.Gwen_DeMarco` to `https://www.goodreads.com/gwen_demarco`
- Updated Amazon href from `https://www.amazon.com/stores/Gwen-DeMarco/author/B08CJB94TD` to `https://www.amazon.com/stores/Gwen-DeMarco/author/B08CHLX2TB`
- Replaced inline `<svg>` Amazon icon with `<img src="/images/amazon-logo.svg" alt="Amazon" class="w-6 h-6 rounded-full" />` matching Goodreads logo pattern
- Build passes with 63 pages
