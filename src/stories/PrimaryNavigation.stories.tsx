import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimaryNavigation } from '../components/organisms';

const meta = {
  title: 'Organisms/PrimaryNavigation',
  component: PrimaryNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeKey: {
      control: 'select',
      options: ['home', 'explore', 'messages', 'create'],
    },
    collapsed: {
      control: 'boolean',
    },
    onCollapsedChange: {
      action: 'collapsedChange',
    },
  },
} satisfies Meta<typeof PrimaryNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    activeKey: 'home',
    collapsed: false,
  },
  render: (args) => (
    <div className="min-h-screen bg-[var(--color-surface-base)] px-6 py-6">
      <PrimaryNavigation {...args} />
    </div>
  ),
};

export const MobileBottomBar: Story = {
  args: {
    activeKey: 'home',
  },
  render: (args) => (
    <div className="min-h-screen bg-[var(--color-surface-base)] lg:hidden">
      <div className="px-4 py-6 pb-28 text-sm text-[var(--color-text-secondary)]">
        Mobile bottom navigation preview
      </div>
      <PrimaryNavigation {...args} />
    </div>
  ),
};
