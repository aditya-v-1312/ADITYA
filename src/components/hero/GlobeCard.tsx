"use client";

import type { Location } from "@/data/countries";

interface GlobeCardProps {
  location: Location | null;
  onClose: () => void;
}

export default function GlobeCard({ location, onClose }: GlobeCardProps) {
  if (!location) return null;

  return (
    <div className="absolute right-0 top-1/2 z-50 w-[420px] -translate-y-1/2 rounded-3xl border border-white/10 bg-slate-900/75 p-7 shadow-2xl backdrop-blur-2xl">
      <button
        onClick={onClose}
        className="absolute right-5 top-5 text-2xl text-white/50 transition hover:text-white"
      >
        ×
      </button>

      <div className="space-y-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFD166]">
            {location.country}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {location.title}
          </h2>

          <p className="mt-1 text-lg text-blue-300">{location.subtitle}</p>

          <p className="mt-4 text-sm font-medium text-[#FFD166]">
            {location.year}
          </p>
        </div>

        <p className="leading-7 text-slate-300">{location.description}</p>

        <div className="flex flex-wrap gap-2">
          {location.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#FFD166]/20 bg-[#FFD166]/10 px-3 py-1 text-sm text-[#FFD166]"
            >
              {tech}
            </span>
          ))}
        </div>

        {location.linkedin && (
          <a
            href={location.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#FFD166] px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            View LinkedIn Post →
          </a>
        )}
      </div>
    </div>
  );
}
