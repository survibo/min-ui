import type { Meta, StoryObj } from '@storybook/react-vite';
import { MediaAttachBar } from '../components/molecules';

const meta = {
  title: 'Molecules/MediaAttachBar',
  component: MediaAttachBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    onAttachImage: {
      action: 'attachImage',
    },
    onAttachFile: {
      action: 'attachFile',
    },
    onAttachLink: {
      action: 'attachLink',
    },
  },
} satisfies Meta<typeof MediaAttachBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithHandlers: Story = {
  args: {},
};
