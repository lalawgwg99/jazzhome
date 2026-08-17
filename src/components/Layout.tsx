"use client";

import Link from "next/link";
import { useState } from "react";
import { lineUrl } from "@/lib/monetization";

const DEPARTMENTS = [
  { href: "/topics/air-conditioner", floor: "1F", label: "空調旗艦館" },
  { href: "/topics/refrigerator", floor: "2F", label: "頂級冰箱館" },
  { href: "/topics/washing-machine", floor: "3F", label: "智能洗衣館" },
  { href: "/topics/tv", floor: "4F", label: "劇院影音館" },
  { href: "/tools", floor: "VIP", label: "選品計算器" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[#FAF9F8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-15 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand - SKM Luxury Typography */}
        <Link
          href="/"
          className="flex items-baseline gap-2.5 group transition-opacity hover:opacity-85"
        >
          <span className="font-extrabold text-base sm:text-lg tracking-[0.12em] text-[#111111] uppercase font-sans">
            JazzHome
          </span>
          <span className="text-[11px] font-medium tracking-wider text-[#A67C52] border-l border-black/[0.12] pl-2 hidden sm:inline">
            精品家電選品手帳
          </span>
        </Link>

        {/* Desktop Department Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {DEPARTMENTS.map((dept) => (
            <Link
              key={dept.href}
              href={dept.href}
              className="skm-btn rounded-md px-3 py-1.5 text-xs font-medium text-[#444444] hover:bg-black/[0.04] hover:text-[#111111] transition-colors"
            >
              <span className="font-mono text-[10px] text-[#A67C52] mr-1">
                {dept.floor}
              </span>
              <span>{dept.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right VIP Action */}
        <div className="flex items-center gap-3">
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="skm-btn inline-flex items-center gap-1.5 rounded-full bg-[#111111] px-4 py-1.5 text-xs font-medium text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
          >
            <span>專屬管家 VIP 諮詢</span>
            <span className="font-mono text-xs text-[#D4AF37]">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-black/[0.1] md:hidden text-xs text-[#111111]"
            aria-label="開啟選單"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-black/[0.08] bg-[#FAF9F8] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {DEPARTMENTS.map((dept) => (
              <Link
                key={dept.href}
                href={dept.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-[#111111] hover:bg-black/[0.04]"
              >
                <span>{dept.label}</span>
                <span className="font-mono text-xs text-[#A67C52]">{dept.floor}</span>
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
    <footer className="border-t border-black/[0.08] bg-[#FAF9F8] text-[#555555] text-xs">
      {/* Official Data Transparency Sources */}
      <div className="border-b border-black/[0.06] py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="text-[#A67C52] text-sm">✦</span>
            <p className="font-mono text-[11px] font-bold text-[#111111] uppercase tracking-wider">
              AUTHORITY & TRANSPARENCY · 官方主管機關法規依據
            </p>
          </div>
          <p className="mt-1 text-xs text-[#777777]">
            全站冷房算式、CSPF 能效等級與補助金額，均對照中華民國主管機關當年度最新法規與官方公告：
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 font-mono text-[11px]">
            <div className="rounded-lg bg-white p-3.5 border border-black/[0.06] shadow-2xs">
              <p className="font-bold text-[#111111]">經濟部能源署</p>
              <p className="text-[#777777] mt-1 font-sans">住宅家電汰舊換新節能補助 $3,000 元</p>
            </div>
            <div className="rounded-lg bg-white p-3.5 border border-black/[0.06] shadow-2xs">
              <p className="font-bold text-[#111111]">財政部賦稅署</p>
              <p className="text-[#777777] mt-1 font-sans">貨物稅條例第11條之1節能電器退稅 ($1,200~$2,000)</p>
            </div>
            <div className="rounded-lg bg-white p-3.5 border border-black/[0.06] shadow-2xs">
              <p className="font-bold text-[#111111]">經濟部標準檢驗局</p>
              <p className="text-[#777777] mt-1 font-sans">CNS 14409 冷氣機 CSPF 能源效率等級標準</p>
            </div>
            <div className="rounded-lg bg-white p-3.5 border border-black/[0.06] shadow-2xs">
              <p className="font-bold text-[#111111]">各大品牌 2026 原廠手冊</p>
              <p className="text-[#777777] mt-1 font-sans">大金、國際、日立、三菱等最新型錄規格</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-extrabold text-[#111111] text-sm tracking-wider uppercase font-sans">
            JAZZHOME 精品家電選品手帳
          </p>
          <p className="mt-1 text-[11px] text-[#777777]">
            © {new Date().getFullYear()} JazzHome. 免登入，算式主要於本機瀏覽器即時運算。
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs">
          <Link href="/tools" className="hover:text-[#111111] transition-colors">
            選品計算器
          </Link>
          <Link href="/topics/air-conditioner" className="hover:text-[#111111] transition-colors">
            空調旗艦館
          </Link>
          <Link href="/topics/refrigerator" className="hover:text-[#111111] transition-colors">
            頂級冰箱館
          </Link>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors font-medium text-[#A67C52]"
          >
            專屬管家免費審圖 ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
