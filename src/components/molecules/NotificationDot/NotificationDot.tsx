import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Badge } from '../../atoms/Badge';
import type { BadgeProps } from '../../atoms/Badge';

export interface NotificationDotProps {
  icon: LucideIcon;
  badge?: Omit<BadgeProps, 'ref' | 'children'>;
  showBadge?: boolean;
  count?: number;
  className?: string;
}

const NotificationDot = React.forwardRef<HTMLDivElement, NotificationDotProps>(
  ({ icon: Icon, badge, showBadge = true, count, className }, ref) => {
    return (
      <div ref={ref} className={`relative inline-flex ${className ?? ''}`}>
        <Icon className="h-5 w-5" />
        {showBadge &&
          (count !== undefined ? (
            <Badge
              variant="secondary"
              size="sm"
              count={count}
              {...badge}
              className="absolute -top-1 -right-1"
            />
          ) : (
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[var(--color-notify-badge-bg)]" />
          ))}
      </div>
    );
  }
);
NotificationDot.displayName = 'NotificationDot';

export { NotificationDot };
