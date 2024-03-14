import Link from 'next/link';
import { Suspense } from 'react';
// import ViewCounter from './view-counter';
// import { getViewsCount } from 'app/db/queries';
// import { getBlogPosts } from 'app/db/blog';

// import { PageHeaderH1 } from 'app/components/containers/panelContainer';
import { getBlogPosts } from '../db/blog';
import { PageHeaderH1 } from '../components/containers/panelContainer';
import { formatDate } from '../components/formatDate';
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage(): JSX.Element {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <PageHeaderH1 header={"Blog"}/>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-2"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-5" />}>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt)}
                </p>
              </Suspense>
            </div>
          </Link>
        ))}
        
    </section>
  );
}
