import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '../components/atoms';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
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
      options: ['default', 'primary', 'success', 'warning', 'error', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: '성공',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: '경고',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: '오류',
    variant: 'error',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outlined',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
} as Story;

export const TagGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="primary">React</Tag>
      <Tag variant="primary">TypeScript</Tag>
      <Tag variant="primary">Storybook</Tag>
    </div>
  ),
} as Story;
