import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import Link from "next/link"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

interface GetQuoteCTAProps {
  priceEn: string
  priceAr: string
  serviceId: string
  lang: Locale
}

export function GetQuoteCTA({ priceEn, priceAr, serviceId, lang }: GetQuoteCTAProps) {
  const dict = dictionaries[lang]

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-6">{dict.productPage.readyToStart}</h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{dict.productPage.readyToStartDesc}</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-3xl font-bold text-[color:var(--gold)]">{lang === "en" ? priceEn : priceAr}</span>
        </div>
        <Link href={`/get-quote?service=${serviceId}`}>
          <Button
            size="lg"
            className="bg-[color:var(--gold)] text-[color:var(--gold-foreground)] hover:bg-[color:var(--gold-dark)] shadow-lg hover:shadow-[color:var(--gold)]/20 transition-all"
          >
            {dict.common.getQuote}
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}
