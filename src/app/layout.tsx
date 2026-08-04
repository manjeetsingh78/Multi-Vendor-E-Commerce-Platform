// Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

// Theme Provider
import ThemeProviderClient from "../components/ThemeProviderClient";

// Clerk Provider
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

// Global CSS
import "./globals.css";

const interFont = Inter({subsets: ["latin"],});

const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ['500','700'],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Shop Hub",
  description: "It is a shopping platform clone. It was build for learning purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${interFont.className} ${barlowFont.variable}`}>
          <ThemeProviderClient>
            {children}
          </ThemeProviderClient>
          </body>
      </html>
    </ClerkProvider>
  );
}
