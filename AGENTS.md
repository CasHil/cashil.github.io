# Agent Guidelines

## Architecture & Data Navigation
- **Resume & Profile Copy**: `src/i18n/translations.ts` contains all bilingual (EN/NL) copy, including work milestones, degrees, thesis telemetry, and principles. There are no separate `TimelineJobs.ts` or `TimelineEducation.ts` files.
- **Curriculum Vitae (LaTeX)**: `cv/Casper_Hildebrand_CV.tex` is compiled to `public/cv/Casper_Hildebrand_CV.pdf` using `pnpm run build:cv`. Must strictly adhere to a **1-page budget**.
- **Visual Assets**: `public/images/` contains vector brand badges (`tikkie.svg`, `harvest.svg`, etc.) and logos.
- **Telemetry Explorer**: `src/components/DataExplorer/DataExplorer.tsx` powers the interactive MOOC research visualization on `/education`.

## Tooling & Environment Constraints
- **Shell**: Host is Windows PowerShell 5.1/7. Use `;` or sequential commands; never use `&&`.
- **Node.js Runtime**: Project uses ES modules (`"type": "module"` in `package.json`). Scripts must use `import` or `.cjs` extensions.
- **Sandbox**: Operations that inspect drive root `F:\` or run build/compilation binaries require `BypassSandbox: true`.
- **Cloudflare**: Use the `cf` CLI unless the project has a Wrangler configuration file.

## Quality & Design Guardrails
- **Bilingual Parity**: Any copy added or modified in `src/i18n/translations.ts` must maintain 100% symmetry between `en` and `nl`.
- **Typography & Accessibility**: Maintain minimum `text-xs` (12px) for UI copy to prevent `[tiny-text]` or `[undersized-ui-text]` violations in `impeccable detect`.
- **ATS Single-Page CV**: Never allow `cv/Casper_Hildebrand_CV.tex` to spill onto page 2.
