import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "だんじり協奏曲",
  description: "だんじり協奏曲",
  icons: {
    icon: "/images/logos/danjiri.png",
  },
  verification: {
    google: "Pi44q8qMI93649FodMcUiID0i6rDOn7qTEnQZ6qggtM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}