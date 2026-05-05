# PageHeader Organism Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** FeedPage/GroupPage 공통 Header를 PageHeader organism으로 분리抽出

**Architecture:** PageHeader organism 생성 - searchPlaceholder prop으로SearchBar 커스터마이징 가능, brandName/프로필/아이콘 버튼은 정적

**Tech Stack:** React, Tailwind CSS

---

### Task 1: PageHeader organism 생성

**Files:**
- Create: `src/components/organisms/PageHeader/PageHeader.tsx`

Props:
```typescript
export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  searchPlaceholder?: string;
}
```

구현:
- brandName: "KMLA Online" (정적)
- SearchBar: `placeholder={searchPlaceholder ?? 'Search'}` (prop)
- 프로필: Avatar fallback="ME" (정적)
- 아이콘 버튼: Search, Heart, Send (정적)

기존 FeedPage/GroupPage header와 동일한_markup 유지

---

### Task 2: FeedPage에서 PageHeader 사용하도록 수정

**Files:**
- Modify: `src/components/pages/FeedPage/FeedPage.tsx`

변경:
- `<header>...</header>` 부분을 `<PageHeader searchPlaceholder="Search feed" />`로 교체
- import 추가: `import { PageHeader } from '../../organisms/PageHeader';`

---

### Task 3: GroupPage에서 PageHeader 사용하도록 수정

**Files:**
- Modify: `src/components/pages/GroupPage/GroupPage.tsx`

변경:
- `<header>...</header>` 부분을 `<PageHeader searchPlaceholder="Search group" />`로 교체
- import 추가: `import { PageHeader } from '../../organisms/PageHeader';`

---

### Task 4: 페이지 index에 export 추가

**Files:**
- Modify: `src/components/organisms/index.ts` (또는 해당 index 파일)

```typescript
export * from './PageHeader';
```

---

### Task 5: Build 검증

- [ ] `npm run build` 성공 확인