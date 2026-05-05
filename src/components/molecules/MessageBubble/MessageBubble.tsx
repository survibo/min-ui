import * as React from 'react';
import { Reply } from 'lucide-react';
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
  replyTo?: {
    name: string;
    content: string;
  };
  time?: Date | string | number;
  isOwn?: boolean;
  showAvatar?: boolean;
  showName?: boolean;
  showTime?: boolean;
  className?: string;
}

const MessageBubble = React.forwardRef<HTMLDivElement, MessageBubbleProps>(
  (
    {
      avatar,
      name,
      content,
      image,
      file,
      replyTo,
      time,
      isOwn,
      showAvatar = !isOwn,
      showName = !isOwn,
      showTime = true,
      className,
    },
    ref
  ) => {
    const shouldShowAvatar = Boolean(!isOwn && showAvatar && avatar);

    return (
      <div
        ref={ref}
        className={`flex gap-2 ${isOwn ? 'flex-row-reverse' : 'flex-row'} ${className ?? ''}`}
      >
        {!isOwn && (
          <div className="w-8 shrink-0">
            {shouldShowAvatar && (
              <Avatar {...avatar} fallback={name} size="sm" />
            )}
          </div>
        )}
        <div
          className={`flex flex-col gap-1 max-w-[70%] ${isOwn ? 'items-end' : 'items-start'}`}
        >
          {!isOwn && showName && (
            <span className="text-xs text-[var(--color-text-secondary)]">
              {name}
            </span>
          )}
          {replyTo && (
            <div
              className={`flex max-w-full flex-col gap-1 ${
                isOwn ? 'items-end' : 'items-start'
              }`}
            >
              <div className="inline-flex items-center gap-1 text-xs text-[var(--color-text-secondary)]">
                <Reply
                  className="h-3.5 w-3.5 fill-current"
                  aria-hidden="true"
                />
                <span>{replyTo.name}님에게 보낸 답장</span>
              </div>
              <div
                className={`max-w-[calc(100%-1.5rem)] rounded-2xl bg-[var(--color-surface-subtle)] px-3 py-2 text-sm text-[var(--color-text-secondary)] ${
                  isOwn ? 'mr-4 rounded-br-md' : 'ml-4 rounded-bl-md'
                }`}
              >
                <div className="font-medium">{replyTo.name}</div>
                <div className="line-clamp-3 whitespace-pre-wrap">
                  {replyTo.content}
                </div>
              </div>
            </div>
          )}
          <div
            className={`rounded-2xl px-4 py-2 ${replyTo ? '-mt-1' : ''} ${
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
          {time && showTime && <TimeBadge date={time} size="xs" />}
        </div>
      </div>
    );
  }
);
MessageBubble.displayName = 'MessageBubble';

export { MessageBubble };
