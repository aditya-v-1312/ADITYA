import Image from "next/image";
import Container from "@/components/ui/Container";

const facts = [
  {
    icon: "📍",
    title: "Location",
    value: "Vadodara, India",
  },
  {
    icon: "💼",
    title: "Role",
    value: "Founder @ BIZENIX",
  },
  {
    icon: "🎓",
    title: "Education",
    value: "BS in Data Science @ IIT Madras",
  },
  {
    icon: "💻",
    title: "Focus",
    value: "Full Stack Development",
  },
  {
    icon: "📊",
    title: "Specialization",
    value: "Data Science & AI",
  },
  {
    icon: "🌍",
    title: "Experience",
    value: "Lived in 2 Countries",
  },
];

const current = [
  "🚀 Building BIZENIX",
  "🎓 Pursuing BS in Data Science at IIT Madras",
  "📚 Completing BCA at Navrachana University",
  "💡 Exploring AI, Automation & Modern Web Technologies",
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[380px_1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

            <Image
              src="/images/profile.jpg"
              alt="Aditya Chandiramani"
              width={500}
              height={650}
              className="relative aspect-[4/5] rounded-3xl border border-white/10 object-cover shadow-2xl transition duration-500 hover:scale-[1.02]"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Hi, I'm Aditya Chandiramani.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-400">
              <p>
                I'm a Full Stack Developer, founder of{" "}
                <span className="text-white">BIZENIX</span>, and a BS in Data
                Science student at{" "}
                <span className="text-white">IIT Madras</span>. Alongside
                pursuing my Bachelor of Computer Applications at Navrachana
                University, I enjoy building modern web applications, AI-powered
                solutions, and digital experiences that combine thoughtful
                design with practical functionality.
              </p>

              <p>
                Whether it's launching products, experimenting with new
                technologies, or solving real-world problems through software,
                I'm always driven by curiosity and continuous learning.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/40 hover:bg-white/[0.07]"
            >
              <p className="text-2xl">{fact.icon}</p>

              <p className="mt-3 text-sm uppercase tracking-wider text-slate-500">
                {fact.title}
              </p>

              <p className="mt-1 font-medium text-white">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

            <h3 className="text-2xl font-semibold text-white">Currently</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {current.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-4 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
