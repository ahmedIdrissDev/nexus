---
name: nexus
description: Apply only the predefined Nexus Tailwind CSS styles and reusable TSX components to React and Next.js applications.
---

# Nexus UI Library

## Purpose

Nexus is a UI design skill for AI coding agents.

## Instructions

1. Inspect the existing project and read `styles/globals.css` before changing UI code.
2. When the user requests a UI element covered by Nexus, reuse the matching component from `components/ui/` or `references/`.
3. Apply only the Nexus Tailwind CSS classes and components. Do not create replacement components, custom CSS, arbitrary styles, or another UI library when a Nexus component is available.
4. Copy only the required TSX files and `styles/globals.css`, then update imports for the consuming project.
5. Install only the runtime dependencies required by the selected components: React, `tailwind-merge`, `lucide-react`, and, for Next.js examples, `next`.
6. Preserve existing application logic and validate TypeScript and build checks.

## Component-only rule

Nexus is a constrained component skill. Prefer an existing Nexus component over writing new markup. If no matching Nexus component exists, ask before introducing a new component or styling system. Do not modify unrelated UI, add visual variants, or invent new Tailwind classes or CSS.

The files in this skill are the source of truth for the Nexus visual design. Do not alter CSS declarations, selectors, design tokens, Tailwind classes, or component visual behavior when integrating them.
