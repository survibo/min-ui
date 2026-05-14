# Component Layering

Follows Atomic Design. Component catalog lives in Storybook and `src/components`.

## Atoms

Smallest reusable UI elements with no product-specific context.
(buttons, inputs, avatars, dividers, links, loaders, image primitives)

Use when the component cannot be decomposed into smaller project UI components.

## Molecules

Small UI block combining atoms, with one clear role and local interaction wiring.
(search bars, user chips, image grids, dropdowns, attachment toolbars, section nav)

Use when the same small composition appears in more than one organism or page.

## Organisms

Larger product-facing UI sections composed from atoms and molecules.
(post card, post composer, group header)

May expose callbacks and state props. Must not own data fetching, routing, or persistence.

Use when the component describes a complete section of a screen.

## Cross-Cutting

Shared behavior that spans multiple layers.
(modals, toasts, protected route wrappers, error boundaries, empty states, infinite scroll)

Use when the behavior belongs to no single component hierarchy.

## Pages

Screen-level compositions for mock design verification, not production routing.

Must support responsive layouts across desktop, tablet, and mobile.
Compose from existing organisms, molecules, and atoms; avoid introducing new components.

## Storybook Controls

- Manage `parameters.controls.exclude` only in `.storybook/preview.ts`.
- Expose only props useful for visual inspection
- Use `argTypes.<prop>.control = false` for complex fixture props visible in Docs but not editable.
- Use `parameters.controls.exclude` for `className`, `style`, `children`, render-only slots, and action callbacks — all entries in `.storybook/preview.ts`, not individual stories.
- Keep story-level `argTypes` for component-specific controls and `control: false` entries.
- When changing `argTypes`, verify existing stories and `args` still match; silent rendering or `play` assertion failures can occur without a compile error.
