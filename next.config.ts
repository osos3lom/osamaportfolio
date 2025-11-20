import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"], // supported languages
    defaultLocale: "en",   // default language
  },
  // other config options can go here
};

export default nextConfig;
