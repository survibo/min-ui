# review.md 적용 기록

목적: `review.md`의 Storybook args/argTypes 검토 항목을 실제 스토리에 반영한 내용을 추적하고, 필요 시 되돌릴 범위를 명확히 남긴다.

주의:
- 적용 전 작업트리에 이미 `docs/spec.md` 수정이 있었다. 이 파일은 이번 적용 범위에서 제외했다.
- 대부분의 변경은 Storybook 문서화/Controls/Actions 보강이다.
- 실제 컴포넌트 구현 변경은 `NotificationDot.badge` 공개 prop을 렌더링에 연결한 1건뿐이다. 기존 기본 표시 방식은 유지했다.

## 롤백 범위

이번 적용을 되돌릴 때 대상 파일:

- `src/components/molecules/NotificationDot/NotificationDot.tsx`
- `src/stories/ApprovalStatusBanner.stories.tsx`
- `src/stories/Avatar.stories.tsx`
- `src/stories/Badge.stories.tsx`
- `src/stories/Button.stories.tsx`
- `src/stories/ChatRoomItem.stories.tsx`
- `src/stories/Checkbox.stories.tsx`
- `src/stories/ConfirmDialog.stories.tsx`
- `src/stories/CourseChip.stories.tsx`
- `src/stories/Divider.stories.tsx`
- `src/stories/DropdownMenu.stories.tsx`
- `src/stories/EmptyState.stories.tsx`
- `src/stories/ErrorBoundary.stories.tsx`
- `src/stories/FileChip.stories.tsx`
- `src/stories/FormField.stories.tsx`
- `src/stories/GroupCard.stories.tsx`
- `src/stories/Icon.stories.tsx`
- `src/stories/IconButton.stories.tsx`
- `src/stories/ImageThumb.stories.tsx`
- `src/stories/Input.stories.tsx`
- `src/stories/Link.stories.tsx`
- `src/stories/MediaAttachBar.stories.tsx`
- `src/stories/MessageBubble.stories.tsx`
- `src/stories/Modal.stories.tsx`
- `src/stories/NotificationDot.stories.tsx`
- `src/stories/NotificationItem.stories.tsx`
- `src/stories/ReactionBar.stories.tsx`
- `src/stories/SearchBar.stories.tsx`
- `src/stories/Skeleton.stories.tsx`
- `src/stories/Spinner.stories.tsx`
- `src/stories/StoryThumbnail.stories.tsx`
- `src/stories/Tag.stories.tsx`
- `src/stories/Textarea.stories.tsx`
- `src/stories/TimeBadge.stories.tsx`
- `src/stories/TimeSlotButton.stories.tsx`
- `src/stories/Toast.stories.tsx`
- `src/stories/Toggle.stories.tsx`
- `src/stories/Tooltip.stories.tsx`
- `src/stories/UserChip.stories.tsx`
- `src/stories/InfiniteScrollWrapper.stories.tsx`
- `src/stories/ProtectedRoute.stories.tsx`
- `review-application-log.md`

## 적용 내용 요약

- 누락 스토리 추가: `InfiniteScrollWrapper`, `ProtectedRoute`.
- 높은 우선순위 수정:
  - `Badge`: 실제 `variant`, `size`, `count`, `maxCount`, `showZero` Controls 반영. `Large` 예시를 실제 `lg`로 수정.
  - `Checkbox`: `checked`에 `false`, `true`, `indeterminate` 선택지를 제공하고 `Indeterminate` 예시를 실제 indeterminate 상태로 수정.
  - `ConfirmDialog`: `open`, 문구, `variant`, `loading`, Actions를 Controls/Docs에서 확인 가능하게 변경.
  - `Toast`: `component` 지정, variant별 story 추가, icon/close 포함 조합 예시로 변경.
  - `ErrorBoundary`: `component` 지정, fallback/showError story 추가. 의도적으로 오류를 던지는 story는 자동 테스트 로그 오염을 피하려고 `!test` 태그를 붙였다.
- atoms:
  - `Avatar`, `Button`, `Divider`, `FileChip`, `Icon`, `IconButton`, `ImageThumb`, `Input`, `Link`, `Skeleton`, `Spinner`, `Tag`, `Textarea`, `TimeBadge`, `Toggle`, `Tooltip`의 주요 Controls를 보강하고 low-level props 노출을 줄였다.
- molecules:
  - `FormField`, `SearchBar`, `UserChip`, `NotificationDot`, `StoryThumbnail`, `MessageBubble`, `ChatRoomItem`, `NotificationItem`, `GroupCard`, `TimeSlotButton`, `CourseChip`, `ApprovalStatusBanner`, `DropdownMenu`, `MediaAttachBar`, `ReactionBar`의 Controls/Actions/예시 story를 보강했다.
  - `SearchBar`는 controlled interactive story를 추가했다.
  - `MessageBubble`은 파일 첨부 story를 추가했다.
  - `NotificationItem`은 avatar 포함 story를 추가했다.
  - `GroupCard` story의 혼합 언어 문구를 한국어로 정리했다.
- compound/cross-cutting:
  - `DropdownMenu`는 `align`, `sideOffset`, disabled item 예시를 추가했다.
  - `Modal`은 `showClose={false}` 예시를 추가했다.
  - `EmptyState`는 title/description/action Controls를 보강했다.

## 롤백 방법 메모

커밋 전이라면 위 롤백 범위 파일만 이전 상태로 되돌리고, 새로 추가된 `InfiniteScrollWrapper.stories.tsx`, `ProtectedRoute.stories.tsx`, `review-application-log.md`를 삭제하면 된다. `docs/spec.md`는 이번 작업 전부터 수정되어 있었으므로 롤백 대상에 포함하지 않는다.

커밋 후라면 이 적용만 담긴 커밋을 별도로 만들고, 필요 시 해당 커밋을 revert하는 방식이 가장 안전하다.
