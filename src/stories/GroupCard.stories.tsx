import type { Meta, StoryObj } from '@storybook/react-vite';
import { GroupCard } from '../components/molecules';

const meta = {
  title: 'Molecules/GroupCard',
  component: GroupCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    image: {
      control: 'object',
    },
    name: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    category: {
      control: 'text',
    },
    memberCount: {
      control: { type: 'number', min: 0 },
    },
    isPrivate: {
      control: 'boolean',
    },
    onClick: {
      action: 'click',
    },
  },
} satisfies Meta<typeof GroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '서울대학교 MT 모임',
    description: '신입생 MT를 위한 친목 단체입니다',
    memberCount: 156,
  },
};

export const WithCategory: Story = {
  args: {
    name: '자료구조 스터디',
    description: '매주 금요일 저녁 자료구조 스터디',
    category: '학업',
    memberCount: 24,
  },
};

export const Private: Story = {
  args: {
    name: '비공개 그룹',
    description: '관리자 승인 후 가입할 수 있습니다',
    isPrivate: true,
    memberCount: 8,
  },
};

export const GroupList: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
      <GroupCard
        name="서울대 MT 모임"
        description="신입생 MT를 위한 친목 단체"
        category="친목"
        memberCount={156}
      />
      <GroupCard
        name="자료구조 스터디"
        description="매주 금요일 스터디"
        category="학업"
        memberCount={24}
      />
    </div>
  ),
} as unknown as Story;
