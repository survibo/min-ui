import type { Meta, StoryObj } from '@storybook/react-vite';
import { ApprovalStatusBanner } from '../components/molecules';

const meta = {
  title: 'Molecules/ApprovalStatusBanner',
  component: ApprovalStatusBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['pending', 'approved', 'rejected'],
    },
    message: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ApprovalStatusBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = {
  args: {
    status: 'pending',
  },
};

export const Approved: Story = {
  args: {
    status: 'approved',
  },
};

export const Rejected: Story = {
  args: {
    status: 'rejected',
  },
};

export const WithCustomMessage: Story = {
  args: {
    status: 'pending',
    message: '사용자 승인 대기 중입니다.',
  },
};
