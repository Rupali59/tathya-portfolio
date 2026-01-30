# Tathya.dev | Complete Site Specifications

## 1. Core Architecture

- **Framework**: Next.js 14+ (App Router).
- **Styling**: Tailwind CSS (Zinc/Slate palette) with "Industrial Prestige" theme.
- **Animation**: Framer Motion (Shared Layout Transitions).
- **State**: Client-side state for interactive modules (Configurator, Hero), `sessionStorage` for boot sequence.

## 2. Sitemap & Navigation Flow

### Global Navigation

- **Startup Sequence**:
  - **Trigger**: First visit per session.
  - **Action**: Plays "POST" sequence logs -> Logo Morphis -> Reveals Main Site.
- **Top Navigation Bar** (`Navigation.tsx`):
  - **Logo**: Links to `/` (Top).
  - **Links**:
    - `THE_ENGINE` -> Scrolls to `#the-engine` (Services).
    - `THE_INVENTORY` -> Scrolls to `#the-inventory` (Portfolio).
    - `REQUEST_BUILD` -> Scrolls to `#configuration-bay` (Contact/Form).
  - **Actions**:
    - `[ ACCESS_SHELL ]`: Triggers WebAuthn simulation.
    - Theme Toggle: Haptic mechanical switch.
- **Footer**:
  - **Links**: LinkedIn, Twitter (External).
  - **System Status**: Real-time ticker.

### Single Page Sections (Order of Appearance)

1. **Hero Section** (`src/components/sections/hero/Hero.tsx`)
    - **Content**: "Business Surface" vs "Motherboard Schematic" slider.
    - **Interaction**: Split-reveal slider.
    - **Goal**: Establish "Business as Engineering" metaphor.

2. **Trust Ledger** (`src/components/sections/TrustLedger.tsx`)
    - **Content**: Scrolling ticker of uptime, nodes, latency.
    - **Goal**: Social proof via "System Metrics".

3. **Architecture Pillars** (`src/components/sections/ArchitecturePillars.tsx`)
    - **Title**: `[ OPERATIONAL_PILLARS ]`
    - **Content**: Cards explaining Autonomy, Scaling, Control.
    - **Goal**: Educational value prop.

4. **Profit Configurator** (`src/components/sections/ProfitConfigurator.tsx`)
    - **Title**: "Efficiency Throttle"
    - **Content**: Interactive dial/slider to calculate ROI.
    - **Goal**: Lead qualification & engagement.

5. **Services Engine** (`src/components/sections/Services.tsx`)
    - **ID**: `#the-engine`
    - **Title**: "Not a Template. An Industrial Engine."
    - **Content**: Grid of technical services (Go Runtime, Isolated Clusters).
    - **Goal**: Detailed offering breakdown.

6. **Portfolio Inventory** (`src/components/sections/Portfolio.tsx`)
    - **ID**: `#the-inventory`
    - **Title**: `[ THE_INVENTORY ]`
    - **Content**: Vertical "Server Blade" list of projects.
    - **Interaction**: Hover to see specs, haptic "snap".
    - **Goal**: Case studies.

7. **Configuration Bay** (`src/components/sections/ConfigurationBay.tsx`)
    - **ID**: `#configuration-bay`
    - **Title**: `[ SYSTEM_CONFIGURATOR ]`
    - **Content**: Multi-step provisioning wizard (Form).
    - **Goal**: Lead capture / Conversion.

8. **FAQ** (`src/components/sections/FAQ.tsx`)
    - **Content**: Common questions accordion.

## 3. Data Flow & Linking

- **Internal Routing**: All main navigation is hash-based scrolling within `page.tsx`.
- **External Links**:
  - Social media in Footer.
  - No other external pages currently.
- **Assets**:
  - Audio: `/audio/soft-click.mp3`, `/audio/heavy-click.mp3`, `/audio/snap.mp3` (Managed by `TactileProvider`).

## 4. Cleanup Targets

The following files are identified as *potential* extras based on the current active structure:

- `biome.json.bak` (Backup).
- `src/components/common/ThemeTest.tsx` (Test component).
- `src/components/hero/` (If empty or superseded by `src/components/sections/hero`).
