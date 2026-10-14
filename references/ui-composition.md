# Nexus UI Composition Guide

Read this guide before composing a non-trivial interface. It defines how to
make product and layout decisions before selecting Nexus components.

## User experience before visual design

- Design around the user's goals, tasks, and actual workflow.
- Identify the product purpose, intended users, primary task, important information, and immediate actions before writing JSX.
- Prioritize functionality, readability, and clarity over visual novelty.
- Give every visible element a reason to exist. Remove elements that do not support a user goal.
- Do not decorate an interface or add invented content merely to make it look complete.

## Minimalism through structure

- Prefer typography, whitespace, alignment, and clear grouping over extra borders, shadows, and backgrounds.
- Do not wrap every section in a `Card`. Use a container only when it communicates a meaningful grouping, boundary, or interaction state.
- Avoid excessive nested containers and redundant labels or descriptions.
- Use the smallest number of regions and components that communicate the product clearly.
- Keep information density appropriate to the task: enough detail to act, not enough noise to compete with the primary task.

## Visual hierarchy

- Establish one clear primary page title or focal heading.
- Place the primary action near the content it changes or creates.
- Distinguish primary, secondary, and supporting information through structure and consistent heading sizes and weights.
- Make important information scannable with predictable alignment and reading order.
- Avoid competing focal points, equal emphasis for unrelated content, and decorative icons that look like actions.

## Intentional layout

- Choose a layout pattern based on the content and relationships, not on a generic SaaS template.
- Use CSS Grid for structured two-dimensional layouts and Flexbox for one-dimensional alignment.
- Use consistent content widths, gutters, and alignment anchors.
- Keep the main content region shrinkable; use `min-w-0` where long content can otherwise force overflow.
- Avoid unnecessary empty space, fixed heights, arbitrary absolute positioning, and overflow clipping used to hide layout errors.
- Do not force an application shell, sidebar, header, dashboard, or navigation menu when the product does not need it.

## Dashboard composition

When the product genuinely needs a dashboard:

- Start with a clear page header containing the page title and only the actions relevant to that page.
- Include metrics only when they support a real decision or recurring task. Never fabricate statistics or add metrics to fill space.
- Prefer one primary content area, such as a table, queue, activity list, or workflow, over a collection of equal-weight cards.
- Use a chart only when a trend, comparison, or distribution is materially clearer than a table or simple value.
- Place filters, search, sorting, and bulk actions next to the content they control.
- Use cards for meaningful grouping, not as a wrapper for every metric, paragraph, or control.
- Keep secondary content visibly subordinate and remove panels that have no useful state or content.

## Composition workflow

1. Write a short product brief: purpose, users, primary task, important information, and primary action.
2. Map the information architecture: primary content, secondary content, navigation, relationships, and reading order.
3. Choose the minimum semantic regions and layout primitives needed to express that architecture.
4. Select Nexus components by semantic purpose and map each selected component to a concrete need.
5. Compose the interface, then remove redundant cards, labels, icons, sections, and invented content.

## Final quality check

Before finalizing, ask:

- Can the user identify the product purpose and primary action immediately?
- Is there one clear visual hierarchy and reading order?
- Does every section support a real task or relationship?
- Is the interface using the right component for the content?
- Is any card, icon, metric, chart, label, or empty panel unnecessary?
- Does the layout remain readable, aligned, and usable at narrow widths?
