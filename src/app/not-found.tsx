import Link from "next/link";
import { BrandLogo, AcIcon, RefrigeratorIcon, WasherIcon, TvIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28 text-center">
      <div className="flex justify-center mb-6">
        <BrandLogo size={48} className="shadow-xs rounded-xl" />
      </div>

      <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#8C6438] bg-[#F7F3EE] px-3 py-1 rounded-full border border-[#A67C52]/30 shadow-2xs">
        <span>✦</span>
        <span>404 NOT FOUND · 頁面未尋獲</span>
      </div>

      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-5xl">
        此頁面已搬遷或不存在
      </h1>

      <p className="mt-4 text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
        您欲瀏覽的手帳頁面可能已被移動、重新編排或路徑輸入有誤。歡迎使用下方快速導引返回核心選購計算器。
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="skm-btn inline-flex items-center justify-center rounded-md bg-[#111111] px-6 py-2.5 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
        >
          返回首頁 ↗
        </Link>
        <Link
          href="/tools"
          className="skm-btn inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-xs font-semibold text-[#111111] border border-black/[0.08] hover:border-[#A67C52]/50 shadow-2xs"
        >
          選購計算器庫 ↗
        </Link>
      </div>

      <div className="mt-14 pt-10 border-t border-black/[0.06] max-w-2xl mx-auto">
        <p className="text-xs font-mono text-[#777777] uppercase tracking-wider mb-4">
          POPULAR DECISION TOOLKITS
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/tools/ac-calculator"
            className="skm-card p-3.5 bg-white flex flex-col items-center gap-2 text-center group"
          >
            <AcIcon size={20} className="text-[#A67C52]" />
            <span className="text-xs font-bold text-[#111111] group-hover:text-[#A67C52]">冷氣噸數試算</span>
          </Link>
          <Link
            href="/tools/refrigerator-calculator"
            className="skm-card p-3.5 bg-white flex flex-col items-center gap-2 text-center group"
          >
            <RefrigeratorIcon size={20} className="text-[#A67C52]" />
            <span className="text-xs font-bold text-[#111111] group-hover:text-[#A67C52]">冰箱容量試算</span>
          </Link>
          <Link
            href="/tools/washing-machine-calculator"
            className="skm-card p-3.5 bg-white flex flex-col items-center gap-2 text-center group"
          >
            <WasherIcon size={20} className="text-[#A67C52]" />
            <span className="text-xs font-bold text-[#111111] group-hover:text-[#A67C52]">洗衣洗脫烘</span>
          </Link>
          <Link
            href="/tools/tv-distance"
            className="skm-card p-3.5 bg-white flex flex-col items-center gap-2 text-center group"
          >
            <TvIcon size={20} className="text-[#A67C52]" />
            <span className="text-xs font-bold text-[#111111] group-hover:text-[#A67C52]">電視視距換算</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
