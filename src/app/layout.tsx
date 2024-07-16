import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme.provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Minify",
  description: "Encurtador de Url para tudo e todos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
        defaultTheme="dark"
        attribute="class"
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
