# Nexus Component Registry

Read this registry before creating a component. Reuse the canonical Nexus
implementation when it covers the need; the legacy misspelled paths are only
compatibility aliases.

## Existing primitives

| Component | Canonical file | Purpose | Notes |
| --- | --- | --- | --- |
| `Button` | `components/ui/button.tsx` | Actions and submits | Accepts native button props and merges a caller class name. |
| `Card` | `components/ui/card.tsx` | Meaningful grouped content | Do not use as a wrapper for every section or metric. |
| `Input` | `components/ui/input.tsx` | Single-line text input | Accepts native input props. |
| `Textarea` | `components/ui/textarea.tsx` | Multi-line text input | Accepts native textarea props. |
| `User` | `components/ui/user.tsx` | Minimal user placeholder primitive | Use only when the product actually needs user content. |
| `Label` | `references/label.tsx` | Form field label | Reuse with inputs and textareas. |

## Existing reference compositions

| Reference | File | Composition |
| --- | --- | --- |
| Contact | `references/Contact.tsx` | Image, labels, inputs, textarea, and action. |
| Profile | `references/Profile.tsx` | Avatar inside a grouped surface. |
| Alert | `references/alert.tsx` | Status icon, message, and contextual actions. |
| Chat | `references/chat.tsx` | Input with add and send actions. |
| Searchbar | `references/search.tsx` | Search input with a search action. |
| Sidebar | `references/sidebar.tsx` | Navigation example using buttons and icons. |
| Waitlist | `references/waitlist.tsx` | Focused form with supporting copy and action. |

## Product Dashboard comparison

The local Product Dashboard source currently renders the same reference
compositions in a two-column gallery. It does not provide a separate
application shell, page header, metric grid, analytics panel, progress bar,
data table, status badge, alert banner, search/filter group, or responsive
sidebar implementation. Those structures must be introduced only when a
consuming product requires them and their behavior is defined; they are not
copied from the gallery or invented from a screenshot.

The dashboard copy also contains older duplicate primitives and older global
CSS. Nexus is the source of truth: use its canonical components and current
`styles/globals.css`, not the dashboard duplicates.

## Selection rules

1. Search this registry and the referenced file before creating a component.
2. Prefer a primitive for its semantic purpose, not merely because it can hold content.
3. Compose existing primitives inside a purposeful layout before proposing a new primitive.
4. Add a new component only when the product needs reusable behavior that no registry entry covers.
5. Keep product data, labels, actions, and navigation outside generic primitives.
