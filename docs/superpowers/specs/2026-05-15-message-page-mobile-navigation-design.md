# MessagePage Mobile Navigation Design

## Scope

Adjust only the mobile behavior of `src/components/pages/MessagePage/MessagePage.tsx`.

- Desktop layout stays as-is
- Tablet layout stays as-is
- Mobile entry screen defaults to the chat list
- Mobile detail view opens as its own screen

## Problem

The current mobile layout still inherits the page/grid composition used for larger viewports. That makes the screen feel stacked and page-like instead of behaving like a typical phone messaging UI.

## Decision

Use a local view-state model for mobile instead of adding routing.

Mobile will render only one pane at a time:

- `list`
- `room`
- `detail`

This keeps the change small, matches the current page-only mock architecture, and avoids introducing route complexity for a screen that does not yet need deep links or browser-history semantics.

## Rejected Alternative

Add `react-router` or route-like URL state for mobile subviews.

This is not justified for the current scope because:

- `MessagePage` is a page composition used for design verification
- there is no existing route structure to extend here
- the problem is interaction flow, not URL modeling
- local state already supports the required transitions cleanly

Routing can be introduced later if the product needs direct room URLs, deep links, or browser back-button support.

## Mobile Behavior

### Entry

On mobile, the first screen is always the inbox list.

### Room selection

Selecting a room:

- keeps the selected room id in state
- clears that room's unread badge as it already does today
- changes the mobile screen from `list` to `room`

### Detail entry

Tapping the info button from the room header changes the mobile screen from `room` to `detail`.

### Back navigation

Back behavior is linear:

- `detail -> room`
- `room -> list`

### Header behavior

On mobile, `PageHeader` is hidden for all three screens.

The room header inside `RoomPane` remains and becomes the primary top bar for the chat screen.

## Implementation Shape

Keep `InboxPane`, `RoomPane`, and `DetailPane` as the rendering units.

Change only the page-level orchestration:

- replace the current mobile booleans with a single mobile screen state
- render only the active mobile pane
- preserve the current desktop and tablet conditional layout

This keeps the change surgical and avoids creating new page-level components.

## Verification

Success means:

1. On a phone-sized viewport, the first screen shows only the chat list
2. Selecting a room shows only the room view
3. Opening details shows only the detail view
4. Back navigation returns `detail -> room -> list`
5. Tablet and desktop behavior remain unchanged
