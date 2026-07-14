import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "@/i18n/routing";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <Link href="/" className="font-bold text-xl">
        Aditya Chandiramani
      </Link>
      <div className="flex gap-6 items-center">
        <Link href="/portfolio">Portfolio</Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
