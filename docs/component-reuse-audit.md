# Component Reuse Audit

This audit lists places where a component implements UI behavior or styling that
is already covered by an existing atom or molecule. The goal is to reduce
one-off implementation inside larger components without changing product
behavior.

Scope checked:
- `docs/components.md` layering rules
- `src/components/atoms`
- `src/components/molecules`
- `src/components/organisms`
- `src/components/pages`
- `src/components/cross-cutting`

## Clear Reuse Candidates

These can be replaced with existing atoms with little or no API change.

| Location | Current implementation | Existing component | Why replace |
| --- | --- | --- | --- |
| `src/components/molecules/SearchBar/SearchBar.tsx:63` | Raw clear `<button>` with `X` icon | `IconButton` atom | Duplicates icon-only button focus/hover/accessibility styling. |
| `src/components/molecules/NotificationDot/NotificationDot.tsx:31` | Raw absolute dot `<span>` when no count is provided | `Badge` atom with `variant="dot"` | `Badge` already has dot sizing and count behavior; this keeps notification indicators consistent. |
| `src/components/molecules/ChatRoomItem/ChatRoomItem.tsx:33` | Raw online status dot `<span>` | `Badge` atom with `variant="dot"` plus position/color classes | Same status-dot primitive as notification dots, with local positioning preserved. |
| `src/components/molecules/NotificationItem/NotificationItem.tsx:50` | Raw unread dot `<span>` | `Badge` atom with `variant="dot"` | Avoids a second notification-dot implementation next to existing `Badge` usage. |
| `src/components/atoms/FileChip/FileChip.tsx:79` | Raw remove `<button>` with `X` icon | `IconButton` atom | Duplicates icon-only button behavior inside an atom. Use the generated accessible label already present. |
| `src/components/cross-cutting/Toast/Toast.tsx:51` | `ToastPrimitive.Action` styled manually like a secondary button | `Button` atom with `asChild` | The class list repeats Button's border, hover, focus, disabled, and size behavior. |

## Conditional Reuse Candidates

These are probably worth refactoring, but only after checking intended visual
behavior because the replacement is not a perfect drop-in.

| Location | Current implementation | Possible component | Constraint |
| --- | --- | --- | --- |
| `src/components/cross-cutting/Modal/Modal.tsx:47` | Manually styled close control with raw `X` icon | `Icon` atom now; `IconButton` only if its `asChild` support is changed | `DialogPrimitive.Close` needs to remain the interactive primitive. Current `IconButton` cannot wrap it cleanly because it renders the icon itself. |
| `src/components/cross-cutting/Toast/Toast.tsx:63` | Manually styled close control with raw `X` icon | `Icon` atom now; `IconButton` only after API support | Same Radix primitive constraint as `ModalClose`. |
| `src/components/cross-cutting/EmptyState/EmptyState.tsx:36` | Variant config stores raw Lucide nodes with repeated sizing | `Icon` atom | `icon?: React.ReactNode` is flexible, so this is a cleanup rather than a behavioral fix. |
| `src/components/cross-cutting/ErrorBoundary/ErrorBoundary.tsx:48` | Raw status and retry icons | `Icon` atom | Low-risk consistency change; `Button` is already used correctly. |
| `src/components/molecules/CourseChip/CourseChip.tsx:25` | Raw `Clock` icon | `Icon` atom | Minor consistency issue. |
| `src/components/molecules/GroupCard/GroupCard.tsx:64` | Raw `Users` icon | `Icon` atom | Minor consistency issue. |
| `src/components/organisms/GroupHeader/GroupHeader.tsx:121` | Raw privacy/member Lucide icons | `Icon` atom | Minor consistency issue; keeps icon sizing/color variants centralized. |
| `src/components/molecules/SectionNav/SectionNav.tsx:99` | Button branch duplicates focus and hover treatment | `Button` atom, or a dedicated nav-item primitive | Current `Button` variants do not map cleanly to border-left and border-bottom active states. A direct replacement may fight classes. |
| `src/components/organisms/PostCard/PostCard.tsx:205` | Local like/comment/share action row | `ReactionBar` molecule if icon-only actions are acceptable | `ReactionBar` is compact and icon-only; current `PostCard` actions are full-width text buttons. This is a design decision, not a drop-in cleanup. |
| `src/components/organisms/PostCard/PostCard.tsx:114` | Local author identity block | `UserChip` molecule if group/link behavior is expanded | `UserChip` handles avatar/name/role, but `PostCard` needs separate author and group links. |
| `src/components/organisms/PostComposer/PostComposer.tsx:83` | Local avatar/name identity block | `UserChip` molecule | This is simpler than `PostCard`; it can likely use `UserChip` without changing behavior. |

## Keep As-Is For Now

These looked like possible duplicates at first, but replacing them with existing
atoms/molecules would either change semantics or make the component harder to
reason about.

| Location | Reason to keep |
| --- | --- |
| `src/components/molecules/ImageGrid/ImageGrid.tsx:81` | The clickable tile is a layout wrapper for an image cell. `Button` would add button sizing and inline-flex behavior that does not match grid tiles. |
| `src/components/molecules/StoryThumbnail/StoryThumbnail.tsx:25` and `:44` | The whole component is a custom story button. Existing `Button`/`IconButton` do not model a vertical avatar-plus-label story item. |
| `src/components/molecules/GroupCard/GroupCard.tsx:33` | The whole card is the button. `Button` would not preserve card layout semantics. |
| `src/components/molecules/ChatRoomItem/ChatRoomItem.tsx:24` | The whole row is the button. Keep the row button, but replace the status dot as noted above. |
| `src/components/molecules/NotificationItem/NotificationItem.tsx:42` | The whole notification row is the button. Keep the row button, but replace the unread dot as noted above. |
| `src/components/pages/GroupPage/GroupPage.tsx:191` | The right rail group info panel has no exact existing molecule. Extracting a new molecule may be useful later, but there is no existing atom/molecule replacement today. |

## Suggested Fix Order

1. Replace the clear candidates first: `SearchBar` clear button, dot spans, `FileChip` remove button, and `ToastAction`.
2. Normalize raw icons through the `Icon` atom where it does not change layout.
3. Revisit conditional molecules only after deciding whether `PostCard` should use compact icon-only reactions and whether `UserChip` should support richer linked metadata.
