import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why Monetize 10% When You Could Monetize 100%? - RAGA Tokyo 2026",
  description: "Alarmy & DARO - Ad monetization playbook for apps with low willingness-to-pay. RAGA Tokyo 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
