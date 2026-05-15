import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageThread } from '../components/organisms';
import type { MessageThreadProps } from '../components/organisms';
import { storyImage } from './storyImages';

const currentUserId = 'me';

const baseMessages: MessageThreadProps['messages'] = [
  {
    id: 'message-1',
    sender: {
      id: 'hong',
      name: '홍길동',
      avatar: {
        fallback: '홍길동',
      },
    },
    content: '안녕하세요?',
    time: new Date('2026-05-15T09:00:00'),
  },
  {
    id: 'message-2',
    sender: {
      id: currentUserId,
      name: '나',
    },
    content: '네, 안녕하세요!',
    time: new Date('2026-05-15T09:01:00'),
    metaLabel: '읽음',
  },
];

const meta = {
  title: 'Organisms/MessageThread',
  component: MessageThread,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    messages: {
      control: false,
    },
    currentUserId: {
      control: 'text',
    },
  },
} satisfies Meta<typeof MessageThread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleConversation: Story = {
  args: {
    messages: baseMessages,
    currentUserId,
  },
  render: (args) => (
    <div className="w-80 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-3">
      <MessageThread {...args} />
    </div>
  ),
};

export const GroupedConversation: Story = {
  args: {
    currentUserId,
    messages: [
      {
        id: 'group-1',
        sender: {
          id: 'hong',
          name: '홍길동',
          avatar: {
            fallback: '홍길동',
          },
        },
        content: '오늘 스터디 몇 시에 시작해요?',
        time: new Date('2026-05-15T09:00:00'),
      },
      {
        id: 'group-2',
        sender: {
          id: 'hong',
          name: '홍길동',
          avatar: {
            fallback: '홍길동',
          },
        },
        content: '자료는 제가 먼저 올려둘게요.',
        time: new Date('2026-05-15T09:01:00'),
      },
      {
        id: 'group-3',
        sender: {
          id: currentUserId,
          name: '나',
        },
        content: '7시에 시작하면 될 것 같아요.',
        time: new Date('2026-05-15T09:02:00'),
      },
      {
        id: 'group-4',
        sender: {
          id: currentUserId,
          name: '나',
        },
        content: '끝나고 질문도 조금 받을게요.',
        time: new Date('2026-05-15T09:03:00'),
        metaLabel: '읽음',
      },
    ],
  },
  render: (args) => (
    <div className="w-80 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-3">
      <MessageThread {...args} />
    </div>
  ),
};

export const MixedContentThread: Story = {
  args: {
    currentUserId,
    messages: [
      {
        id: 'mixed-1',
        sender: {
          id: 'hong',
          name: '홍길동',
          avatar: {
            fallback: '홍길동',
          },
        },
        content: '스터디 자료 3번 문제 설명 다시 부탁드려요.',
        time: new Date('2026-05-15T09:05:00'),
      },
      {
        id: 'mixed-2',
        sender: {
          id: currentUserId,
          name: '나',
        },
        content: '좋아요. 먼저 답장으로 정리해둘게요.',
        replyTo: {
          name: '홍길동',
          content: '스터디 자료 3번 문제 설명 다시 부탁드려요.',
        },
        time: new Date('2026-05-15T09:06:00'),
      },
      {
        id: 'mixed-3',
        sender: {
          id: currentUserId,
          name: '나',
        },
        image: storyImage(2),
        file: {
          name: 'lecture-note.pdf',
          size: 1024 * 256,
        },
        time: new Date('2026-05-15T09:07:00'),
        metaLabel: '전송됨',
      },
      {
        id: 'mixed-4',
        sender: {
          id: 'hong',
          name: '홍길동',
          avatar: {
            fallback: '홍길동',
          },
        },
        time: new Date('2026-05-15T09:08:00'),
        isDeleted: true,
      },
      {
        id: 'mixed-5',
        sender: {
          id: currentUserId,
          name: '나',
        },
        content: '시간 바꿔서 7시 30분에 갈게.',
        time: new Date('2026-05-15T09:09:00'),
        isEdited: true,
        metaLabel: '읽음',
      },
    ],
  },
  render: (args) => (
    <div className="w-80 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-base)] p-3">
      <MessageThread {...args} />
    </div>
  ),
};
