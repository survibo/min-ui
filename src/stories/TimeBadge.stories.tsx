import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimeBadge } from '../components/atoms';

const meta = {
  title: 'Atoms/TimeBadge',
  component: TimeBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    format: {
      control: 'select',
      options: ['relative', 'absolute'],
    },
    date: {
      control: 'date',
    },
  },
} satisfies Meta<typeof TimeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

const now = new Date('2026-01-15T12:00:00.000Z');
const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);
const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

export const Default: Story = {
  args: {
    date: now,
  },
};

export const Relative: Story = {
  args: {
    date: now,
    format: 'relative',
  },
};

export const Absolute: Story = {
  args: {
    date: now,
    format: 'absolute',
  },
};

export const OneMinuteAgo: Story = {
  args: {
    date: oneMinuteAgo,
  },
};

export const OneHourAgo: Story = {
  args: {
    date: oneHourAgo,
  },
};

export const OneDayAgo: Story = {
  args: {
    date: oneDayAgo,
  },
};

export const OneWeekAgo: Story = {
  args: {
    date: oneWeekAgo,
  },
};

export const Small: Story = {
  args: {
    date: now,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    date: now,
    size: 'md',
  },
};

export const ExtraSmall: Story = {
  args: {
    date: now,
    size: 'xs',
  },
};
