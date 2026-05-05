import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Checkbox } from '../components/atoms';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithLabel = (args: ComponentProps<typeof Checkbox>) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <Checkbox {...args} />
    <span className="text-sm text-[var(--color-text-primary)]">
      약관에 동의합니다
    </span>
  </label>
);

export const Default: Story = {
  args: {},
  render: renderWithLabel,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: renderWithLabel,
};

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
  },
  render: renderWithLabel,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: renderWithLabel,
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: renderWithLabel,
};

export const WithLabel: Story = {
  render: () => (
    <label className="flex items-center gap-2 cursor-pointer">
      <Checkbox id="terms" />
      <span className="text-sm text-[var(--color-text-primary)]">
        약관에 동의합니다
      </span>
    </label>
  ),
};

export const GroupExample: Story = {
  render: () => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox name="option" value="1" />
        <span className="text-sm">옵션 1</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox name="option" value="2" />
        <span className="text-sm">옵션 2</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox name="option" value="3" />
        <span className="text-sm">옵션 3</span>
      </label>
    </div>
  ),
};
