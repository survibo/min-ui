# MessagePage Mobile Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `MessagePage` behave like a typical phone messaging UI by showing only one mobile pane at a time while keeping tablet and desktop behavior unchanged.

**Architecture:** Keep `InboxPane`, `RoomPane`, and `DetailPane` intact and change only the page-level mobile orchestration in `MessagePage`. Replace the current mobile boolean mix with one explicit mobile screen state so the flow is `list -> room -> detail` with linear back navigation.

**Tech Stack:** React, TypeScript, Storybook interaction tests, Tailwind utility classes

---

### Task 1: Refactor Mobile Page State

**Files:**
- Modify: `src/components/pages/MessagePage/MessagePage.tsx`

- [ ] **Step 1: Add a dedicated mobile screen state**

Introduce a mobile-only screen union near the existing viewport types:

```ts
type MobileScreen = 'list' | 'room' | 'detail';
```

Add state in `MessagePage`:

```ts
const [mobileScreen, setMobileScreen] =
  React.useState<MobileScreen>('list');
```

- [ ] **Step 2: Replace the current mobile transition logic**

Update resize and interaction handlers so mobile navigation uses `mobileScreen`:

```ts
React.useEffect(() => {
  if (viewportMode !== 'mobile') {
    setMobileScreen('list');
  }

  if (viewportMode === 'desktop') {
    setIsTabletDetailOpen(false);
  }
}, [viewportMode]);
```

```ts
const handleSelectRoom = React.useCallback(
  (roomId: string) => {
    setSelectedRoomId(roomId);
    setRooms((previousRooms) =>
      previousRooms.map((room) =>
        room.id === roomId ? { ...room, unreadCount: 0 } : room
      )
    );

    if (viewportMode === 'mobile') {
      setMobileScreen('room');
      return;
    }

    setIsTabletDetailOpen(false);
  },
  [viewportMode]
);
```

```ts
const handleOpenDetail = React.useCallback(() => {
  if (viewportMode === 'desktop') {
    setIsDetailOpen((previousValue) => !previousValue);
    return;
  }

  if (viewportMode === 'mobile') {
    setMobileScreen('detail');
    return;
  }

  setIsTabletDetailOpen(true);
}, [viewportMode]);
```

```ts
const handleCloseCompactDetail = React.useCallback(() => {
  if (viewportMode === 'mobile') {
    setMobileScreen('room');
    return;
  }

  setIsTabletDetailOpen(false);
}, [viewportMode]);
```

```ts
const handleBackFromRoom = React.useCallback(() => {
  setMobileScreen('list');
  setIsTabletDetailOpen(false);
}, []);
```

- [ ] **Step 3: Replace the mobile visibility booleans with explicit screen checks**

Compute screen flags from `mobileScreen`:

```ts
const isMobileListScreen =
  viewportMode === 'mobile' && mobileScreen === 'list';
const isMobileRoomScreen =
  viewportMode === 'mobile' && mobileScreen === 'room';
const isMobileDetailScreen =
  viewportMode === 'mobile' && mobileScreen === 'detail';
```

Use them to control rendering:

```ts
const shouldShowPageHeader = viewportMode !== 'mobile';
```

```ts
{(viewportMode !== 'mobile' || isMobileListScreen) && <InboxPane ... />}
```

```ts
{(viewportMode === 'desktop' ||
  viewportMode === 'tablet' ||
  isMobileRoomScreen) &&
  !shouldShowCompactDetail && (
    <RoomPane ... />
  )}
```

```ts
{shouldShowCompactDetail && <DetailPane ... />}
```

Where compact detail is:

```ts
const shouldShowCompactDetail =
  viewportMode === 'mobile'
    ? isMobileDetailScreen
    : viewportMode === 'tablet' && isTabletDetailOpen;
```

- [ ] **Step 4: Verify the file still compiles conceptually**

Check that:

- no references to removed mobile booleans remain
- tablet detail behavior still depends on `isTabletDetailOpen`
- desktop detail behavior still depends on `isDetailOpen`

### Task 2: Update Mobile Story Verification

**Files:**
- Modify: `src/stories/MessagePage.stories.tsx`

- [ ] **Step 1: Keep the mobile story aligned with the new flow**

Ensure the mobile story asserts:

```ts
await expect(canvas.getByLabelText('Conversation list')).toBeInTheDocument();
```

After room selection:

```ts
await waitFor(() => {
  expect(
    canvas.getByRole('button', { name: '紐⑸줉?쇰줈 ?뚯븘媛湲?' })
  ).toBeInTheDocument();
  expect(canvas.queryByLabelText('Conversation list')).not.toBeInTheDocument();
});
```

After detail entry and exiting back twice:

```ts
await waitFor(() => {
  expect(canvas.getByLabelText('Conversation list')).toBeInTheDocument();
});
```

- [ ] **Step 2: Re-run the targeted story verification**

Run:

```bash
npx vitest run --project storybook src/stories/MessagePage.stories.tsx
```

Expected:

- Storybook interaction tests pass for desktop and mobile MessagePage stories
- No regression in the `MobileRoom` scenario
