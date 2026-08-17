import { monetization } from "@/lib/monetization";

interface AffiliateDisclosureProps {
  className?: string;
}

export function AffiliateDisclosure({ className = "" }: AffiliateDisclosureProps) {
  return (
    <p className={`text-xs leading-5 text-zinc-400 ${className}`}>
      {monetization.affiliateDisclosure}
    </p>
  );
}
