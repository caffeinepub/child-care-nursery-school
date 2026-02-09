# Specification

## Summary
**Goal:** Deploy the current draft of the site to the Internet Computer mainnet (production).

**Planned changes:**
- Configure and run a production deployment targeting Internet Computer mainnet (not local replica).
- Ensure deployment does not modify site content/copy/design or any immutable UI component paths.
- Keep backend architecture unchanged (single-actor Motoko in `backend/main.mo`), adding `backend/migration.mo` only if a state upgrade requires it.

**User-visible outcome:** The existing 3-page site (Home, Learn More, Special Event) is accessible on the live mainnet site with the current draft content and design unchanged.
