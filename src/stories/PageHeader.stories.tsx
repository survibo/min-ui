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
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByText('KMLA Online')).toBeInTheDocument();
    await expect(canvas.getByLabelText('검색')).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: '알림 열기' })
    ).toBeInTheDocument();
  },
};
