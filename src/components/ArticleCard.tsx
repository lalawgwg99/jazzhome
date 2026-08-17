import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getCategoryBySlug } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getCategoryBySlug(article.category);

  return (
    <article className="skm-card group flex flex-col justify-between p-5 bg-white transition-all shadow-2xs">
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
          <span className="rounded bg-[#FAF9F8] px-2 py-0.5 text-[11px] font-sans font-semibold text-[#8C6438] border border-[#A67C52]/20">
            {category?.name}
          </span>
          <span>{article.readingMinutes} min</span>
        </div>

        <h3 className="mt-3 text-sm sm:text-base font-bold leading-snug tracking-tight text-[#111111] group-hover:text-[#A67C52] transition-colors">
          <Link href={`/blog/${article.slug}`} className="focus:outline-none">
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#555555]">
          {article.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between pt-3 border-t border-black/[0.05] text-[11px]">
        <time dateTime={article.publishedAt} className="font-mono text-[#777777]">
          {article.publishedAt}
        </time>

        <Link
          href={`/blog/${article.slug}`}
          className="font-bold text-[#111111] group-hover:text-[#A67C52] inline-flex items-center gap-0.5 transition-colors"
        >
          <span>閱讀全文</span>
          <span>↗</span>
        </Link>
      </div>
    </article>
  );
}
