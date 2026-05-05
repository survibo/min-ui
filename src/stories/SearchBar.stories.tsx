import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { SearchBar } from '../components/molecules';

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    inputProps: {
      control: false,
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: {
      action: 'change',
    },
    onClear: {
      action: 'clear',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledSearchBar = (args: React.ComponentProps<typeof SearchBar>) => {
  const [value, setValue] = React.useState(args.value ?? '검색어 예시');

  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(nextValue) => {
        setValue(nextValue);
        args.onChange?.(nextValue);
      }}
      onClear={() => {
        setValue('');
        args.onClear?.();
      }}
    />
  );
};

export const Default: Story = {
  args: {},
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: '검색어를 입력하세요...',
  },
};

export const WithValue: Story = {
  args: {
    value: '검색어 예시',
  },
};

export const OnChange: Story = {
  args: {
    placeholder: '검색어를 입력하세요...',
  },
};

export const Controlled: Story = {
  render: (args) => <ControlledSearchBar {...args} />,
  args: {
    value: '검색어 예시',
    placeholder: '검색어를 입력하세요...',
  },
};
