import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KISATARA — Game Kartu Babi Ngepet",
  description:
    "KISATARA adalah game kartu dua pemain yang berdasarkan legenda Babi Ngepet. Jelajahi daftar kartu, cerita Babi Ngepet, buku aturan KISATARA, dan meja demo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#000000] font-sans text-[#edecee] selection:bg-[#5c478a] selection:text-[#ffffff]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[#ffffff] focus:px-4 focus:py-2 focus:text-[13px] focus:font-semibold focus:text-[#000000] focus:shadow-lg"
        >
          Langsung ke konten utama
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 pt-24 focus:outline-none">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
