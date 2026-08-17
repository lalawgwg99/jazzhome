import Link from "next/link";
import type { Category } from "@/lib/categories";
import { AcIcon, RefrigeratorIcon, WasherIcon, TvIcon } from "@/components/Icons";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComp =
    category.slug === "air-conditioner"
      ? AcIcon
      : category.slug === "refrigerator"
      ? RefrigeratorIcon
      : category.slug === "washing-machine"
      ? WasherIcon
      : TvIcon;

  return (
    <Link
      href={`/topics/${category.slug}`}
      className="skm-card group flex flex-col justify-between p-6 sm:p-7 bg-white shadow-2xs"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF9F8] border border-black/[0.06] shadow-2xs group-hover:border-[#A67C52]/40 transition-colors">
            <IconComp size={26} className="text-[#A67C52]" />
          </div>
          <span className="text-xs font-mono text-[#777777] group-hover:text-[#111111] transition-colors">
            專題 ↗
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-wide text-[#111111] transition-colors group-hover:text-[#A67C52]">
          {category.name}選購指南
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#555555]">
          {category.description}
        </p>
      </div>

      <div className="mt-6 pt-3.5 border-t border-black/[0.05]">
        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
          {category.highlights.map((h) => (
            <span
              key={h}
              className="rounded bg-[#FAF9F8] px-2 py-0.5 text-[#555555] border border-black/[0.04]"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
