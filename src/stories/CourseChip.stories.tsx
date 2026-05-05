import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseChip } from '../components/molecules';

const meta = {
  title: 'Molecules/CourseChip',
  component: CourseChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    name: {
      control: 'text',
    },
    time: {
      control: 'text',
    },
    location: {
      control: 'text',
    },
    onRemove: {
      action: 'remove',
    },
  },
} satisfies Meta<typeof CourseChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '자료구조',
    time: '화 3-4',
    location: '공학관 301',
  },
};

export const WithRemove: Story = {
  args: {
    name: '알고리즘',
    time: '수 1-2',
    location: '공학관 201',
  },
};

export const NoTime: Story = {
  args: {
    name: '운영체제',
  },
};

export const CourseList: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <CourseChip name="자료구조" time="화 3-4" location="공학관 301" />
      <CourseChip name="알고리즘" time="수 1-2" location="공학관 201" />
      <CourseChip name="운영체제" time="목 5-6" location="자연대 101" />
    </div>
  ),
} as unknown as Story;
