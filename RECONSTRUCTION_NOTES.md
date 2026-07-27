# Reconstruction Notes

- Exact duplicate uploads with `(1)` suffixes were removed after SHA-256 comparison.
- Anonymous `page (n).tsx` files were mapped using their internal `// app/...` path comments.
- `app/volunteer/page.tsx` was recovered from the nested `Momentum.zip` archive.
- `app/sitemap.ts` and `app/robots.ts` were separated from the concatenated `not-found.tsx` upload and converted to App Router default exports.
- Added inferred standard project files: `tsconfig.json`, `postcss.config.js`, `next-env.d.ts`, and `.gitignore`.
- Repaired invalid apostrophes in TypeScript string literals.
- Corrected `HomeSections.tsx` to import `VolunteerForm` from the supplied combined forms module.
- Updated dynamic service, event, and news pages to use Next.js 15 asynchronous route params.
- Verified that all `@/` alias imports resolve to reconstructed source files.
- Ran a global TypeScript syntax pass successfully after repairs. A full dependency-backed `next build` could not be completed in this environment because `npm install` repeatedly timed out before creating `node_modules`.

## Final offline validation (23 July 2026)
- Removed duplicate import declarations from `components/ui/index.tsx`.
- Consolidated repeated imports in `components/sections/HomeSections.tsx` (the recovered file contained several source modules concatenated together).
- Confirmed all local `@/` and relative imports resolve.
- Confirmed all TypeScript/TSX files parse successfully using the TypeScript compiler API.
- A real `next build` could not be executed in this workspace because DNS access to `registry.npmjs.org` is blocked, so npm dependencies cannot be downloaded here. Netlify/GitHub build infrastructure normally has this access.
