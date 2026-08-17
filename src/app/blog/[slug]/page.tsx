import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LineCta } from "@/components/LineCta";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { VerifiedBadge } from "@/components/TrustPillars";
import {
  articles,
  getArticleBySlug,
} from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";
import {
  buildMetadata,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${slug}`,
    keywords: article.keywords,
    type: "article",
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getCategoryBySlug(article.category);
  if (!category) notFound();

  const articleJsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.description,
    slug: article.slug,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
  });

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: category.name, path: `/topics/${category.slug}` },
    { name: article.title, path: `/blog/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={[articleJsonLd, breadcrumb]} />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">
            首頁
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/topics/${category.slug}`}
            className="hover:text-zinc-800"
          >
            {category.name}
          </Link>
        </nav>

        <header className="mt-6 border-b border-zinc-200 pb-8">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span>{category.icon}</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span>·</span>
            <span>{article.readingMinutes} 分鐘閱讀</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-zinc-900">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            {article.description}
          </p>
          {article.verification && (
            <div className="mt-6">
              <VerifiedBadge verification={article.verification} />
            </div>
          )}
        </header>

        <div className="prose prose-zinc mt-8 max-w-none">
          {article.content.map((paragraph, i) => (
            <p key={i} className="mb-5 leading-8 text-zinc-700">
              {paragraph}
            </p>
          ))}
        </div>

        {article.affiliateProducts &&
          article.affiliateProducts.some((p) => p.url) && (
            <ProductRecommendations products={article.affiliateProducts} />
          )}

        <div className="mt-10">
          <LineCta variant="banner" />
        </div>
      </article>
    </>
  );
}
