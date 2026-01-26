import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

interface ProductCardProps {
  image: string
  nameEn: string
  nameAr: string
  descEn: string
  descAr: string
  priceEn: string
  priceAr: string
  slug: string
  service: string
  lang: Locale
}

export function ProductCard({
  image,
  nameEn,
  nameAr,
  descEn,
  descAr,
  priceEn,
  priceAr,
  slug,
  service,
  lang,
}: ProductCardProps) {
  const altText = lang === "en" ? nameEn : nameAr
  const dict = dictionaries[lang]

  return (
    <Link
      href={`/get-quote?service=${service}&product=${slug}`}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-[color:var(--gold)] transition-all hover:shadow-lg hover:shadow-[color:var(--gold)]/10"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image || "/placeholder.svg"}
          alt={altText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Gold accent border that appears on hover */}
        <div className="absolute inset-0 ring-2 ring-[color:var(--gold)] ring-opacity-0 group-hover:ring-opacity-50 transition-all duration-300 rounded-t-lg" />
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[color:var(--gold)] transition-colors">
          {lang === "en" ? nameEn : nameAr}
        </h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-[60px]">
          {lang === "en" ? descEn : descAr}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold text-[color:var(--gold)]">{lang === "en" ? priceEn : priceAr}</span>
        </div>
        <Button
          size="lg"
          className="w-full bg-[color:var(--gold)] text-[color:var(--gold-foreground)] hover:bg-[color:var(--gold-dark)] shadow-md hover:shadow-[color:var(--gold)]/30 transition-all"
        >
          {dict.common.getQuote}
          <ArrowRight size={16} className={lang === "ar" ? "rotate-180 mr-2" : "ml-2"} />
        </Button>
      </div>
    </Link>
  )
}
