import type { Meta, StoryObj } from '@storybook/react-vite';
import { GroupHeader } from '../components/organisms';
import type { GroupHeaderProps } from '../components/organisms';
import { storyImage } from './storyImages';

const meta = {
  title: 'Organisms/GroupHeader',
  component: GroupHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    coverImage: {
      control: false,
    },
    actions: {
      control: false,
    },
    moreMenuItems: {
      control: false,
    },
    name: {
      control: 'text',
    },
    category: {
      control: 'text',
    },
    isPrivate: {
      control: 'boolean',
    },
    isJoined: {
      control: 'boolean',
    },
    memberCount: {
      control: { type: 'number', min: 0 },
    },
  },
} satisfies Meta<typeof GroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  name: '컴퓨터공학 스터디',
  coverImage: {
    src: storyImage(5),
    alt: '컴퓨터공학 스터디 커버 이미지',
  },
  category: '학업',
  isPrivate: true,
  memberCount: 128,
} satisfies GroupHeaderProps;

export const Default: Story = {
  args: baseArgs,
};

export const Joined: Story = {
  args: {
    ...baseArgs,
    isJoined: true,
    memberCount: 342,
  },
};