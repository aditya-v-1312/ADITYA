import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Building technology that solves real business problems.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I'm Aditya Chandiramani, a developer and data analyst passionate
              about creating products that combine clean engineering with smart
              business thinking.
            </p>

            <p>
              From logistics optimization and AI-powered applications to web
              development and automation, I enjoy transforming complex ideas
              into practical solutions that deliver measurable value.
            </p>

            <p>
              Currently focused on software engineering, artificial
              intelligence, data analytics, and building scalable digital
              products.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              number: "5+",
              label: "Projects Built",
            },
            {
              number: "3+",
              label: "Internships",
            },
            {
              number: "2+",
              label: "Years of Experience",
            },
            {
              number: "∞",
              label: "Curiosity",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <h3 className="text-4xl font-bold text-white">{item.number}</h3>

              <p className="mt-2 text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
