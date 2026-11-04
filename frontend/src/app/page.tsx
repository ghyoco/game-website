"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";
import { CARDS_DATA } from "@/data/cards";

function HeroBannerWithCardSlider() {
  const [touchPaused, setTouchPaused] = useState(false);
  const loopedCards = [...CARDS_DATA, ...CARDS_DATA];

  return (
    <div className="enter-stagger-3 relative mx-auto mt-14 max-w-[1140px]">
      {/* Natural bg.png Purple Radial Cloud Backdrop */}
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-10 opacity-90 blur-2xl"
        style={{ background: "var(--gradient-hero-cloud)" }}
      />

      {/* Hero Banner Shell: bg.png on the left + Infinite Looping Card Slider on the right */}
      <div className="relative z-10 overflow-hidden rounded-[18px] border border-[#33284d] bg-[#141716] p-5 sm:p-7 shadow-[0_24px_64px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(200,180,203,0.16)]">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Left: Official bg.png Hero Banner */}
          <div className="lg:col-span-6 overflow-hidden rounded-[12px] border border-[#272626] bg-[#000000] outline-1 -outline-offset-1 outline-white/10">
            <Image
              src="/bg.png"
              alt="KISATARA — Babi Ngepet vs Warga"
              width={1024}
              height={576}
              unoptimized
              className="aspect-video w-full object-cover"
            />
          </div>

          {/* Right: Infinite Slow-Looping Card Slider (pauses on hover or touch) */}
          <div
            className="hero-card-Viewport lg:col-span-6 overflow-hidden py-3"
            onTouchStart={() => setTouchPaused(true)}
            onTouchEnd={() => setTouchPaused(false)}
            onTouchCancel={() => setTouchPaused(false)}
          >
            <div
              data-paused={touchPaused ? "true" : "false"}
              className="hero-card-track gap-3.5 pr-3.5"
            >
              {loopedCards.map((card, idx) => (
                <Link
                  key={`${card.id}-${idx}`}
                  href="/cards"
                  aria-label={card.name}
                  className="tcg-card-pop w-[148px] sm:w-[162px] shrink-0 rounded-[12px] border border-[#272626] bg-[#111111] p-2 block"
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
      {/* 1. Hero Block */}
      <section className="pt-8 pb-20 text-center">
        <div className="enter-stagger-1 mx-auto flex flex-col items-center justify-center">
          <Image
            src="/logo.svg"
            alt="KISATARA Logo"
            width={420}
            height={156}
            priority
            unoptimized
            className="h-20 sm:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_12px_36px_rgba(136,112,182,0.35)]"
          />
          <h1 className="sr-only">
            KISATARA — Game Kartu Babi Ngepet
          </h1>
          <p className="hero-purple-gradient mt-4 text-heading-block text-[22px] sm:text-[30px] lg:text-[34px]">
            {t.landing.titleLine2}
          </p>
        </div>

        <p className="enter-stagger-2 mx-auto mt-6 max-w-[600px] text-[16px] sm:text-[18px] leading-[1.6] text-[#918d8d]">
          {t.landing.lead}
        </p>

        <div className="enter-stagger-2 mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/cards"
            className="press-scale rounded-full bg-[#ffffff] px-6 py-3 text-[14px] font-semibold text-[#000000] shadow-[0_4px_20px_rgba(255,255,255,0.16)] hover:opacity-90"
          >
            {t.landing.ctaCards}
          </Link>
          <Link
            href="/guide"
            className="press-scale rounded-full border border-[#8870b6] bg-[#261f37]/35 px-6 py-3 text-[14px] font-semibold text-[#c8b4cb] hover:bg-[#5c478a]/30 hover:text-[#ffffff]"
          >
            {t.landing.ctaGuide}
          </Link>
          <Link
            href="/demo"
            className="press-scale px-3 py-2 text-[14px] font-medium text-[#edecee] hover:text-[#c8b4cb]"
          >
            {t.landing.ctaDemo}
          </Link>
        </div>

        <HeroBannerWithCardSlider />
      </section>

      {/* 2. Core KISATARA Rules Strip (from Buku Aturan Referensi Cepat) */}
      <section className="border-y border-[#272626] py-8">
        <p className="text-center text-[11px] font-semibold tracking-[0.12em] text-[#918d8d] uppercase">
          {t.landing.stripLabel}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-5 text-center text-[12px] font-semibold tracking-[0.04em] text-[#d1d3d4] tabular-nums">
          <div className="obsidian-panel rounded-[10px] py-3">
            20 KARTU PER DECK
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            5 KARTU UNIK × 4
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            1 AKTIF &amp; 3 CADANGAN
          </div>
          <div className="obsidian-panel rounded-[10px] py-3">
            BATAS 10 KOLAM ENERGI
          </div>
          <div className="obsidian-panel col-span-2 sm:col-span-1 rounded-[10px] py-3">
            3 POIN UNTUK MENANG
          </div>
        </div>
      </section>

      {/* 3. What the Game Is About — Segmented Tab Control + 2-Column Showcase */}
      <section className="py-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-heading-block text-[32px] sm:text-[42px] text-[#ffffff]">
            {t.landing.aboutHeading}
          </h2>
          <p className="mx-auto max-w-[580px] text-[16px] leading-[1.55] text-[#918d8d]">
            {t.landing.aboutSubheading}
          </p>

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

        {/* 2-Column Feature Copy (Left) + Card Trio Panel (Right) */}
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

      {/* 4. What the Project Is For — 3-Column Resource Card Grid */}
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
