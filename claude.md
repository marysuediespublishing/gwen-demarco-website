# Claude Constitution

You are working in a loop-based development system. Each invocation is a fresh context window focused on one todo at a time. Your work persists through files, not memory.

## Tech Stack

- Astro 5 with TypeScript
- Tailwind CSS (custom urban fantasy theme)
- React components for interactivity
- Decap CMS for content management (local backend only, no auth needed)
- Node.js adapter for server-side rendering
- MDX for rich content

## Reference Implementation

The dane-griggs-website folder in the parent directory is the reference implementation. Copy structure, patterns, and code from there, adapting for Gwen DeMarco's urban fantasy brand.

## Core Files

- `decisions.md` - Architectural choices and constraints. Read before working.
- `todos.md` - Numbered work queue. Find the first unchecked item, work on it.
- `.logs/T{number}-{slug}.md` - Attempt history for each todo.

## On Startup

1. Read `decisions.md` - these are your constraints
2. Read `todos.md` and find the first unchecked todo (`- [ ]`)
3. Check if `.logs/T{number}-{slug}.md` exists for that todo
   - If yes: read it to understand what's been tried and why it failed
   - If no: this is a fresh attempt
4. Work on that todo only

## Working a Todo

1. Review referenced decisions for constraints (e.g., `refs: D001, D003`)
2. Review the log file for prior attempts if any
3. **Log your plan FIRST** - Append a new attempt entry with your approach BEFORE starting work (Result: In Progress)
4. Attempt the implementation
5. Test/verify the work (see Testing Requirements below)

## Testing Requirements

Before marking a todo complete:

1. **Build verification:** Run `npm run build` to ensure the site builds successfully
2. **Content validation:** Ensure CMS content files are valid frontmatter
3. **All builds must pass** - Fix any TypeScript or build errors before completing

## Project Structure

```
src/
├── components/        # Astro and React components
│   └── ui/           # Reusable UI components
├── content/          # Decap CMS content collections
│   ├── books/        # Book entries
│   ├── series/       # Series entries
│   ├── blog/         # Blog posts
│   ├── characters/   # Character profiles
│   ├── species/      # Creature/species entries
│   ├── locations/    # Setting/location entries
│   ├── settings/     # Site configuration
│   └── pages/        # CMS-editable pages
├── layouts/          # Page layouts
├── pages/            # Astro page routes
├── styles/           # Global styles
└── utils/            # Utility functions
public/
├── admin/            # Decap CMS admin
│   ├── index.html    # CMS entry point
│   └── config.yml    # CMS configuration
└── images/           # Static images
```

## Urban Fantasy Design Theme

The site uses a dark, mysterious urban fantasy aesthetic:

### Color Palette
- **Shadow Black:** #0a0a0f (backgrounds)
- **Midnight Purple:** #2d1b4e (primary dark)
- **Mystic Violet:** #6b46c1 (primary accent)
- **Ember Orange:** #ff6b35 (CTA/highlights)
- **Mystic Teal:** #2dd4bf (secondary accent)
- **Fog Gray:** #94a3b8 (muted text)
- **Moon Silver:** #e2e8f0 (body text)

### Typography
- **Display:** Cinzel (serif, mystical headers)
- **Body:** Inter (clean, readable)
- **Accent:** JetBrains Mono (code/special elements)

### Visual Effects
- Subtle purple glows on hover
- Fog/mist overlays on hero sections
- City skyline silhouettes
- Animated ember particles (optional)
- Dark gradients with purple undertones

## After Each Attempt

### If successful:
1. Update the log entry with success details
2. Mark the todo as complete in `todos.md`: `- [x]`
3. Commit with message: `T{number}: {brief description}`
4. Exit

### If failed:
1. Update the log entry with:
   - What you tried
   - Why it failed
   - Suggested next approach
2. Leave the todo unchecked
3. Exit (next loop will retry with your notes)

## Log Format

**Before starting work** (log your plan):
```markdown
## Attempt {N}

**Approach:** What you plan to try

**Result:** In Progress
```

**After completing** (update the same entry):
```markdown
## Attempt {N}

**Approach:** What you tried

**Result:** Success | Failed

**Details:** What happened

**Next:** What to try next (failures only)
```

## Rules

1. **One todo per session** - If you discover related work, add a new todo, don't scope creep.
2. **Files are truth** - If it's not in a file, it doesn't exist next session.
3. **Log everything** - Future you needs to know what happened.
4. **Decisions are constraints** - Work within them.
5. **Exit when done** - Success or failure, exit so the loop can continue.
6. **Copy from dane-griggs-website** - Use as template, adapt for urban fantasy aesthetic.
