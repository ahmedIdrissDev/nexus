# Nexus UI

Nexus is a reusable UI skill for React and Next.js projects.

Nexus is intentionally component-only: use the provided Tailwind CSS and TSX
components for the requested UI. Do not introduce custom CSS, replacement
components, arbitrary Tailwind classes, or another UI library when a Nexus
component is available.

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
