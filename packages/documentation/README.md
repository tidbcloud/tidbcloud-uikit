# TiUI documentation

Run these commands from the repository root:

```bash
pnpm install --frozen-lockfile
pnpm --filter @tidbcloud/uikit build
pnpm --filter @tidbcloud/uikit-documentation build
pnpm --filter @tidbcloud/uikit-documentation dev
```

Nextra 4 uses the Next.js App Router. The catch-all route in `app/[[...mdxPath]]` renders the MDX files in `content/`, retaining their existing URLs. Navigation lives in the adjacent `_meta` files. The documentation generators also read from `content/`.

The production build generates a Pagefind search index in `public/_pagefind/`. These generated files are ignored by Git. Build once before using search in the development server.

The pnpm patch for `nextra-theme-docs@4.6.1` excludes `children` from theme-configuration validation: Nextra extracts that prop before validation, while patched Zod releases enforce its presence in the original schema. Remove the patch when an upstream Nextra release fixes this mismatch.
