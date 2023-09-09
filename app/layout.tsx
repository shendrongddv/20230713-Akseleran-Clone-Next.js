import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body text-[#4a4a4a] antialiased",
          fontDisplay.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
