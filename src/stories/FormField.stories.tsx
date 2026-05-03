import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../components/atoms';
import { FormField } from '../components/molecules';

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '이메일',
    inputProps: {
      placeholder: '이메일을 입력하세요',
    },
  },
};

export const Required: Story = {
  args: {
    label: '이메일',
    required: true,
    inputProps: {
      placeholder: '필수 입력 항목',
    },
  },
};

export const WithError: Story = {
  args: {
    label: '이메일',
    error: '유효한 이메일 주소가 아닙니다',
    inputProps: {
      placeholder: 'example@email.com',
    },
  },
};

export const Disabled: Story = {
  args: {
    label: '비밀번호',
    inputProps: {
      type: 'password',
      defaultValue: 'readonly_password',
      disabled: true,
    },
  },
};

export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <FormField
        label="이메일"
        required
        inputProps={{ type: 'email', placeholder: '이메일을 입력하세요' }}
      />
      <FormField
        label="비밀번호"
        required
        inputProps={{ type: 'password', placeholder: '비밀번호를 입력하세요' }}
      />
      <Button type="button" className="w-full">
        로그인
      </Button>
    </div>
  ),
} as Story;
