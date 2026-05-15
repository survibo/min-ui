# MessagePage Inbox Collapse Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a desktop and tablet chat-list collapse toggle that shrinks the inbox panel down to a narrow rail with only a menu icon visible.

**Architecture:** Keep the existing `InboxPane`, `RoomPane`, and `DetailPane` structure. Add one page-level `isInboxCollapsed` state, feed it into the inbox pane, and swap the non-mobile grid widths between full and collapsed variants.

**Tech Stack:** React, TypeScript, Storybook interaction tests, Tailwind utility classes

---

### Task 1: Add the Inbox Collapse State

**Files:**
- Modify: `src/components/pages/MessagePage/MessagePage.tsx`

- [ ] Add `isInboxCollapsed` state in `MessagePage`
- [ ] Pass `collapsed` and `onToggleCollapsed` into `InboxPane`
- [ ] Replace the non-mobile inbox grid width classes with full-width vs collapsed-width literals
- [ ] When collapsed, render only the menu icon inside `InboxPane`

### Task 2: Verify the Toggle in Storybook

**Files:**
- Modify: `src/stories/MessagePage.stories.tsx`

- [ ] Add a desktop interaction check that clicks the collapse button
- [ ] Verify the conversation list disappears when collapsed
- [ ] Verify the expand button restores the list

### Task 3: Run Verification

**Files:**
- Test: `src/stories/MessagePage.stories.tsx`

- [ ] Run `.\node_modules\.bin\vitest.cmd run --project storybook src/stories/MessagePage.stories.tsx`
- [ ] Confirm all MessagePage stories pass
