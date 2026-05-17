import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
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

const isVisibleElement = (element: HTMLElement) =>
  element.getClientRects().length > 0 &&
  window.getComputedStyle(element).visibility !== 'hidden';

const queryVisibleConversationList = (container: HTMLElement) =>
  within(container)
    .queryAllByLabelText('Conversation list')
    .find(isVisibleElement) ?? null;

const getVisibleConversationList = (container: HTMLElement) => {
  const conversationList = queryVisibleConversationList(container);

  if (!conversationList) {
    throw new Error('Visible conversation list not found');
  }

  return conversationList;
};

export const Default: Story = {
  render: () => (
    <ViewportFrame width={1440}>
      <MessagePage />
    </ViewportFrame>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('KMLA Online')).toBeInTheDocument();
    await expect(
      getVisibleConversationList(canvasElement)
    ).toBeInTheDocument();

    await userEvent.click(
      canvas.getByRole('button', { name: '채팅 목록 접기' })
    );

    await waitFor(() => {
      expect(
        queryVisibleConversationList(canvasElement)
      ).not.toBeInTheDocument();
    });

    await userEvent.click(
      canvas.getByRole('button', { name: '채팅 목록 펼치기' })
    );

    await waitFor(() => {
      expect(getVisibleConversationList(canvasElement)).toBeInTheDocument();
    });
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const conversationList = getVisibleConversationList(canvasElement);
    const roomButtons = within(conversationList).getAllByRole('button');

    await expect(conversationList).toBeInTheDocument();
    await expect(canvas.queryByText('KMLA Online')).not.toBeInTheDocument();

    await userEvent.click(roomButtons[1]);

    await waitFor(() => {
      expect(
        queryVisibleConversationList(canvasElement)
      ).not.toBeInTheDocument();
      expect(canvas.getByRole('textbox')).toBeInTheDocument();
    });

    window.history.back();

    await waitFor(() => {
      expect(getVisibleConversationList(canvasElement)).toBeInTheDocument();
      expect(canvas.queryByRole('textbox')).not.toBeInTheDocument();
    });

    await userEvent.click(
      within(getVisibleConversationList(canvasElement)).getAllByRole(
        'button'
      )[1]
    );

    await waitFor(() => {
      expect(canvas.getByRole('textbox')).toBeInTheDocument();
    });

    await userEvent.click(canvas.getAllByRole('button')[1]);

    await waitFor(() => {
      expect(canvas.queryByRole('textbox')).not.toBeInTheDocument();
      expect(
        queryVisibleConversationList(canvasElement)
      ).not.toBeInTheDocument();
    });

    window.history.back();

    await waitFor(() => {
      expect(canvas.getByRole('textbox')).toBeInTheDocument();
    });

    await userEvent.click(canvas.getAllByRole('button')[0]);

    await waitFor(() => {
      expect(getVisibleConversationList(canvasElement)).toBeInTheDocument();
    });
  },
};
