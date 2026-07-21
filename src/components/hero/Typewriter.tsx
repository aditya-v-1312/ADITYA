"use client";

import { TypeAnimation } from "react-type-animation";

interface Props {
  roles: string[];
}

export default function Typewriter({ roles }: Props) {
  const sequence: (string | number)[] = [];

  roles.forEach((role) => {
    sequence.push(role);
    sequence.push(1500);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className="text-blue-400"
    />
  );
}
