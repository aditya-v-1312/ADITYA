import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
      <p className="mt-2 text-xl text-gray-600">{t("hero.subtitle")}</p>
    </main>
  );
}
