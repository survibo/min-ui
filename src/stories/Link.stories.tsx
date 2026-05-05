import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../components/atoms';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style', 'asChild'],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger'],
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
    },
    href: {
      control: 'text',
    },
    external: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'click',
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Link text',
  },
};

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Primary link',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Secondary link',
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    href: '#',
    children: 'Danger link',
    variant: 'danger',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External link',
    external: true,
  },
};

export const NoUnderline: Story = {
  args: {
    href: '#',
    children: 'No underline link',
    underline: 'none',
  },
};

export const AlwaysUnderline: Story = {
  args: {
    href: '#',
    children: 'Always underline',
    underline: 'always',
  },
};

export const WithOnClick: Story = {
  args: {
    href: '#',
    children: 'Clickable link',
  },
};
