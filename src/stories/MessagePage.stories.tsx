import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessagePage } from '../components/pages';

const ViewportFrame = ({
  width,
  children,
}: {
  width: number;
  children: React.ReactNode;
}) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useLayoutEffect(() => {
    const previousWidth = window.innerWidth;

    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: width,
      writable: true,
    });
    window.dispatchEvent(new Event('resize'));
    setIsReady(true);

    return () => {
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        value: previousWidth,
        writable: true,
      });
      window.dispatchEvent(new Event('resize'));
    };
  }, [width]);

  if (!isReady) {
    return null;
  }

  return <>{children}</>;
};

const meta = {
  title: 'Pages/MessagePage',
  component: MessagePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MessagePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ViewportFrame width={1440}>
      <MessagePage />
    </ViewportFrame>
  ),
};

export const DetailOpen: Story = {
  render: () => (
    <ViewportFrame width={1440}>
      <MessagePage />
    </ViewportFrame>
  ),
};

export const MobileRoom: Story = {
  render: () => (
    <ViewportFrame width={390}>
      <MessagePage />
    </ViewportFrame>
  ),
};
