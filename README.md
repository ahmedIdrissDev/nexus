# Nexus UI

Nexus is a reusable UI skill for React and Next.js projects.

Nexus is intentionally component-only and composition-aware: first organize
the interface around the product's users and tasks, then use the provided
Tailwind CSS and TSX components. Do not introduce custom CSS, replacement
components, arbitrary Tailwind classes, generic dashboard sections, invented
features, or another UI library when a Nexus component is available.

For application layouts, establish distinct semantic shell regions before
adding components. Use Grid for two-dimensional shells and Flexbox for
one-dimensional groups, keep content shrinkable, and define responsive
behavior for sidebars, headers, main content, and wide tables explicitly.

## Contents

- `styles/globals.css` — the global Nexus Tailwind CSS source of truth.
- `components/ui/` — reusable primitives.
- `references/` — complete component examples built from those primitives.
- `agents/openai.yaml` — Codex skill discovery metadata.

The reusable primitives are `Button`, `Card`, `Input`, `Textarea`, and `User`.
The reference examples are `Contact`, `Profile`, `Alert`, `Chat`, `Searchbar`,
`Sidebar`, and `Waitlist`. The canonical file names are `card.tsx`,
`textarea.tsx`, `label.tsx`, and `sidebar.tsx`; the former misspelled paths
remain as compatibility re-exports for existing consumers.

The examples require React, `tailwind-merge`, and `lucide-react`; examples using `next/image` also require Next.js. `Contact`, `Profile`, and `Waitlist` expect the consuming project to provide `/icons/Contact.svg`, `/icons/avatar.png`, and `/icons/hello.svg`. Copy the required files into the consuming project and adapt only import paths and asset locations.
