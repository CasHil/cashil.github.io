# Design System

## Design Philosophy

- **Concept**: Acoustic & Algorithmic — A bespoke intersection of Music Composition and Computer Science.
- **Mode**: Experience / Persuade (Interactive Studio Portfolio)
- **Aesthetic**: Warm analog recording console, modular synthesizers, and clean computational rigor.
- **Tone**: Creative, articulate, tactile, human.

## Color System

- **Background & Ground**:
  - Base: `#0c0b0a` (Obsidian amber ground)
  - Console surface: `rgba(20, 18, 16, 0.85)` with `backdrop-filter: blur(14px)`
  - Elevated card: `#141210`
  - Subtle borders: `#2b2722` / `rgba(255, 240, 220, 0.08)`
  - Hover border: `#f59e0b` / `rgba(245, 158, 11, 0.35)`
- **Text & Foreground**:
  - Primary text: `#f4f1ea` (Warm parchment white)
  - Secondary text: `#c7c1b5` (Warm chalk)
  - Console metadata: `#a1998b` / `#756e62` (Subtle studio stone)
- **Accents**:
  - Warm Amber: `#f59e0b` / `rgb(245, 158, 11)`
  - Copper / Deep Amber: `#d97706` / `rgb(217, 119, 6)`
  - Console Status LED: `#10b981` (Emerald active indicator)

## Typography

- **Headings & Display**:
  - Family: `'Fraunces', Georgia, serif`
  - Weights: `600` (SemiBold), `700` (Bold)
  - Optical Size: Auto variable
  - Tracking: `-0.02em`
  - Wrap: `text-wrap: balance`
- **Technical Readouts & Stems**:
  - Family: `'Space Mono', monospace`
  - Weights: `400` (Regular), `700` (Bold)
  - Purpose: Track numbers, timecodes, frequencies, audio parameters, system stems
- **Body**:
  - Family: `'DM Sans', system-ui, -apple-system, sans-serif`
  - Weights: `400` (Regular), `500` (Medium)
  - Line-height: `1.7`
  - Measure: `max-width: 68ch`
  - Wrap: `text-wrap: pretty`

## Interactive Sound & Synthesis

- **Engine**: Web Audio API with pentatonic harmonic tuning (C4, D4, E4, G4, A4, C5).
- **Oscilloscope**: Real-time canvas wave calculation with amplitude decay and sine/tri harmonic rendering.
- **Interaction Rules**: Strictly user-gesture initiated, muted by default with explicit `AUDIO [ON / OFF]` toggle.

## Spatial System & Track Arrangement

- **Arranger Format**: DAW session timeline with track indicators (`TRACK 01`), timecodes, and liner notes.
- **Radius**: `12px` to `16px` for modules, `8px` for console buttons.
