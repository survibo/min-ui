import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '../components/atoms';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style', 'asChild'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    src: {
      control: 'text',
    },
    fallback: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: 'John Doe',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    fallback: 'John Doe',
    size: 'md',
  },
};

export const ExtraLarge: Story = {
  args: {
    fallback: 'Jane Smith',
    size: 'xl',
  },
};

export const Small: Story = {
  args: {
    fallback: 'JS',
    size: 'sm',
  },
};
