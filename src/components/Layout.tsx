"use client";

import Link from "next/link";
import { useState } from "react";
import { lineUrl } from "@/lib/monetization";

const NAV_ITEMS = [
  { href: "/topics/air-conditioner", label: "冷氣空調" },
  { href: "/topics/refrigerator", label: "電冰箱" },
  { href: "/topics/washing-machine", label: "洗衣機" },
  { href: "/topics/tv", label: "電視影音" },
  { href: "/tools", label: "全部計算器" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#F6F6F3]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-baseline gap-2 font-bold tracking-tight text-[#1C1917] hover:opacity-80 transition-opacity"
        >
          <span className="font-extrabold text-base tracking-tight">JazzHome</span>
          <span className="text-[11px] font-normal text-stone-500 hidden sm:inline">
            家電決策手帳
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="craft-btn rounded-md px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-stone-200/60 hover:text-[#1C1917]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="craft-btn inline-flex items-center gap-1 rounded-full bg-[#1C1917] px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-stone-800"
          >
            <span>LINE 免費諮詢</span>
            <span className="font-mono text-xs">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-200 md:hidden text-xs text-[#1C1917]"
            aria-label="開啟選單"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-stone-200 bg-[#F6F6F3] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 font-medium text-[#1C1917] hover:bg-stone-200/50"
              >
                {item.label}
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
    <footer className="border-t border-stone-200/80 bg-[#F6F6F3] text-stone-600 text-xs">
      {/* Official Data Transparency Sources */}
      <div className="border-b border-stone-200/60 py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="font-mono text-[11px] font-bold text-[#1C1917] uppercase tracking-wider">
            DATA TRANSPARENCY · 官方主管機關依據
          </p>
          <p className="mt-1 text-xs text-stone-500">
            全站冷房算式、CSPF 能效等級與補助金額，皆對照中華民國主管機關當年度最新法規與官方公告：
          </p>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 font-mono text-[11px]">
            <div className="rounded-lg bg-white p-3 border border-stone-200/80 shadow-2xs">
              <p className="font-bold text-[#1C1917]">經濟部能源署</p>
              <p className="text-stone-500 mt-0.5 font-sans">住宅家電汰舊換新節能補助 $3,000 元</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-stone-200/80 shadow-2xs">
              <p className="font-bold text-[#1C1917]">財政部賦稅署</p>
              <p className="text-stone-500 mt-0.5 font-sans">貨物稅條例第11-1條節能電器退稅 ($1,200~$2,000)</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-stone-200/80 shadow-2xs">
              <p className="font-bold text-[#1C1917]">經濟部標準檢驗局</p>
              <p className="text-stone-500 mt-0.5 font-sans">CNS 14409 冷氣機 CSPF 能源效率等級標準</p>
            </div>
            <div className="rounded-lg bg-white p-3 border border-stone-200/80 shadow-2xs">
              <p className="font-bold text-[#1C1917]">各大品牌 2026 原廠手冊</p>
              <p className="text-stone-500 mt-0.5 font-sans">大金、國際、日立、三菱等最新型錄規格</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-extrabold text-[#1C1917] text-sm">JazzHome 家電決策手帳</p>
          <p className="mt-1 text-[11px] text-stone-500">
            © {new Date().getFullYear()} JazzHome. 免登入，算式主要於本機瀏覽器即時運算。
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="/tools" className="hover:text-[#1C1917] transition-colors">
            計算器總覽
          </Link>
          <Link href="/topics/air-conditioner" className="hover:text-[#1C1917] transition-colors">
            冷氣空調
          </Link>
          <Link href="/topics/refrigerator" className="hover:text-[#1C1917] transition-colors">
            電冰箱
          </Link>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1C1917] transition-colors font-medium text-[#1C1917]"
          >
            LINE 免費審圖諮詢 ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
