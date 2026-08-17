"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/categories";
import { tools } from "@/lib/tools";
import { lineUrl } from "@/lib/monetization";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base font-semibold tracking-tight text-[#1C1C1E] transition-opacity hover:opacity-80"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0071E3] text-sm text-white shadow-[0_2px_6px_rgba(0,113,227,0.3)]">
            􀎞
          </span>
          <span>JazzHome 家電研究室</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {categories.map((cat) => {
            const isActive = pathname.startsWith(`/topics/${cat.slug}`);
            return (
              <Link
                key={cat.slug}
                href={`/topics/${cat.slug}`}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black/[0.06] text-[#0071E3]"
                    : "text-[#48484A] hover:bg-black/[0.04] hover:text-[#1C1C1E]"
                }`}
              >
                {cat.shortName}
              </Link>
            );
          })}

          <div className="mx-2 h-4 w-px bg-black/[0.1]" />

          <Link
            href="/tools"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
              pathname.startsWith("/tools")
                ? "bg-black/[0.06] text-[#0071E3]"
                : "text-[#48484A] hover:bg-black/[0.04] hover:text-[#1C1C1E]"
            }`}
          >
            選購工具
          </Link>

          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-active ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#1C1C1E] px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-black"
          >
            <span className="text-[#34C759]">●</span> 現場線上諮詢
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.04] text-[#1C1C1E] transition-colors hover:bg-black/[0.08] md:hidden"
        >
          {isMobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-black/[0.06] bg-white/95 px-4 pt-2 pb-6 backdrop-blur-2xl md:hidden">
          <div className="space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">
              四大品類專題
            </p>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/topics/${cat.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[#1C1C1E] hover:bg-black/[0.04]"
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span>
                  <span>{cat.name}指南</span>
                </span>
                <span className="text-xs text-[#8E8E93]">›</span>
              </Link>
            ))}

            <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">
              智慧選購工具
            </p>
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[#1C1C1E] hover:bg-black/[0.04]"
              >
                <span className="flex items-center gap-2">
                  <span>{tool.icon}</span>
                  <span>{tool.name}</span>
                </span>
                <span className="text-xs text-[#8E8E93]">›</span>
              </Link>
            ))}

            <div className="pt-4">
              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0071E3] py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                LINE 專人免費審圖與諮詢
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/[0.06] bg-[#F2F2F7] text-[#48484A]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-base font-semibold text-[#1C1C1E]">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0071E3] text-xs text-white">
                ✓
              </span>
              <span>JazzHome 家電研究室</span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#636366]">
              家電選購與安裝實務避坑指南。以原廠技術手冊為依據，結合第一線施工客訴經驗，先把噸數、散熱、排水講清楚，讓每一分預算花得踏實。
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-[#8E8E93]">
              <span className="rounded-md bg-black/[0.04] px-2 py-1">原廠型錄核實</span>
              <span className="rounded-md bg-black/[0.04] px-2 py-1">現場實務驗證</span>
              <span className="rounded-md bg-black/[0.04] px-2 py-1">客觀無業配</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">
              四大品類指南
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/topics/${cat.slug}`}
                    className="text-[#48484A] transition-colors hover:text-[#0071E3]"
                  >
                    {cat.name}選購指南
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93]">
              互動評估工具
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-[#48484A] transition-colors hover:text-[#0071E3]"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 text-xs text-[#8E8E93] sm:flex-row">
          <p>© {new Date().getFullYear()} JazzHome 家電研究室 · All rights reserved.</p>
          <p>購買前請以原廠官方規格與專業技師現場勘查為準。</p>
        </div>
      </div>
    </footer>
  );
}
