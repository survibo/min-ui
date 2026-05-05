import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { GroupPage } from '../components/pages';

const meta = {
  title: 'Pages/GroupPage',
  component: GroupPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof GroupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getAllByText('nari')[0]).toBeInTheDocument();
    await expect(canvas.getAllByText('jun')[0]).toBeInTheDocument();
    await expect(canvas.getAllByText('seo')[0]).toBeInTheDocument();
    await expect(canvas.queryByText('mina')).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole('button', { name: /more stories/i }));
    await waitFor(() => {
      expect(canvas.getAllByText('mina')[0]).toBeInTheDocument();
    });
  },
};