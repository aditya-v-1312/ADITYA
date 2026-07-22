import Container from "@/components/ui/Container";
import { contact } from "@/data/contact";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Build Something Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether it's a freelance project, internship opportunity,
            collaboration, or just a conversation about technology, I'd love to
            hear from you.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(
                "Let's Work Together",
              )}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              <Mail className="h-8 w-8 text-blue-400 transition group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-semibold">Email</h3>

              <p className="mt-2 text-slate-400">{contact.email}</p>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              <FaLinkedin className="h-8 w-8 text-blue-400" />

              <h3 className="mt-5 text-xl font-semibold">LinkedIn</h3>

              <p className="mt-2 text-slate-400">Connect with me</p>
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              <FaGithub className="h-8 w-8 text-blue-400" />

              <h3 className="mt-5 text-xl font-semibold">GitHub</h3>

              <p className="mt-2 text-slate-400">View my repositories</p>
            </a>

            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
            >
              <FileText className="h-8 w-8 text-blue-400 transition group-hover:scale-110" />

              <h3 className="mt-5 text-xl font-semibold">Resume</h3>

              <p className="mt-2 text-slate-400">Download PDF</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
