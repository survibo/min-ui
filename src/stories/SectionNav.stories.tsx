import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionNav } from '../components/molecules';

const meta = {
  title: 'Molecules/SectionNav',
  component: SectionNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      control: false,
    },
    ariaLabel: {
      control: 'text',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof SectionNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: '게시물', href: '/groups/cs-study', isActive: true },
  { label: '멤버', href: '/groups/cs-study/members' },
  { label: '이벤트', href: '/groups/cs-study/events' },
  { label: '사진', href: '/groups/cs-study/photos' },
];

export const Horizontal: Story = {
  args: {
    ariaLabel: '그룹 메뉴',
    orientation: 'horizontal',
    items,
  },
};

export const Vertical: Story = {
  args: {
    ariaLabel: '설정 메뉴',
    orientation: 'vertical',
    items: [
      { label: '프로필', isActive: true },
      { label: '알림' },
      { label: '개인정보' },
      { label: '보안' },
    ],
  },
  render: (args) => (
    <div className="w-52">
      <SectionNav {...args} />
    </div>
  ),
};

export const Overflow: Story = {
  args: {
    ariaLabel: '프로필 메뉴',
    orientation: 'horizontal',
    items: [
      { label: '게시물', isActive: true },
      { label: '소개' },
      { label: '친구' },
      { label: '사진' },
      { label: '동영상' },
      { label: '체크인' },
      { label: '더보기' },
    ],
  },
  render: (args) => (
    <div className="w-72">
      <SectionNav {...args} />
    </div>
  ),
};
