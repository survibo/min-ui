import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { FeedPage } from '../components/pages';

const meta = {
  title: 'Pages/FeedPage',
  component: FeedPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeedPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getAllByText('studio.nari')[0]).toBeInTheDocument();
    await expect(canvas.getAllByText('daily.grid')[0]).toBeInTheDocument();
    await expect(canvas.queryByText('city.walk')).not.toBeInTheDocument();
    await expect(canvas.queryByText('Explore')).not.toBeInTheDocument();

    await userEvent.click(canvas.getByRole('button', { name: 'Expand navigation' }));
    await expect(canvas.getByText('Explore')).toBeInTheDocument();

    window.scrollTo(0, document.body.scrollHeight);

    await waitFor(() => {
      expect(canvas.getAllByText('city.walk')[0]).toBeInTheDocument();
    });
  },
};
