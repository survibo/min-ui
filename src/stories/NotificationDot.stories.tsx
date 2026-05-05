import type { Meta, StoryObj } from '@storybook/react-vite';
import { NotificationDot } from '../components/molecules';
import * as LucideIcons from 'lucide-react';

const iconMap = {
  Bell: LucideIcons.Bell,
  Mail: LucideIcons.Mail,
  Home: LucideIcons.Home,
  Search: LucideIcons.Search,
};

const meta = {
  title: 'Molecules/NotificationDot',
  component: NotificationDot,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    showBadge: {
      control: 'boolean',
    },
    count: {
      control: { type: 'number', min: 0 },
    },
    badge: {
      control: false,
    },
  },
} satisfies Meta<typeof NotificationDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: LucideIcons.Bell,
  },
};

export const WithCount: Story = {
  args: {
    icon: LucideIcons.Bell,
    count: 5,
    badge: {
      variant: 'secondary',
      size: 'sm',
    },
  },
};

export const WithHighCount: Story = {
  args: {
    icon: LucideIcons.Bell,
    count: 99,
  },
};

export const WithoutBadge: Story = {
  args: {
    icon: LucideIcons.Bell,
    showBadge: false,
  },
};

export const Mail: Story = {
  args: {
    icon: LucideIcons.Mail,
    count: 3,
  },
};

export const NavBar: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 border border-[var(--color-border-default)] rounded-lg">
      <NotificationDot icon={LucideIcons.Home} showBadge={false} />
      <NotificationDot icon={LucideIcons.Search} showBadge={false} />
      <NotificationDot icon={LucideIcons.Bell} count={12} />
      <NotificationDot icon={LucideIcons.Mail} count={5} />
    </div>
  ),
} as unknown as Story;
