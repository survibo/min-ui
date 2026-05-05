import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '../components/atoms';
import * as LucideIcons from 'lucide-react';

const iconMap = {
  Menu: LucideIcons.Menu,
  Plus: LucideIcons.Plus,
  Settings: LucideIcons.Settings,
  Search: LucideIcons.Search,
  Trash: LucideIcons.Trash,
  X: LucideIcons.X,
  Edit: LucideIcons.Edit,
};

const meta = {
  title: 'Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    'aria-label': {
      control: 'text',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: LucideIcons.Menu,
    'aria-label': '메뉴',
  },
};

export const Primary: Story = {
  args: {
    icon: LucideIcons.Plus,
    'aria-label': '추가',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: LucideIcons.Settings,
    'aria-label': '설정',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    icon: LucideIcons.Search,
    'aria-label': '검색',
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    icon: LucideIcons.Trash,
    'aria-label': '삭제',
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    icon: LucideIcons.X,
    'aria-label': '닫기',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: LucideIcons.Plus,
    'aria-label': '추가',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    icon: LucideIcons.Edit,
    'aria-label': '편집',
    disabled: true,
  },
};
