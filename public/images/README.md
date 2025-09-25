# Images Directory Structure

This directory contains all images used in the Tathya website, organized by category.

## Directory Structure

```
public/images/
├── team/              # Team member profile pictures
│   ├── rupali-b.svg
│   ├── keerti-kaushik.svg
│   ├── khushboo-p.svg
│   ├── tipu-ali-khan.svg
│   └── pooja-h-patel.svg
├── assets/            # General website assets
│   ├── icons/         # Icon files
│   ├── logos/         # Logo variations
│   └── backgrounds/   # Background images
└── README.md          # This file
```

## Image Guidelines

### Team Photos
- **Format**: SVG (placeholder), JPG, PNG, or WebP for actual photos
- **Size**: Minimum 300x300px, recommended 400x400px
- **Aspect Ratio**: Square (1:1) preferred
- **Quality**: High resolution for crisp display
- **Naming Convention**: `firstname-lastname.svg` (lowercase, hyphens)
- **Placeholder**: Currently using SVG placeholders that can be replaced with actual photos

### General Assets
- **Format**: Optimized formats (WebP preferred, JPG/PNG fallback)
- **Size**: Optimized for web (compressed but high quality)
- **Naming**: Descriptive names with hyphens (e.g., `hero-background.jpg`)

## Usage in Components

Team images are referenced in the `Team.tsx` component using the following pattern:
```tsx
<img src="/images/team/rupali-b.svg" alt="Rupali B" />
```

## Replacing Placeholder Images

To replace the SVG placeholder images with actual photos:

1. **Keep the same filename** (e.g., `rupali-b.svg` → `rupali-b.jpg`)
2. **Use any supported format** (JPG, PNG, WebP, or keep SVG)
3. **Ensure proper dimensions** (300x300px minimum, 400x400px recommended)
4. **Optimize for web** (compress but maintain quality)
5. **The component will automatically use the new image**

The Team component includes automatic fallback to emojis if images fail to load.
