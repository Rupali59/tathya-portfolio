# Tathya Portfolio

## Project Structure

```
Tathya-potfolio/
├── src/                  # Source code
│   ├── app/              # Next.js app router pages and routes
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── lib/              # Utility libraries and helpers
│   ├── middleware.ts     # Next.js middleware
│   └── styles/           # CSS and styling files
├── public/               # Static assets
├── docs/                 # Documentation
├── scripts/               # Utility scripts
├── logs/                 # Build logs (gitignored)
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── eslint.config.mjs     # ESLint configuration
├── .env.example          # Environment variables template
└── README.md             # This file
```

## Getting Started

### Environment Setup

1. Copy `.env.example` to `.env.local` in the **root folder**:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the required values in `.env.local` (especially analytics IDs if needed)

3. Environment files are located in the **root folder**, not in `frontend/`. Next.js automatically reads from the root.

### Running the Application

All commands are run from the root directory:

```bash
npm install        # Install dependencies
npm run dev       # Start development server (uses PORT from .env, default: 3000)
npm run build     # Build for production
npm run start     # Start production server (uses PORT from .env, default: 3000)
npm run lint      # Run linter
npm run type-check # Type check TypeScript
```

### Custom Port Configuration

The application port is read from the `PORT` environment variable. Set it in your `.env.local` file:

```bash
PORT=4000  # Use port 4000 instead of default 3000
```

Or set it when running:

```bash
PORT=4000 npm run dev
```

All configuration values are read from environment variables using a centralized config reader (`src/lib/config.ts`).

The project structure is now flat with all source files in the root directory.

---

## Design Specifications

Define a "Tactile Dark-Engine" theme for tathya.dev:
- Primary Background: Pure Black (#000000).
- Surface Material: Dark Charcoal (#121212) with a subtle matte texture.
- Primary Glow: Sapphire Blue (#0F52BA).
- Success/Action Glow: Emerald Green (#50C878).
- Typography: High-end Serif for headings, Monospace for system readouts.
- Borders: 1px width, using Sapphire Blue with low opacity (0.2) that brightens to 1.0 on hover.


"Add more depth to the cards. Give them a 2px box-shadow with Sapphire Blue at 0.1 opacity and use a radial gradient on the charcoal surfaces so they look slightly metallic under the blue LEDs."



Build a premium, single-page Next.js landing page for tathya.dev using Tailwind CSS and Framer Motion. 

Layout Requirements:
1. Hero Section: 
   - Pure black background. 
   - Central isometric 3D "Motherboard Processor" graphic (use a Lucide icon or SVG) with a pulsing Sapphire Blue glow.
   - Text: "Tathya: Engineered Business Ecosystems."
   - CTA: A tactile, recessed button labeled "Request Workspace."

2. Architecture Pillars:
   - Three cards using Dark Charcoal (#121212).
   - Each card has a 1px Sapphire Blue inner border.
   - Hover Effect: The Sapphire border brightens, and a subtle Sapphire "shadow" appears.

3. Live Portfolio:
   - Display projects (Dhaaga Stories, Astro-Acharya) as "Server Blades."
   - Each blade should have a monospace readout showing status (e.g., Status: Active).

4. The Integrated Configuration Bay (The Onboarding):
   - A recessed panel section that feels like physical hardware.
   - Use a multi-step sequence to collect: Company ID, Primary Objective, and Module Selection.
   - Module Selection: Create a grid of "Chips." When a chip is clicked, it snaps into place and its LED light transitions from Sapphire Blue to Emerald Green.
   - Final CTA: A master switch/button that, when clicked, flashes Emerald Green and shows a "Provisioning Workspace..." progress bar.

5. Understated Footer:
   - Grayscale team photos with high contrast.
   - Sapphire/Emerald hover effects on social links and team profiles.

Animation Style:
- Use Framer Motion for "initialization" effects (blur-to-focus and slight Y-axis slide up).
- Ensure all transitions between Sapphire and Emerald are snappy but smooth (0.3s ease-in-out).