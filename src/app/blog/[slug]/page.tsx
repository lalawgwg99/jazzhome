import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { LineCta } from "@/components/LineCta";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { VerifiedBadge } from "@/components/TrustPillars";
import {
  AcIcon,
  RefrigeratorIcon,
  WasherIcon,
  TvIcon,
  ChecklistIcon,
  BoutiqueIcon,
} from "@/components/Icons";
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

  const CategoryIconComp =
    category.slug === "air-conditioner"
      ? AcIcon
      : category.slug === "refrigerator"
      ? RefrigeratorIcon
      : category.slug === "washing-machine"
      ? WasherIcon
      : TvIcon;

  const toolIcons: Record<string, React.ReactNode> = {
    "ac-calculator": <AcIcon size={22} className="text-[#A67C52]" />,
    "ac-install-checklist": <ChecklistIcon size={22} className="text-[#A67C52]" />,
    "ac-brand-matrix": <BoutiqueIcon size={22} className="text-[#A67C52]" />,
    "refrigerator-calculator": <RefrigeratorIcon size={22} className="text-[#A67C52]" />,
    "washing-machine-calculator": <WasherIcon size={22} className="text-[#A67C52]" />,
    "tv-distance": <TvIcon size={22} className="text-[#A67C52]" />,
  };

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
        {/* Luxury Breadcrumb */}
        <nav className="flex items-center gap-1.5 font-mono text-xs text-[#777777]">
          <Link href="/" className="hover:text-[#111111] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <Link
            href={`/topics/${category.slug}`}
            className="hover:text-[#111111] transition-colors"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-[#111111] font-semibold truncate max-w-[200px] sm:max-w-none">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mt-6 border-b border-black/[0.08] pb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#777777]">
            <span className="flex items-center gap-1.5 font-semibold text-[#8C6438] bg-[#F7F3EE] px-2.5 py-0.5 rounded-full border border-[#A67C52]/30">
              <CategoryIconComp size={14} className="text-[#A67C52]" />
              <span>{category.name}研究</span>
            </span>
            <span>·</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            {article.updatedAt && (
              <span>（更新於 {article.updatedAt}）</span>
            )}
            <span>·</span>
            <span>{article.readingMinutes} 分鐘閱讀</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-4xl sm:leading-[1.25]">
            {article.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#555555]">
            {article.description}
          </p>

          {article.verification && (
            <div className="mt-6">
              <VerifiedBadge verification={article.verification} />
            </div>
          )}
        </header>

        {/* 30-Second Key Takeaways Card */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="skm-card my-8 bg-white p-6 sm:p-7 border border-[#A67C52]/30 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-[#A67C52] text-sm font-bold">✦</span>
              <h2 className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                30 秒重點結論速讀
              </h2>
            </div>
            <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-[#333333]">
              {article.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#A67C52] font-bold">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Table of Contents Quick Nav */}
        <div className="my-6 rounded-xl bg-[#FAF9F8] p-4.5 border border-black/[0.08]">
          <p className="text-xs font-bold text-[#777777] uppercase tracking-wider font-mono">
            章節目錄導讀
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {article.sections.map((section, idx) => (
              <a
                key={idx}
                href={`#section-${idx}`}
                className="skm-btn rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[#111111] shadow-2xs hover:text-[#A67C52] hover:border-[#A67C52]/50 border border-black/[0.08]"
              >
                {section.heading.split("、")[1] || section.heading}
              </a>
            ))}
          </div>
        </div>

        {/* Article Sections */}
        <div className="mt-10 space-y-12">
          {article.sections.map((section, idx) => (
            <section key={idx} id={`section-${idx}`} className="space-y-4 scroll-mt-20">
              <h2 className="text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                {section.heading}
              </h2>

              <div className="space-y-3.5">
                {section.body.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base leading-relaxed text-[#333333]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Table rendering */}
              {section.table && (
                <div className="my-6 overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-2xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-black/[0.08] bg-[#FAF9F8] text-xs font-bold text-[#111111] font-mono">
                        <tr>
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="px-4 py-3.5 whitespace-nowrap">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/[0.04] text-xs sm:text-sm text-[#444444]">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF9F8] transition-colors">
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

              {/* Callout Box rendering */}
              {section.callout && (
                <div
                  className={`rounded-xl p-5 border text-sm leading-relaxed ${
                    section.callout.type === "warning"
                      ? "border-[#B45309]/30 bg-[#FFFBEB] text-[#92400E]"
                      : section.callout.type === "tip"
                      ? "border-[#A67C52]/30 bg-[#F7F3EE] text-[#8C6438]"
                      : "border-black/[0.08] bg-[#FAF9F8] text-[#111111]"
                  }`}
                >
                  <p className="font-bold flex items-center gap-1.5 mb-1 text-sm">
                    <span>
                      {section.callout.type === "warning"
                        ? "⚠️"
                        : section.callout.type === "tip"
                        ? "✦"
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
          <div className="skm-card mt-12 bg-white p-6 sm:p-7 border border-[#A67C52]/30 shadow-2xs">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAF9F8] border border-black/[0.06]">
                    {toolIcons[relatedTool.slug] || <AcIcon size={20} className="text-[#A67C52]" />}
                  </div>
                  <p className="text-base font-bold text-[#111111]">
                    搭配使用：{relatedTool.name}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-[#555555]">
                  {relatedTool.description}
                </p>
              </div>
              <Link
                href={`/tools/${relatedTool.slug}`}
                className="skm-btn inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-[#111111] px-5 py-2.5 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
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
            title="看完專欄仍對自家空間條件不確定？"
            description="冷氣噸數、冰箱門寬、陽台排水或電視距離，拍照傳到 LINE，由第一線技師為您免費提供專業評估。"
          />
        </div>
      </article>
    </>
  );
}
