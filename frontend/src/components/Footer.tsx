"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const pathname = usePathname();
  const { t } = useLanguage();

  if (pathname === "/demo") {
    return null;
  }

  return (
    <footer className="mt-24 border-t border-[#272626] bg-[#000000] py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8870b6]" />
            <p className="text-[15px] font-medium text-[#ffffff]">
              Babi Ngepet vs Warga
            </p>
          </div>
          <p className="mt-1.5 text-[13px] text-[#918d8d]">
            {t.footer.projectNote}
          </p>
          <p className="mt-1 text-[12px] text-[#58595b]">
            {t.footer.folkloreNote}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-[14px] text-[#918d8d]">
          <Link href="/" className="hover:text-[#ffffff] transition-colors">
            {t.nav.home}
          </Link>
          <Link href="/cards" className="hover:text-[#ffffff] transition-colors">
            {t.nav.cards}
          </Link>
          <Link href="/story" className="hover:text-[#ffffff] transition-colors">
            {t.nav.story}
          </Link>
          <Link href="/guide" className="hover:text-[#ffffff] transition-colors">
            {t.nav.guide}
          </Link>
          <Link href="/demo" className="hover:text-[#a892c4] transition-colors">
            {t.nav.demo} ({t.nav.tbaBadge})
          </Link>
        </div>
      </div>
    </footer>
  );
}
