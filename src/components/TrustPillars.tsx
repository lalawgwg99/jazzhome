import type { ArticleVerification } from "@/lib/trust";

interface VerifiedBadgeProps {
  verification: ArticleVerification;
}

export function VerifiedBadge({ verification }: VerifiedBadgeProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6E73] py-2">
      <span className="inline-flex items-center gap-1 font-semibold text-[#248A3D] bg-[#34C759]/10 px-2 py-0.5 rounded-md border border-[#34C759]/20">
        <span>✓</span> 型錄核實
      </span>
      {verification.specSource && (
        <span className="text-[#8E8E93]">
          數據來源：{verification.specSource}
          {verification.lastVerified && ` (${verification.lastVerified})`}
        </span>
      )}
    </div>
  );
}
