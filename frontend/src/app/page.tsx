"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { CARDS_DATA } from "@/data/cards";

function HeroWorkspaceMockup({ annotation }: { annotation: string }) {
  const babiCard = CARDS_DATA[0];
  const sumiCard = CARDS_DATA[3];
  const wargaCard = CARDS_DATA[7];

  return (
    <div className="enter-stagger-3 relative mx-auto mt-14 max-w-[1120px]">
      {/* Natural bg.png Purple Radial Cloud Backdrop */}
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 opacity-90 blur-2xl"
        style={{ background: "var(--gradient-hero-cloud)" }}
      />

      {/* Callout Note Overlay in Plus Jakarta Sans */}
      <div className="hidden lg:flex items-center gap-2 absolute -top-9 right-8 z-20">
        <span className="text-[13px] font-medium text-[#c8b4cb]">
          {annotation}
        </span>
        <svg
          width="38"
          height="24"
          viewBox="0 0 42 28"
          fill="none"
          className="text-[#a892c4] translate-y-1.5"
          aria-hidden="true"
        >
          <path
            d="M2 4C18 4 30 10 36 24M36 24L29 20M36 24L39 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Product Workspace Panel (#21222b shell, concentric radii, 1px #272626 border) */}
      <div className="relative z-10 overflow-hidden rounded-[16px] border border-[#33284d] bg-[#21222b] shadow-[0_24px_64px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(200,180,203,0.16)]">
        {/* Inner Workspace Grid: Left Sidebar (#111111) + Main Canvas (#141716) */}
        <div className="grid lg:grid-cols-12">
          <aside className="border-b border-[#272626] bg-[#111111] p-5 lg:col-span-3 lg:border-b-0 lg:border-r space-y-4 text-left">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.08em] text-[#918d8d] uppercase">
                Status Arena Aktif
              </span>
              <div className="mt-2.5 space-y-2 text-[13px]">
                <div className="flex items-center justify-between rounded-[8px] border border-[#272626] bg-[#191919] px-3 py-2 text-[#ffffff]">
                  <span className="font-medium">Babi Ngepet</span>
                  <span className="font-semibold text-[#c8b4cb] tabular-nums">100 HP</span>
                </div>
                <div className="flex items-center justify-between rounded-[8px] border border-[#272626] bg-[#191919] px-3 py-2 text-[#ffffff]">
                  <span className="font-medium">Amukan Warga</span>
                  <span className="font-semibold text-[#e8dda8] tabular-nums">220 HP</span>
                </div>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-3.5">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-[#918d8d] uppercase">
                Zona Bench
              </span>
              <div className="mt-2 rounded-[8px] border border-[#33284d] bg-[#141716] p-3 text-[12px] text-[#d1d3d4]">
                <span className="block font-semibold text-[#c8b4cb] tabular-nums">
                  Mbok Sumi (50 HP)
                </span>
                <span className="mt-0.5 block text-[#918d8d]">
                  Pasif: Nyala Lilin Aktif
                </span>
              </div>
            </div>

            <div className="border-t border-[#272626] pt-3.5">
              <span className="text-[11px] font-semibold tracking-[0.08em] text-[#918d8d] uppercase">
                Elemen Kartu
              </span>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1.5 rounded-full border border-[#272626] bg-[#191919] px-3 py-1 text-[12px] font-medium text-[#d1d3d4]">
                  <Image
                    src="/cards/Dark%20Element.svg"
                    alt="Dark"
                    width={16}
                    height={16}
                    unoptimized
                    className="h-4 w-4"
                  />
                  <span>Dark</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-[#272626] bg-[#191919] px-3 py-1 text-[12px] font-medium text-[#d1d3d4]">
                  <Image
                    src="/cards/Fire%20Element.svg"
                    alt="Fire"
                    width={16}
                    height={16}
                    unoptimized
                    className="h-4 w-4"
                  />
                  <span>Fire</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Canvas (#141716) */}
          <div className="bg-[#141716] p-5 sm:p-6 lg:col-span-9">
            <div className="grid gap-5 md:grid-cols-12 md:items-center">
              {/* Official bg.png Key Art Panel */}
              <div className="md:col-span-7 overflow-hidden rounded-[10px] border border-[#272626] bg-[#000000] outline-1 -outline-offset-1 outline-white/10">
                <Image
                  src="/bg.png"
                  alt="Babi Ngepet vs Warga Key Art"
                  width={1024}
                  height={576}
                  unoptimized
                  className="aspect-video w-full object-cover"
                />
                <div className="flex items-center justify-between border-t border-[#272626] bg-[#111111] px-4 py-2.5 text-[12px] font-medium text-[#918d8d]">
                  <span>Ilustrasi Utama • Babi Ngepet vs Warga</span>
                  <span className="font-semibold text-[#c8b4cb]">Duel 1v1</span>
                </div>
              </div>

              {/* Live SVG Card Trio */}
              <div className="md:col-span-5 grid grid-cols-3 gap-2.5">
                {[babiCard, sumiCard, wargaCard].map((card) => (
                  <Link
                    key={card.id}
                    href="/cards"
                    className="tcg-card-pop rounded-[10px] border border-[#272626] bg-[#111111] p-1.5 block"
                  >
                    <Image
                      src={card.svgPath}
                      alt={card.name}
                      width={630}
                      height={880}
                      unoptimized
                      className="w-full aspect-[630/880] object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const { t } = useLanguage();
  const [activeTabId, setActiveTabId] = useState("shifter");

  const currentTab =
    t.landing.tabs.find((tab) => tab.id === activeTabId) ?? t.landing.tabs[0];
  const showcaseCards = CARDS_DATA.filter((c) =>
    currentTab.cardIds.includes(c.id)
  );

  return (
    <div className="mx-auto max-w-[1200px] px-6">
      {/* 1. Hero Block (design.md Section 5 & 8.1) */}
      <section className="pt-8 pb-20 text-center">
        <h1 className="enter-stagger-1 mx-auto max-w-[920px] text-display-block text-[44px] sm:text-[64px] lg:text-[76px]">
          <span className="block text-[#ffffff]">{t.landing.titleLine1}</span>
          <span className="hero-purple-gradient block">{t.landing.titleLine2}</span>
        </h1>

        <p className="enter-stagger-2 mx-auto mt-6 max-w-[580px] text-[16px] sm:text-[18px] leading-[1.6] text-[#918d8d]">
          {t.landing.lead}
        </p>

        <div className="enter-stagger-2 mt-8 flex flex-wrap items-center justify-center gap-3.5">
          {/* High-Contrast White Primary CTA */}
          <Link
            href="/cards"
            className="press-scale rounded-full bg-[#ffffff] px-6 py-3 text-[14px] font-semibold text-[#000000] shadow-[0_4px_20px_rgba(255,255,255,0.16)] hover:opacity-90"
          >
            {t.landing.ctaCards}
          </Link>
          {/* Secondary Outlined Violet CTA */}
          <Link
            href="/guide"
            className="press-scale rounded-full border border-[#8870b6] bg-[#261f37]/35 px-6 py-3 text-[14px] font-semibold text-[#c8b4cb] hover:bg-[#5c478a]/30 hover:text-[#ffffff]"
          >
            {t.landing.ctaGuide}
          </Link>
          {/* Tertiary Arrow Text Link */}
          <Link
            href="/demo"
            className="press-scale px-3 py-2 text-[14px] font-medium text-[#edecee] hover:text-[#c8b4cb]"
          >
            {t.landing.ctaDemo}
          </Link>
        </div>

        <HeroWorkspaceMockup annotation={t.landing.annotationHero} />
      </section>

      {/* 2. Core Pillars Strip (design.md Section 6.16) */}
      <section className="border-y border-[#272626] py-8">
        <p className="text-center text-[11px] font-semibold tracking-[0.12em] text-[#918d8d] uppercase">
          {t.landing.stripLabel}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-5 text-center text-[12px] font-semibold tracking-[0.04em] text-[#d1d3d4]">
          <div className="obsidian-panel rounded-[10px] py-3">
            SLOT AKTIF 1v1
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            BENCH SUPPORT
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            EVOLUSI 3 TAHAP
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            ENERGI DARK &amp; FIRE
          </div>
          <div className="obsidian-panel col-span-2 sm:col-span-1 rounded-[10px] py-3 tabular-nums">
            12 KARTU PROTOTIPE
          </div>
        </div>
      </section>

      {/* 3. What the Game Is About — Segmented Tab Control + 2-Column Showcase */}
      <section className="py-24 space-y-12">
        <div className="text-center space-y-3">
          <span className="purple-pill-badge inline-flex items-center rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#c8b4cb] uppercase">
            {t.landing.aboutTag}
          </span>
          <h2 className="text-heading-block text-[32px] sm:text-[42px] text-[#ffffff]">
            {t.landing.aboutHeading}
          </h2>
          <p className="mx-auto max-w-[580px] text-[16px] leading-[1.55] text-[#918d8d]">
            {t.landing.aboutSubheading}
          </p>

          {/* Segmented Tab Pill (Concentric rounded-full) */}
          <div className="pt-4 flex justify-center">
            <div
              role="tablist"
              className="inline-flex flex-wrap items-center gap-1 rounded-full border border-white/[0.1] bg-[#191919] p-1"
            >
              {t.landing.tabs.map((tab) => {
                const active = tab.id === currentTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`press-scale inline-flex items-center rounded-full px-5 py-2 text-[14px] cursor-pointer ${
                      active
                        ? "bg-[#111111] text-[#ffffff] font-semibold border border-[#33284d] shadow-[inset_0_1px_0_0_rgba(168,146,196,0.2)]"
                        : "text-[#d1d3d4] hover:text-[#ffffff]"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Feature Copy (Left) + Product/Card Panel (Right) */}
        <div className="obsidian-panel grid gap-8 rounded-[16px] p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-heading-block text-[24px] sm:text-[28px] text-[#ffffff]">
              {currentTab.heading}
            </h3>
            <p className="max-w-[60ch] text-[15px] leading-[1.6] text-[#edecee]">
              {currentTab.body}
            </p>
            <ul className="space-y-3 border-t border-[#272626] pt-4 text-[14px] leading-[1.55] text-[#d1d3d4]">
              {currentTab.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8870b6] shadow-[0_0_8px_#8870b6]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 rounded-[12px] border border-[#272626] bg-[#141716] p-5">
            <div className="grid grid-cols-3 gap-3">
              {showcaseCards.map((card) => (
                <Link
                  key={card.id}
                  href="/cards"
                  className="tcg-card-pop rounded-[8px] border border-[#272626] bg-[#111111] p-2 block"
                >
                  <Image
                    src={card.svgPath}
                    alt={card.name}
                    width={630}
                    height={880}
                    unoptimized
                    className="w-full aspect-[630/880] object-contain"
                  />
                  <span className="mt-2 block text-center text-[12px] font-medium text-[#edecee] truncate">
                    {card.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What the Project Is For — 3-Column Resource Card Grid (No numbering/label, starts right away with title) */}
      <section className="py-12 space-y-10">
        <div className="text-center space-y-2.5">
          <h2 className="text-heading-block text-[32px] sm:text-[40px] text-[#ffffff]">
            {t.landing.purposeHeading}
          </h2>
          <p className="mx-auto max-w-[560px] text-[16px] leading-[1.55] text-[#918d8d]">
            {t.landing.purposeSubheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.landing.purposeCards.map((card) => (
            <article
              key={card.title}
              className="obsidian-panel flex flex-col justify-between rounded-[16px] p-8 text-left transition-colors hover:border-[#5c478a]"
            >
              <div>
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#5c478a] to-[#a892c4]" />
                <h3 className="text-[20px] font-semibold tracking-[-0.015em] text-[#ffffff] leading-[1.3]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#918d8d]">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
