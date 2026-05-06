# Component Layering

This project follows Atomic Design as a component organization guide.

The actual component catalog lives in Storybook and `src/components`. This
document only defines what each layer is responsible for.

## Atoms

Atoms are the smallest reusable UI elements.

They should not know product-specific context. Examples include buttons, inputs,
avatars, dividers, links, loading indicators, and image primitives.

Use atoms when the component cannot be meaningfully decomposed into smaller
project UI components.

## Molecules

Molecules combine atoms into a small UI block with one clear role.

They may include local layout and interaction wiring, but should avoid owning
screen-level behavior. Examples include search bars, user chips, image grids,
dropdown menus, attachment toolbars, and section navigation.

Use molecules when the same small composition is likely to appear in more than
one organism or page.

## Organisms

Organisms are larger product-facing UI sections composed from atoms and
molecules.

They represent meaningful pieces of a user workflow, such as a post card, post
composer, or group header. Organisms may expose callbacks and state props, but
should not own data fetching, routing decisions, or application persistence.

Use organisms when the component describes a complete section of a screen.

## Cross-Cutting

Cross-cutting components support behavior used across multiple layers.

Examples include modal dialogs, toasts, protected route wrappers, error
boundaries, empty states, and infinite scroll containers.

Use cross-cutting components when the behavior is shared across unrelated UI
areas rather than belonging to one specific component hierarchy.

## Pages

Pages are screen-level compositions assembled from organisms, molecules, and atoms.

They are not intended for production routing. Instead, they serve as simulated screen previews — closer to a mock screen simulator than real app views.

Pages must support responsive layouts across desktop, tablet, and mobile breakpoints.

Since pages are primarily intended for mock design verification, it is strongly recommended to compose them using existing organisms and molecules rather than introducing new components.

## Accessible Names

Prefer visible text labels over `aria-label`.

Use `aria-label` only for icon-only or textless interactive elements.

If a component has enough data to name its own action, generate the label internally. For example, use the file name for a remove button.

Accept a prop for context-dependent labels, and apply `aria-label` only when the caller provides it.

Never add generic fallback names such as `button`, `checkbox`, or `menu`.

Tooltip content does not substitute for an accessible name.

## Storybook Controls

Manage `parameters.controls.exclude` only in `.storybook/preview.ts`.

Controls should expose only props that are useful to edit during visual
inspection.

Expose primitive visual props such as text, variants, sizes, disabled states, counts, and simple booleans.

Use `argTypes.<prop>.control = false` for complex fixture props that should
remain visible in Docs but should not be edited in Controls.

Use `parameters.controls.exclude` for props that should not appear in Controls, such as `className`, `style`, `children`, render-only slots, and callbacks already represented through Storybook actions. Keep all `exclude` entries in `.storybook/preview.ts`, not individual stories.

Keep story-level `argTypes` for component-specific controls such as variants, sizes, text fields, booleans, and `control: false` entries that are clearer or safer to manage per story.

When changing `argTypes` for a prop, check whether existing stories and their `args` examples need to be updated to match. A changed control type, renamed option, or removed prop can silently break story rendering or `play` function assertions without a compile error.