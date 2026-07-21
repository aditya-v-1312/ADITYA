import Container from "@/components/ui/Container";
import { buildingNow, completedWork } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 py-28">
      <Container>
        <div className="mb-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Things I'm Building & Things I've Built
          </h2>
        </div>

        {/* Building Now */}

        <div className="mb-24">
          <div className="mb-10 flex items-center gap-3">
            <span className="text-3xl">🚀</span>

            <h3 className="text-3xl font-bold">Building Now</h3>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {buildingNow.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-2xl font-bold">{project.title}</h4>

                  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-300">
                    {project.status}
                  </span>
                </div>

                <p className="text-blue-300">{project.subtitle}</p>

                <p className="mt-5 leading-8 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed */}

        <div>
          <div className="mb-10 flex items-center gap-3">
            <span className="text-3xl">✅</span>

            <h3 className="text-3xl font-bold">Completed Work</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {completedWork.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
              >
                <h4 className="text-xl font-bold">{project.title}</h4>

                <p className="mt-2 text-blue-300">{project.subtitle}</p>

                <p className="mt-5 text-slate-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
