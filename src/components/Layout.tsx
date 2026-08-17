import Link from "next/link";
import { categories } from "@/lib/categories";
import { tools } from "@/lib/tools";
import { LineCta } from "@/components/LineCta";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900">
          JazzHome 家電研究室
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/topics/${cat.slug}`}
              className="transition-colors hover:text-zinc-900"
            >
              {cat.shortName}
            </Link>
          ))}
          <Link
            href="/tools"
            className="transition-colors hover:text-zinc-900"
          >
            工具
          </Link>
          <LineCta variant="compact" />
        </nav>
        <nav className="flex items-center gap-3 text-sm md:hidden">
          <LineCta variant="compact" />
        </nav>
      </div>
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 pb-3 md:hidden">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/topics/${cat.slug}`}
            className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {cat.icon} {cat.shortName}
          </Link>
        ))}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-semibold text-zinc-900">JazzHome 家電研究室</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              冷氣選購與安裝避坑。用計算器估噸數，用檢核表對施工，不確定再把現場條件傳到
              LINE。
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900">選購工具</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="hover:text-zinc-900"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-400">
          © {new Date().getFullYear()} JazzHome 家電研究室 · 本站為選購資訊分享，購買前請以官方規格為準
        </p>
      </div>
    </footer>
  );
}
