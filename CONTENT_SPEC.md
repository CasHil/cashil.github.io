# Content Specification & Information Architecture Guide

## Golden Rule of Content
> **Be complete, but ruthlessly eliminate any information that is duplicate, generic, or fails to give a technical recruiter or engineering lead immediate, high-signal context.**
> *If you have doubts about whether an item or sentence earns its visual weight, leave it out.*

---

## 1. Global Navigation & Masthead

### 1.1 Identity & Masthead
- **Avatar + Live Status Indicator**:
  - *Goal*: Provide immediate human authenticity; the subtle green pulse indicates active industry employment at Tikkie (ABN AMRO).
  - *Rule*: Keep minimal. Tooltip explicitly states "Building Tikkie Business".
- **Name (`Casper Hildebrand`)**:
  - *Goal*: Establish candidate identity in bold Instrument Sans.
- **Role (`Full-Stack Engineer · Tikkie`)**:
  - *Goal*: Instant headline indexing for recruiters in 2 seconds.
  - *Typographic Rule*: Use `font-sans` with medium weight and muted tone (`text-zinc-500`). Never use monospace terminal fonts for executive titles.
- **Social Profiles (GitHub, LinkedIn, Email)**:
  - *Goal*: Provide direct, frictionless communication channels with accessible touch targets (44px mobile hit area).
- **Controls (Language Toggle `EN/NL`, Theme Toggle)**:
  - *Goal*: Allow bilingual recruiters (Dutch fintech market + international tech hubs) and light/dark preference switching.
  - *Typographic Rule*: Use `font-sans` for language labels (`EN`, `NL`), matching top-level navigation aesthetics.

### 1.2 Primary Navigation
- **Routes**: `Overview` (`/`), `CV` (`/cv`), `Work Experience` (`/work-experience`), `Education` (`/education`), `About` (`/about`).
- *Goal*: Direct access to specialized views without burying any credentials.

---

## 2. Overview Page (`/`)

### 2.1 Hero Statement & Elevator Pitch
- **H1 Headline**:
  - *Goal*: Clearly position Casper's core engineering specialty: *"Full-stack software engineer building payment services and web applications at Tikkie."*
  - *Rule*: Never repeat this sentence in subsequent paragraphs.
- **Bio Paragraph 1 (Current Role & Architecture Scope)**:
  - *Goal*: Establish technical ownership, architectural scope, and scale at Tikkie (idempotent APIs, payment webhooks, business dashboards).
- **Bio Paragraph 2 (Foundational Rigor & 0-to-1 Proven Track Record)**:
  - *Goal*: Anchor the dual foundation: entrepreneurial execution (Bitsized browser sandboxes) + academic research depth (TU Delft Double MSc, 175k telemetry analysis).
- **CTAs (Strict 2-CTA Hierarchy)**:
  - *Primary*: Direct access to CV (`Curriculum Vitae →`).
  - *Secondary*: Deep dive into production systems (`Explore Work Experience →`).

### 2.2 Selected Work Showcase
- *Goal*: Showcase three distinct pillars of Casper's background without overwhelm.
- *Strict Ordering & Taxonomy*:
  1. **Item 1: Tikkie Business (`Fintech · Payments`)**:
     - *Goal*: Proof of high-volume financial infrastructure, reliability, and enterprise partner integrations.
  2. **Item 2: Bitsized (`EdTech · Co-Founder`)**:
     - *Goal*: Proof of 0-to-1 systems engineering (isolated browser code execution engine adopted by real schools). Promoted ahead of the thesis to prioritize shipped software.
  3. **Item 3: Debugging the Divide (`Data Science · Research`)**:
     - *Goal*: Proof of quantitative research depth, large-scale dataset modeling (174,988 learners), and Python/Pandas telemetry.
- *Tag Rule*: Every overline badge must follow a consistent `[Domain] · [Role/Output]` syntax in clean proportional sans (no all-caps monospace "PRODUCTION SYSTEMS" filler).
- *Subtitle Rule*: Subtitles must provide distinct technical metadata, never restate the card title.

---

## 3. Work Experience Page (`/work-experience`)

### 3.1 Overview & Intro
- *Goal*: State the range of engineering ownership cleanly before the timeline starts.

### 3.2 Categorization Architecture
- **Section 1: Software Engineering** (formerly "Featured Experience"):
  - *Goal*: Showcase pure software development, infrastructure, consulting, and systems engineering in reverse-chronological order.
  - *Items*:
    - **Tikkie (ABN AMRO)**: Merchant infrastructure, idempotency, webhook reliability, React/Node.js/AWS.
    - **Harvest Talent Program**: Advanced cloud architecture, event-driven design, and system reliability alongside Tikkie.
    - **Bitsized**: In-browser execution sandboxing, AST evaluation, education tooling.
    - **Netcompany**: Enterprise data migration (ETL) and energy simulation tooling in C#/.NET and SQL Server.
    - **TrackOnline (Bexter)**: Supply chain logistics backend and web portals.
    - **Muziekweb**: Automated data ingestion pipelines (Discogs API, Python).
- **Section 2: Teaching & Academic Work** (formerly "Prior Experience"):
  - *Goal*: Group pedagogical and university roles separately so recruiters do not confuse teaching practicums with a career change.
  - *Items*:
    - **CSG De Lage Waard** & **Stanislascollege**: High school CS curriculum & senior exams.
    - **Board of Studies (TU Delft)**: Curriculum evaluation and faculty oversight for BSc CS&E.
    - **Teaching Assistant (TU Delft)**: Algorithms, OOP, and software testing instruction.

### 3.3 Semantic & Typographic Hierarchy
- *Job Titles*: Must be semantically coded as `<h3>` nested under the `<h2>` section headers.
- *Tech Stacks*: Clean `text-xs font-medium` for label, keeping technologies in clear monospaced or badge tokens.

---

## 4. Education & Research Page (`/education`)

### 4.1 Layout Architecture
- *Goal*: Connect the academic credentials with the tangible research output.
- **Component 1: Research & Telemetry (`DataExplorer`)**:
  - *Goal*: Surface the interactive research visualization (gender motivations, k-means clusters across 174,988 learners) prominently, directly reachable via deep-link from the Overview page (`#telemetry`).
- **Section 2: Academic Degrees**:
  - *MSc Computer Science (Data Science)* · TU Delft
  - *MSc Science Education & Communication* · TU Delft (First-degree teaching qualification)
  - *Exchange Studies in CS* · KTH Stockholm (Machine learning & HCI)
  - *BSc Computer Science & Engineering* · TU Delft

---

## 5. About Page (`/about`)

### 5.1 Technical Ethos & Differentiation
- *Goal*: Do **not** repeat the homepage bio. Instead, explain how the combination of Computer Science + Science Education acts as a force multiplier on engineering teams:
  - Treating API design as a communication problem.
  - Prioritizing strong type boundaries, documentation, and RFCs.
  - Mentoring junior and mid-level engineers.

### 5.2 Outside of Work ("Outside the Terminal")
- *Goal*: Authentic personal grounding (Electric Bass Guitar, Chess tactics, Synthesizers & Sound Design).
- *Rule*: Keep descriptions concise, active, and jargon-free. No unnecessary filler subtitles.

---

## 6. Curriculum Vitae Page (`/cv`)

- *Goal*: Provide instant in-browser viewing and 1-click download of the 1-page ATS-compliant PDF resume.
- *Rule*: Subtitle must cleanly state professional credentials (`Full-Stack Software Engineer · Amsterdam, Netherlands`), avoiding self-referential resume-compliance jargon like "Single-Page ATS Format".
