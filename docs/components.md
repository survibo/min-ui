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

## Storybook Controls

Storybook should make common visual states easy to try without hiding the public
API.

Expose primitive props in Controls when changing them is useful for visual
inspection. Examples include labels, text content, variants, sizes, disabled
states, counts, and simple booleans.

Use `argTypes.<prop>.control = false` for complex fixture props that should stay
visible in Docs but should not be edited in the Controls panel. Examples include
image data, author objects, action arrays, menu items, tabs, and navigation item
lists.

Use `parameters.controls.exclude` for props that should not be part of the
interactive story surface. Examples include `className`, `style`, `children`,
render-only composition slots, and callback props that are already represented
through Storybook actions.
