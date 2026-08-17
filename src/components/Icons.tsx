import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// Bespoke Brand Monogram Logo (Architectural J+H Luxury Crest)
export function BrandLogo({ size = 28, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="32" height="32" rx="7" fill="#111111" />
      {/* Precision architectural geometric J + H */}
      <path
        d="M9 10V20C9 21.6569 10.3431 23 12 23C13.6569 23 15 21.6569 15 20V10"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 10V22M23 10V22M17 16H23"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Luxury gold sparkle point */}
      <circle cx="12" cy="10" r="1.2" fill="#D4AF37" />
    </svg>
  );
}

// 1F Air Conditioner Vector Icon (Minimal Split Unit & Flow)
export function AcIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="9" rx="2" />
      <line x1="6" y1="9" x2="18" y2="9" strokeWidth="1.2" />
      <path d="M5 16C6 18 7 19 9 19" strokeWidth="1.4" />
      <path d="M11 16C12 18.5 13 19.5 15 19.5" strokeWidth="1.4" />
      <path d="M17 16C18 18 19 19 21 19" strokeWidth="1.4" />
    </svg>
  );
}

// 2F Refrigerator Vector Icon (French / Multi-door Architecture)
export function RefrigeratorIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2.5" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="12" y1="2" x2="12" y2="12" />
      {/* Door Handles */}
      <line x1="10" y1="6" x2="10" y2="8" strokeWidth="2" />
      <line x1="14" y1="6" x2="14" y2="8" strokeWidth="2" />
      <line x1="10" y1="15" x2="10" y2="17" strokeWidth="2" />
    </svg>
  );
}

// 3F Washing Machine Vector Icon (Front-load Drum)
export function WasherIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="2" width="18" height="20" rx="2.5" />
      <circle cx="12" cy="13" r="5" />
      <circle cx="12" cy="13" r="2.5" strokeDasharray="2 2" />
      <circle cx="7" cy="5.5" r="1" fill="currentColor" />
      <line x1="13" y1="5.5" x2="17" y2="5.5" strokeWidth="1.4" />
    </svg>
  );
}

// 4F Smart TV Cinema Vector Icon (Ultra-slim 16:9 Screen)
export function TvIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="13" rx="1.5" />
      <line x1="8" y1="20" x2="16" y2="20" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="20" strokeWidth="1.5" />
    </svg>
  );
}

// Precision Calculator Vector Icon
export function CalculatorIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2.5" />
      <rect x="7" y="5" width="10" height="4" rx="1" strokeWidth="1.2" />
      <circle cx="8" cy="13" r="1" fill="currentColor" />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
      <circle cx="16" cy="13" r="1" fill="currentColor" />
      <circle cx="8" cy="17" r="1" fill="currentColor" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
      <circle cx="16" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

// Checklist / Inspection Vector Icon
export function ChecklistIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="m9 13 2 2 4-4" strokeWidth="2" stroke="#047857" />
    </svg>
  );
}

// Brand Matrix / Boutique Grid Vector Icon
export function BoutiqueIcon({ size = 24, className = "text-[#A67C52]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// Gold Luxury Sparkle Accent
export function SparkleIcon({ size = 16, className = "text-[#D4AF37]" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}
