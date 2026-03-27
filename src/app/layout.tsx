import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "@/lib/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bistro Central Ljubljana | Modern Restaurant & Fine Dining",
  description:
    "Modern restaurant landing page focused on menu presentation and table reservations. Experience fine dining in the heart of Ljubljana.",
  openGraph: {
    title: "Bistro Central Ljubljana",
    description:
      "A modern dining experience in the heart of Ljubljana. Fresh local ingredients, seasonal menus, and an unforgettable atmosphere.",
    locale: "en_US",
    type: "website",
    siteName: "Bistro Central Ljubljana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
