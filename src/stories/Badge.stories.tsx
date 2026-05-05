import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../components/atoms';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style', 'children'],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'dot',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'dot'],
    },
    count: {
      control: { type: 'number', min: 0 },
    },
    maxCount: {
      control: { type: 'number', min: 1 },
    },
    showZero: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 5,
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    count: 12,
    variant: 'secondary',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    count: 99,
    variant: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    count: 3,
    variant: 'warning',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    count: 1,
    variant: 'error',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    count: 5,
    variant: 'primary',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    count: 100,
    variant: 'secondary',
    size: 'lg',
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    size: 'dot',
  },
};

export const ShowZero: Story = {
  args: {
    count: 0,
    showZero: true,
    variant: 'primary',
    size: 'md',
  },
};
