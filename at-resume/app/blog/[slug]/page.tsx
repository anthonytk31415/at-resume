import { ReactNode, Suspense, cache } from 'react';
import { getBlogPosts } from '@/app/db/blog';
import { MDXRemote , MDXRemoteSerializeResult} from 'next-mdx-remote/rsc';
import { formatDate } from '@/app/components/formatDate';

const components = {};

export default function Blog({params}: {params: {slug: string}}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  
  if (!post) {
    return(
      <div>
        <p> Your resource is not found T_T ... is it?</p>   
      </div>
    )
    // notFound();
  }
  
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://example.com${post.metadata.image}`
              : `https://example.com/og?title=${post.metadata.title}`,
            url: `https://example.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Anthony Trankiem',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>

      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">

          <MDXRemote source={post.content} components = {components} />

      </article>
      <p> hi</p>
    </section>
  );
}



