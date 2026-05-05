import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../components/atoms';

const meta = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['default', 'strong', 'subtle'],
    },
    decorative: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Strong: Story = {
  args: {
    variant: 'strong',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-24 items-center gap-4">
      <span>Before</span>
      <Divider orientation="vertical" />
      <span>After</span>
    </div>
  ),
};

export const VerticalStrong: Story = {
  render: () => (
    <div className="flex h-24 items-center gap-4">
      <span>Before</span>
      <Divider orientation="vertical" variant="strong" />
      <span>After</span>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="space-y-4">
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  ),
};

export const SectionDivider: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="text-sm font-medium text-[var(--color-text-secondary)]">
        섹션 1
      </div>
      <div className="h-20 bg-[var(--color-surface-subtle)]" />
      <Divider variant="subtle" />
      <div className="text-sm font-medium text-[var(--color-text-secondary)]">
        섹션 2
      </div>
      <div className="h-20 bg-[var(--color-surface-subtle)]" />
    </div>
  ),
};
