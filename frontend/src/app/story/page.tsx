"use client";

import React from "react";
import Image from "next/image";
import { LORE_DOCUMENT } from "@/data/content";

export default function StoryPage() {
  return (
    <div className="mx-auto max-w-[920px] px-6 py-10 space-y-12">
      {/* Header (Exact Title from Lore.pdf, no top badge mark) */}
      <header className="text-center">
        <h1 className="text-display-block text-[40px] sm:text-[56px] text-[#ffffff]">
          {LORE_DOCUMENT.title}
        </h1>
      </header>

      {/* Atmospheric Key Art Frame */}
      <div className="obsidian-panel overflow-hidden rounded-[18px] outline-1 -outline-offset-1 outline-white/10">
        <Image
          src="/bg.png"
          alt="Babi Ngepet"
          width={1024}
          height={576}
          unoptimized
          className="max-h-[340px] w-full object-cover"
        />
      </div>

      {/* Exact Verbatim Text from Lore.pdf inside Neon Obsidian Reading Panel */}
      <article className="obsidian-panel rounded-[18px] p-7 sm:p-12 shadow-[0_24px_64px_rgba(0,0,0,0.65)]">
        <div className="mx-auto max-w-[68ch] space-y-6 text-left text-[16px] sm:text-[17px] leading-[1.78] text-[#edecee]">
          {LORE_DOCUMENT.paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
