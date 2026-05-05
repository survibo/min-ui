import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'inbox', 'search', 'users', 'messages', 'posts'],
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    action: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Inbox: Story = {
  args: {
    variant: 'inbox',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    title: '검색 결과 없음',
    description: '다른 검색어를 시도해보세요.',
  },
};

export const Posts: Story = {
  args: {
    variant: 'posts',
    title: '아직 게시물이 없습니다',
    description: '첫 번째 게시물을 작성해보세요!',
    action: {
      label: '게시물 작성',
    },
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'default',
    title: '데이터 없음',
    description: '새로운 데이터를 추가해보세요.',
    icon: <div className="text-4xl">📭</div>,
  },
};
