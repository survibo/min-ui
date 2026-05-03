import * as React from 'react';
import { Avatar } from '../../atoms/Badge/Avatar';
import { ImageThumb } from '../../atoms/ImageThumb';
import { FileChip } from '../../atoms/FileChip';
import { TimeBadge } from '../../atoms/TimeBadge';
import type { AvatarProps } from '../../atoms/Badge/Avatar';

export interface MessageBubbleProps {
  avatar?: Omit<AvatarProps, 'ref'>;
  name: string;
  content?: string;
  image?: string;
  file?: { name: string; size?: number };
  time?: Date | string | number;
  isOwn?: boolean;
  className?: string;
}

const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  ({ avatar, name, content, image, file, time, isOwn, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex gap-2 ${isOwn ? 'flex-row-reverse' : 'flex-row'} ${className ?? ''}`}
      >
        {!isOwn && avatar && <Avatar {...avatar} fallback={name} size="sm" />}
        <div
          className={`flex flex-col gap-1 max-w-[70%] ${isOwn ? 'items-end' : 'items-start'}`}
        >
          {!isOwn && (
            <span className="text-xs text-[var(--color-text-secondary)]">
              {name}
            </span>
          )}
          <div
            className={`rounded-2xl px-4 py-2 ${
              isOwn
                ? 'bg-[var(--color-action-default)] text-[var(--color-action-foreground)] rounded-br-md'
                : 'bg-[var(--color-surface-subtle)] text-[var(--color-text-primary)] rounded-bl-md'
            }`}
          >
            {content && (
              <p className="text-sm whitespace-pre-wrap">{content}</p>
            )}
            {image && (
              <ImageThumb
                src={image}
                alt=" attachment"
                aspect="wide"
                className="mt-2 max-w-[200px]"
                rounded="lg"
              />
            )}
            {file && (
              <FileChip
                fileName={file.name}
                fileSize={file.size}
                className={`mt-2 ${isOwn ? 'border-white/20 bg-white/10 text-white' : ''}`}
              />
            )}
          </div>
          {time && <TimeBadge date={time} size="xs" />}
        </div>
      </div>
    );
  }
);
MessageBubble.displayName = 'MessageBubble';

export { MessageBubble };
