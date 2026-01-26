import { Button } from "@/components/ui/button"
import Link from "next/link"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

interface PageHeroProps {
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  priceEn?: string
  priceAr?: string
  ctaEn?: string
  ctaAr?: string
  ctaHref?: string
  lang: Locale
}

export function PageHero({
  titleEn,
  titleAr,
  descEn,
  descAr,
  priceEn,
  priceAr,
  ctaEn = "Get Quote",
  ctaAr = "احصل على عرض",
  ctaHref = "/get-quote",
  lang,
}: PageHeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
          {lang === "en" ? titleEn : titleAr}
        </h1>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{lang === "en" ? descEn : descAr}</p>
        {priceEn && priceAr && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-bold text-[color:var(--gold)]">{lang === "en" ? priceEn : priceAr}</span>
          </div>
        )}
        <Link href={ctaHref}>
          <Button
            size="lg"
            className="bg-[color:var(--gold)] text-[color:var(--gold-foreground)] hover:bg-[color:var(--gold-dark)]"
          >
            {lang === "en" ? ctaEn : ctaAr}
          </Button>
        </Link>
      </div>
    </section>
  )
}
