# Specification

## Summary
**Goal:** Deploy the existing Child Care Nursery School site to the Internet Computer mainnet and verify the public routes work in production.

**Planned changes:**
- Deploy the current frontend assets canister to IC mainnet and provide the live production URL.
- Deploy the current Motoko backend canister (backend/main.mo) to IC mainnet and provide its canister ID.
- Smoke-test production routing for Home (/), Learn More (/learn-more), and Special Event (/special-event).
- Verify static assets (including /assets/generated/school-logo.dim_512x512.png) load correctly in production without 404s.

**User-visible outcome:** The site is publicly accessible on the Internet Computer, and users can navigate to /, /learn-more, and /special-event with pages and assets loading correctly.
