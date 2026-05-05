import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageGrid } from '../components/molecules';

const images = Array.from({ length: 9 }, (_, index) => ({
  src: `https://picsum.photos/seed/post-image-${index + 1}/640/480`,
  alt: `게시물 이미지 ${index + 1}`,
}));

const meta = {
  title: 'Molecules/ImageGrid',
  component: ImageGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'style'],
    },
  },
  argTypes: {
    images: {
      control: 'object',
    },
    onImageClick: {
      action: 'imageClick',
    },
  },
} satisfies Meta<typeof ImageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneImage: Story = {
  args: {
    images: images.slice(0, 1),
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};

export const TwoImages: Story = {
  args: {
    images: images.slice(0, 2),
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};

export const ThreeImages: Story = {
  args: {
    images: images.slice(0, 3),
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};

export const FourImages: Story = {
  args: {
    images: images.slice(0, 4),
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};

export const FiveImages: Story = {
  args: {
    images: images.slice(0, 5),
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};

export const MoreThanFiveImages: Story = {
  args: {
    images,
  },
  decorators: [(Story) => <div className="w-[360px]">{Story()}</div>],
};
