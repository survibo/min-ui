import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/atoms';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    inputSize: 'md',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Enter email...',
    inputSize: 'md',
  },
};

export const WithValue: Story = {
  args: {
    value: 'user@example.com',
    inputSize: 'md',
    readOnly: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Enter text...',
    inputSize: 'md',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    inputSize: 'md',
    disabled: true,
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    inputSize: 'md',
  },
};
