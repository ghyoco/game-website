"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle, useLanguage } from "./LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/cards", label: t.nav.cards },
    { href: "/story", label: t.nav.story },
    { href: "/guide", label: t.nav.guide },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between rounded-[60px] border border-white/[0.08] bg-[#191919]/95 py-2 pr-2 pl-6 shadow-[0_4px_20px_rgba(0,0,0,0.45)] backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8870b6] shadow-[0_0_10px_#8870b6]" />
          <span className="text-[15px] font-medium tracking-[-0.01em] text-[#ffffff]">
            Babi Ngepet <span className="text-[#918d8d] font-normal">vs</span> Warga
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-[14px] transition-colors ${
                  active
                    ? "bg-[#111111] text-[#ffffff] font-medium border border-[#272626]"
                    : "text-[#d1d3d4] hover:text-[#ffffff]"
                }`}
              >
                {active ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
                ) : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            href="/demo"
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-[30px] px-4 py-2 text-[13px] font-medium transition-colors ${
              pathname === "/demo"
                ? "bg-[#7760a2] text-[#ffffff]"
                : "bg-[#5c478a] text-[#ffffff] hover:bg-[#7760a2]"
            }`}
          >
            <span>{t.nav.demo}</span>
            <span className="rounded-full bg-black/30 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.025em] text-[#edecee]">
              {t.nav.tbaBadge}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Menu"
            className="inline-flex md:hidden items-center justify-center rounded-[30px] border border-[#272626] bg-[#111111] px-3 py-1.5 font-mono text-xs text-[#ffffff]"
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="mx-auto mt-2 max-w-[1080px] rounded-[16px] border border-[#272626] bg-[#111111] p-3 md:hidden flex flex-col gap-1 shadow-[0_4px_20px_rgba(0,0,0,0.45)]"
          aria-label="Mobile Navigation"
        >
          {[...links, { href: "/demo", label: `${t.nav.demo} (${t.nav.tbaBadge})` }].map(
            (item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-[8px] px-3.5 py-2 text-[14px] ${
                    active
                      ? "bg-[#191919] text-[#ffffff] font-medium border border-[#272626]"
                      : "text-[#d1d3d4]"
                  }`}
                >
                  <span>{item.label}</span>
                  {active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
                  ) : null}
                </Link>
              );
            }
          )}
        </nav>
      ) : null}
    </header>
  );
}
