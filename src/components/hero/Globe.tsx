"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import GlobeCard from "./GlobeCard";
import type { Location } from "@/data/countries";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
});

export default function Globe() {
  const [selected, setSelected] = useState<Location | null>(null);

  return (
    <div className="relative aspect-square w-full max-w-[700px] overflow-visible">
      <GlobeScene selected={selected} onSelect={setSelected} />

      <GlobeCard location={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
