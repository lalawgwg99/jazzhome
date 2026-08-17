import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { getCategoryBySlug, categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

interface TopicPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return buildMetadata({
    title: `${category.name}選購指南`,
    description: category.hubIntro,
    path: `/topics/${slug}`,
    keywords: category.keywords,
  });
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: category.name, path: `/topics/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-5xl px-4 py-12">
        <nav className="text-sm text-zinc-500">
          <Link href="/" className="hover:text-zinc-800">
            首頁
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-800">{category.name}</span>
        </nav>

        <div className="mt-6">
          <span className="text-4xl">{category.icon}</span>
          <h1 className="mt-3 text-3xl font-bold text-zinc-900">
            {category.name}選購指南
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
            {category.hubIntro}
          </p>
          <p className="mt-3 text-sm text-zinc-400">
            熱門關鍵字：{category.keywords.join("、")}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-zinc-900">
            {category.name}相關文章
          </h2>
          {articles.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-zinc-500">文章準備中，敬請期待。</p>
          )}
        </section>
      </div>
    </>
  );
}
