"use client";

import React from "react";
import Image from "next/image";
import type { GameCard } from "@/data/cards";
import { useLanguage } from "./LanguageContext";

export function CardItem({
  card,
  onSelect,
}: {
  card: GameCard;
  onSelect: (card: GameCard) => void;
}) {
  const { locale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => onSelect(card)}
      aria-label={`${card.name} — ${t.cardsPage.clickToInspect}`}
      className="obsidian-panel tcg-card-pop group flex flex-col justify-between rounded-[16px] p-4 text-left cursor-pointer"
    >
      <div>
        {/* Top Metadata Bar */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#272626]">
          <div className="flex items-center gap-2">
            <Image
              src={card.elementIcon}
              alt={card.faction}
              width={16}
              height={16}
              unoptimized
              className="h-4 w-4 object-contain"
            />
            <span className="text-[12px] font-medium text-[#d1d3d4]">
              {card.faction}
            </span>
          </div>
          <span className="rounded-full border border-[#272626] bg-[#191919] px-2.5 py-0.5 text-[11px] font-medium text-[#a892c4] tabular-nums">
            {card.code} • {card.type}
          </span>
        </div>

        {/* SVG Card Frame on Carbon Layer (#141716) — Concentric 10px radius inside 16px outer */}
        <div className="my-3.5 flex items-center justify-center rounded-[10px] border border-[#272626] bg-[#141716] p-3.5 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(62% 54% at 50% 50%, rgba(136, 112, 182, 0.24), transparent 100%)",
            }}
          />
          <Image
            src={card.svgPath}
            alt={card.name}
            width={630}
            height={880}
            unoptimized
            className="relative z-10 aspect-[630/880] w-full max-w-[230px] object-contain"
          />
        </div>

        {/* Card Name & Effect */}
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[18px] font-semibold tracking-[-0.015em] text-[#ffffff] group-hover:text-[#c8b4cb] transition-colors">
            {card.name}
          </h3>
          {card.hp !== undefined ? (
            <span className="text-[12px] font-semibold text-[#a892c4] tabular-nums">
              {card.hp} HP
            </span>
          ) : null}
        </div>

        <p className="mt-1.5 line-clamp-2 text-[14px] leading-[1.5] text-[#918d8d]">
          {card.effect[locale]}
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-[#272626] pt-3 text-[12px] font-medium">
        <span className="text-[#918d8d]">{card.roleTag}</span>
        <span className="text-[#edecee] group-hover:text-[#c8b4cb] transition-colors">
          {t.cardsPage.clickToInspect}
        </span>
      </div>
    </button>
  );
}
