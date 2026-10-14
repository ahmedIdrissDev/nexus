
---
name: my-ui
description: >
  Apply our predefined Tailwind CSS global styles
  and reusable TSX/CSS components to React and
  Next.js projects. Use when creating, styling,
  or refactoring user interfaces.
---

# My UI Design System

## Objective

Apply the predefined UI design system to the
user's existing project.

The skill provides:
- Global Tailwind CSS styles
- Design tokens
- Typography rules
- Reusable TSX components
- Component-specific CSS

## Source of Truth

The files inside this skill are the authoritative
source for visual styling.

Do not invent alternative colors, typography,
spacing systems, or component styles when
predefined equivalents exist.

## Workflow

### 1. Inspect Project

Before making changes:

- Identify the framework.
- Locate the existing global CSS entry point.
- Detect Tailwind CSS version.
- Identify existing components.
- Inspect package.json.

### 2. Apply Global Styles

Read:
- styles/globals.css
- styles/tokens.css
- styles/typography.css

Integrate the provided styles into the project.

Rules:
- Preserve existing required CSS directives.
- Avoid duplicate Tailwind imports.
- Preserve unrelated application styles.
- Use the skill's design tokens.
- Do not overwrite unrelated global CSS.

### 3. Discover Components

Read references/component-registry.md.

Before creating a component:
1. Search for a matching component.
2. Read its TSX and CSS source.
3. Check its dependencies.
4. Reuse or install it.
5. Preserve the original visual design.

### 4. Apply Components

When using skill components:

- Copy the required TSX files.
- Copy their CSS files.
- Update import paths.
- Install required dependencies if approved.
- Preserve supported variants and props.
- Avoid unnecessary visual modifications.

### 5. Adapt Existing UI

When refactoring existing interfaces:

- Preserve business logic.
- Preserve event handlers.
- Preserve state management.
- Replace only the visual implementation.
- Use predefined components where appropriate.

### 6. Validate

- Run TypeScript checks.
- Run the project build.
- Verify CSS imports.
- Check responsive behavior.
- Check component accessibility.

## Restrictions

- Do not invent a parallel design system.
- Do not introduce arbitrary colors.
- Do not recreate existing components.
- Do not overwrite application logic.
- Do not remove existing functionality.
- Do not use external UI libraries unnecessarily.
