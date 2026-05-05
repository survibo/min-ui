import * as React from 'react';
import { Search, Heart, Send } from 'lucide-react';
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
        <div className="mx-auto flex h-16 items-center justify-between gap-10 px-7">
          <a href="#" className="text-lg font-semibold whitespace-nowrap">
            KMLA Online
          </a>
          <SearchBar
            placeholder={searchPlaceholder ?? 'Search'}
            className="hidden w-full max-w-[40rem] sm:flex"
            inputProps={{ 'aria-label': 'Search feed' }}
          />
          <div className="flex items-center gap-1">
            <IconButton icon={Search} aria-label="Open search" size="sm" />
            <IconButton icon={Heart} aria-label="Open activity" size="sm" />
            <IconButton icon={Send} aria-label="Open messages" size="sm" />
            <Avatar fallback="ME" size="sm" />
          </div>
        </div>
      </header>
    );
  }
);
PageHeader.displayName = 'PageHeader';

export { PageHeader };