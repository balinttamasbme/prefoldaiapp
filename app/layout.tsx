import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prefold GEO Dashboard",
  description: "Organic tech SaaS dashboard for Generative Engine Optimization"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
