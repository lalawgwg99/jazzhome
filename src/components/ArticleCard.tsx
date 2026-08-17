import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);
  const theme = category?.theme;

  return (
    <article className="apple-card group flex flex-col justify-between p-6 bg-white transition-all hover:border-[#0071E3]/30">
      <div>
        <div className="flex items-center justify-between text-xs text-[#8E8E93]">
          <div className="flex items-center gap-1.5 font-medium">
            <Link
              href={`/topics/${article.category}`}
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                theme?.bgLight ?? "bg-black/[0.04]"
              } ${theme?.badgeText ?? "text-[#1C1C1E]"} hover:opacity-80 transition-opacity`}
            >
              <span>{category?.icon}</span>
              <span>{category?.name}</span>
            </Link>
          </div>
          <div className="flex items-center gap-1.5 text-[#8E8E93]">
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span>·</span>
            <span>{article.readingMinutes} 分鐘</span>
          </div>
        </div>

        <h3 className="mt-3.5 text-base sm:text-lg font-bold leading-snug tracking-tight text-[#1C1C1E] transition-colors group-hover:text-[#0071E3]">
          <Link href={`/blog/${article.slug}`} className="focus:outline-none">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-[#636366]">
          {article.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between pt-3.5 border-t border-black/[0.04]">
        {article.verification ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#248A3D] bg-[#34C759]/10 px-2.5 py-0.5 rounded-full border border-[#34C759]/20">
            <span>✓</span> 型錄核實
          </span>
        ) : (
          <span className="text-[11px] text-[#8E8E93]">選購分析</span>
        )}

        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071E3] hover:underline"
        >
          <span>閱讀全文</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
