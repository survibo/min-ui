import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipProvider } from '../components/atoms';
import * as LucideIcons from 'lucide-react';
import { Button } from '../components/atoms';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['children', 'className', 'style'],
    },
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    delayDuration: {
      control: { type: 'number', min: 0, step: 100 },
    },
    disableHoverableContent: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Tooltip content',
    children: <Button variant="secondary">Hover me</Button>,
  },
};

export const Top: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Top tooltip',
    side: 'top',
    children: <Button variant="secondary">Top</Button>,
  },
};

export const Bottom: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Bottom tooltip',
    side: 'bottom',
    children: <Button variant="secondary">Bottom</Button>,
  },
};

export const Left: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Left tooltip',
    side: 'left',
    children: <Button variant="secondary">Left</Button>,
  },
};

export const Right: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Right tooltip',
    side: 'right',
    children: <Button variant="secondary">Right</Button>,
  },
};

export const Small: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Small tooltip',
    size: 'sm',
    children: <Button variant="secondary">Small</Button>,
  },
};

export const Large: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Large tooltip with more text',
    size: 'lg',
    children: <Button variant="secondary">Large</Button>,
  },
};

export const IconButton: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  args: {
    content: 'Settings',
    children: (
      <button className="p-2 rounded-lg hover:bg-[var(--color-surface-subtle)]">
        <LucideIcons.Settings className="w-5 h-5" />
      </button>
    ),
  },
};

export const IconOnly: Story = {
  name: 'Icon button tooltip',
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="flex gap-4">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
  args: {
    content: '설정',
    children: (
      <button className="p-2 rounded-lg hover:bg-[var(--color-surface-subtle)]">
        <LucideIcons.Settings className="w-5 h-5" />
      </button>
    ),
  },
};
