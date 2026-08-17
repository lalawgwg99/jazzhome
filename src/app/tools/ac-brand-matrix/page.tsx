import Link from "next/link";
import { AcBrandSelector } from "@/components/tools/AcBrandSelector";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "台灣十大冷氣品牌與型態選型庫（分離式 vs 窗型全覽）",
  description:
    "大金、國際牌、日立、富士通、LG、禾聯、東元、聲寶、三菱重工、奇美 10 大冷氣品牌分離式與窗型機種優缺點、CSPF 能效與價格定位深度對照。",
  path: "/tools/ac-brand-matrix",
  keywords: [
    "冷氣品牌比較",
    "大金冷氣",
    "國際牌冷氣",
    "日立冷氣",
    "三菱重工冷氣",
    "禾聯冷氣",
    "東元冷氣",
    "聲寶冷氣",
    "富士通冷氣",
    "LG冷氣",
    "奇美冷氣",
    "窗型冷氣推薦",
    "分離式冷氣推薦",
  ],
});

export default function AcBrandMatrixPage() {
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "選購工具", path: "/tools" },
    { name: "十大冷氣品牌與型態選型庫", path: "/tools/ac-brand-matrix" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {/* Apple Style Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#8E8E93]">
          <Link href="/" className="hover:text-[#0071E3] transition-colors">
            首頁
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#0071E3] transition-colors">
            選購工具
          </Link>
          <span>/</span>
          <span className="text-[#1C1C1E] font-medium">冷氣品牌與型態庫</span>
        </nav>

        <div className="mt-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0071E3]/10 px-3 py-1 text-xs font-semibold text-[#0071E3]">
            <span>🏷️</span>
            <span>10 大主流品牌 · 分離式與窗型規格速查</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1C1C1E] sm:text-4xl">
            台灣十大冷氣品牌與型態選型檢索
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#636366]">
            匯整大金、國際牌、日立、富士通、LG、禾聯、東元、聲寶、三菱重工、奇美等 10 大品牌主力系列、產地保固、CSPF 能效與分離式 vs 窗型冷氣全方位對照。
          </p>
        </div>

        <div className="mt-8">
          <AcBrandSelector />
        </div>

        <div className="mt-12 border-t border-black/[0.06] pt-6 flex flex-wrap gap-4 text-xs text-[#636366]">
          <span className="font-semibold text-[#1C1C1E]">搭配工具與專欄：</span>
          <Link
            href="/tools/ac-calculator"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            冷氣坪數與噸數計算器（含 2026 補助試算） →
          </Link>
          <Link
            href="/tools/ac-install-checklist"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            冷氣安裝 10 大避坑與加價行情檢核表 →
          </Link>
          <Link
            href="/blog/ac-brand-comparison-taiwan"
            className="text-[#0071E3] font-semibold hover:underline"
          >
            五大旗艦品牌深度專欄評比 →
          </Link>
        </div>
      </div>
    </>
  );
}
