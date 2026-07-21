import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.0.0.2"],
  turbopack: {
    root: process.cwd(),
  },
};

export default withNextIntl(nextConfig);
