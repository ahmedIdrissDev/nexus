# Nexus Layout Patterns

These are compositional patterns, not templates. Choose one only when it fits
the product workflow and content. Read `ui-composition.md` with this guide.

## Dashboard layout

Use when users need an overview and a clear route into operational work:

`Application shell → page header → optional summary metrics → primary content`

- Give the page header one clear title and only relevant actions.
- Include metrics only when they support a decision; omit them when the primary content is already clear.
- Make the primary table, queue, activity list, or workflow the visual center.
- Keep secondary insights subordinate and remove empty panels.

## Management layout

Use when users search, filter, review, or modify a collection:

`Page header → search/filter controls → contextual feedback → data table or list`

- Place controls beside the content they affect.
- Keep a product name and identifying secondary value together in a row when useful.
- Keep status, quantity, and actions aligned to their respective columns.
- Put wide tables in an intentional horizontal overflow region on narrow screens.

## Analytics layout

Use when users need trends, comparisons, or supporting insights:

`Page header → relevant metrics → primary analysis → supporting insight`

- Use a chart only when it communicates a trend, comparison, or distribution better than a table or value.
- Use Grid for the primary/secondary relationship and keep each panel content-driven.
- Do not add charts or metrics without a decision they support.

## Settings layout

Use when users configure a product:

`Page header → grouped forms → local or page-level save action`

- Group fields by user intent, not by arbitrary visual space.
- Keep labels, controls, help text, validation, and actions associated with the same setting group.
- Avoid wrapping every field in a separate card.

## Detail layout

Use when users inspect one entity or record:

`Page header → primary information → related information → contextual actions`

- Keep the entity identity and primary action near the top.
- Use a secondary region only for information related to the primary entity.
- Preserve a clear reading order on small screens by stacking regions intentionally.

## Application shell rules

- Use semantic `aside`, `header`, `nav`, `main`, and `section` regions when the product needs them.
- Let the shell own the page-level Grid; let each region own only its internal Flexbox or Grid.
- Keep sidebar, header, and main content in distinct flow or grid areas. Do not overlap them with arbitrary absolute positioning.
- Use a bounded content container and consistent gutters. Keep main content `min-w-0` so long text and tables do not force the shell wider.
- Define narrow-screen behavior explicitly: collapse, hide, or move secondary navigation; stack header actions; and scroll wide data regions deliberately.
- Avoid fixed heights and `h-full` unless the parent has an explicit height and the fill behavior is intentional.
