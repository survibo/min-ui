import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Spinner } from '../components/atoms';
import { InfiniteScrollWrapper } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/InfiniteScrollWrapper',
  component: InfiniteScrollWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
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

const initialItemCount = 12;
const pageSize = 8;
const maxItemCount = 36;

const InfiniteScrollDemo = ({
  onLoadMore,
  hasMore: hasMoreArg,
  isLoading: isLoadingArg,
  ...args
}: React.ComponentProps<typeof InfiniteScrollWrapper>) => {
  const [itemCount, setItemCount] = React.useState(initialItemCount);
  const [isLoading, setIsLoading] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);
  const hasMore = hasMoreArg === false ? false : itemCount < maxItemCount;
  const visibleLoading = isLoadingArg || isLoading;
  const items = Array.from({ length: itemCount }, (_, index) => index + 1);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleLoadMore = React.useCallback(() => {
    if (visibleLoading || !hasMore) return;

    onLoadMore?.();
    setIsLoading(true);
    timeoutRef.current = window.setTimeout(() => {
      setItemCount((current) => Math.min(current + pageSize, maxItemCount));
      setIsLoading(false);
      timeoutRef.current = null;
    }, 500);
  }, [hasMore, onLoadMore, visibleLoading]);

  return (
    <InfiniteScrollWrapper
      {...args}
      hasMore={hasMore}
      isLoading={visibleLoading}
      onLoadMore={handleLoadMore}
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
  );
};

export const ScrollContainer: Story = {
  args: {
    children: null,
    hasMore: true,
    isLoading: false,
    useWindow: false,
    loader: <Spinner label="불러오는 중" />,
    endMessage: (
      <span className="text-sm text-[var(--color-text-secondary)]">
        모든 항목을 불러왔습니다.
      </span>
    ),
  },
  render: (args) => <InfiniteScrollDemo {...args} />,
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
