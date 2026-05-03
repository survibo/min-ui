import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserChip } from '../components/molecules';

const meta = {
  title: 'Molecules/UserChip',
  component: UserChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof UserChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: '홍길동',
  },
};

export const WithAvatar: Story = {
  args: {
    name: '홍길동',
    avatar: {
      src: 'https://picsum.photos/200',
    },
  },
};

export const WithRole: Story = {
  args: {
    name: '홍길동',
    role: '관리자',
  },
};

export const WithLink: Story = {
  args: {
    name: '홍길동',
    href: '/profile/1',
  },
};

export const Full: Story = {
  args: {
    name: '홍길동',
    avatar: {
      src: 'https://picsum.photos/200',
    },
    role: '학생',
    href: '/profile/1',
  },
};

export const UserList: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <UserChip name="홍길동" role="학생" />
      <UserChip name="김철수" role="교수" />
      <UserChip name="이영희" role="관리자" />
    </div>
  ),
} as unknown as Story;
