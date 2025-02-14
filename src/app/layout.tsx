import type { Metadata } from "next";
import { Raleway, Quicksand, Comfortaa } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-raleway'
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-comfortaa'
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: "FlowDSA",
  description: "FlowDSA - The ultimate platform to master Data Structures and Algorithms. Stay consistent, track progress, and get AI-powered explanations to finally complete your DSA journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} ${quicksand.variable} ${comfortaa.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
