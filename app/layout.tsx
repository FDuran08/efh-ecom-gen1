import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugar Cloud Scents | Luxe Roll-On Perfume Oil Dupes",
  description: "Luxe Roll-On Perfume Oil Dupes — Oil-Concentrated · Long-Lasting. Based in La Quinta, CA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#FDF4FF", fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
