# T120 - Make series titles clickable links on main Series page

## Attempt 1

**Approach:** Wrap the series title h2 text in an `<a>` tag linking to `/series/[series.slug]` and add hover styling consistent with the site theme.

In src/pages/series.astro, line 100-102 currently shows:
```html
<h2 class="text-3xl md:text-4xl font-primary font-bold text-bone-white">
  {series.data.title}
</h2>
```

Will update to wrap the title in a link with hover:text-ember-orange transition-colors.

**Result:** Success

**Details:**
- Wrapped series title in an `<a>` tag linking to `/series/${series.slug}`
- Added `hover:text-ember-orange transition-colors` for hover effect
- Build passes with 94 pages generated
- The "Explore Series" button already links to the same page, but now users can also click the title directly
