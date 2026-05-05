import * as React from 'react';
import {
  Globe2,
  Lock,
  MoreHorizontal,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Button, type ButtonProps } from '../../atoms/Button';
import { Divider } from '../../atoms/Divider';
import { IconButton } from '../../atoms/IconButton';
import { ImageThumb } from '../../atoms/ImageThumb';
import { Link } from '../../atoms/Link';
import { Tag } from '../../atoms/Tag';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../../molecules/DropdownMenu';

export interface GroupHeaderImage {
  src?: string;
  alt?: string;
}

export interface GroupHeaderAction {
  label: string;
  icon?: LucideIcon;
  variant?: ButtonProps['variant'];
  disabled?: boolean;
  onClick?: () => void;
}

export interface GroupHeaderMenuItem {
  label: string;
  variant?: 'default' | 'danger';
  disabled?: boolean;
  separatorBefore?: boolean;
  onSelect?: () => void;
}

export interface GroupHeaderTab {
  label: string;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface GroupHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  name: string;
  description?: string;
  coverImage?: GroupHeaderImage;
  category?: string;
  isPrivate?: boolean;
  memberCount?: number;
  actions?: GroupHeaderAction[];
  moreMenuItems?: GroupHeaderMenuItem[];
  tabs?: GroupHeaderTab[];
}

const formatCount = (count: number) => count.toLocaleString();

const tabClassName = (isActive?: boolean) =>
  `inline-flex h-10 shrink-0 items-center border-b-2 px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] ${
    isActive
      ? 'border-[var(--color-action-default)] text-[var(--color-text-primary)]'
      : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
  }`;

const GroupHeader = React.forwardRef<HTMLElement, GroupHeaderProps>(
  (
    {
      name,
      description,
      coverImage,
      category,
      isPrivate,
      memberCount,
      actions = [],
      moreMenuItems = [],
      tabs = [],
      className,
      ...props
    },
    ref
  ) => {
    const PrivacyIcon = isPrivate ? Lock : Globe2;
    const privacyLabel = isPrivate ? '비공개 그룹' : '공개 그룹';

    return (
      <section
        ref={ref}
        className={`w-full overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] shadow-sm ${className ?? ''}`}
        {...props}
      >
        <ImageThumb
          src={coverImage?.src}
          alt={coverImage?.alt ?? `${name} 커버 이미지`}
          aspect="wide"
          size="full"
          rounded="none"
          className="h-36 w-full sm:h-52 md:h-64"
        />

        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="truncate text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                  {name}
                </h1>
                {category && (
                  <Tag variant="primary" size="sm">
                    {category}
                  </Tag>
                )}
              </div>

              {description && (
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">
                  {description}
                </p>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--color-text-secondary)]">
                <span className="inline-flex items-center gap-1">
                  <PrivacyIcon className="h-4 w-4" aria-hidden="true" />
                  {privacyLabel}
                </span>
                {memberCount !== undefined && (
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    멤버 {formatCount(memberCount)}명
                  </span>
                )}
              </div>
            </div>

            {(actions.length > 0 || moreMenuItems.length > 0) && (
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                {actions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <Button
                      key={action.label}
                      type="button"
                      variant={action.variant ?? 'secondary'}
                      size="sm"
                      disabled={action.disabled}
                      onClick={action.onClick}
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      {action.label}
                    </Button>
                  );
                })}

                {moreMenuItems.length > 0 && (
                  <DropdownMenu
                    trigger={
                      <IconButton
                        icon={MoreHorizontal}
                        aria-label="그룹 옵션"
                        variant="secondary"
                        size="sm"
                      />
                    }
                  >
                    {moreMenuItems.map((item) => (
                      <React.Fragment key={item.label}>
                        {item.separatorBefore && <DropdownMenuSeparator />}
                        <DropdownMenuItem
                          variant={item.variant}
                          disabled={item.disabled}
                          onSelect={item.onSelect}
                        >
                          {item.label}
                        </DropdownMenuItem>
                      </React.Fragment>
                    ))}
                  </DropdownMenu>
                )}
              </div>
            )}
          </div>

          {tabs.length > 0 && (
            <>
              <Divider className="mt-5" />
              <nav
                aria-label="그룹 메뉴"
                className="-mb-3 flex gap-1 overflow-x-auto pt-1"
              >
                {tabs.map((tab) =>
                  tab.href ? (
                    <Link
                      key={tab.label}
                      href={tab.href}
                      underline="none"
                      className={tabClassName(tab.isActive)}
                    >
                      {tab.label}
                    </Link>
                  ) : (
                    <button
                      key={tab.label}
                      type="button"
                      className={tabClassName(tab.isActive)}
                      onClick={tab.onClick}
                    >
                      {tab.label}
                    </button>
                  )
                )}
              </nav>
            </>
          )}
        </div>
      </section>
    );
  }
);
GroupHeader.displayName = 'GroupHeader';

export { GroupHeader };
