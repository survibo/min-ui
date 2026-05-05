import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProtectedRoute } from '../components/cross-cutting';

const meta = {
  title: 'Cross-cutting/ProtectedRoute',
  component: ProtectedRoute,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    isAuthenticated: {
      control: 'boolean',
    },
    userRole: {
      control: 'select',
      options: ['guest', 'student', 'admin'],
    },
    requiredRoles: {
      control: 'check',
      options: ['guest', 'student', 'admin'],
    },
    loginUrl: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ProtectedRoute>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = (
  <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] p-4 text-sm text-[var(--color-text-primary)]">
    보호된 콘텐츠입니다.
  </div>
);

const fallback = (
  <div className="rounded-lg border border-[var(--color-status-warning-border)] bg-[var(--color-status-warning-bg)] p-4 text-sm text-[var(--color-status-warning-text)]">
    접근 권한이 없습니다.
  </div>
);

export const Authenticated: Story = {
  args: {
    isAuthenticated: true,
    userRole: 'student',
    requiredRoles: ['student'],
    fallback,
    children: content,
  },
};

export const UnauthorizedFallback: Story = {
  args: {
    isAuthenticated: false,
    userRole: 'guest',
    requiredRoles: ['student'],
    fallback,
    children: content,
  },
};

export const RoleDenied: Story = {
  args: {
    isAuthenticated: true,
    userRole: 'student',
    requiredRoles: ['admin'],
    fallback,
    children: content,
  },
};
