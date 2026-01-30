# T021 - Create Species Content Entries

## Attempt 1

**Approach:** Create species content entries for urban fantasy creatures based on D007 requirements:
- Shifters (various animal types)
- Ogres
- Vampires
- Fae
- Auramancers (from Auras & Embers)
- Humans

Following the pattern from dane-griggs-website species entries, adapting for urban fantasy setting.

**Result:** Success

**Details:**
Created 6 species content files in `src/content/species/`:
1. `shifters.md` - Shape-shifting supernatural beings (Sophie Feegle, Auras & Embers)
2. `ogres.md` - Massive supernatural beings with incredible strength (Sophie Feegle)
3. `vampires.md` - Ancient undead aristocrats (Sophie Feegle)
4. `fae.md` - Ancient beings of magic from Faerie (Sophie Feegle)
5. `auramancers.md` - Beings who perceive/manipulate auras (Auras & Embers)
6. `humans.md` - Regular humans in supernatural world (all series)

Each species entry includes:
- name, slug, description
- series association
- physicalTraits
- cultureNotes
- abilities

**Schema Fix:** Had to modify `src/content/config.ts` to make `slug` optional in species, characters, and locations collections. Astro 5 auto-generates slug from filename, causing a conflict when `slug` was required in schema but also provided in frontmatter.

Build verification passed successfully.
