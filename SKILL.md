---
name: nexus
description: Compose purposeful React and Next.js interfaces from product requirements using only the predefined Nexus Tailwind CSS styles and reusable TSX components.
---

# Nexus UI Library

## Purpose

Nexus is a UI design skill for AI coding agents.

## Instructions

1. Understand the product before writing UI. Identify the product purpose, intended users, primary tasks, most important information, and actions that must be immediately accessible. Use the user's request and existing application context; do not invent product features to fill gaps.
2. Define the information architecture around user tasks. Decide the primary and secondary content, navigation hierarchy, main actions, relationships between content, semantic page regions, and logical reading order. Every visible section must have a clear purpose.
3. Compose the smallest useful interface for that architecture. Group related information, establish clear parent-child relationships, prioritize important content, and choose layouts based on actual content and functionality. Do not default to a dashboard, sidebar, metrics, charts, grids, repetitive cards, or empty sections.
4. Control visual noise. Never invent a logo or brand identity. Do not add decorative sparkle icons, unnecessary navigation items, fake statistics, meaningless widgets, or icons without a clear functional purpose. Prefer a table or simple value when it communicates information better than a chart.
5. Plan the application shell before placing components. Use semantic `aside`, `header`, `nav`, `main`, and `section` regions when they match the product. Keep the sidebar, header, and main content as distinct layout regions; do not overlap them with arbitrary absolute positioning or unrelated z-index values.
6. Choose the layout primitive deliberately: use CSS Grid for the page shell and other two-dimensional relationships, and Flexbox for one-dimensional rows or columns. Give each region one clear layout owner, keep children `min-w-0` when they contain long content, and avoid `h-full` or fixed widths unless the parent has an explicit, intentional size.
7. Make the layout responsive to content and viewport. Use a bounded content container, allow main content to shrink, wrap or scroll wide tables deliberately, and define how secondary navigation behaves on narrow screens. Do not rely on overflow clipping to hide layout problems.
8. Inspect the existing project and read `styles/globals.css` before changing UI code. Check global selectors, opacity, foreground/background contrast, theme token resolution, import order, and utility validity before diagnosing a component as broken.
9. After the structure is clear, discover available components in `components/ui/` and `references/`. Select components for their semantic purpose, reuse their existing TSX/CSS implementations, and map each component to a specific UI need.
10. Apply only the Nexus Tailwind CSS classes and components. Do not create replacement components, custom CSS, arbitrary styles, or another UI library when a Nexus component is available.
11. Copy only the required TSX files and `styles/globals.css`, then update imports for the consuming project.
12. Install only the runtime dependencies required by the selected components: React, `tailwind-merge`, `lucide-react`, and, for Next.js examples, `next`.
13. Preserve existing application logic and validate TypeScript and build checks.

## Composition review

Before completing implementation, verify that the interface reflects the actual product and user tasks, the primary action is easy to identify, the information hierarchy and reading order are logical, and every visible element serves a purpose. Check that component choices are semantically appropriate, the shell regions do not overlap, text and controls remain readable, no content is hidden by opacity or overflow, tables and long content have an intentional sizing strategy, the layout works responsively, important information is not missing, and unnecessary icons, cards, sections, navigation items, and invented content have been removed.

## Component-only rule

Nexus is a constrained component skill. Prefer an existing Nexus component over writing new markup. If no matching Nexus component exists, ask before introducing a new component or styling system. Do not modify unrelated UI, add visual variants, or invent new Tailwind classes or CSS.

The files in this skill are the source of truth for the Nexus visual design. Do not alter CSS declarations, selectors, design tokens, Tailwind classes, or component visual behavior when integrating them.
