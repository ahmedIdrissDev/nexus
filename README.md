# Nexus UI

Nexus is a reusable UI skill for React and Next.js projects.

## Contents

- `styles/globals.css` — the global Nexus Tailwind CSS source of truth.
- `components/ui/` — reusable primitives.
- `references/` — complete component examples built from those primitives.
- `agents/openai.yaml` — Codex skill discovery metadata.

The examples require React, `tailwind-merge`, and `lucide-react`; examples using `next/image` also require Next.js. `Contact`, `Profile`, and `Waitlist` expect the consuming project to provide `/icons/Contact.svg`, `/icons/avatar.png`, and `/icons/hello.svg`. Copy the required files into the consuming project and adapt only import paths and asset locations.
