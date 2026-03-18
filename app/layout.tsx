import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prefold AI Account Area",
  description: "Account area dashboard for managing your Prefold AI workspace"
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
