"use client";

import dynamic from "next/dynamic";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
});

export default function Globe() {
  return (
    <div className="relative aspect-square w-full max-w-[650px]">
      <GlobeScene />
    </div>
  );
}
