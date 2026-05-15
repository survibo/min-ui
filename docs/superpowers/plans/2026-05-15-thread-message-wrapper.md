# ThreadMessage Wrapper Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a message-page organism wrapper that consumes product message data and maps it into `MessageBubble` display props.

**Architecture:** Keep `MessageBubble` in `molecules` as the rendering layer. Add `ThreadMessage` in `organisms` to own message-page rules such as avatar/name/time visibility and outgoing status label mapping, while still receiving `groupPosition` from the caller.

**Tech Stack:** React 19, TypeScript, Storybook, Tailwind v4 design tokens

---

### Task 1: Add `ThreadMessage` organism

**Files:**
- Create: `src/components/organisms/ThreadMessage/ThreadMessage.tsx`
- Create: `src/components/organisms/ThreadMessage/index.ts`
- Modify: `src/components/organisms/index.ts`

- [ ] Define message-domain props for one thread message.
- [ ] Map `deliveryStatus` to outgoing `metaLabel`.
- [ ] Derive `showAvatar`, `showName`, `showTime`, `isEdited`, and `isDeleted` from message data plus `groupPosition`.
- [ ] Render `MessageBubble` with those derived props.

### Task 2: Add Storybook coverage

**Files:**
- Create: `src/stories/ThreadMessage.stories.tsx`

- [ ] Add a default incoming message story.
- [ ] Add a grouped outgoing message story.
- [ ] Add a reply/deleted/edited coverage story that exercises wrapper mapping.

### Task 3: Verify integration

**Files:**
- Verify only

- [ ] Run `npm run build`.
- [ ] Confirm the new organism exports cleanly from `src/components/organisms/index.ts`.
