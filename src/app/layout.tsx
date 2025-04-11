import type { Metadata } from "next";
import { MainLayout } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "UCOAL Technical Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
