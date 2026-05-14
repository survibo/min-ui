import * as React from 'react';
import { Bell } from 'lucide-react';
import { SearchBar } from '../../molecules/SearchBar';
import { IconButton } from '../../atoms/IconButton';
import { Avatar } from '../../atoms/Badge/Avatar';

export interface PageHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  searchPlaceholder?: string;
}

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  ({ className, searchPlaceholder, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={`sticky top-0 z-10 border-b border-[var(--color-border-default)] bg-[var(--color-surface-raised)] ${className ?? ''}`}
        {...props}
      >
        <div className="mx-auto flex h-14 items-center justify-between gap-4 px-5 lg:h-16 lg:gap-10 lg:px-7">
          <a href="#" className="text-lg font-semibold whitespace-nowrap">
            KMLA Online
          </a>
          <SearchBar
            placeholder={searchPlaceholder ?? 'Search'}
            className="hidden w-full max-w-[40rem] sm:flex"
            inputProps={{ 'aria-label': 'Search feed' }}
          />
          <div className="flex items-center gap-1">
            <IconButton icon={Bell} aria-label="Open notifications" size="sm" />
            <Avatar fallback="ME" size="sm" />
          </div>
        </div>
      </header>
    );
  }
);
PageHeader.displayName = 'PageHeader';

export { PageHeader };
