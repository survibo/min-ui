import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationItem } from '../components/molecules';

const meta = {
  title: 'Molecules/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style', 'avatar'],
    },
  },
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    time: {
      control: 'date',
    },
    isRead: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
    onMarkAsRead: {
      action: 'markAsRead',
    },
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '홍길동님이 댓글을 달았습니다',
    time: new Date(),
  },
};

export const WithDescription: Story = {
  args: {
    title: '홍길동님이 댓글을 달았습니다',
    description: '게시물: 오늘의 수업이 재미있었어요!',
    time: new Date(),
  },
};

export const Unread: Story = {
  args: {
    title: '새로운 알림',
    description: '아직 읽지 않은 알림입니다',
    time: new Date(),
    isRead: false,
  },
};

export const Read: Story = {
  args: {
    title: '읽은 알림',
    description: '이미 읽은 알림입니다',
    time: new Date(),
    isRead: true,
  },
};

export const WithAvatar: Story = {
  args: {
    title: '홍길동님이 댓글을 달았습니다',
    description: '게시물: 오늘의 수업이 재미있었어요!',
    time: new Date(),
    isRead: false,
    avatar: {
      src: 'https://picsum.photos/200',
      fallback: '홍길동',
    },
  },
};

export const NotificationList: Story = {
  render: () => (
    <div className="space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg">
      <NotificationItem
        title="홍길동님이 댓글을 달았습니다"
        description="게시물: 오늘의 수업이 재미있었어요!"
        time={new Date()}
        isRead={false}
      />
      <NotificationItem
        title="김철수님이 좋아요를 눌렀습니다"
        time={new Date()}
        isRead={false}
      />
      <NotificationItem
        title="이영희님이 팔로우했습니다"
        time={new Date()}
        isRead={true}
      />
    </div>
  ),
} as unknown as Story;
