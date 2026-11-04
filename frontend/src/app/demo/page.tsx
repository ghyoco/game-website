"use client";

import React from "react";

export default function DemoPage() {
  return (
    <div className="fixed inset-x-0 bottom-0 top-[76px] z-10 bg-[#231F20]">
      <iframe
        src="/game/index.html"
        title="TCG Battle Unity WebGL"
        className="h-full w-full border-0 bg-[#231F20]"
        allow="autoplay; fullscreen; gamepad"
        allowFullScreen
      />
    </div>
  );
}
