---
name: turkish-trade-design
description: Mandates the core design philosophy, brand colors, typography, and UI standards for the Turkish Trade Lawyers web project. Use this skill when modifying CSS or HTML UI components.
---

# Turkish Trade Lawyers Design Philosophy

Our brand design philosophy combines corporate reliability with a modern, premium web aesthetic. When generating or modifying any UI components, CSS, or HTML layouts for this project, you must adhere strictly to the following standards.

## Brand Colors

- **Primary CTA & Action Buttons:** Navy (`#1E3A8A` / `var(--navy)`). Hover state must use a darker navy (`var(--navy-dark)`). This is non-negotiable. Never substitute with gradients or secondary colors for primary actions.
- **Accents, Icons, & Badges:** Primary Blue (`#2D4CC8` / `var(--primary-blue)`).
- **Callout & Content Boxes:** Light Gray (`#F5F7FA` / `var(--light-gray)`) background with a subtle Border Gray (`#E4E7EC` / `var(--border-gray)`) border.

## Typography

- **Font Family:** `Inter` must be used as the primary font family, falling back to `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`. All typography should prioritize legibility and a clean, modern aesthetic.

## UI Elements & Styling Rules

- **Shape & Depth:** Utilize **rounded corners** to create a welcoming interface. Implement **glassmorphism** (e.g., `backdrop-filter: blur(...)` with semi-transparent backgrounds) on floating elements, navigation bars, and layered cards to add depth and a premium feel.
- **CSS Best Practices:** Always rely on existing global CSS classes (such as `.article-guide-download-box`, `.pillar-cluster-note`, or `.service-page-cta`) instead of writing one-off inline styles.
- **Animations:** Enhance the interface with smooth, subtle micro-animations on interactive elements (buttons, hover cards) to deliver a dynamic, high-end user experience that still maintains professional corporate trust.
