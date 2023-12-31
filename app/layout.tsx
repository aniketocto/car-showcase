import { relative } from "path";
import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car Show Hub",
  description: "Discover the best car you can get",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative scrollbar-hide">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
