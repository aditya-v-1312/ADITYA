import Container from "@/components/ui/Container";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-white/10 py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Academic Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Learning never stops.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every stage of my education has helped shape the way I approach
            technology, problem-solving, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500 via-blue-400/40 to-transparent md:block" />

          <div className="space-y-10">
            {education.map((item, index) => (
              <div key={item.school} className="group relative flex gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10 hidden md:flex">
                  <div className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 text-lg transition duration-300 group-hover:scale-110 group-hover:border-blue-400">
                    🎓
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.07]">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.school}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-blue-300">
                        {item.degree}
                      </p>
                    </div>

                    <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                      {item.duration}
                    </div>
                  </div>

                  <p className="mt-5 text-sm uppercase tracking-widest text-slate-500">
                    {item.location}
                  </p>

                  <p className="mt-6 leading-8 text-slate-400">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
