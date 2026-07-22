"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="border-t border-white/10 py-28">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Building through every opportunity.
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            From internships to entrepreneurship, every role has shaped my
            technical and business perspective.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative mb-16">
            <div className="absolute top-5 left-0 h-[2px] w-full bg-white/10" />

            <div className="relative flex justify-between">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActive(index)}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      scale: active === index ? 1.2 : 1,
                    }}
                    className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      active === index
                        ? "border-blue-400 bg-blue-500 shadow-lg shadow-blue-500/40"
                        : "border-white/20 bg-slate-900"
                    }`}
                  />

                  <span
                    className={`mt-4 text-sm font-semibold ${
                      active === index ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {exp.company}
                  </span>

                  <span className="mt-1 text-xs text-slate-500">
                    {exp.period}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >
              <p className="text-blue-400">{experiences[active].period}</p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                {experiences[active].role}
              </h3>

              <h4 className="mt-1 text-xl text-slate-300">
                {experiences[active].company}
              </h4>

              <p className="mt-6 leading-8 text-slate-400">
                {experiences[active].description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {experiences[active].skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile */}
        <div className="space-y-6 md:hidden">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm text-blue-400">{exp.period}</p>

              <h3 className="mt-2 text-2xl font-bold text-white">{exp.role}</h3>

              <h4 className="text-slate-300">{exp.company}</h4>

              <p className="mt-4 text-slate-400">{exp.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
