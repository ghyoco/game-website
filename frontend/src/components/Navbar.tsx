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
      <div className="mx-auto flex max-w-[1080px] items-center justify-between rounded-full border border-white/[0.09] bg-[#191919]/92 py-2 pr-2 pl-6 shadow-[0_8px_28px_rgba(0,0,0,0.55),inset_0_1px_0_0_rgba(200,180,203,0.14)] backdrop-blur-md">
        <Link href="/" className="press-scale flex items-center gap-2.5 rounded-full py-1 pr-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8870b6] shadow-[0_0_10px_#8870b6]" />
          <span className="text-[15px] font-semibold tracking-[-0.015em] text-[#ffffff]">
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
                aria-current={active ? "page" : undefined}
                className={`press-scale inline-flex items-center rounded-full px-4 py-1.5 text-[14px] ${
                  active
                    ? "bg-[#111111] text-[#ffffff] font-medium border border-[#33284d] shadow-[inset_0_1px_0_0_rgba(168,146,196,0.2)]"
                    : "text-[#d1d3d4] hover:text-[#ffffff]"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Link
            href="/demo"
            aria-current={pathname === "/demo" ? "page" : undefined}
            className={`press-scale hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] ${
              pathname === "/demo"
                ? "bg-[#7760a2] text-[#ffffff]"
                : "bg-[#5c478a] text-[#ffffff] hover:bg-[#7760a2]"
            }`}
          >
            <span>{t.nav.demo}</span>
            <span className="rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-semibold tracking-[0.04em] text-[#edecee]">
              {t.nav.tbaBadge}
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle Menu"
            className="press-scale inline-flex md:hidden items-center justify-center rounded-full border border-[#272626] bg-[#111111] px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.03em] text-[#ffffff]"
          >
            {mobileOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="obsidian-panel mx-auto mt-2 max-w-[1080px] rounded-[16px] p-2 md:hidden flex flex-col gap-1 shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
          aria-label="Mobile Navigation"
        >
          {[...links, { href: "/demo", label: `${t.nav.demo} (${t.nav.tbaBadge})` }].map(
            (item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className={`press-scale flex items-center justify-between rounded-[8px] px-3.5 py-2 text-[14px] ${
                    active
                      ? "bg-[#191919] text-[#ffffff] font-medium border border-[#33284d]"
                      : "text-[#d1d3d4]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            }
          )}
        </nav>
      ) : null}
    </header>
  );
}
