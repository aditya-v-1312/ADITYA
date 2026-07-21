"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-slate-700 hover:border-blue-400 text-white";

  return (
    <Link
      href={href}
      className={`rounded-xl px-5 py-3 transition duration-300 ${styles}`}
    >
      {children}
    </Link>
  );
}
