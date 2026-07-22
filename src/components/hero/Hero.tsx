"use client";

import Container from "@/components/ui/Container";
import Typewriter from "./Typewriter";
import HeroStats from "./HeroStats";
import Globe from "./Globe";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 lg:min-h-screen lg:pt-0">
      <Container>
        <div className="flex flex-col gap-12 py-10 lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {/* Announcement */}
            <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="mr-2">🚀</span>

              <span className="text-sm font-medium text-blue-300">
                Currently Building
              </span>

              <span className="mx-3 hidden h-4 w-px bg-white/15 sm:block" />

              <span className="hidden text-sm text-slate-300 sm:block">
                AI-powered business tools at{" "}
                <span className="font-semibold text-white">BIZENIX</span>
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Hi, I'm
              <br />
              <span className="break-words">Aditya Chandiramani</span>
            </h1>

            {/* Roles */}

            <h2 className="mt-5 text-2xl text-blue-400 sm:text-3xl lg:text-4xl">
              <Typewriter roles={profile.roles} />
            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 lg:mx-0 lg:text-lg">
              {profile.tagline}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-7 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                View Projects
              </a>

              <a
                href={profile.resumeEN}
                className="rounded-xl border border-slate-700 px-7 py-3 font-medium text-white transition hover:border-blue-500 hover:bg-white/5"
              >
                Resume
              </a>
            </div>

            {/* Stats */}

            <HeroStats stats={profile.stats} />
          </div>

          {/* Globe */}

          <div className="flex w-full justify-center lg:w-1/2">
            <Globe />
          </div>
        </div>
      </Container>
    </section>
  );
}
