import * as React from 'react';
import { Link } from '../../atoms/Link';

export interface SectionNavItem {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface SectionNavProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  items: SectionNavItem[];
  ariaLabel?: string;
  orientation?: 'horizontal' | 'vertical';
}

const getRootClassName = (orientation: NonNullable<SectionNavProps['orientation']>) =>
  orientation === 'vertical'
    ? 'flex flex-col gap-1'
    : 'flex gap-1 overflow-x-auto';

const getItemClassName = (
  orientation: NonNullable<SectionNavProps['orientation']>,
  isActive?: boolean
) => {
  const base =
    'inline-flex shrink-0 items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]';

  if (orientation === 'vertical') {
    return `${base} h-9 w-full rounded-md border-l-2 px-3 ${
      isActive
        ? 'border-[var(--color-action-default)] bg-[var(--color-surface-subtle)] text-[var(--color-text-primary)]'
        : 'border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)]'
    }`;
  }

  return `${base} h-10 border-b-2 px-3 ${
    isActive
      ? 'border-[var(--color-action-default)] text-[var(--color-text-primary)]'
      : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
  }`;
};

const SectionNav = React.forwardRef<HTMLElement, SectionNavProps>(
  (
    {
      items,
      ariaLabel = '섹션 메뉴',
      orientation = 'horizontal',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={`${getRootClassName(orientation)} ${className ?? ''}`}
        {...props}
      >
        {items.map((item) =>
          item.href ? (
            <Link
              key={item.label}
              href={item.href}
              underline="none"
              className={getItemClassName(orientation, item.isActive)}
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.label}
              type="button"
              className={getItemClassName(orientation, item.isActive)}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          )
        )}
      </nav>
    );
  }
);
SectionNav.displayName = 'SectionNav';

export { SectionNav };
