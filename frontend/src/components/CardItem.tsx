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
      aria-label={`${card.name} - ${t.cardsPage.clickToInspect}`}
      className="tcg-card-pop group flex flex-col justify-between rounded-[8px] border border-[#272626] bg-[#111111] p-5 text-left focus:outline-none focus-visible:border-[#8870b6] cursor-pointer"
    >
      <div>
        {/* Top Telemetry Bar */}
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
            <span className="font-mono text-[11px] tracking-[0.025em] text-[#d1d3d4]">
              {card.faction}
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.025em] text-[#918d8d]">
            {card.code} • {card.type}
          </span>
        </div>

        {/* SVG Card Frame on Carbon Layer (#141716) */}
        <div className="my-4 flex items-center justify-center rounded-[8px] border border-[#272626] bg-[#141716] p-3 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(136, 112, 182, 0.22), transparent 100%)",
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
          <h3 className="text-[18px] font-medium tracking-[-0.01em] text-[#ffffff] group-hover:text-[#a892c4] transition-colors">
            {card.name}
          </h3>
          {card.hp !== undefined ? (
            <span className="font-mono text-[12px] tracking-[0.025em] text-[#a892c4]">
              {card.hp} HP
            </span>
          ) : null}
        </div>

        <p className="mt-2 line-clamp-2 text-[14px] leading-[1.45] text-[#918d8d]">
          {card.effect[locale]}
        </p>
      </div>

      {/* Bottom Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-[#272626] pt-3 font-mono text-[11px] tracking-[0.025em]">
        <span className="text-[#918d8d]">{card.roleTag}</span>
        <span className="text-[#edecee] group-hover:text-[#a892c4] transition-colors">
          {t.cardsPage.clickToInspect}
        </span>
      </div>
    </button>
  );
}
