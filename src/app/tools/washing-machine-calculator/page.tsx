import Link from "next/link";
import { WashingMachineCalculator } from "@/components/tools/WashingMachineCalculator";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "洗衣機容量與選型決策器",
  description:
    "依同住人數、被單床包清洗頻率與陽台通風環境，評估建議洗衣容量（kg）與滾筒 vs 直立式決策矩陣。",
  path: "/tools/washing-machine-calculator",
  keywords: ["洗衣機公斤數計算", "洗衣機容量", "滾筒洗衣機", "直立洗衣機", "洗脫烘一體", "熱泵乾衣機"],
});

export default function WashingMachineCalculatorPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
    { name: "洗衣機容量與選型決策器", path: "/tools/washing-machine-calculator" },
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
          <span className="text-[#1C1C1E] font-medium">洗衣機容量與選型</span>
        </nav>

        <div className="mt-4 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-1 text-xs font-semibold text-[#0071E3]">
            <span>🫧</span>
            <span>公斤數換算 · 滾筒 vs 直立決策</span>
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
            洗衣機容量與選型決策器
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#636366]">
            依同住人口數、換洗被單頻率與陽台曬衣環境，試算建議最低洗衣公斤數（kg），並提供滾筒洗脫烘 vs 直立變頻客觀決策。
          </p>
        </div>

        <div className="mt-8">
          <WashingMachineCalculator />
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-6 flex flex-wrap gap-4 text-xs text-[#636366]">
          <span>延伸閱讀指南：</span>
          <Link
            href="/blog/washing-machine-drum-vs-top"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            滾筒洗衣機 vs 直立洗衣機：優缺點完整比較 →
          </Link>
          <Link
            href="/blog/washing-machine-capacity-guide"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            洗衣機要買幾公斤？被單床包清洗容量對照表 →
          </Link>
        </div>
      </div>
    </>
  );
}
