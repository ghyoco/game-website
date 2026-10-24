"use client";

import React, { useDeferredValue, useState } from "react";
import {
  CARDS_DATA,
  type CardType,
  type Faction,
  type GameCard,
} from "@/data/cards";
import { CardItem } from "@/components/CardItem";
import { CardZoomDialog } from "@/components/CardZoomDialog";
import { useLanguage } from "@/components/LanguageContext";

const FACTIONS: Array<Faction | "ALL"> = ["ALL", "Babi Ngepet", "Warga"];
const TYPES: Array<CardType | "ALL"> = [
  "ALL",
  "Unit",
  "Support",
  "Spell",
  "Energy",
];

export default function CardsPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaction, setSelectedFaction] = useState<Faction | "ALL">("ALL");
  const [selectedType, setSelectedType] = useState<CardType | "ALL">("ALL");
  const [activeCard, setActiveCard] = useState<GameCard | null>(null);

  const deferredSearch = useDeferredValue(searchQuery);
  const normalizedQuery = deferredSearch.trim().toLowerCase();

  const filteredCards = CARDS_DATA.filter((card) => {
    const matchesName =
      normalizedQuery === "" ||
      card.name.toLowerCase().includes(normalizedQuery) ||
      card.code.toLowerCase().includes(normalizedQuery);
    const matchesFaction =
      selectedFaction === "ALL" || card.faction === selectedFaction;
    const matchesType = selectedType === "ALL" || card.type === selectedType;
    return matchesName && matchesFaction && matchesType;
  });

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedFaction("ALL");
    setSelectedType("ALL");
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-10 space-y-10">
      {/* Header + Hero Console Search Input (design.md Section 6.9) */}
      <header className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#a892c4] px-3.5 py-1 font-mono text-[11px] tracking-[0.025em] text-[#a892c4]">
          <span>{t.cardsPage.badge}</span>
        </div>
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {t.cardsPage.title}
        </h1>
        <p className="mx-auto max-w-[600px] text-[16px] leading-[1.5] text-[#918d8d]">
          {t.cardsPage.subtitle}
        </p>

        {/* Glowing Console Input Bar */}
        <div className="mx-auto mt-6 max-w-[600px] flex items-center rounded-[10px] border border-[#414042] bg-[#191919] p-1.5 shadow-[0_0_40px_rgba(119,96,162,0.24)]">
          <label htmlFor="card-search-input" className="sr-only">
            {t.cardsPage.searchPlaceholder}
          </label>
          <input
            id="card-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.cardsPage.searchPlaceholder}
            className="w-full bg-transparent px-4 py-2 font-mono text-[14px] tracking-[0.025em] text-[#ffffff] placeholder-[#58595b] focus:outline-none"
          />
          {searchQuery !== "" ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="shrink-0 rounded-[6px] bg-[#5c478a] px-3.5 py-2 font-mono text-[12px] text-[#ffffff] hover:bg-[#7760a2] cursor-pointer"
            >
              CLEAR
            </button>
          ) : null}
        </div>
      </header>

      {/* Segmented Filter Controls */}
      <div className="flex flex-col items-center justify-between gap-4 border-y border-[#272626] py-4 md:flex-row">
        <div
          role="group"
          aria-label="Faction filter"
          className="inline-flex flex-wrap items-center gap-1 rounded-[30px] border border-white/[0.1] bg-[#191919] p-1"
        >
          {FACTIONS.map((faction) => {
            const active = selectedFaction === faction;
            const label =
              faction === "ALL" ? t.cardsPage.allFactions : faction;
            return (
              <button
                key={faction}
                type="button"
                onClick={() => setSelectedFaction(faction)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-[30px] px-4 py-1.5 text-[13px] transition-colors cursor-pointer ${
                  active
                    ? "bg-[#111111] text-[#ffffff] font-medium border border-[#272626]"
                    : "text-[#d1d3d4] hover:text-[#ffffff]"
                }`}
              >
                {active ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8870b6]" />
                ) : null}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div
          role="group"
          aria-label="Card type filter"
          className="inline-flex flex-wrap items-center gap-1 rounded-[30px] border border-white/[0.1] bg-[#191919] p-1"
        >
          {TYPES.map((type) => {
            const active = selectedType === type;
            const label = type === "ALL" ? t.cardsPage.allTypes : type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                aria-pressed={active}
                className={`rounded-[30px] px-3.5 py-1.5 font-mono text-[12px] tracking-[0.025em] transition-colors cursor-pointer ${
                  active
                    ? "bg-[#5c478a] text-[#ffffff] font-medium"
                    : "text-[#918d8d] hover:text-[#ffffff]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Telemetry Count Row */}
      <div className="flex items-center justify-between font-mono text-[12px] tracking-[0.025em] text-[#918d8d]">
        <span>
          {t.cardsPage.showingCount}: {filteredCards.length} / {CARDS_DATA.length}
        </span>
        {searchQuery !== "" ||
        selectedFaction !== "ALL" ||
        selectedType !== "ALL" ? (
          <button
            type="button"
            onClick={resetAllFilters}
            className="text-[#a892c4] hover:text-[#ffffff] cursor-pointer"
          >
            {t.cardsPage.clearFilters} -&gt;
          </button>
        ) : null}
      </div>

      {/* Cards Grid */}
      {filteredCards.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card) => (
            <CardItem key={card.id} card={card} onSelect={setActiveCard} />
          ))}
        </div>
      ) : (
        <div className="rounded-[8px] border border-[#272626] bg-[#111111] p-12 text-center">
          <p className="text-[20px] font-medium text-[#ffffff]">
            {t.cardsPage.emptyStateTitle}
          </p>
          <p className="mt-2 text-[14px] text-[#918d8d]">
            {t.cardsPage.emptyStateDesc}
          </p>
          <button
            type="button"
            onClick={resetAllFilters}
            className="mt-5 rounded-[30px] bg-[#ffffff] px-5 py-2.5 text-[13px] font-medium text-[#000000] cursor-pointer"
          >
            {t.cardsPage.clearFilters}
          </button>
        </div>
      )}

      <CardZoomDialog card={activeCard} onClose={() => setActiveCard(null)} />
    </div>
  );
}
