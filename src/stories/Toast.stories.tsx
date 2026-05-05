import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import {
  Toast,
  ToastClose,
  ToastTitle,
  ToastDescription,
  ToastProvider,
  ToastIcon,
} from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'style', 'children'],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;
type ToastStoryArgs = ComponentProps<typeof Toast>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args: ToastStoryArgs) => (
    <ToastProvider>
      <Toast {...args} defaultOpen>
        <div className="flex gap-3">
          <ToastIcon variant={args.variant ?? 'default'} />
          <div className="grid gap-1">
            <ToastTitle>알림</ToastTitle>
            <ToastDescription>메시지가 전송되었습니다.</ToastDescription>
          </div>
        </div>
        <ToastClose />
      </Toast>
    </ToastProvider>
  ),
} as unknown as Story;

export const Success: Story = {
  args: {
    variant: 'success',
  },
  render: Default.render,
} as unknown as Story;

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  render: Default.render,
} as unknown as Story;

export const Error: Story = {
  args: {
    variant: 'error',
  },
  render: Default.render,
} as unknown as Story;

export const Info: Story = {
  args: {
    variant: 'info',
  },
  render: Default.render,
} as unknown as Story;
