컴포넌트를 원자(Atom) → 분자(Molecule) → 유기체(Organism) → 템플릿/페이지 순으로, Atomic Design 방법론 기반으로 정리한다. 각 레이어는 아래 레이어의 컴포넌트를 조합해 구성된다.

---

## Layer 1 — Atoms (최소 단위 UI 요소)

재사용 가능하고, 더 이상 분해할 수 없는 단위.

| 컴포넌트     | 설명                                                               |
| ------------ | ------------------------------------------------------------------ |
| `Button`     | variant: primary / secondary / ghost / danger, size: sm/md/lg      |
| `IconButton` | 아이콘만 있는 버튼 (네비게이션, 툴바용)                            |
| `Input`      | text / password / search, 상태: default / focus / error / disabled |
| `Textarea`   | 포스트·댓글 입력용 멀티라인 입력                                   |
| `Checkbox`   | 단일 선택                                                          |
| `Toggle`     | on/off 스위치                                                      |
| `Avatar`     | 프로필 이미지 + fallback 이니셜, size: xs/sm/md/lg                 |
| `Badge`      | 숫자 알림 뱃지, 상태 표시 dot                                      |
| `Tag`        | 그룹 카테고리, 권한 레이블 등 칩 형태                              |
| `Icon`       | 아이콘 래퍼 (svg sprite 또는 라이브러리 통일)                      |
| `Spinner`    | 로딩 인디케이터                                                    |
| `Skeleton`   | 컨텐츠 로딩 플레이스홀더                                           |
| `Divider`    | 수평/수직 구분선                                                   |
| `Tooltip`    | 호버 시 짧은 설명                                                  |
| `Link`       | 라우터 연동 텍스트 링크                                            |
| `ImageThumb` | 고정 비율 이미지 (포스트 첨부, 스토리 썸네일)                      |
| `FileChip`   | DM 파일 전송 시 첨부 파일 표시 칩                                  |
| `TimeBadge`  | 게시 시간, 메시지 시간 표시                                        |

---

## Layer 2 — Molecules (Atoms 조합)

단일 역할을 수행하는 작은 UI 블록.

| 컴포넌트               | 구성 Atoms                                                | 설명                         |
| ---------------------- | --------------------------------------------------------- | ---------------------------- |
| `FormField`            | `Input` + `Label` + 에러 텍스트                           | 레이블·입력·에러 메시지 묶음 |
| `SearchBar`            | `Input` + `Icon` + `IconButton`                           | 검색 입력창                  |
| `UserChip`             | `Avatar` + `Link` + `Tag`                                 | 이름·역할을 인라인 표시      |
| `NotificationDot`      | `Badge` + `Icon`                                          | 아이콘 위 알림 뱃지 오버레이 |
| `ReactionBar`          | `IconButton` × N + 카운트                                 | 좋아요·댓글·공유 액션 행     |
| `StoryThumbnail`       | `ImageThumb` + `Avatar` + `TimeBadge`                     | 스토리 미리보기 원형         |
| `MessageBubble`        | `Avatar` + 텍스트/`ImageThumb`/`FileChip` + `TimeBadge`   | DM 단일 메시지               |
| `ChatRoomItem`         | `Avatar` + 이름 + 미리보기 텍스트 + `TimeBadge` + `Badge` | 채팅 목록 한 행              |
| `NotificationItem`     | `Avatar` + 텍스트 + `TimeBadge`                           | 알림 한 건                   |
| `GroupCard`            | `ImageThumb` + 그룹명 + `Tag` + 멤버 수                   | 그룹 탐색 카드               |
| `TimeSlotButton`       | `Button` + 상태(available/booked/mine)                    | 예약 시간 슬롯 단위          |
| `CourseChip`           | 과목명 + 시간 + `IconButton`(삭제)                        | 시간표 강의 입력 칩          |
| `ApprovalStatusBanner` | `Icon` + 텍스트 + `Spinner`                               | 관리자 승인 대기 상태 표시   |
| `DropdownMenu`         | `Button` + 항목 리스트                                    | 컨텍스트 액션 메뉴           |
| `MediaAttachBar`       | `IconButton` × N (이미지·파일·링크)                       | DM 첨부 툴바                 |

## 횡단 관심사 (Cross-cutting)

페이지·Organism에 걸쳐 공통으로 필요한 컴포넌트.

| 컴포넌트                | 설명                              |
| ----------------------- | --------------------------------- |
| `Modal`                 | 범용 다이얼로그 래퍼              |
| `Toast`                 | 성공·오류 토스트 메시지           |
| `ConfirmDialog`         | 삭제·취소 확인 `Modal`            |
| `InfiniteScrollWrapper` | 피드·채팅 무한 스크롤 컨테이너    |
| `ProtectedRoute`        | 인증 상태·권한에 따른 라우팅 가드 |
| `ErrorBoundary`         | 컴포넌트 단위 오류 격리           |
| `EmptyState`            | 데이터 없음 일러스트 + 메시지     |

---
