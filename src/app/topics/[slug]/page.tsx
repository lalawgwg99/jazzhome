import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";
import { LineCta } from "@/components/LineCta";
import { getCategoryBySlug, categories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { getToolsByCategory } from "@/lib/tools";
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
    title: `${category.name}選購與避坑研究指南`,
    description: category.hubIntro,
    path: `/topics/${slug}`,
    keywords: category.keywords,
  });
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryArticles = getArticlesByCategory(category.slug);
  const categoryTools = getToolsByCategory(category.slug);

  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: category.name, path: `/topics/${slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Apple Style Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
          <Link href="/" className="hover:text-[#0071E3] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <span className="text-[#1C1C1E] font-medium">{category.name}專題</span>
        </nav>

        {/* Category Hero Hub */}
        <div className="mt-6 apple-card border border-black/[0.05] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F2F2F7] text-3xl sm:text-4xl shadow-inner">
              {category.icon}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#0071E3]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0071E3]">
                  品類研究專題
                </span>
              </div>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
                {category.name}選購與避坑指南
              </h1>
            </div>
          </div>

          <p className="mt-4 text-base leading-relaxed text-[#636366]">
            {category.hubIntro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-black/[0.04] pt-4">
            <span className="text-xs font-medium text-[#8E8E93] self-center mr-1">
              核心研究焦點：
            </span>
            {category.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-[#F2F2F7] px-3 py-1 text-xs font-medium text-[#48484A]"
              >
                ✓ {h}
              </span>
            ))}
          </div>
        </div>

        {/* Category Dedicated Tools */}
        {categoryTools.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
                  專屬評估工具
                </p>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#1C1C1E]">
                  {category.name}智慧計算與檢核表
                </h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {categoryTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="apple-card apple-btn-active group flex items-start gap-4 p-5 border border-black/[0.05] bg-white hover:border-[#0071E3]/30"
                >
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#1C1C1E] group-hover:text-[#0071E3] transition-colors">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#636366]">
                      {tool.description}
                    </p>
                    <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-[#0071E3]">
                      立即使用工具 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category Articles */}
        <section className="mt-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
              深入研讀
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-[#1C1C1E]">
              {category.name}精選研究文章
            </h2>
          </div>

          {categoryArticles.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="apple-card mt-6 p-8 text-center text-sm text-[#8E8E93]">
              專題文章持續撰寫中，敬請期待。
            </div>
          )}
        </section>

        {/* LINE CTA */}
        <div className="mt-14">
          <LineCta
            variant="banner"
            title={`對${category.name}選購或施工規格有疑問？`}
            description="原廠型錄數據對不起來、或是現場空間格局特殊？直接將現場狀況傳至 LINE，免費為您評估。"
          />
        </div>
      </div>
    </>
  );
}
