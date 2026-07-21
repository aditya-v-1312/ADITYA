"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          AC
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-500"
        >
          Let's Talk
        </Link>
      </Container>
    </header>
  );
}
