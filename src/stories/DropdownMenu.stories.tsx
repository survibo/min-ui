import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../components/molecules';
import { Button } from '../components/atoms';

const meta = {
  title: 'Molecules/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    sideOffset: {
      control: { type: 'number', min: 0, step: 1 },
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;
type DropdownMenuStoryArgs = ComponentProps<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    align: 'end',
    sideOffset: 4,
  },
  render: (args: DropdownMenuStoryArgs) => (
    <DropdownMenu {...args} trigger={<Button variant="secondary">메뉴</Button>}>
      <DropdownMenuItem>프로필 보기</DropdownMenuItem>
      <DropdownMenuItem>설정</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="danger">로그아웃</DropdownMenuItem>
    </DropdownMenu>
  ),
} as unknown as Story;

export const WithDisabledItem: Story = {
  args: {
    align: 'end',
    sideOffset: 4,
  },
  render: (args: DropdownMenuStoryArgs) => (
    <DropdownMenu {...args} trigger={<Button variant="secondary">메뉴</Button>}>
      <DropdownMenuItem>프로필 보기</DropdownMenuItem>
      <DropdownMenuItem disabled>초대 링크 복사</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="danger">로그아웃</DropdownMenuItem>
    </DropdownMenu>
  ),
} as unknown as Story;
