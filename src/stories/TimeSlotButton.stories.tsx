import type { Meta, StoryObj } from '@storybook/react-vite';
import { TimeSlotButton } from '../components/molecules';

const meta = {
  title: 'Molecules/TimeSlotButton',
  component: TimeSlotButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    time: {
      control: 'text',
    },
    status: {
      control: 'select',
      options: ['available', 'booked', 'mine'],
    },
    disabled: {
      control: 'boolean',
    },
    onBook: {
      action: 'book',
    },
    onCancel: {
      action: 'cancel',
    },
  },
} satisfies Meta<typeof TimeSlotButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    time: '09:00 - 10:00',
  },
};

export const Available: Story = {
  args: {
    time: '09:00 - 10:00',
    status: 'available',
  },
};

export const Booked: Story = {
  args: {
    time: '10:00 - 11:00',
    status: 'booked',
  },
};

export const Mine: Story = {
  args: {
    time: '11:00 - 12:00',
    status: 'mine',
  },
};

export const TimeSlotGrid: Story = {
  render: () => (
    <div className="space-y-2">
      <TimeSlotButton time="09:00 - 10:00" status="available" />
      <TimeSlotButton time="10:00 - 11:00" status="booked" />
      <TimeSlotButton time="11:00 - 12:00" status="mine" />
      <TimeSlotButton time="13:00 - 14:00" status="available" />
    </div>
  ),
} as unknown as Story;
