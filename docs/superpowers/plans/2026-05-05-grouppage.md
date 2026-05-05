# GroupPage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 특정 그룹 안의 게시물을 보여주는 GroupPage를 storybook 형식으로 생성

**Architecture:** FeedPage를 참고하여 GroupPage 컴포넌트 생성 - GroupHeader organism 사용, 사이드바 제거, "게시물" 탭 선택时才显示 게시물 영역

**Tech Stack:** React, Tailwind CSS, Storybook

---

### Task 1: GroupPage 컴포넌트 생성

**Files:**
- Create: `src/components/pages/GroupPage/GroupPage.tsx`

GroupPage.tsx 생성 (FeedPage.tsx 기반):
- Header: 검색바 + 아이콘 (FeedPage와 동일)
- GroupHeader: organism 그대로 사용
- Stories 영역: FeedPage와 동일
- 게시물 영역: PostCard + InfiniteScrollWrapper - tabs에서 "게시물" 선택时才显示
- 사이드바: 제거

Props:
```typescript
export interface GroupPagePost {
  author: { name: string; avatarFallback: string };
  content: string;
  groupName: string;
  images: { src: string; alt: string }[];
  stats: { likes: number; comments: number };
  timestamp: string;
}

export interface GroupPageStory {
  name: string;
  avatar: { fallback: string; style?: React.CSSProperties };
}

export interface GroupPageTab {
  label: string;
  href: string;
  icon?: LucideIcon;
  isActive?: boolean;
}

export type GroupPageProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
```

Mock 데이터:
- stories: StoryThumbnail[] (FeedPage와 동일)
- posts: PostCard[] (FeedPage와 동일)
- groupTabs: [{ label: '게시물', ... }, { label: '멤버', ... }, ...]

Condition: tabs에서 isActive === true && label === '게시물' 일 때만 posts 렌더링

---

### Task 2: GroupPage Storybook stories 생성

**Files:**
- Create: `src/stories/GroupPage.stories.tsx`

FeedPage.stories.tsx 기반으로 생성:
```typescript
const meta = {
  title: 'Pages/GroupPage',
  component: GroupPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GroupPage>;
```

Default 스토리 생성

---

### Task 3: pages/index.ts에 export 추가

**Files:**
- Modify: `src/components/pages/index.ts`

```typescript
export * from './GroupPage';
```

---

### Task 4: 검증

- [ ] Storybook 실행确认: `npm run storybook`
- GroupPage stories 정상 表示确认