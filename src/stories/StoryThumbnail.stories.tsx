import type { Meta, StoryObj } from '@storybook/react-vite';
import { StoryThumbnail } from '../components/molecules';
import { storyImage } from './storyImages';

const meta = {
  title: 'Molecules/StoryThumbnail',
  component: StoryThumbnail,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    name: {
      control: 'text',
    },
    isViewed: {
      control: 'boolean',
    },
    isAddButton: {
      control: 'boolean',
    },
    avatar: {
      control: 'object',
    },
  },
} satisfies Meta<typeof StoryThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
  },
};

export const WithAvatar: Story = {
  args: {
    name: '홍길동',
    avatar: {
      src: storyImage(4),
    },
  },
};

export const Viewed: Story = {
  args: {
    name: '김철수',
    isViewed: true,
  },
};

export const AddButton: Story = {
  args: {
    name: '추가',
    isAddButton: true,
  },
};

export const StoryRow: Story = {
  render: () => (
    <div className="flex gap-4 p-4 border border-[var(--color-border-default)] rounded-lg overflow-x-auto">
      <StoryThumbnail name="추가" isAddButton />
      <StoryThumbnail name="홍길동" />
      <StoryThumbnail name="김철수" isViewed />
      <StoryThumbnail name="이영희" />
      <StoryThumbnail name="박민수" isViewed />
    </div>
  ),
} as unknown as Story;
