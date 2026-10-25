"use client";

import React, { useState } from "react";
import Image from "next/image";
import { STORY_CHAPTERS } from "@/data/content";
import { CARDS_DATA, type Faction } from "@/data/cards";
import { useLanguage } from "@/components/LanguageContext";

const PERSPECTIVES: Array<Faction | "ALL"> = ["ALL", "Babi Ngepet", "Warga"];

export default function StoryPage() {
  const { locale, t } = useLanguage();
  const [perspective, setPerspective] = useState<Faction | "ALL">("ALL");

  const visibleChapters = STORY_CHAPTERS.filter(
    (ch) => perspective === "ALL" || ch.perspective === perspective
  );

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-10 space-y-14">
      {/* Header + Segmented Perspective Filter */}
      <header className="text-center space-y-4">
        <div className="purple-pill-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.06em] text-[#c8b4cb] uppercase">
          <span>{t.storyPage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.storyPage.title}
        </h1>
        <p className="mx-auto max-w-[600px] text-[16px] leading-[1.55] text-[#918d8d]">
          {t.storyPage.subtitle}
        </p>

        <div className="pt-3 flex justify-center">
          <div
            role="group"
            aria-label="Story perspective filter"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-white/[0.1] bg-[#191919] p-1"
          >
            {PERSPECTIVES.map((item) => {
              const active = perspective === item;
              const label =
                item === "ALL" ? t.storyPage.perspectiveAll : item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPerspective(item)}
                  aria-pressed={active}
                  className={`press-scale inline-flex items-center rounded-full px-4 py-1.5 text-[13px] cursor-pointer ${
                    active
                      ? "bg-[#111111] text-[#ffffff] font-semibold border border-[#33284d] shadow-[inset_0_1px_0_0_rgba(168,146,196,0.2)]"
                      : "text-[#d1d3d4] hover:text-[#ffffff]"
                  }`}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Key Art Atmospheric Banner */}
      <div className="obsidian-panel overflow-hidden rounded-[16px] outline-1 -outline-offset-1 outline-white/10">
        <div className="relative">
          <Image
            src="/bg.png"
            alt="Babi Ngepet vs Warga Story Key Art"
            width={1024}
            height={576}
            unoptimized
            className="max-h-[340px] w-full object-cover"
          />
          <div className="flex items-center justify-between border-t border-[#272626] bg-[#141716] px-5 py-3 text-[12px] font-medium text-[#918d8d]">
            <span>Arsip Visual • Kronik Desa</span>
            <span className="font-semibold text-[#c8b4cb]">Pak Karta vs Warga Desa</span>
          </div>
        </div>
      </div>

      {/* Narrative Chapters */}
      <div className="space-y-8">
        {visibleChapters.map((chapter) => {
          const featuredCard = CARDS_DATA.find(
            (c) => c.id === chapter.featuredCardId
          );

          return (
            <article
              key={chapter.id}
              className="obsidian-panel rounded-[16px] p-6 sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#272626] pb-4 text-[12px] font-semibold tracking-[0.04em]">
                <div className="flex items-center gap-2 text-[#c8b4cb]">
                  <span className="h-2 w-2 rounded-full bg-[#8870b6] shadow-[0_0_8px_#8870b6]" />
                  <span>{chapter.chapterCode}</span>
                </div>
                <span className="rounded-full border border-[#33284d] bg-[#191919] px-3 py-0.5 text-[#d1d3d4]">
                  {chapter.perspective}
                </span>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8 space-y-5 text-left">
                  <div>
                    <h2 className="text-heading-block text-[26px] sm:text-[32px] text-[#ffffff]">
                      {chapter.title[locale]}
                    </h2>
                    <p className="mt-2 text-[15px] font-medium text-[#c8b4cb]">
                      {chapter.subtitle[locale]}
                    </p>
                  </div>

                  <div className="space-y-4 max-w-[64ch] text-[15px] leading-[1.65] text-[#edecee]">
                    {chapter.paragraphs[locale].map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>

                  {/* Designer Narrative Scene Placeholder */}
                  <div className="rounded-[12px] border border-dashed border-[#5c478a]/55 bg-[#141716] p-4">
                    <span className="text-[11px] font-semibold tracking-[0.06em] text-[#c8b4cb] uppercase">
                      {t.storyPage.visualPlaceholderTag}
                    </span>
                    <p className="mt-1 text-[13px] text-[#918d8d]">
                      {chapter.visualSpec}
                    </p>
                  </div>
                </div>

                {/* Featured Character Card from Story */}
                {featuredCard ? (
                  <div className="lg:col-span-4 flex flex-col items-center justify-center rounded-[12px] border border-[#272626] bg-[#141716] p-5">
                    <Image
                      src={featuredCard.svgPath}
                      alt={featuredCard.name}
                      width={630}
                      height={880}
                      unoptimized
                      className="w-full max-w-[220px] aspect-[630/880] object-contain"
                    />
                    <span className="mt-3 text-[12px] font-medium text-[#918d8d]">
                      {`${featuredCard.code} • ${featuredCard.name}`}
                    </span>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
