import { getRequestConfig } from "next-intl/server";
import { routing } from "./i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This corresponds to the locale detected by your middleware
  let locale = await requestLocale;

  // Fallback to default if no locale is detected
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
