import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);

  return (
    <article className="apple-card group flex flex-col justify-between p-6 border border-black/[0.05] bg-white transition-all">
      <div>
        <div className="flex items-center justify-between text-xs text-[#8E8E93]">
          <div className="flex items-center gap-1.5 font-medium">
            <span>{category?.icon}</span>
            <Link
              href={`/topics/${article.category}`}
              className="text-[#48484A] hover:text-[#0071E3] transition-colors"
            >
              {category?.name}
            </Link>
          </div>
          <div className="flex items-center gap-2 text-[#AEAEB2]">
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span>·</span>
            <span>{article.readingMinutes} 分鐘</span>
          </div>
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug tracking-tight text-[#1C1C1E] transition-colors group-hover:text-[#0071E3]">
          <Link href={`/blog/${article.slug}`} className="focus:outline-none">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#636366]">
          {article.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between pt-3 border-t border-black/[0.04]">
        {article.verification ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#248A3D] bg-[#34C759]/10 px-2 py-0.5 rounded-full">
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
