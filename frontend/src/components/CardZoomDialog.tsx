"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import type { GameCard } from "@/data/cards";
import { useLanguage } from "./LanguageContext";

let supportsDisplayTransition: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  if (
    typeof window === "undefined" ||
    !window.CSS?.supports?.("transition-behavior", "allow-discrete") ||
    !document.body
  ) {
    return false;
  }
  const probe = document.createElement("div");
  probe.style.cssText =
    "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  void getComputedStyle(probe).display;
  probe.style.display = "none";
  supportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit(): boolean {
  return (
    typeof window !== "undefined" &&
    Boolean(window.CSS?.supports?.("overlay", "auto")) &&
    canTransitionDisplay()
  );
}

async function closeTopLayer(
  dialog: HTMLDialogElement,
  onClosed: () => void
): Promise<void> {
  if (!supportsTopLayerExit()) {
    dialog.setAttribute("data-closing", "");
    const animations = dialog.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((resolve) => setTimeout(resolve, 320)),
      ]);
    }
    dialog.removeAttribute("data-closing");
  }
  if (dialog.open) {
    dialog.close();
  }
  onClosed();
}

export function CardZoomDialog({
  card,
  onClose,
}: {
  card: GameCard | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { locale, t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (card && !dialog.open) {
      dialog.showModal();
    } else if (!card && dialog.open) {
      dialog.close();
    }
  }, [card]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      void closeTopLayer(dialog, onClose);
    };

    const handleBackdropFallback = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!inside) {
        void closeTopLayer(dialog, onClose);
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      dialog.addEventListener("click", handleBackdropFallback);
    }

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("click", handleBackdropFallback);
    };
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby="zoom-card-title"
      onClose={onClose}
      className="obsidian-panel m-auto w-[94vw] max-w-[880px] rounded-[18px] p-0 text-[#edecee] shadow-[0_24px_64px_rgba(0,0,0,0.85),0_0_44px_rgba(136,112,182,0.24)]"
    >
      {card ? (
        <div className="p-6 sm:p-8">
          {/* Top Workspace Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-[#272626] pb-4">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[#8870b6] shadow-[0_0_8px_#8870b6]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#a892c4] uppercase tabular-nums">
                {`${card.code} • ${card.faction} • ${card.type}`}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (dialogRef.current) {
                  void closeTopLayer(dialogRef.current, onClose);
                } else {
                  onClose();
                }
              }}
              className="press-scale rounded-full border border-[#33284d] bg-[#191919] px-4 py-1.5 text-[12px] font-semibold text-[#edecee] hover:border-[#8870b6] hover:text-[#ffffff] cursor-pointer"
            >
              {t.cardsPage.closeModal}
            </button>
          </div>

          {/* Main 2-Column Inspection Grid */}
          <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-center">
            {/* Left: Full High-Res SVG Card */}
            <div className="md:col-span-6 flex items-center justify-center rounded-[12px] border border-[#272626] bg-[#141716] p-5 relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(65% 55% at 50% 50%, rgba(136, 112, 182, 0.26), transparent 100%)",
                }}
              />
              <Image
                src={card.svgPath}
                alt={card.name}
                width={630}
                height={880}
                unoptimized
                className="relative z-10 w-full max-w-[330px] object-contain"
              />
            </div>

            {/* Right: Card Details */}
            <div className="md:col-span-6 space-y-4">
              <div>
                <span className="text-[12px] font-semibold tracking-[0.04em] text-[#a892c4] uppercase">
                  {card.roleTag}
                </span>
                <h2
                  id="zoom-card-title"
                  className="mt-1 text-[32px] font-semibold tracking-[-0.02em] text-[#ffffff] leading-[1.15]"
                >
                  {card.name}
                </h2>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="rounded-[10px] border border-[#272626] bg-[#141716] p-3">
                  <span className="block text-[11px] font-medium text-[#918d8d]">
                    {t.cardsPage.hpLabel}
                  </span>
                  <span className="mt-1 block text-[16px] font-semibold text-[#ffffff] tabular-nums">
                    {card.hp !== undefined ? card.hp : "—"}
                  </span>
                </div>
                <div className="rounded-[10px] border border-[#272626] bg-[#141716] p-3">
                  <span className="block text-[11px] font-medium text-[#918d8d]">
                    {t.cardsPage.dmgLabel}
                  </span>
                  <span className="mt-1 block text-[16px] font-semibold text-[#c8b4cb] tabular-nums">
                    {card.damage !== undefined ? `${card.damage} DMG` : "Pasif"}
                  </span>
                </div>
                <div className="rounded-[10px] border border-[#272626] bg-[#141716] p-3">
                  <span className="block text-[11px] font-medium text-[#918d8d]">
                    Elemen
                  </span>
                  <div className="mt-1 flex items-center gap-1.5">
                    <Image
                      src={card.elementIcon}
                      alt=""
                      width={16}
                      height={16}
                      unoptimized
                      className="h-4 w-4 object-contain"
                    />
                    <span className="text-[14px] font-medium text-[#edecee]">
                      {card.faction === "Babi Ngepet" ? "Dark" : "Fire"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Effect Block */}
              <div className="rounded-[10px] border border-[#33284d] bg-[#191919] p-4 shadow-[inset_0_1px_0_0_rgba(168,146,196,0.14)]">
                <span className="text-[12px] font-semibold text-[#c8b4cb]">
                  {t.cardsPage.effectLabel}
                </span>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[#edecee]">
                  {card.effect[locale]}
                </p>
              </div>

              {/* Lore Block */}
              <div className="rounded-[10px] border border-[#272626] bg-[#141716] p-4">
                <span className="text-[12px] font-semibold text-[#918d8d]">
                  {t.cardsPage.loreLabel}
                </span>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[#918d8d] italic">
                  &ldquo;{card.lore[locale]}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
