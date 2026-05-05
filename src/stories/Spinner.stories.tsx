import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../components/atoms';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    spinnerColor: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'white'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  name: 'Screen reader label',
  args: {
    label: '로딩 중...',
  },
};

export const Xs: Story = {
  args: {
    size: 'xs',
  },
};

export const Sm: Story = {
  args: {
    size: 'sm',
  },
};

export const Lg: Story = {
  args: {
    size: 'lg',
  },
};

export const Xl: Story = {
  args: {
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    spinnerColor: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    spinnerColor: 'secondary',
  },
};

export const White: Story = {
  args: {
    spinnerColor: 'white',
  },
  decorators: [
    (Story) => (
      <div className="bg-[var(--color-action-default)] p-4 rounded-lg inline-flex">
        <Story />
      </div>
    ),
  ],
};

export const LoadingButton: Story = {
  render: () => (
    <button
      disabled
      className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-action-default)] text-white rounded-lg opacity-50 cursor-not-allowed"
    >
      <Spinner size="sm" spinnerColor="white" />
      <span>처리 중...</span>
    </button>
  ),
} as Story;
