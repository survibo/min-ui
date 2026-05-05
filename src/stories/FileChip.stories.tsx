import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileChip } from '../components/atoms';

const meta = {
  title: 'Atoms/FileChip',
  component: FileChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'selected', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fileName: {
      control: 'text',
    },
    fileSize: {
      control: { type: 'number', min: 0 },
    },
    onRemove: {
      action: 'remove',
    },
  },
} satisfies Meta<typeof FileChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fileName: 'document.pdf',
  },
};

export const WithSize: Story = {
  args: {
    fileName: 'report.pdf',
    fileSize: 1024 * 512,
  },
};

export const Selected: Story = {
  args: {
    fileName: 'selected-file.pdf',
    variant: 'selected',
  },
};

export const Error: Story = {
  args: {
    fileName: 'failed-upload.pdf',
    variant: 'error',
  },
};

export const WithRemove: Story = {
  args: {
    fileName: 'removable-file.pdf',
  },
};

export const Small: Story = {
  args: {
    fileName: 'small-file.pdf',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    fileName: 'medium-file.pdf',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    fileName: 'large-file.pdf',
    size: 'lg',
  },
};

export const ImageFile: Story = {
  args: {
    fileName: 'photo.jpg',
  },
};
