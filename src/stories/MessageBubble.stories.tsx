import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageBubble } from '../components/molecules';

const meta = {
  title: 'Molecules/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style', 'avatar'],
    },
  },
  argTypes: {
    name: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    image: {
      control: 'text',
    },
    file: {
      control: 'object',
    },
    isOwn: {
      control: 'boolean',
    },
    time: {
      control: 'date',
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
  },
};

export const WithImage: Story = {
  args: {
    name: '홍길동',
    image: 'https://picsum.photos/200',
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

export const Chat: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <MessageBubble name="홍길동" content="안녕하세요!" time={new Date()} />
      <MessageBubble
        name="나"
        content="네, 안녕하세요!"
        time={new Date()}
        isOwn
      />
      <MessageBubble
        name="홍길동"
        content="좋은 하루 되세요~"
        time={new Date()}
      />
    </div>
  ),
} as unknown as Story;
