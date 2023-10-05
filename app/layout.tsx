import "./globals.css";
import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";

const golos = Golos_Text({ subsets: ["cyrillic"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | M-chat",
    default: "M-chat", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={golos.className}>{children}</body>
    </html>
  );
}
