import * as React from 'react';
import { Button } from '../../atoms/Button';
import { Spinner } from '../../atoms/Spinner';
import { InfiniteScrollWrapper } from '../../cross-cutting/InfiniteScrollWrapper';
import { StoryThumbnail } from '../../molecules/StoryThumbnail';
import { UserChip } from '../../molecules/UserChip';
import { PageHeader } from '../../organisms/PageHeader/PageHeader';
import { PrimaryNavigation } from '../../organisms/PrimaryNavigation/PrimaryNavigation';
import { PostCard } from '../../organisms/PostCard';

export type FeedPageProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
>;

const mockImage = (from: string, to: string, accent: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${from}"/>
          <stop offset="1" stop-color="${to}"/>
        </linearGradient>
      </defs>
      <rect width="720" height="720" fill="url(#bg)"/>
      <circle cx="560" cy="140" r="96" fill="${accent}" opacity=".58"/>
      <path d="M88 548 264 338l116 126 70-86 182 170H88z" fill="#fff" opacity=".42"/>
      <rect x="96" y="92" width="212" height="144" rx="18" fill="#fff" opacity=".18"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const stories = [
  { name: 'nari', color: '#3b82f6' },
  { name: 'jun', color: '#f59e0b' },
  { name: 'seo', color: '#10b981' },
  { name: 'mina', color: '#ef4444' },
  { name: 'tae', color: '#8b5cf6' },
  { name: 'hye', color: '#06b6d4' },
] as const;

const posts = [
  {
    author: 'studio.nari',
    location: 'Seongsu, Seoul',
    time: new Date('2026-05-05T09:12:00.000Z'),
    image: mockImage('#2563eb', '#38bdf8', '#fbbf24'),
    caption: 'Quiet morning light, new notebook, and a feed mockup draft.',
    likes: 2184,
    comments: 128,
  },
  {
    author: 'daily.grid',
    location: 'Design archive',
    time: new Date('2026-05-05T08:47:00.000Z'),
    image: mockImage('#111827', '#475569', '#f472b6'),
    caption: 'Layout study: clean rails, image-first cards, compact actions.',
    likes: 984,
    comments: 42,
  },
  {
    author: 'city.walk',
    location: 'Hannam, Seoul',
    time: new Date('2026-05-05T08:00:00.000Z'),
    image: mockImage('#15803d', '#5eead4', '#ffffff'),
    caption: 'A small street corner with clean lines and late afternoon color.',
    likes: 1426,
    comments: 76,
  },
  {
    author: 'light.table',
    location: 'Cafe archive',
    time: new Date('2026-05-05T07:00:00.000Z'),
    image: mockImage('#d97706', '#fef3c7', '#2563eb'),
    caption: 'Table scene, layered shadows, and a compact composition.',
    likes: 642,
    comments: 19,
  },
  {
    author: 'frame.note',
    location: 'Moodboard',
    time: new Date('2026-05-05T06:00:00.000Z'),
    image: mockImage('#be185d', '#f472b6', '#fbbf24'),
    caption: 'Saved references for image-first social layouts.',
    likes: 2031,
    comments: 94,
  },
] as const;

const suggestions = [
  { name: 'atelier.kim', note: 'Followed by nari' },
  { name: 'street.frame', note: 'New to KMLA' },
  { name: 'weekend.log', note: 'Popular this week' },
] as const;

const FeedPage = React.forwardRef<
  HTMLDivElement,
  FeedPageProps
>(({ className, ...props }, ref) => {
  const [visiblePostCount, setVisiblePostCount] = React.useState(2);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  const visiblePosts = posts.slice(0, visiblePostCount);
  const hasMorePosts = visiblePostCount < posts.length;

  const handleLoadMore = React.useCallback(() => {
    if (isLoadingMore || !hasMorePosts) {
      return;
    }

    setIsLoadingMore(true);
    window.setTimeout(() => {
      setVisiblePostCount((count) => Math.min(count + 2, posts.length));
      setIsLoadingMore(false);
    }, 150);
  }, [hasMorePosts, isLoadingMore]);

  return (
    <div
      ref={ref}
      className={`min-h-screen bg-[var(--color-surface-base)] text-[var(--color-text-primary)] ${className ?? ''}`}
      {...props}
    >
      <PageHeader />

      <main
        className="mx-auto grid grid-cols-1 justify-between gap-8 px-6 py-6 pb-28 lg:grid-cols-[13rem_minmax(0,40rem)_16rem] lg:pb-6"
      >
        <PrimaryNavigation
          activeKey="home"
          className="justify-self-start"
        />

        <section className="min-w-0 space-y-5" aria-label="Today Feed">
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border-default)] bg-[var(--color-surface-raised)] px-4 py-3" style={{ scrollbarWidth: 'none' }}>
            <div className="mb-3 text-sm font-semibold">Stories</div>
            <div className="flex min-w-max gap-4">
              {stories.map((story) => (
                <StoryThumbnail
                  key={story.name}
                  name={story.name}
                  avatar={{
                    fallback: story.name,
                    style: { backgroundColor: story.color },
                  }}
                />
              ))}
            </div>
          </div>

          <InfiniteScrollWrapper
            className="space-y-5"
            hasMore={hasMorePosts}
            isLoading={isLoadingMore}
            onLoadMore={handleLoadMore}
            loader={<Spinner label="Loading more posts" />}
            endMessage={
              <span className="text-sm text-[var(--color-text-secondary)]">
                You are all caught up
              </span>
            }
          >
            <h1 className="sr-only">Today Feed</h1>
            {visiblePosts.map((post) => (
              <PostCard
                key={post.author}
                author={{
                  name: post.author,
                  avatarFallback: post.author,
                }}
                className="max-w-none"
                content={post.caption}
                groupName={post.location}
                images={[
                  { src: post.image, alt: `${post.author} post image` },
                ]}
                stats={{ likes: post.likes, comments: post.comments }}
                timestamp={post.time}
              />
            ))}
          </InfiniteScrollWrapper>
        </section>

        <aside className="hidden lg:block justify-self-end">
          <div className="sticky top-24 space-y-5">
            <div className="flex items-center gap-3">
              <UserChip
                avatar={{ fallback: 'ME', size: 'md' }}
                className="min-w-0 flex-1"
                name="min.ui"
                role="Component library"
                tagProps={{ variant: 'outline' }}
              />
              <Button type="button" variant="ghost" size="sm">
                Switch
              </Button>
            </div>

            <section aria-label="Suggestions" className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <h2 className="font-semibold text-[var(--color-text-secondary)]">
                  Suggestions
                </h2>
                <Button type="button" variant="ghost" size="sm">
                  See all
                </Button>
              </div>

              <div className="space-y-3">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.name} className="flex items-center gap-3">
                    <UserChip
                      avatar={{ fallback: suggestion.name, size: 'sm' }}
                      className="min-w-0 flex-1"
                      name={suggestion.name}
                      role={suggestion.note}
                      tagProps={{ variant: 'outline' }}
                    />
                    <Button type="button" variant="ghost" size="sm">
                      Follow
                    </Button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>
      </main>
    </div>
  );
});
FeedPage.displayName = 'FeedPage';

export { FeedPage };
