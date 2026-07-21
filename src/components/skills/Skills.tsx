import Container from "@/components/ui/Container";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-28">
      <Container>
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 max-w-2xl text-slate-400">
            From building modern web applications to analyzing business data,
            these are the technologies I use regularly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <h3 className="mb-8 text-2xl font-bold">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15"
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
