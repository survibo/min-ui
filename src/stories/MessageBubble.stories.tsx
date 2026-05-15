import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageBubble } from '../components/molecules';
import { storyImage } from './storyImages';

const meta = {
  title: 'Molecules/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    avatar: {
      control: false,
    },
    image: {
      control: false,
    },
    file: {
      control: false,
    },
    replyTo: {
      control: false,
    },
    name: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    isOwn: {
      control: 'boolean',
    },
    groupPosition: {
      control: 'inline-radio',
      options: ['single', 'start', 'middle', 'end'],
    },
    showAvatar: {
      control: 'boolean',
    },
    showName: {
      control: 'boolean',
    },
    showTime: {
      control: 'boolean',
    },
    time: {
      control: 'date',
    },
    timeFormat: {
      control: 'inline-radio',
      options: ['relative', 'absolute'],
    },
    metaLabel: {
      control: 'text',
    },
    isEdited: {
      control: 'boolean',
    },
    isDeleted: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
    content: '안녕하세요!',
    time: new Date(),
  },
};

export const OwnMessage: Story = {
  args: {
    name: '나',
    content: '네, 안녕하세요!',
    time: new Date(),
    isOwn: true,
    metaLabel: '읽음',
  },
};

export const WithImage: Story = {
  args: {
    name: '홍길동',
    image: storyImage(2),
    time: new Date(),
  },
};

export const WithFile: Story = {
  args: {
    name: '홍길동',
    content: '첨부 파일을 확인해주세요.',
    file: {
      name: 'lecture-note.pdf',
      size: 1024 * 256,
    },
    time: new Date(),
  },
};

export const WithReply: Story = {
  args: {
    name: '나',
    content: '좋아요. 그 부분 기준으로 다시 정리해볼게요.',
    replyTo: {
      name: '홍길동',
      content: '스터디 자료 중 3번 문제 설명이 조금 헷갈려요.',
    },
    time: new Date(),
    isOwn: true,
    metaLabel: '전송됨',
  },
};

export const WithReadState: Story = {
  args: {
    name: '나',
    content: '도착하면 알려줘.',
    time: new Date(),
    timeFormat: 'absolute',
    metaLabel: '?쎌쓬',
    isOwn: true,
  },
};

export const EditedMessage: Story = {
  args: {
    name: '나',
    content: '시간 바꿔서 7시 30분에 갈게.',
    time: new Date(),
    isEdited: true,
    isOwn: true,
    metaLabel: '읽음',
  },
};

export const DeletedMessage: Story = {
  args: {
    name: '홍길동',
    time: new Date(),
    isDeleted: true,
  },
};

export const GroupedMessages: Story = {
  render: () => (
    <div className="space-y-1 w-80">
      <MessageBubble
        avatar={{ fallback: '홍길동' }}
        name="홍길동"
        content="오늘 스터디 몇 시에 시작해요?"
        time={new Date()}
        groupPosition="start"
        showTime={false}
      />
      <MessageBubble
        avatar={{ fallback: '홍길동' }}
        name="홍길동"
        content="자료는 제가 먼저 올려둘게요."
        time={new Date()}
        groupPosition="end"
        showAvatar={false}
        showName={false}
      />
      <MessageBubble
        name="나"
        content="7시에 시작하면 될 것 같아요."
        time={new Date()}
        isOwn
        groupPosition="start"
        showTime={false}
      />
      <MessageBubble
        name="나"
        content="끝나고 질문도 조금 받을게요."
        time={new Date()}
        isOwn
        groupPosition="end"
        metaLabel="읽음"
      />
    </div>
  ),
} as unknown as Story;

export const Chat: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <MessageBubble
        avatar={{ fallback: '홍길동' }}
        name="홍길동"
        content="안녕하세요!"
        time={new Date()}
      />
      <MessageBubble
        name="나"
        content="네, 안녕하세요!"
        time={new Date()}
        isOwn
      />
      <MessageBubble
        avatar={{ fallback: '홍길동' }}
        name="홍길동"
        content="좋은 하루 되세요~"
        time={new Date()}
      />
    </div>
  ),
} as unknown as Story;
