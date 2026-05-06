import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { expect } from 'storybook/test';
import { PostCard } from '../components/organisms';
import type { PostCardProps } from '../components/organisms';
import { storyImage } from './storyImages';

const meta = {
  title: 'Organisms/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    author: {
      control: false,
    },
    images: {
      control: false,
    },
    moreMenuItems: {
      control: false,
    },
    stats: {
      control: false,
    },
    content: {
      control: 'text',
    },
    timestamp: {
      control: 'date',
    },
    groupName: {
      control: 'text',
    },
    groupHref: {
      control: 'text',
    },
    isLiked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseTimestamp = new Date('2026-05-05T09:12:00.000Z');

const baseArgs = {
  author: {
    name: '김민준',
    href: '/users/minjun',
    avatarFallback: '김민준',
  },
  groupName: '컴퓨터공학 스터디',
  groupHref: '/groups/cs-study',
  timestamp: baseTimestamp,
  content:
    '오늘 알고리즘 스터디 자료를 정리했습니다.\n댓글로 막히는 문제 번호를 남겨주면 저녁에 같이 보겠습니다.',
  moreMenuItems: [
    { label: '게시물 저장' },
    { label: '알림 켜기' },
    { label: '게시물 링크 복사' },
    { label: '게시물 신고', variant: 'danger', separatorBefore: true },
  ],
  stats: {
    likes: 24,
    comments: 6,
    shares: 2,
  },
} satisfies PostCardProps;

const InteractivePostCard = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(24);
  const [comments, setComments] = React.useState(6);

  const handleLike = () => {
    setIsLiked((previousIsLiked) => {
      setLikes((previousLikes) =>
        previousIsLiked ? previousLikes - 1 : previousLikes + 1
      );
      return !previousIsLiked;
    });
  };

  return (
    <PostCard
      {...baseArgs}
      isLiked={isLiked}
      stats={{ ...baseArgs.stats, likes, comments }}
      images={[
        { src: storyImage(0), alt: '스터디 자료 첫 번째 이미지' },
        { src: storyImage(1), alt: '스터디 자료 두 번째 이미지' },
        { src: storyImage(2), alt: '스터디 자료 세 번째 이미지' },
      ]}
      onLike={handleLike}
      onComment={() => setComments((count) => count + 1)}
    />
  );
};

export const Default: Story = {
  args: baseArgs,
  play: async ({ canvasElement }) => {
    const time = canvasElement.querySelector('time');

    if (!time) {
      throw new Error('PostCard timestamp should render as a time element.');
    }

    await expect(time).toHaveAttribute('datetime', baseTimestamp.toISOString());
  },
};

export const WithImages: Story = {
  args: {
    ...baseArgs,
    content: '동아리 발표 사진입니다. 다음 모임 장소는 댓글로 공지하겠습니다.',
    images: [
      { src: storyImage(3), alt: '동아리 발표 사진' },
      { src: storyImage(4), alt: '발표 자료 화면' },
    ],
    stats: {
      likes: 48,
      comments: 13,
      shares: 4,
    },
  },
};

export const Interactive: Story = {
  args: baseArgs,
  render: () => <InteractivePostCard />,
};
