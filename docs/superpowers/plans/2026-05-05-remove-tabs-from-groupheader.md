# Remove tabs from GroupHeader Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** GroupHeader에서 tabs prop 제거하고, GroupPage에서 직접 SectionNav 렌더링

**Architecture:** GroupHeader organism简單化 - tabs 관련 코드 제거. GroupPage에서 SectionNav 직접 사용

**Tech Stack:** React

---

### Task 1: GroupHeader에서 tabs prop 제거

**Files:**
- Modify: `src/components/organisms/GroupHeader/GroupHeader.tsx`

변경:
1. import 제거: `SectionNav, type SectionNavItem`
2. Props interface에서 `tabs?: SectionNavItem[]` 제거
3. `<SectionNav>` rendering 로직 제거 (lines ~175-184)
4. Divider도 함께 제거 (tabs 있을 때만 사용)

**Reference:**
- `C:\Users\survi\OneDrive\Desktop\min-ui\src\components\organisms\GroupHeader\GroupHeader.tsx`

---

### Task 2: organisms/index.ts에서 관련 타입 export 제거

**Files:**
- Modify: `src/components/organisms/index.ts`

变更: tabs 관련 type export 제거 (이미 있으면)

---

### Task 3: GroupPage에서 SectionNav 직접 추가

**Files:**
- Modify: `src/components/pages/GroupPage/GroupPage.tsx`

변경:
1. 기존 SectionNav rendering 로직 유지 (이미 사용 중)
2. GroupHeader 하단에 SectionNav 직접 렌더링

---

### Task 4: GroupHeader stories 업데이트

**Files:**
- Modify: `src/stories/GroupHeader.stories.tsx`

变更: tabs 관련 story argument 제거

---

### Task 5: Build 검증

- [ ] `npm run build` 성공 확인