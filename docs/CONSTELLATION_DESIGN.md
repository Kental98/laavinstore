# Dynamic Floating Constellation Hero Section

## Overview

A responsive hero section design that transforms from a desktop "loose dynamic constellation" with parallax floating elements to a mobile-friendly compact cluster layout.

## Architecture

### Components

- **HeroSection.tsx** - Main container managing parallax animation and viewport detection
- **ShardElement.tsx** - Individual shard renderer with responsive positioning
- **ConstellationController.ts** - Business logic for parallax calculations and layout switching

### Key Features

#### 🖥️ Desktop Mode (≥1440px)

- **Layout**: 2-column grid (text left, constellation right)
- **Shards**: 5 total (1 center + 4 orbiting)
- **Spacing**: Loose constellation with significant gaps
- **Animation**: Parallax depth-based mouse tracking
- **Depth Layers**:
  - Center shard (LaaVin): 0.3x depth factor (moves less)
  - Character shards: 0.6x depth factor (moves more)

#### 📱 Mobile Mode (<1440px)

- **Layout**: Single column stack
- **Cluster**: 3-column grid for shards (center spans full width)
- **Animation**: Static, no parallax
- **Spacing**: Compact 1rem gaps

### Shard Positioning (Desktop)

```
┌─────────────────────────────────────────┐
│  WZ (85%, 15%)      │      ZZZ (88%, 25%)   │
│                     │                       │
│      LAAVIN (87%, 45%) [CENTER]            │
│                     │                       │
│  HSR (82%, 75%)      │      Genshin (90%, 70%) │
└─────────────────────────────────────────┘
```

### Color System

- **Cyan Glowing**: `#00d9ff` - Wuthering Waves, Genshin Impact, LaaVin center
- **Magenta Glowing**: `#ff00ff` - ZZZ, Honkai: Star Rail

## Usage

### Basic Setup

```tsx
import { HeroSection } from '@/components/HeroSection';

export default function HomePage() {
  return <HeroSection />;
}
```

### Image Assets Required

Place these images in `/public/images/`:

```
/public/images/
├── wuthering-eye.png      (120x120px)
├── zzz-eye.png            (120x120px)
├── hsr-eye.png            (120x120px)
├── genshin-eye.png        (120x120px)
└── laavin-logo.png        (140x140px)
```

## Customization

### Adjust Parallax Intensity

In `HeroSection.tsx`, modify the multiplier:

```tsx
const deltaX = (mouseX - containerCenterX) * depthFactor * 0.01; // ← Adjust this
```

- Lower values = less movement
- Higher values = more dramatic parallax

### Change Viewport Breakpoint

Update the breakpoint in both files:

```tsx
window.innerWidth >= 1440 // Change to your preferred breakpoint
```

### Modify Shard Positions

Edit the `desktopShards` array in `HeroSection.tsx`:

```tsx
{
  id: 'wuthering',
  baseX: 85,      // Horizontal position (% from left)
  baseY: 15,      // Vertical position (% from top)
  offsetX: -20,   // Initial X offset
  offsetY: -30,   // Initial Y offset
  color: 'cyan',
  image: '/images/wuthering-eye.png',
}
```

## Performance Considerations

- ✅ Uses `requestAnimationFrame` for smooth 60fps parallax
- ✅ `will-change: transform` optimization
- ✅ Lazy loading for images
- ✅ Automatic cleanup on unmount
- ✅ Reduced motion support via CSS media query

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (fallback to static cluster)

## Accessibility

- ✅ ARIA labels on all shard elements
- ✅ Keyboard focus support
- ✅ `prefers-reduced-motion` respected
- ✅ Semantic HTML structure
- ✅ Alt text for all images

## Testing Checklist

- [ ] Desktop (1440px+): Parallax working on mouse move
- [ ] Tablet (768px-1439px): Compact cluster display
- [ ] Mobile (< 768px): Single column, responsive buttons
- [ ] Reduced motion: No animations on preference enabled
- [ ] Keyboard navigation: Tab through elements accessible
- [ ] Image loading: Lazy loading working
- [ ] Performance: 60fps maintained on parallax

## Files

```
components/
├── HeroSection.tsx
├── HeroSection.module.css
├── ShardElement.tsx
└── ShardElement.module.css

lib/
└── constellation-controller.ts

tailwind.config.ts
```
