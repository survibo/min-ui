import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from '../components/atoms';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card', 'avatar', 'text'],
    },
    width: {
      control: { type: 'number', min: 0 },
    },
    height: {
      control: { type: 'number', min: 0 },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDimensions: Story = {
  args: {
    width: 200,
    height: 100,
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
    className: 'w-full h-32',
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
    width: 40,
    height: 40,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    className: 'w-full h-4',
  },
};

export const TextLines: Story = {
  render: () => (
    <div className="space-y-2 w-full">
      <Skeleton variant="text" className="w-full h-4" />
      <Skeleton variant="text" className="w-4/5 h-4" />
      <Skeleton variant="text" className="w-3/5 h-4" />
    </div>
  ),
} as Story;

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 space-y-4 p-4 border border-[var(--color-border-default)] rounded-xl">
      <div className="flex items-center gap-3">
        <Skeleton variant="avatar" width={40} height={40} />
        <div className="space-y-1 flex-1">
          <Skeleton variant="text" className="w-1/2 h-3" />
          <Skeleton variant="text" className="w-1/3 h-2" />
        </div>
      </div>
      <Skeleton variant="text" className="w-full h-3" />
      <Skeleton variant="text" className="w-full h-3" />
    </div>
  ),
} as Story;
