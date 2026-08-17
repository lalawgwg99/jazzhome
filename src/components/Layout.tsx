"use client";

import Link from "next/link";
import { useState } from "react";
import { lineUrl } from "@/lib/monetization";

const NAV_LINKS = [
  { href: "/tools/ac-calculator", label: "冷氣試算" },
  { href: "/tools/ac-install-checklist", label: "安裝加價表" },
  { href: "/tools/ac-brand-matrix", label: "10大品牌庫" },
  { href: "/tools/refrigerator-calculator", label: "冰箱容量" },
  { href: "/tools/washing-machine-calculator", label: "洗衣機決策" },
  { href: "/tools/tv-distance", label: "電視距離" },
  { href: "/tools", label: "所有工具" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[#F9F9F8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-bold tracking-tight text-[#18181B] hover:opacity-80 transition-opacity"
          >
            <span className="font-mono text-base text-[#18181B]">∑</span>
            <span className="text-sm sm:text-base tracking-tight font-extrabold">JAZZHOME</span>
            <span className="hidden sm:inline text-xs font-normal text-[#71717A] ml-1">
              家電決策手帳
            </span>
          </Link>

          <span className="hidden md:inline text-[10px] font-mono rounded bg-black/[0.05] px-2 py-0.5 text-[#71717A]">
            Taiwan toolkit · 2026
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="apple-btn-active rounded-md px-2.5 py-1.5 font-medium text-[#52525B] hover:bg-black/[0.05] hover:text-[#18181B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-active inline-flex items-center gap-1.5 rounded-full bg-[#18181B] px-3.5 py-1.5 text-xs font-medium text-white hover:bg-black"
          >
            <span>LINE 免費諮詢</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-black/[0.08] lg:hidden text-xs text-[#18181B]"
            aria-label="選單"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-black/[0.08] bg-[#F9F9F8] px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-[#18181B] hover:bg-black/[0.05]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#F9F9F8] text-[#71717A] text-xs">
      {/* TaiCalc Style Official Data Sources */}
      <div className="border-b border-black/[0.06] py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="font-mono text-[11px] font-bold text-[#18181B] uppercase tracking-wider">
            DATA TRANSPARENCY · 數據透明與官方依據
          </p>
          <p className="mt-1 text-xs text-[#71717A]">
            所有冷房算式、CSPF能效標準與補助金額，均對照中華民國主管機關當年度最新法規與官方公告：
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 font-mono text-[11px]">
            <div className="rounded-lg bg-white p-3 border border-black/[0.06]">
              <p className="font-bold text-[#18181B]">經濟部能源署</p>
              <p className="text-[#71717A] mt-0.5">住宅家電汰舊換新節能補助 $3,000 元公告</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-black/[0.06]">
              <p className="font-bold text-[#18181B]">財政部賦稅署</p>
              <p className="text-[#71717A] mt-0.5">貨物稅條例第11條之1節能電器退稅 ($1,200~$2,000)</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-black/[0.06]">
              <p className="font-bold text-[#18181B]">經濟部標準檢驗局</p>
              <p className="text-[#71717A] mt-0.5">CNS 14409 冷氣機 CSPF 能源效率等級標準</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-black/[0.06]">
              <p className="font-bold text-[#18181B]">各原廠技術型錄</p>
              <p className="text-[#71717A] mt-0.5">大金、國際、日立、三菱等 2026 最新原廠手冊</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-extrabold text-[#18181B] text-sm">JAZZHOME 家電決策手帳</p>
          <p className="mt-1 text-[11px] text-[#71717A]">
            © {new Date().getFullYear()} JazzHome. 免登入，算式主要於本機瀏覽器運算。
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="/tools" className="hover:text-[#18181B]">
            計算器總覽
          </Link>
          <Link href="/topics/air-conditioner" className="hover:text-[#18181B]">
            冷氣專題
          </Link>
          <Link href="/topics/refrigerator" className="hover:text-[#18181B]">
            冰箱專題
          </Link>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#18181B]"
          >
            LINE 審圖諮詢
          </a>
        </div>
      </div>
    </footer>
  );
}
