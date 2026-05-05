import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { ConfirmDialog } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/ConfirmDialog',
  component: ConfirmDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    confirmText: {
      control: 'text',
    },
    cancelText: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'danger'],
    },
    loading: {
      control: 'boolean',
    },
    onConfirm: {
      action: 'confirm',
    },
    onCancel: {
      action: 'cancel',
    },
    onOpenChange: {
      action: 'openChange',
    },
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;
type ConfirmDialogStoryArgs = ComponentProps<typeof ConfirmDialog>;

export const Default: Story = {
  args: {
    open: true,
    title: '정말 삭제하시겠습니까?',
    description: '이 작업은 되돌릴 수 없습니다.',
    confirmText: '삭제',
    cancelText: '취소',
    variant: 'default',
    loading: false,
  },
  render: (args: ConfirmDialogStoryArgs) => (
    <ConfirmDialog
      {...args}
      open
    />
  ),
} as unknown as Story;

export const Danger: Story = {
  args: {
    open: true,
    title: '계정을 삭제하시겠습니까?',
    description: '모든 데이터가 영구적으로 삭제됩니다.',
    confirmText: '삭제',
    cancelText: '취소',
    variant: 'danger',
  },
  render: (args: ConfirmDialogStoryArgs) => (
    <ConfirmDialog
      {...args}
      open
    />
  ),
} as unknown as Story;

export const Loading: Story = {
  args: {
    open: true,
    title: '처리 중입니다',
    description: '요청이 완료될 때까지 잠시 기다려주세요.',
    confirmText: '처리 중',
    cancelText: '취소',
    loading: true,
  },
  render: (args: ConfirmDialogStoryArgs) => <ConfirmDialog {...args} open />,
} as unknown as Story;
