import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../components/atoms';
import * as LucideIcons from 'lucide-react';

const iconMap = {
  Home: LucideIcons.Home,
  Mail: LucideIcons.Mail,
  Heart: LucideIcons.Heart,
  CheckCircle: LucideIcons.CheckCircle,
  AlertTriangle: LucideIcons.AlertTriangle,
  AlertCircle: LucideIcons.AlertCircle,
  Info: LucideIcons.Info,
};

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    iconColor: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'tertiary',
        'primary',
        'success',
        'warning',
        'error',
      ],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: LucideIcons.Home,
  },
};

export const WithLabel: Story = {
  args: {
    icon: LucideIcons.Home,
    label: '홈',
  },
};

export const Xs: Story = {
  args: {
    icon: LucideIcons.Mail,
    size: 'xs',
  },
};

export const Sm: Story = {
  args: {
    icon: LucideIcons.Mail,
    size: 'sm',
  },
};

export const Lg: Story = {
  args: {
    icon: LucideIcons.Mail,
    size: 'lg',
  },
};

export const Xl: Story = {
  args: {
    icon: LucideIcons.Mail,
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    icon: LucideIcons.Heart,
    iconColor: 'primary',
  },
};

export const Success: Story = {
  args: {
    icon: LucideIcons.CheckCircle,
    iconColor: 'success',
  },
};

export const Warning: Story = {
  args: {
    icon: LucideIcons.AlertTriangle,
    iconColor: 'warning',
  },
};

export const Error: Story = {
  args: {
    icon: LucideIcons.AlertCircle,
    iconColor: 'error',
  },
};

export const Secondary: Story = {
  args: {
    icon: LucideIcons.Info,
    iconColor: 'secondary',
  },
};
