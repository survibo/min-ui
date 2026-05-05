# Components Layer Audit

Date: 2026-05-05

## Scope

Checked `src/components` and `src/stories` against `docs/components.md`.

Success criteria:

- Atomic Design layer placement follows the responsibility of each layer.
- Lower layers do not depend on higher layers.
- Organisms do not own data fetching, routing decisions, or persistence.
- Storybook Controls expose useful primitive props, keep complex fixture props visible with `control: false`, and exclude callbacks/composition-only props from the interactive controls surface.

## Summary

Most component placement matches `docs/components.md`.

No lower-layer import direction violations were found:

- `atoms` do not import `molecules`, `organisms`, or `cross-cutting`.
- `molecules` do not import `organisms` or `cross-cutting`.
- `organisms` compose atoms and molecules as expected.
- `cross-cutting` components are used for shared behaviors such as protected routes, modals, toasts, empty states, infinite scroll, confirm dialogs, and error boundaries.

The main mismatches are:

1. `MessageBubble` is likely too workflow-specific and composite to remain under `molecules`.
2. Several Storybook files define action callbacks in `argTypes` but do not exclude those callback props from `parameters.controls.exclude`.
3. `StoryThumbnail` has a callback prop that is not represented as an action and is not excluded from Controls.

## Layer Placement Findings

### Needs Review: `MessageBubble`

Current location:

- `src/components/molecules/MessageBubble/MessageBubble.tsx`
- Storybook title: `Molecules/MessageBubble`

Why this may not match the molecule definition:

- `docs/components.md` defines molecules as small blocks with one clear role.
- `MessageBubble` models a product-facing chat message unit with avatar identity, own/other alignment, reply preview, image attachment, file attachment, timestamp, and message grouping controls.
- The component API exposes workflow-specific props such as `replyTo`, `file`, `image`, `isOwn`, `showAvatar`, `showName`, and `showTime`.

Evidence:

- `src/components/molecules/MessageBubble/MessageBubble.tsx:9` defines `MessageBubbleProps`.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:14` defines `file`.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:15` defines `replyTo`.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:20` defines `isOwn`.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:67` renders reply UI.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:103` renders image attachments.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:112` renders file attachments.
- `src/components/molecules/MessageBubble/MessageBubble.tsx:119` renders time display.
- `src/stories/MessageBubble.stories.tsx:6` titles it as `Molecules/MessageBubble`.

Recommendation:

- Move it to `organisms` if it represents a complete chat-message section in the app.
- Alternatively, keep it as a molecule only if the design system intentionally treats a single chat bubble as a reusable small block, and document that exception.

### Borderline: `StoryThumbnail`

Current location:

- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx`
- Storybook title: `Molecules/StoryThumbnail`

Why this is borderline:

- It is small and atom-composed, so molecule placement is defensible.
- It also contains product-specific story behavior and local viewed state.

Evidence:

- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:10` defines `isAddButton`.
- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:11` defines `onClick`.
- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:17` owns local `isSeen` state.
- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:37` hardcodes `스토리 추가`.
- `src/stories/StoryThumbnail.stories.tsx:6` titles it as `Molecules/StoryThumbnail`.

Recommendation:

- This can stay as a molecule if it is reused as a small story-list item.
- If it becomes a complete story workflow element, move it to `organisms` or split the stateful behavior out of the presentational thumbnail.

## Storybook Controls Findings

`docs/components.md` says callback props already represented through Storybook actions should be excluded with `parameters.controls.exclude`.

The following stories define action callbacks but only exclude style/class/composition props, so the callback props remain part of the interactive story surface:

| Story file | Callback props with actions | Current exclude |
| --- | --- | --- |
| `src/stories/ChatRoomItem.stories.tsx` | `onClick` | `className`, `style` |
| `src/stories/ConfirmDialog.stories.tsx` | `onConfirm`, `onCancel`, `onOpenChange` | `className`, `style` |
| `src/stories/CourseChip.stories.tsx` | `onRemove` | `className`, `style` |
| `src/stories/ErrorBoundary.stories.tsx` | `onError` | `children`, `fallback` |
| `src/stories/FileChip.stories.tsx` | `onRemove` | `className`, `style` |
| `src/stories/GroupCard.stories.tsx` | `onClick` | `className`, `style` |
| `src/stories/ImageGrid.stories.tsx` | `onImageClick` | `className`, `style` |
| `src/stories/InfiniteScrollWrapper.stories.tsx` | `onLoadMore` | `children`, `className`, `style` |
| `src/stories/Link.stories.tsx` | `onClick` | `className`, `style`, `asChild` |
| `src/stories/MediaAttachBar.stories.tsx` | `onAttachImage`, `onAttachFile`, `onAttachLink` | `className`, `style` |
| `src/stories/Modal.stories.tsx` | `onOpenChange` | `children` |
| `src/stories/NotificationItem.stories.tsx` | `onClick`, `onMarkAsRead` | `className`, `style` |
| `src/stories/SearchBar.stories.tsx` | `onChange`, `onClear` | `className`, `style` |
| `src/stories/TimeSlotButton.stories.tsx` | `onBook`, `onCancel` | `className`, `style`, `asChild` |

Recommendation:

- Keep the `argTypes.<callback>.action` entries.
- Add those callback prop names to each story's `parameters.controls.exclude`.

### Additional Controls Gap: `StoryThumbnail`

`StoryThumbnail` exposes `onClick`, but its story neither maps it to a Storybook action nor excludes it from Controls.

Evidence:

- `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:11` defines `onClick`.
- `src/stories/StoryThumbnail.stories.tsx:11` excludes only `className` and `style`.

Recommendation:

- Either add `onClick` as a Storybook action and include it in `parameters.controls.exclude`, or exclude it without an action if the story does not need interaction logging.

## Acceptable Patterns Observed

The following patterns match `docs/components.md`:

- Atom components are mostly primitive controls or display elements: button, input, textarea, checkbox, toggle, avatar, badge, tag, icon, spinner, skeleton, divider, tooltip, link, image thumb, file chip, and time badge.
- Molecules generally compose atoms into focused blocks: search bar, form field, user chip, dropdown menu, image grid, reaction bar, media attach bar, course chip, chat room item, notification item, and section navigation.
- Organisms are product-facing sections and expose callbacks/state props without owning data fetching or persistence: `PostCard`, `PostComposer`, and `GroupHeader`.
- Cross-cutting components map to the documented examples: modal, toast, protected route, error boundary, empty state, infinite scroll wrapper, and confirm dialog.

## Follow-Up Order

1. Decide whether `MessageBubble` should move to `organisms` or be documented as an intentional molecule exception.
2. Update Storybook `parameters.controls.exclude` for action callback props.
3. Decide how `StoryThumbnail.onClick` should be represented in Storybook.
4. Re-run Storybook or the project build after any Storybook metadata edits.
