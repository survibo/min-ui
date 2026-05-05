import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageThumb } from '../components/atoms';
import { storyImage } from './storyImages';

const meta = {
  title: 'Atoms/ImageThumb',
  component: ImageThumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    aspect: {
      control: 'select',
      options: ['square', 'video', 'portrait', 'wide', 'story'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg', 'full'],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ImageThumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    src: storyImage(0),
    alt: 'Sample image',
  },
};

export const Square: Story = {
  args: {
    aspect: 'square',
    size: 'md',
  },
};

export const Video: Story = {
  args: {
    aspect: 'video',
    size: 'lg',
  },
};

export const Portrait: Story = {
  args: {
    aspect: 'portrait',
    size: 'md',
  },
};

export const Wide: Story = {
  args: {
    aspect: 'wide',
    size: 'lg',
  },
};

export const StoryAspect: Story = {
  args: {
    aspect: 'story',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const RoundedNone: Story = {
  args: {
    rounded: 'none',
  },
};

export const RoundedSm: Story = {
  args: {
    rounded: 'sm',
  },
};

export const RoundedFull: Story = {
  args: {
    rounded: 'full',
  },
};

export const WithImageAndRoundedFull: Story = {
  args: {
    src: storyImage(1),
    alt: 'Circular image',
    rounded: 'full',
  },
};

export const AllAspects: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ImageThumb aspect="square" size="sm" />
      <ImageThumb aspect="video" size="sm" />
      <ImageThumb aspect="portrait" size="sm" />
      <ImageThumb aspect="wide" size="sm" />
      <ImageThumb aspect="story" size="sm" />
    </div>
  ),
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-2">
      <ImageThumb
        src={storyImage(0)}
        alt="Image 1"
        rounded="lg"
      />
      <ImageThumb
        src={storyImage(1)}
        alt="Image 2"
        rounded="lg"
      />
      <ImageThumb
        src={storyImage(2)}
        alt="Image 3"
        rounded="lg"
      />
      <ImageThumb
        src={storyImage(3)}
        alt="Image 4"
        rounded="lg"
      />
      <ImageThumb
        src={storyImage(4)}
        alt="Image 5"
        rounded="lg"
      />
      <ImageThumb
        src={storyImage(5)}
        alt="Image 6"
        rounded="lg"
      />
    </div>
  ),
};
