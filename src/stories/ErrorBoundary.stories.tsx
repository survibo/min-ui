import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ErrorBoundary } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    showError: {
      control: 'boolean',
    },
    onError: {
      action: 'error',
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;
type ErrorBoundaryStoryArgs = ComponentProps<typeof ErrorBoundary>;

export const Default: Story = {
  render: () => (
    <ErrorBoundary>
      <div className="p-4">
        <p>이 영역은 정상적으로 렌더링됩니다.</p>
      </div>
    </ErrorBoundary>
  ),
} as unknown as Story;

const BrokenChild = () => {
  throw new Error('Storybook fallback 확인용 오류입니다.');
};

export const WithFallback: Story = {
  tags: ['!test'],
  render: () => (
    <ErrorBoundary
      fallback={
        <div className="rounded-lg border border-[var(--color-status-error-border)] bg-[var(--color-status-error-bg)] p-4 text-sm text-[var(--color-status-error-text)]">
          사용자 지정 fallback입니다.
        </div>
      }
    >
      <BrokenChild />
    </ErrorBoundary>
  ),
} as unknown as Story;

export const ShowError: Story = {
  tags: ['!test'],
  args: {
    showError: true,
  },
  render: (args: ErrorBoundaryStoryArgs) => (
    <ErrorBoundary {...args}>
      <BrokenChild />
    </ErrorBoundary>
  ),
} as unknown as Story;
