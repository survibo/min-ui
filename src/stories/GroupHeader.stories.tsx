import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, Plus, UserCheck, UserPlus } from 'lucide-react';
import { GroupHeader } from '../components/organisms';
import type { GroupHeaderProps } from '../components/organisms';
import { storyImage } from './storyImages';

const meta = {
  title: 'Organisms/GroupHeader',
  component: GroupHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    name: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    coverImage: {
      control: false,
    },
    category: {
      control: 'text',
    },
    isPrivate: {
      control: 'boolean',
    },
    memberCount: {
      control: { type: 'number', min: 0 },
    },
    actions: {
      control: false,
    },
    moreMenuItems: {
      control: false,
    },
    tabs: {
      control: false,
    },
  },
} satisfies Meta<typeof GroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  name: '컴퓨터공학 스터디',
  description:
    '알고리즘, 자료구조, 프로젝트 리뷰를 함께 진행하는 교내 스터디 그룹입니다.',
  coverImage: {
    src: storyImage(5),
    alt: '컴퓨터공학 스터디 커버 이미지',
  },
  category: '학업',
  isPrivate: true,
  memberCount: 128,
  actions: [
    { label: '가입 요청', icon: UserPlus, variant: 'primary' },
    { label: '초대', icon: Plus, variant: 'secondary' },
  ],
  moreMenuItems: [
    { label: '그룹 공유' },
    { label: '알림 설정' },
    { label: '그룹 신고', variant: 'danger', separatorBefore: true },
  ],
  tabs: [
    { label: '게시물', href: '/groups/cs-study', isActive: true },
    { label: '멤버', href: '/groups/cs-study/members' },
    { label: '이벤트', href: '/groups/cs-study/events' },
    { label: '사진', href: '/groups/cs-study/photos' },
  ],
} satisfies GroupHeaderProps;

export const Default: Story = {
  args: baseArgs,
};

export const Joined: Story = {
  args: {
    ...baseArgs,
    isPrivate: false,
    memberCount: 342,
    actions: [
      { label: '가입됨', icon: UserCheck, variant: 'secondary' },
      { label: '알림', icon: Bell, variant: 'secondary' },
      { label: '초대', icon: Plus, variant: 'primary' },
    ],
  },
};
