import type { ArticleVerification } from "@/lib/trust";
import { trustPillars, verificationLabels } from "@/lib/trust";

interface VerifiedBadgeProps {
  verification: ArticleVerification;
}

export function VerifiedBadge({ verification }: VerifiedBadgeProps) {
  return (
    <div className="apple-card border border-black/[0.06] bg-[#F9F9FB] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        {verification.levels.map((level) => {
          const { label, bg, text, border } = verificationLabels[level];
          return (
            <span
              key={level}
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${bg} ${text} ${border}`}
            >
              <span className="text-[10px]">✓</span>
              <span>{label}</span>
            </span>
          );
        })}
      </div>
      {verification.specSource && (
        <p className="mt-2.5 text-xs font-medium text-[#48484A]">
          <span className="text-[#8E8E93]">規格驗證來源：</span>
          {verification.specSource}
          {verification.lastVerified && (
            <span className="text-[#8E8E93]"> · 核實日期 {verification.lastVerified}</span>
          )}
        </p>
      )}
      {verification.note && (
        <p className="mt-1 text-xs leading-relaxed text-[#636366]">{verification.note}</p>
      )}
    </div>
  );
}

interface TrustPillarsProps {
  compact?: boolean;
}

export function TrustPillars({ compact = false }: TrustPillarsProps) {
  const pillars = trustPillars;

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {pillars.map((p) => (
          <span
            key={p.title}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#48484A] shadow-sm border border-black/[0.04]"
          >
            <span className="text-[#0071E3]">{p.emoji}</span>
            <span>{p.title}</span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#0071E3]">
            客觀實證 · 嚴謹核對
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1E] sm:text-3xl">
            為什麼 JazzHome 值得你信任？
          </h2>
          <p className="mt-2 text-base text-[#636366]">
            市面文章多為行銷推播與業配清單。我們回歸工程規範與原廠數據，只講真實規格與現場避坑。
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="apple-card p-6 border border-black/[0.05] bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2F2F7] text-lg text-[#0071E3]">
                  {p.emoji}
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#1C1C1E]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#636366]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
