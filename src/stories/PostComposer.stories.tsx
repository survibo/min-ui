import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { PostComposer } from '../components/organisms';
import type { PostComposerProps } from '../components/organisms';

const meta = {
  title: 'Organisms/PostComposer',
  component: PostComposer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    author: {
      control: false,
    },
    placeholder: {
      control: 'text',
    },
    submitLabel: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    isSubmitting: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof PostComposer>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs = {
  author: {
    name: '김민준',
    avatarFallback: '김민준',
  },
  placeholder: '그룹에 공유할 내용을 입력하세요.',
  submitLabel: '게시',
} satisfies PostComposerProps;

const ControlledComposer = (args: PostComposerProps) => {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-full max-w-3xl">
      <PostComposer
        {...args}
        value={value}
        onValueChange={setValue}
        onSubmit={() => setValue('')}
      />
    </div>
  );
};

export const GroupPost: Story = {
  args: baseArgs,
  render: (args) => <ControlledComposer {...args} />,
};

export const StoryPost: Story = {
  args: {
    ...baseArgs,
    placeholder: '오늘의 순간을 남겨보세요.',
    submitLabel: '스토리 올리기',
  },
  render: (args) => <ControlledComposer {...args} />,
};
