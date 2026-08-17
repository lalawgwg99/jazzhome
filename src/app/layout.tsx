import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Footer, Header } from "@/components/Layout";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant-TW" className="h-full scroll-smooth">
      <body className="flex min-h-full flex-col bg-[#F2F2F7] text-[#1C1C1E] antialiased selection:bg-[#0071E3]/15 selection:text-[#0071E3]">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
