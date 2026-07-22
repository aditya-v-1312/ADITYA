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
    <div
      className="
    relative
    mx-auto
    h-[320px]
    w-[320px]

    sm:h-[420px]
    sm:w-[420px]

    md:h-[520px]
    md:w-[520px]

    lg:h-[650px]
    lg:w-[650px]
  "
    >
      <GlobeScene selected={selected} onSelect={setSelected} />

      <GlobeCard location={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
