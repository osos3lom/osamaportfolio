"use client"

import { useRouter, usePathname } from "next/navigation"
import { locales, localeNames, type Locale } from "@/lib/i18n/config"

interface LanguageSwitcherProps {
  currentLang: Locale
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: Locale) => {
    if (newLocale === currentLang) return

    // Remove current locale from pathname and add new one
    const segments = pathname.split("/")
    segments[1] = newLocale
    const newPath = segments.join("/")

    router.push(newPath)
  }

  return (
    <div className="language-switcher">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLanguage(locale)}
          className={`lang-btn ${currentLang === locale ? "active" : ""}`}
          aria-label={`Switch to ${localeNames[locale]}`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  )
}
