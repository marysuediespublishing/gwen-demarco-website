# Loop-Based Development System

Minimal spec-driven development for Claude Code. Specs are source code, generated code is artifact.

## Files

```
project/
├── claude.md        # How Claude works in this project
├── decisions.md     # Architectural choices (D001, D002, ...)
├── todos.md         # Work queue (T001, T002, ...)
└── .logs/
    └── T001-slug.md # Attempt history per todo
```

## Setup

1. Copy `claude.md`, `decisions.md`, `todos.md`, and `.logs/` to your project
2. Add decisions to `decisions.md`
3. Add todos to `todos.md`

## Loop

Manual:
1. Run Claude Code
2. Claude finds first unchecked todo, works it, logs, exits
3. Repeat

Scripted:
```bash
./loop.sh
```

The script runs Claude Code repeatedly until all todos are complete. If a todo fails 10 times, it exits with error code 1 so you can investigate.

Options via environment variables:
```bash
MAX_ATTEMPTS=5 ./loop.sh    # Fail after 5 attempts instead of 10
SLEEP_BETWEEN=5 ./loop.sh   # Wait 5 seconds between runs instead of 2
```

Cron (runs every 30 minutes):
```bash
*/30 * * * * cd /path/to/project && ./loop.sh >> loop.log 2>&1
```

## Adding Decisions

```markdown
### D001 — Use PostgreSQL

**Decision:** All persistent data uses PostgreSQL.

**Rationale:** Team familiarity, scaling path.
```

## Adding Todos

```markdown
- [ ] **T001** — Set up database connection pool
  - refs: D001
```

Log files are created automatically at `.logs/T001-{slug}.md`.
