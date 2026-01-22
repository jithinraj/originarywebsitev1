# Originary Design System

A unified design system for the Originary website, built for consistency, accessibility, and premium polish.

## Quick Reference

### Color Tokens

| Token | Usage |
|-------|-------|
| `--surface-base` | Page backgrounds |
| `--surface-elevated` | Cards, modals |
| `--surface-subtle` | Secondary backgrounds |
| `--surface-card` | Card backgrounds |
| `--text-primary` | Headlines, primary text |
| `--text-secondary` | Body text |
| `--text-tertiary` | Labels, captions |
| `--text-muted` | Placeholder, disabled |
| `--accent-brand` | Primary actions, links |
| `--accent-brand-hover` | Hover state |
| `--border-default` | Standard borders |
| `--border-hover` | Hover state borders |

### Spacing Scale

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-7: 1.75rem   /* 28px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
```

### Typography Scale

```css
--text-xs: 0.75rem   /* 12px */
--text-sm: 0.875rem  /* 14px */
--text-base: 1rem    /* 16px */
--text-lg: 1.125rem  /* 18px */
--text-xl: 1.25rem   /* 20px */
--text-2xl: 1.5rem   /* 24px */
--text-3xl: 1.875rem /* 30px */
--text-4xl: 2.25rem  /* 36px */
--text-5xl: 3rem     /* 48px */
--text-6xl: 3.75rem  /* 60px */
```

### Border Radius

```css
--radius-sm: 0.125rem  /* 2px */
--radius-md: 0.375rem  /* 6px */
--radius-lg: 0.5rem    /* 8px */
--radius-xl: 0.75rem   /* 12px */
--radius-2xl: 1rem     /* 16px */
--radius-3xl: 1.5rem   /* 24px */
--radius-full: 9999px  /* Pill shapes */
```

### Duration & Easing

```css
--duration-150: 150ms
--duration-200: 200ms
--duration-300: 300ms
--duration-500: 500ms
--duration-700: 700ms

--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## Component Patterns

### Buttons

Always use these classes from design-system.css:

```jsx
// Primary action
<Link href="/action" className="btn btn-primary">
  Get Started
</Link>

// Secondary action
<button className="btn btn-secondary">
  Learn More
</button>

// Ghost/subtle button
<button className="btn btn-ghost">
  Cancel
</button>

// Button sizes
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary btn-lg">Large</button>
```

### Cards

```jsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

// Elevated card
<div className="card card-elevated">
  ...
</div>
```

### Section Layout

```jsx
<section className="section">
  <div className="container">
    {/* Section content */}
  </div>
</section>
```

---

## Accessibility Requirements

### Focus States

All interactive elements MUST have `:focus-visible` styles:

```css
.interactive-element:focus-visible {
  outline: 2px solid var(--accent-brand);
  outline-offset: 2px;
}
```

### Color Contrast

- Text on backgrounds must meet WCAG AA (4.5:1 ratio minimum)
- `--text-tertiary` and `--text-muted` have been calibrated for compliance

### Reduced Motion

Always support `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    animation: none;
    transition: none;
  }
}
```

---

## Dark/Light Mode

The system uses `[data-theme="light"]` for light mode. All semantic tokens automatically adapt.

**Never use raw colors like `#ffffff` or `#09090b` directly.**

Instead, use semantic tokens:
- `var(--surface-base)` instead of `#050505`
- `var(--text-primary)` instead of `#fafafa`
- `var(--border-default)` instead of `rgba(255,255,255,0.08)`

---

## Responsive Breakpoints

```css
/* Mobile-first approach */
@media (max-width: 480px) { /* Small phones */ }
@media (max-width: 640px) { /* Large phones */ }
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 900px) { /* Small laptops */ }
@media (max-width: 1024px) { /* Laptops */ }
@media (max-width: 1280px) { /* Large screens */ }
```

---

## Migration Checklist

When refactoring components to use the design system:

- [ ] Replace hardcoded hex colors with semantic tokens
- [ ] Replace `px` spacing with `--space-*` tokens
- [ ] Replace `px` font sizes with `--text-*` tokens
- [ ] Replace `px` border-radius with `--radius-*` tokens
- [ ] Replace `ms` durations with `--duration-*` tokens
- [ ] Add `:focus-visible` to all interactive elements
- [ ] Add `@media (prefers-reduced-motion: reduce)` block
- [ ] Ensure responsive breakpoints use fluid values
- [ ] Test in both dark and light mode

---

## File Structure

```
app/
  design-system.css    # All design tokens and base styles
  globals.css          # Minimal overrides only

components/
  *.tsx                # Components use styled-jsx with token references
```

---

## Lint Rules

The following patterns are flagged in code review:

1. **Hardcoded colors**: `#[0-9a-fA-F]{3,6}` in styled-jsx
2. **Hardcoded pixels**: `[0-9]+px` for spacing/sizing (except icon sizes)
3. **Missing focus states**: Interactive elements without `:focus-visible`
4. **Raw grays**: `--gray-*` instead of semantic `--text-*` or `--surface-*`

---

## Version

Design System Version: 2.0
Last Updated: 2026-01-22
