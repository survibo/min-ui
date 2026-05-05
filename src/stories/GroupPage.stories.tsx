import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const Default: Story = {};
