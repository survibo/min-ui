import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { PageHeader } from '../components/organisms';

const meta = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    searchPlaceholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchPlaceholder: 'Search feed',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('KMLA Online')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Search feed')).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: 'Open search' })
    ).toBeInTheDocument();
  },
};

export const CustomPlaceholder: Story = {
  args: {
    searchPlaceholder: 'Search post',
  },
};

