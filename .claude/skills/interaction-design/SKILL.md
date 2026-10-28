---
name: interaction-design
description: Principles of tactile, high-craft interaction design for engineering portfolios. Emphasizes subtle state feedback, accessible contrast, keyboard focusability, and eliminating decorative bloat.
---

# Interaction Design Guidelines

## 1. Intentional State Feedback
- Hover, focus, and active states must be crisp, tactile, and purposeful.
- Avoid slow, floating animations that delay user interaction. Prefer sub-150ms transitions (`transition-colors duration-150` or `active:scale-[0.98]`).
- Focus rings should be sharp and high-contrast (`focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:outline-none`).

## 2. Micro-Architectural Controls
- Interactive switches (like theme and language toggles) should feel like physical, precision instruments:
  - Tight monospace typography (`font-mono text-xs`).
  - Subtle borders (`border border-zinc-200 dark:border-zinc-800`).
  - Crisp indicator states with clear contrast differentiation.

## 3. High Signal Content Layouts
- Eliminate novelty widgets that act as isolated toys disconnected from the candidate's professional profile.
- Transform interactive features into authentic engineering telemetry (such as the interactive dataset explorer from thesis research).
- Avoid modal overload: render critical technical data directly in the flow of the document.
