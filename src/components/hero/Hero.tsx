"use client";

import Container from "@/components/ui/Container";
import Typewriter from "./Typewriter";
import HeroStats from "./HeroStats";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <p className="mb-4 text-blue-400">Hello, I'm</p>

        <h1 className="text-5xl font-bold md:text-7xl">{profile.name}</h1>

        <h2 className="mt-6 text-2xl text-slate-300 md:text-4xl">
          <Typewriter roles={profile.roles} />
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          {profile.tagline}
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#projects" className="rounded-lg bg-blue-600 px-6 py-3">
            View Projects
          </a>

          <a
            href={profile.resumeEN}
            className="rounded-lg border border-slate-700 px-6 py-3"
          >
            Resume
          </a>
        </div>

        <HeroStats stats={profile.stats} />
      </Container>
    </section>
  );
}
