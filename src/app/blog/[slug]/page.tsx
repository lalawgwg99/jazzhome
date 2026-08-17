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
import { getToolBySlug } from "@/lib/tools";
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

  const relatedTool = article.relatedToolSlug
    ? getToolBySlug(article.relatedToolSlug)
    : undefined;

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

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Apple Style Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
          <Link href="/" className="hover:text-[#0071E3] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <Link
            href={`/topics/${category.slug}`}
            className="hover:text-[#0071E3] transition-colors"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-[#1C1C1E] font-medium truncate max-w-[200px] sm:max-w-none">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mt-6 border-b border-black/[0.06] pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#8E8E93]">
            <span className="flex items-center gap-1 font-semibold text-[#0071E3] bg-[#0071E3]/10 px-2.5 py-0.5 rounded-full">
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </span>
            <span>·</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            {article.updatedAt && (
              <span>（更新於 {article.updatedAt}）</span>
            )}
            <span>·</span>
            <span>{article.readingMinutes} 分鐘閱讀</span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-4xl sm:leading-[1.2]">
            {article.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#636366]">
            {article.description}
          </p>

          {article.verification && (
            <div className="mt-6">
              <VerifiedBadge verification={article.verification} />
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="mt-8 space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1C1C1E] sm:text-2xl">
                {section.heading}
              </h2>

              <div className="space-y-3">
                {section.body.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base leading-relaxed text-[#3A3A3C]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Table rendering if exists */}
              {section.table && (
                <div className="my-6 overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-black/[0.06] bg-[#F9F9FB] text-xs font-bold text-[#1C1C1E]">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3.5 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/[0.04] text-xs sm:text-sm text-[#48484A]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#F2F2F7]/50 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3 font-medium">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Callout Box rendering if exists */}
              {section.callout && (
                <div
                  className={`rounded-2xl p-5 border text-sm leading-relaxed ${
                    section.callout.type === "warning"
                      ? "border-[#FF9500]/30 bg-[#FF9500]/[0.06] text-[#6E3B00]"
                      : section.callout.type === "tip"
                      ? "border-[#0071E3]/30 bg-[#0071E3]/[0.06] text-[#004085]"
                      : "border-black/[0.06] bg-[#F2F2F7] text-[#1C1C1E]"
                  }`}
                >
                  <p className="font-bold flex items-center gap-1.5 mb-1 text-sm">
                    <span>
                      {section.callout.type === "warning"
                        ? "⚠️"
                        : section.callout.type === "tip"
                        ? "💡"
                        : "ℹ️"}
                    </span>
                    <span>{section.callout.title}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-inherit/90">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Related Tool Quick Card */}
        {relatedTool && (
          <div className="apple-card mt-12 border border-[#0071E3]/20 bg-gradient-to-br from-white to-[#0071E3]/[0.03] p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{relatedTool.icon}</span>
                  <p className="text-base font-bold text-[#1C1C1E]">
                    搭配使用：{relatedTool.name}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-[#636366]">
                  {relatedTool.description}
                </p>
              </div>
              <Link
                href={`/tools/${relatedTool.slug}`}
                className="apple-btn-active inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#0071E3] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#0077ED]"
              >
                <span>立即開啟試算</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}

        {/* Affiliate Recommendations */}
        {article.affiliateProducts &&
          article.affiliateProducts.some((p) => p.url) && (
            <ProductRecommendations products={article.affiliateProducts} />
          )}

        {/* Contextual Line CTA */}
        <div className="mt-12">
          <LineCta
            variant="banner"
            title="看完文章仍對自家空間規格不確定？"
            description="冷氣噸數、冰箱門寬、陽台排水或電視距離，拍照傳到 LINE，由第一線技師為您免費提供專業評估。"
          />
        </div>
      </article>
    </>
  );
}
