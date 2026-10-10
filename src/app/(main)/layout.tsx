import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "伴走DX | 中小企業のためのDXコンサルティング",
  description:
    "伴走DXは、中小企業のための定額・低額DXコンサルティングサービスです。専属の情シス担当のように、ツール選定から業務改善、社内ヘルプデスクまで伴走支援します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
