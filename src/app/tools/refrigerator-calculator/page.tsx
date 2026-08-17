import Link from "next/link";
import { RefrigeratorCalculator } from "@/components/tools/RefrigeratorCalculator";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "冰箱容量與格局試算器",
  description:
    "依家庭人數、開伙囤貨習慣與廚房門寬動線，精準試算建議冰箱公升數（L）與多門/對開款式推薦。",
  path: "/tools/refrigerator-calculator",
  keywords: ["冰箱容量計算", "冰箱公升數", "冰箱推薦", "對開冰箱", "日系多門冰箱", "廚房搬運動線"],
});

export default function RefrigeratorCalculatorPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
    { name: "冰箱容量與格局試算器", path: "/tools/refrigerator-calculator" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
          <Link href="/" className="hover:text-[#0071E3] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#0071E3] transition-colors">
            選購工具
          </Link>
          <span>/</span>
          <span className="text-[#1C1C1E] font-medium">冰箱容量試算</span>
        </nav>

        <div className="mt-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-1 text-xs font-semibold text-[#0071E3]">
            <span>🧊</span>
            <span>科學容量公式 · 門寬動線避坑</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
            冰箱容量與格局試算器
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#636366]">
            依同住人口數、開伙採買頻率與廚房預留寬度，科學計算建議公升數（L），並提供最佳門型與進門搬運避坑指引。
          </p>
        </div>

        <div className="mt-8">
          <RefrigeratorCalculator />
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-6 flex flex-wrap gap-4 text-xs text-[#636366]">
          <span>延伸閱讀指南：</span>
          <Link
            href="/blog/refrigerator-capacity-guide"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            冰箱容量怎麼選？依家庭人數與生活習慣對照表 →
          </Link>
          <Link
            href="/blog/refrigerator-door-types"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            對開、多門、雙門優缺點全解析 →
          </Link>
        </div>
      </div>
    </>
  );
}
