import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DelightHub — 2026 Q1 분기 워크샵",
  description: "DelightHub 2026 Q1 Quarter Workshop Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
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
