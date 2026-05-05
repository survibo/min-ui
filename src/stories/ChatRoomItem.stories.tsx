import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatRoomItem } from '../components/molecules';

const meta = {
  title: 'Molecules/ChatRoomItem',
  component: ChatRoomItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    avatar: {
      control: false,
    },
    name: {
      control: 'text',
    },
    preview: {
      control: 'text',
    },
    time: {
      control: 'date',
    },
    unreadCount: {
      control: { type: 'number', min: 0 },
    },
    isOnline: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} satisfies Meta<typeof ChatRoomItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
    preview: '안녕하세요!',
    time: new Date(),
  },
};

export const WithUnread: Story = {
  args: {
    name: '김철수',
    preview: '미리보기 텍스트...',
    time: new Date(),
    unreadCount: 5,
  },
};

export const Online: Story = {
  args: {
    name: '이영희',
    preview: '현재 접속 중입니다',
    time: new Date(),
    isOnline: true,
  },
};

export const Full: Story = {
  args: {
    name: '박민수',
    preview: '마지막 메시지 내용입니다',
    time: new Date(),
    unreadCount: 12,
    isOnline: true,
  },
};

export const ChatList: Story = {
  render: () => (
    <div className="space-y-1 w-80 p-2 border border-[var(--color-border-default)] rounded-lg">
      <ChatRoomItem
        name="홍길동"
        preview="안녕하세요!"
        time={new Date()}
        isOnline
      />
      <ChatRoomItem
        name="김철수"
        preview="미리보기..."
        time={new Date()}
        unreadCount={3}
      />
      <ChatRoomItem
        name="이영희"
        preview="읽지 않은 메시지"
        time={new Date()}
      />
    </div>
  ),
} as unknown as Story;
