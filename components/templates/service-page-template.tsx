"use client"

import type React from "react"

import { useState } from "react"
import { PageHero } from "@/components/layout/page-hero"
import { ProductGrid } from "@/components/product/product-grid"
import { GetQuoteCTA } from "@/components/product/getquotecta"
import type { Service } from "@/config/services"
import { getProductsByService } from "@/config/products"
import type { Locale } from "@/lib/i18n/config"
import { localeDirections } from "@/lib/i18n/config"

interface ServicePageTemplateProps {
  service: Service
  children?: React.ReactNode
}

export function ServicePageTemplate({ service, children }: ServicePageTemplateProps) {
  const [lang, setLang] = useState<Locale>("en")
  const products = getProductsByService(service.id)

  return (
    <div className={`min-h-screen ${localeDirections[lang]}`}>

      <PageHero
        titleEn={service.nameEn}
        titleAr={service.nameAr}
        descEn={service.descEn}
        descAr={service.descAr}
        priceEn={service.priceEn}
        priceAr={service.priceAr}
        lang={lang}
      />

      <ProductGrid products={products} serviceId={service.id} lang={lang} />

      {children}

      <GetQuoteCTA priceEn={service.priceEn} priceAr={service.priceAr} serviceId={service.id} lang={lang} />

    </div>
  )
}
