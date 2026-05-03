import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../components/atoms';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    autoResize: {
      control: 'boolean',
    },
    minRows: {
      control: { type: 'number', min: 1, max: 10 },
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 12 },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요...',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: '입력된 텍스트입니다.',
  },
};

export const AutoResize: Story = {
  args: {
    autoResize: true,
    minRows: 1,
    maxRows: 4,
    placeholder: '입력할수록 높이가 늘어나고 4줄 이후에는 스크롤됩니다...',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: '에러 상태의 텍스트 영역',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '편집할 수 없는 텍스트',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-[var(--color-text-primary)]">
        설명
      </label>
      <Textarea placeholder="상세한 설명을 입력하세요..." />
    </div>
  ),
} as Story;

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          제목
        </label>
        <input
          type="text"
          className="w-full h-10 px-3 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-[var(--color-text-primary)]">
          내용
        </label>
        <Textarea
          autoResize
          minRows={1}
          maxRows={4}
          placeholder="게시물 내용을 입력하세요..."
        />
      </div>
    </div>
  ),
} as Story;
