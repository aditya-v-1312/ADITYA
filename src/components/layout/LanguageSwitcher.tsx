"use client";
import { usePathname, Link } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      <Link href={pathname} locale="en">
        🇬🇧
      </Link>
      <Link href={pathname} locale="fr">
        🇫🇷
      </Link>
    </div>
  );
}
