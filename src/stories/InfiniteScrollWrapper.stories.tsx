import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '../components/atoms';
import { InfiniteScrollWrapper } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/InfiniteScrollWrapper',
  component: InfiniteScrollWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['children', 'className', 'style'],
    },
  },
  argTypes: {
    hasMore: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    useWindow: {
      control: 'boolean',
    },
    onLoadMore: {
      action: 'loadMore',
    },
  },
} satisfies Meta<typeof InfiniteScrollWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = Array.from({ length: 12 }, (_, index) => index + 1);

export const ScrollContainer: Story = {
  args: {
    children: null,
    hasMore: true,
    isLoading: false,
    useWindow: false,
    loader: <Spinner label="더 불러오는 중" />,
    endMessage: (
      <span className="text-sm text-[var(--color-text-secondary)]">
        모든 항목을 불러왔습니다.
      </span>
    ),
  },
  render: (args) => (
    <InfiniteScrollWrapper
      {...args}
      className="h-72 max-w-sm overflow-y-auto rounded-lg border border-[var(--color-border-default)] p-3"
    >
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-md bg-[var(--color-surface-subtle)] px-3 py-2 text-sm text-[var(--color-text-primary)]"
          >
            항목 {item}
          </div>
        ))}
      </div>
    </InfiniteScrollWrapper>
  ),
};

export const EndReached: Story = {
  args: {
    ...ScrollContainer.args,
    hasMore: false,
  },
  render: ScrollContainer.render,
};

export const Loading: Story = {
  args: {
    ...ScrollContainer.args,
    isLoading: true,
  },
  render: ScrollContainer.render,
};
