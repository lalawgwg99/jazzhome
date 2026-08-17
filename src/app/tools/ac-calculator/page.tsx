import Link from "next/link";
import { AcCalculator } from "@/components/tools/AcCalculator";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "冷氣坪數與噸數計算器",
  description:
    "免費線上冷氣坪數計算器。輸入房間坪數、頂樓、西曬、挑高開放條件，精準試算建議冷房能力（kW / 噸數）與 CSPF 能效選購指引。",
  path: "/tools/ac-calculator",
  keywords: ["冷氣坪數計算", "冷氣噸數", "1坪幾噸冷氣", "冷氣容量計算", "變頻冷氣噸數", "冷房能力kW"],
});

export default function AcCalculatorPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
    { name: "冷氣坪數與噸數計算器", path: "/tools/ac-calculator" },
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
          <span className="text-[#1C1C1E] font-medium">冷氣坪數與噸數</span>
        </nav>

        <div className="mt-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
            <span>✦</span>
            <span className="font-semibold">PRECISION ESTIMATOR · 2026</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            冷氣坪數與噸數計算器
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#555555]">
            依台灣建築實務（1 坪 ≈ 0.58 kW 冷房能力）精確估算，並依頂樓、西曬、挑高開放格局自動加成安全餘裕。
          </p>
        </div>

        <div className="mt-8">
          <AcCalculator />
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-6 flex flex-wrap gap-4 text-xs text-[#636366]">
          <span>延伸閱讀指南：</span>
          <Link
            href="/blog/air-conditioner-tonnage-guide"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            冷氣坪數怎麼算？1 坪要幾噸冷氣一次搞懂（完整對照表） →
          </Link>
          <Link
            href="/blog/inverter-vs-fixed-ac"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            變頻冷氣 vs 定頻冷氣：省電差多少？ →
          </Link>
        </div>
      </div>
    </>
  );
}
