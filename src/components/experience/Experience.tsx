import Container from "@/components/ui/Container";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 py-28">
      <Container>
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Professional Journey
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company + index}
              className="group relative mb-14 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-3 h-5 w-5 rounded-full border-4 border-[#050816] bg-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400" />

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10">
                <p className="text-sm text-blue-400">{exp.period}</p>

                <h3 className="mt-2 text-2xl font-bold">{exp.role}</h3>

                <p className="mt-1 text-lg text-slate-300">{exp.company}</p>

                <p className="mt-5 leading-8 text-slate-400">
                  {exp.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
