"use client";

import Container from "@/components/ui/Container";
import Typewriter from "./Typewriter";
import HeroStats from "./HeroStats";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="flex flex-col items-start">
          {/* Announcement Pill */}
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-5 py-2 backdrop-blur-sm">
            <span className="mr-2 text-base">🚀</span>

            <span className="text-sm font-medium text-blue-300">
              Currently Building
            </span>

            <span className="mx-3 h-4 w-px bg-white/15" />

            <span className="text-sm text-slate-300">
              AI-powered business tools &amp; automation systems at{" "}
              <span className="font-semibold text-white">BIZENIX</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm <br />
            <span className="text-white">Aditya Chandiramani</span>
          </h1>

          {/* Animated Roles */}
          <h2 className="mt-6 text-2xl text-slate-300 md:text-4xl">
            <Typewriter roles={profile.roles} />
          </h2>

          {/* Tagline */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href={profile.resumeEN}
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:bg-white/5"
            >
              Resume
            </a>
          </div>

          {/* Stats */}
          <HeroStats stats={profile.stats} />
        </div>
      </Container>
    </section>
  );
}
