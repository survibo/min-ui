import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from '../components/atoms';

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Controlled: Story = {
  args: {
    checked: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    defaultChecked: true,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const ToggleGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm">알림 설정</span>
        <Toggle defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">이메일 알림</span>
        <Toggle variant="success" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">마케팅 이메일</span>
        <Toggle />
      </div>
    </div>
  ),
} as Story;
