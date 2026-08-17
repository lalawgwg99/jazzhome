"use client";

import { lineUrl, monetization } from "@/lib/monetization";

interface LineCtaProps {
  variant?: "primary" | "compact" | "banner";
  title?: string;
  description?: string;
}

export function LineCta({
  variant = "primary",
  title = monetization.lineConsultTitle,
  description = monetization.lineConsultDesc,
}: LineCtaProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "line_click", {
        event_category: "conversion",
        event_label: variant,
      });
    }
  };

  if (variant === "compact") {
    return (
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="skm-btn inline-flex items-center gap-2 rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
      >
        <LineLogo className="h-4 w-4 text-[#06C755]" />
        <span>LINE 免費諮詢</span>
      </a>
    );
  }

  if (variant === "banner") {
    return (
      <div className="skm-card bg-white p-6 sm:p-7 border border-[#A67C52]/30 shadow-2xs">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#06C755]/10 text-xs text-[#06C755]">
                <LineLogo className="h-3.5 w-3.5" />
              </span>
              <p className="text-base font-bold text-[#111111]">{title}</p>
            </div>
            <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-[#555555]">{description}</p>
          </div>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="skm-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#111111] px-6 py-3 text-xs sm:text-sm font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
          >
            <LineLogo className="h-4 w-4 text-[#06C755]" />
            <span>傳照片免費評估 ↗</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="skm-card bg-white p-6 sm:p-7 border border-black/[0.08] shadow-2xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FAF9F8] border border-black/[0.06]">
          <LineLogo className="h-6 w-6 text-[#06C755]" />
        </div>
        <div className="flex-1 space-y-2">
          <p className="text-base font-bold text-[#111111]">{title}</p>
          <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">{description}</p>
          <div className="pt-2">
            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="skm-btn inline-flex items-center gap-2 rounded-md bg-[#111111] px-5 py-2.5 text-xs font-semibold text-[#D4AF37] border border-[#A67C52]/40 shadow-xs hover:bg-black"
            >
              <span>加入 LINE 官方帳號諮詢</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LineLogo({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
