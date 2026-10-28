---
name: swiss-editorial
description: Swiss International Typographic Style and editorial engineering portfolio guidelines. Emphasizes clean grid alignment, razor-sharp typography, authentic timeline visual axes, and elimination of generic AI slop (rounded pill buttons, decorative badge pills, unnecessary filler text).
---

# Swiss Editorial Design Guidelines

## 1. Zero AI Slop Buttons & Toggles
- **Banish Bubbly Pill Buttons**: Generic AI generators default to `rounded-full` or heavy rounded-lg pills for buttons, language switchers, and theme toggles.
- **Editorial Controls**: Use sharp or micro-radius (`rounded-[3px]` or `rounded-none`), architectural rectangular frames, subtle hairline borders (`1px border-zinc-300 dark:border-zinc-700`), tactile hover states, and typographic clarity (`font-mono text-xs uppercase`).
- **Links over Buttons**: Primary navigation to career history or external projects should feel like editorial references: clean inline links with subtle arrow glyphs (`→`) or understated rectangular actions, not floating pill capsules.

## 2. Eliminate Decorative Badge Pills
- Do NOT wrap dates, institutions, or metadata in colorful rounded pill tags (e.g. `bg-emerald-50 text-emerald-800 rounded-md border`).
- Present metadata directly: quiet monospace text, hairline rules, or simple dot separators (`TU Delft • 2024` or `sep 2021 — mei 2024`).

## 3. Authentic Chronological Timelines
- When content is chronological (education, work experience), render it as an unmistakable timeline:
  - Continuous vertical axis line running down the left (`border-l border-zinc-200 dark:border-zinc-800`).
  - Distinct timestamp nodes/dots pinned along the axis marking each milestone.
  - Generous vertical rhythm with milestone markers directly connected to their dates and details.

## 4. Ruthless Signal-to-Noise Ratio for Recruiters
- Every single sentence must answer: *What did Casper build? What engineering problem did it solve? What was the scale/throughput? What technologies were used?*
- Cut generic philosophy, filler sentences, and self-evident statements.
- Recruiters scan in 15 seconds: make titles, metrics, dates, and technologies immediately legible.
