# Storybook Args 검토

검토 대상: `src/stories/*.stories.tsx` 전체와 대응되는 `src/components/**` 공개 props.

검토 기준:
- Storybook에서 사용자가 직접 확인하거나 조작해야 하는 props는 `args` 또는 `argTypes`로 드러낸다.
- `children`, `className`, `style`, `asChild`, 내부 wrapper props처럼 Storybook Controls에서 조작해도 의미가 약한 props는 기본적으로 숨기거나 render 예시로만 다룬다.
- 함수 props는 Controls 입력값보다 Actions 또는 명확한 인터랙티브 render story가 더 적합하다.
- compound component 계열은 단일 component args보다 실제 조합 예시를 우선한다.

## 핵심 요약

| 우선순위 | 항목 | 판단 |
| --- | --- | --- |
| 높음 | `InfiniteScrollWrapper`, `ProtectedRoute` | 컴포넌트는 export되어 있지만 Storybook 스토리가 없음 |
| 높음 | `Badge` | 실제 variant/size 옵션과 Storybook argTypes 옵션이 맞지 않음 |
| 높음 | `Checkbox` | `indeterminate` 예시가 `checked: undefined`라 실제 의도와 다르고, `checked` control이 없음 |
| 높음 | `ConfirmDialog`, `Toast`, `ErrorBoundary` | 주요 props가 render 내부에 고정되어 Controls/Docs에서 확인하기 어려움 |
| 중간 | `Modal`, `DropdownMenu` | compound 구조라 render story는 맞지만 핵심 props 예시가 부족함 |
| 중간 | `SearchBar`, `Textarea`, `Tooltip` | 사용자가 조절할 만한 props 일부가 argTypes에 없음 |
| 낮음 | 단순 atoms 다수 | 기본 story coverage는 있으나 `alt`, `fallback`, `showZero`, `maxCount` 같은 세부 props 노출이 부족함 |

## 스토리 누락 컴포넌트

| 컴포넌트 | 현재 상태 | 추가 권장 args/스토리 |
| --- | --- | --- |
| `InfiniteScrollWrapper` | 스토리 없음 | `hasMore`, `isLoading`, `loader`, `endMessage`, `useWindow`, `onLoadMore` 액션. 실제 스크롤 컨테이너 예시 필요 |
| `ProtectedRoute` | 스토리 없음 | `isAuthenticated`, `userRole`, `requiredRoles`, `fallback`, `childrenWhenUnauthorized`. 리다이렉트가 발생하지 않도록 `fallback` 중심 예시 권장 |

## 컴포넌트별 상세

| 컴포넌트 | 필요한데 부족한 args/argTypes | 불필요하거나 숨김 권장 | 메모 |
| --- | --- | --- | --- |
| `Avatar` | `size` 옵션에 `xl` 누락. `src`, `fallback`, `alt` control 추가 권장 | Radix root 이벤트/저수준 props는 숨김 | `ExtraLarge` 스토리가 실제로는 `lg`라 이름과 값이 어긋남 |
| `Badge` | `variant` 옵션에 `default`, `dot` 누락. `size` 옵션에 `lg`, `dot` 누락. `count`, `maxCount`, `showZero` control 추가 권장 | `children`은 count badge와 혼용되므로 기본 Controls에서는 숨김 권장 | `Large` 스토리가 `size: md`라 오해 가능 |
| `Button` | 현재 `variant`, `size`, `disabled`는 적절함. `type`은 form 예시에서만 필요 | `asChild`, 일반 DOM 이벤트는 숨김 권장 | `Loading`은 실제 loading prop이 없으므로 이름을 `DisabledLoadingLabel`처럼 바꾸거나 Spinner 포함 render story로 분리 권장 |
| `Checkbox` | `checked` control을 `false`, `true`, `indeterminate`로 제공 권장. `disabled` control 추가 권장 | 내부 `state` variant는 사용자 args로 노출하지 않음 | 현재 `Indeterminate`의 `checked: undefined`는 uncontrolled에 가까워 잘못된 예시 |
| `Divider` | `decorative` control 추가 고려 | Radix orientation 원본 prop은 이미 `orientation`으로 래핑되어 중복 노출 불필요 | `orientation`, `variant`는 적절함 |
| `FileChip` | `fileName`, `fileSize`, `onRemove` action control 추가 권장 | HTML div props는 숨김 | 이미지 파일은 `file:///` 경로를 만들어 실제 이미지가 안 보일 수 있어 placeholder 설명 필요 |
| `Icon` | `label` text control 추가 권장 | `icon`은 Lucide component라 일반 Controls보다 매핑 select가 적합 | 현재 핵심 variant는 충분함 |
| `IconButton` | `disabled`, `aria-label` control 추가 권장 | `icon`은 일반 object control보다 icon select 매핑이 적합. `asChild` 숨김 권장 | 접근성상 `aria-label`을 Docs에서 보이게 유지하는 편이 좋음 |
| `ImageThumb` | `src`, `alt` control 추가 권장. `Default`에 `size: md`를 넣어 빈 썸네일도 크기가 보이게 하는 편이 좋음 | 로딩 내부 state는 숨김 | 현재 aspect/size/rounded coverage는 좋음 |
| `Input` | `type`, `placeholder`, `disabled`, `readOnly`, `variant` control 추가 권장 | 모든 native input props 전체 노출은 과함 | `variant: error` 스토리가 args로 드러나지 않음 |
| `Link` | `href`, `external`, `children` control 추가 권장 | `onClick`은 Actions로 처리 | `variant`, `underline`은 적절함 |
| `Skeleton` | `width`, `height` control 추가 권장 | `className`은 Controls에서 숨기고 layout stories로 표현 권장 | 현재 `className` 기반 예시가 많아 Docs Controls로는 재현이 애매함 |
| `Spinner` | 현재 `size`, `spinnerColor`, `label` coverage는 대체로 충분 | DOM span props 숨김 | `WithLabel`은 시각 표시가 아니라 sr-only label임을 스토리명에서 알리면 더 명확함 |
| `Tag` | `children` text control 추가 권장 | HTML span props 숨김 | variant/size coverage는 좋음 |
| `Textarea` | 최근 추가된 `autoResize`, `minRows`, `maxRows` controls는 적절함. `disabled`, `placeholder`, `variant`도 controls에 명시 권장 | native textarea 전체 props는 숨김 | 기존 고정 높이와 auto-resize story가 모두 있어 방향은 좋음 |
| `TimeBadge` | `date` control은 Date/string 입력 예시가 있으면 좋음 | 실시간 now 계산 값은 Controls에서 고정값으로 바꾸는 편이 테스트 안정성에 좋음 | `size`, `format`은 적절함 |
| `Toggle` | `checked`, `defaultChecked`, `disabled` controls 추가 권장 | Radix switch 저수준 props 숨김 | variant/size coverage는 충분함 |
| `Tooltip` | `align`, `delayDuration`, `disableHoverableContent` controls 추가 권장 | `children`은 Controls보다 render story가 적합 | `IconOnly`의 `content: ''`는 툴팁 의미가 없어 제거하거나 “빈 content 방어” 스토리로 명확히 이름 변경 권장 |
| `FormField` | `label`, `required`, `error`, `inputProps.placeholder`, `inputProps.type` control 추가 권장 | `labelProps`, `errorProps`는 숨김 권장 | `inputProps` object는 Docs에서 쓰기 불편하므로 대표 props를 story render로 분리하는 편이 좋음 |
| `SearchBar` | `placeholder`, `value`, `onChange`, `onClear` action 추가 권장. controlled interactive story 권장 | `inputProps` object는 숨김 권장 | `WithValue`는 값이 고정되어 입력 변화가 반영되지 않으므로 read-only 예시로 명확히 하거나 render story로 전환 권장 |
| `UserChip` | `name`, `role`, `href`, `avatar.src` control 추가 권장 | `linkProps`, `tagProps`는 숨김 권장 | 중앙 정렬/목록 정렬 이슈가 있어 긴 role 텍스트 예시를 하나 추가하면 회귀 확인에 좋음 |
| `NotificationDot` | `showBadge`, `count`, `badge.variant`, `badge.size` control 추가 권장 | `badge` 전체 object control은 숨김 또는 세부 controls로 분해 권장 | `icon`은 Lucide select 매핑이 적합 |
| `ReactionBar` | `reactions`는 일반 Controls보다 render story가 적합. `Interactive`는 현재 좋은 방향 | `reactions` object control은 숨김 권장 | active/count/onClick 조합이 중요하므로 story 중심 유지 권장 |
| `StoryThumbnail` | `name`, `isViewed`, `isAddButton`, `avatar.src` control 추가 권장 | `avatar` 전체 object는 숨김 또는 세부 controls로 분해 권장 | add/viewed/avatar 조합 coverage는 괜찮음 |
| `MessageBubble` | `content`, `image`, `file`, `isOwn`, `time` controls 추가 권장 | `avatar` object는 세부 controls로 분해 권장 | `file` 첨부 스토리가 없음 |
| `ChatRoomItem` | `name`, `preview`, `time`, `unreadCount`, `isOnline` controls 추가 권장 | `avatar` object는 세부 controls 권장 | `onClick` action 스토리 추가 권장 |
| `NotificationItem` | `title`, `description`, `time`, `isRead`, `onClick` action 추가 권장 | `onMarkAsRead`는 컴포넌트 내부에서 사용되지 않으므로 제거 후보 또는 구현 필요 | avatar 포함 스토리도 필요 |
| `GroupCard` | `image.src`, `name`, `description`, `category`, `memberCount`, `isPrivate` controls 추가 권장 | `image` object는 세부 controls로 분해 권장 | 스토리 텍스트에 중국어가 섞여 있어 별도 정리 필요 |
| `TimeSlotButton` | `time`, `status`, `disabled`, `onBook`, `onCancel` action 추가 권장 | native button 이벤트 전체는 숨김 | booked/mine/available coverage는 좋음 |
| `CourseChip` | `name`, `time`, `location`, `onRemove` action 추가 권장 | `className` 숨김 | 기본 coverage는 충분 |
| `ApprovalStatusBanner` | `status`, `message` controls 추가 권장 | `className` 숨김 | 현재 상태별 story는 충분 |
| `DropdownMenu` | `align`, `sideOffset` controls 또는 별도 stories 추가 권장 | `trigger`, `children`은 Controls보다 render story가 적합 | `DropdownMenuItem variant`, disabled 예시가 추가되면 좋음 |
| `MediaAttachBar` | 함수 props는 Actions로 매핑 권장 | `className` 숨김 | 현재 args는 함수만 있어 Storybook Actions 패널 연동이 더 적합 |
| `Modal` | `defaultOpen/open`, `showClose` 예시 추가 권장 | compound children은 Controls보다 render story 유지 | `ModalContent showClose={false}` story가 필요함 |
| `Toast` | `component: Toast` 지정, `variant` stories(`success`, `warning`, `error`, `info`) 추가 권장 | provider 내부 children은 Controls보다 render story 유지 | 현재 Default만 있어 variant와 action/close 확인이 부족함 |
| `ConfirmDialog` | `open`, `title`, `description`, `confirmText`, `cancelText`, `variant`, `loading` args/argTypes 추가 권장 | `onConfirm`, `onCancel`, `onOpenChange`는 Actions 권장 | 현재 render 내부 고정이라 Docs Controls가 거의 비어 보임 |
| `EmptyState` | `title`, `description`, `action.label` controls 추가 권장 | `icon`, `action.onClick`은 render story 또는 Actions 권장 | variant coverage는 좋음 |
| `ErrorBoundary` | `component: ErrorBoundary` 지정. `showError`, `fallback`, `onError` 예시 추가 권장 | 실제 error throw child는 Controls보다 render story가 적합 | 현재 정상 렌더링만 있어 핵심 기능인 fallback 확인이 안 됨 |

## 제거 또는 비노출 우선 후보

| 대상 | 이유 | 권장 처리 |
| --- | --- | --- |
| `NotificationItem.onMarkAsRead` | props에는 있지만 구현에서 사용되지 않음 | 구현하거나 public props에서 제거 검토 |
| `SearchBar.inputProps` | object control로 다루기 어렵고 `value/onChange/type`은 의도적으로 제외됨 | Controls 숨김, 대표 옵션만 별도 story로 제공 |
| `FormField.labelProps`, `FormField.errorProps` | 데모 사용자가 조작할 가능성이 낮음 | Controls 숨김 |
| `UserChip.linkProps`, `UserChip.tagProps` | 조합 세부 props라 Controls에서 노이즈가 큼 | Controls 숨김 |
| `className`, `style`, low-level DOM props 전반 | 대부분의 컴포넌트에서 Controls 노이즈 | Storybook `parameters.controls.exclude` 패턴 적용 권장 |
| `asChild` 계열 | Radix Slot 조합용 고급 prop | 별도 advanced story가 없다면 Controls 숨김 |

## Compound 하위 컴포넌트 메모

| 하위 컴포넌트 | 검토 결과 |
| --- | --- |
| `DropdownMenuItem` | `variant="danger"` 예시는 있으나 disabled, click action 예시가 없다. `DropdownMenu` 본체 args보다 item 조합 스토리 추가가 더 적합하다 |
| `DropdownMenuSeparator` | 현재 기본 메뉴 예시에 포함되어 충분하다. Controls로 노출할 필요는 낮다 |
| `ModalContent` | `showClose` prop이 있으므로 `showClose={false}` 스토리를 추가하는 것이 좋다 |
| `ToastTitle`, `ToastDescription` | Controls보다 `Toast` variant별 조합 story에서 자연스럽게 확인하는 편이 좋다 |
| `ToastProvider` | provider 자체 args보다 `Toast`/`Toaster` 사용 예시를 통해 검증하는 편이 적합하다 |

## 2차 검토 결과

1. 자동 추출 결과와 실제 컴포넌트 구현을 다시 대조했다. 특히 `Badge`, `Checkbox`, `Textarea`, `Tooltip`, `Modal`, `Toast`, `ErrorBoundary`, `InfiniteScrollWrapper`, `ProtectedRoute`는 구현 파일을 직접 확인했다.
2. 단순히 props가 있다는 이유만으로 모두 args로 추가하라고 정리하지 않았다. `children`, `className`, `asChild`, nested object props는 대부분 숨김 또는 render story 유지로 분리했다.
3. 현재 Storybook 테스트 관점에서 가장 먼저 고칠 항목은 `Badge` 옵션 불일치, `Checkbox` indeterminate 예시, `ConfirmDialog/Toast/ErrorBoundary`의 Controls 부재, 누락 스토리 2개다.
4. 이 문서는 코드 변경 없이 리뷰만 기록한다. 실제 반영 시에는 위 우선순위 순서대로 작은 PR 단위로 나누는 것을 권장한다.
