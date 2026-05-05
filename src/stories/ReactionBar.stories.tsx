import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { ReactionBar } from '../components/molecules';
import * as LucideIcons from 'lucide-react';

const meta = {
  title: 'Molecules/ReactionBar',
  component: ReactionBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    reactions: {
      control: false,
    },
  },
} satisfies Meta<typeof ReactionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const InteractiveReactionBar = () => {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(12);
  const [comments, setComments] = React.useState(5);
  const [shared, setShared] = React.useState(false);

  const handleLike = () => {
    setLiked((previousLiked) => {
      setLikes((previousLikes) =>
        previousLiked ? previousLikes - 1 : previousLikes + 1
      );
      return !previousLiked;
    });
  };

  return (
    <ReactionBar
      reactions={[
        {
          icon: LucideIcons.ThumbsUp,
          label: '좋아요',
          count: likes,
          isActive: liked,
          onClick: handleLike,
        },
        {
          icon: LucideIcons.MessageCircle,
          label: '댓글',
          count: comments,
          onClick: () => setComments((count) => count + 1),
        },
        {
          icon: LucideIcons.Share,
          label: '공유',
          isActive: shared,
          onClick: () => setShared((isShared) => !isShared),
        },
      ]}
    />
  );
};

export const Default: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요', count: 12 },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
};

export const WithActiveReaction: Story = {
  args: {
    reactions: [
      {
        icon: LucideIcons.ThumbsUp,
        label: '좋아요',
        count: 12,
        isActive: true,
      },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
};

export const NoCounts: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요' },
      { icon: LucideIcons.Heart, label: '하트' },
      { icon: LucideIcons.Smile, label: '웃음' },
    ],
  },
};

export const Interactive: Story = {
  args: {
    reactions: [
      { icon: LucideIcons.ThumbsUp, label: '좋아요', count: 12 },
      { icon: LucideIcons.MessageCircle, label: '댓글', count: 5 },
      { icon: LucideIcons.Share, label: '공유' },
    ],
  },
  render: () => <InteractiveReactionBar />,
};
