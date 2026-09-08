import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../components/Blog/blogData';
import BlogArticle from '../../../components/Blog/BlogArticle';

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

async function getSlug(params: PageProps['params']): Promise<string> {
  const resolvedParams = await params;
  return resolvedParams.slug;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await getSlug(params);
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Haven M Construction',
      description: 'The requested blog post could not be found.',
    };
  }

  const title = post.metaTitle || `${post.title} | Haven M Construction Blog`;
  const description = post.metaDescription || post.summary;
  const canonical = post.canonicalUrl || `https://www.havenmconstruction.com/blog/${post.id}`;
  const imageUrl = post.ogImage || (typeof post.image === 'string' ? post.image : (post.image?.src || 'https://www.havenmconstruction.com/images/asset-4.webp'));
  const imageAlt = post.ogImageAlt || post.title;

  return {
    title,
    description,
    keywords: post.keywords || `${post.title}, Haven M Construction, New Jersey construction blog, home design, architecture`,
    authors: [{ name: 'Haven M Construction' }],
    referrer: 'strict-origin-when-cross-origin',
    alternates: {
      canonical,
    },
    robots: 'index,follow',
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      siteName: 'Haven M Construction',
      publishedTime: post.date,
      authors: ['Haven M Construction'],
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const slug = await getSlug(params);
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  const activeIdx = blogPosts.findIndex((p) => p.id === slug);
  const nextPost = activeIdx !== -1 && blogPosts.length > 1 ? blogPosts[(activeIdx + 1) % blogPosts.length] : null;

  const imageUrl = post.ogImage || (typeof post.image === 'string' ? post.image : (post.image?.src || 'https://www.havenmconstruction.com/images/asset-4.webp'));

  const articleSchema = post.schema || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.havenmconstruction.com/blog/${post.id}#article`,
    "headline": post.title,
    "description": post.summary,
    "image": [imageUrl],
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Haven M Construction",
      "url": "https://www.havenmconstruction.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Haven M Construction",
      "url": "https://www.havenmconstruction.com/"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.havenmconstruction.com/blog/${post.id}`
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden pt-48 pb-32 sm:pt-56"
      style={{
        backgroundColor: "#F6F4EE",
        backgroundImage: [
          "radial-gradient(ellipse 140% 120% at -10% 90%, rgba(210,125,85,0.50) 0%, rgba(210,125,85,0.18) 40%, transparent 70%)",
          "radial-gradient(ellipse 120% 140% at 110% 10%, rgba(138,168,125,0.45) 0%, rgba(138,168,125,0.15) 40%, transparent 70%)",
          "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(246,244,238,0.7) 0%, transparent 100%)",
        ].join(", "),
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="pointer-events-none absolute -top-48 -left-48 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#e58a5b] to-[#f3cbab] opacity-55 blur-[130px]" />
      <div className="pointer-events-none absolute -top-48 -right-48 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-[#9dbd90] to-[#c7e3bb] opacity-50 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogArticle activePost={post} nextPost={nextPost} />
      </div>
    </main>
  );
}
