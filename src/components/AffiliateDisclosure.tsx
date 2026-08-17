import { monetization } from "@/lib/monetization";

interface AffiliateDisclosureProps {
  className?: string;
}

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <div className={`rounded-xl border border-black/[0.04] bg-[#F2F2F7]/60 p-3 text-xs leading-relaxed text-[#8E8E93] ${className}`}>
      <span>ℹ️ </span>
      {monetization.affiliateDisclosure}
    </div>
  );
}
