import type { ArticleVerification } from "@/lib/trust";
import { trustPillars, verificationLabels } from "@/lib/trust";

interface VerifiedBadgeProps {
  verification: ArticleVerification;
}

export function VerifiedBadge({ verification }: VerifiedBadgeProps) {
  return (
    <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
      <div className="flex flex-wrap gap-2">
        {verification.levels.map((level) => {
          const { label, color } = verificationLabels[level];
          return (
            <span
              key={level}
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${color}`}
            >
              {label}
            </span>
          );
        })}
      </div>
      {verification.specSource && (
        <p className="mt-2 text-xs text-zinc-600">
          規格來源：{verification.specSource}
          {verification.lastVerified && ` · 核實日期 ${verification.lastVerified}`}
        </p>
      )}
      {verification.note && (
        <p className="mt-1 text-xs leading-5 text-zinc-500">{verification.note}</p>
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
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700"
          >
            {p.icon} {p.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <section className="border-t border-zinc-200 bg-zinc-900 px-4 py-14 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium text-emerald-400">只說真話</p>
        <h2 className="mt-2 text-2xl font-bold">為什麼 JazzHome 不一樣？</h2>
        <p className="mt-2 max-w-2xl text-zinc-400">
          市面家電文多在推型號。這裡先把安裝會出事的地方講清楚，再決定要不要買。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6"
            >
              <span className="text-2xl">{p.icon}</span>
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
