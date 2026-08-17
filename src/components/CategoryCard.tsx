import Link from "next/link";
import type { Category } from "@/lib/categories";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/topics/${category.slug}`}
      className="apple-card apple-btn-active group flex flex-col justify-between p-6 sm:p-7 border border-black/[0.05] bg-white hover:border-[#0071E3]/30"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F2F7] text-2xl">
            {category.icon}
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/[0.04] text-xs font-semibold text-[#8E8E93] transition-all group-hover:bg-[#0071E3] group-hover:text-white">
            →
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-[#1C1C1E] group-hover:text-[#0071E3] transition-colors">
          {category.name}選購指南
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#636366]">
          {category.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-black/[0.04]">
        <div className="flex flex-wrap gap-1.5">
          {category.highlights.map((h) => (
            <span
              key={h}
              className="rounded-md bg-[#F2F2F7] px-2 py-0.5 text-[11px] font-medium text-[#636366]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
