import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WhatsAppFloat from "./components/WhatsAppFloat";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narayana Agri Solutions",
  description:
    "Narayana Agri Solutions provides certified seeds, plant medicine, modern machinery, and farm tools across India.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <SiteHeader />
        {children}
        <WhatsAppFloat />
        <SiteFooter />
      </body>
    </html>
  );
}
