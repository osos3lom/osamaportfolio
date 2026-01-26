import { ProductCard } from "@/components/product-card"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import type { Product } from "@/config/products"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

interface ProductGridProps {
  products: Product[]
  serviceId: string
  lang: Locale
}

export function ProductGrid({ products, serviceId, lang }: ProductGridProps) {
  const dict = dictionaries[lang]

  return (
    <SectionWrapper background="card">
      <h2 className="text-3xl font-bold text-foreground text-center mb-12">{dict.productPage.digitalProducts}</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
        {dict.productPage.digitalProductsDesc}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            nameEn={product.nameEn}
            nameAr={product.nameAr}
            descEn={product.descEn}
            descAr={product.descAr}
            priceEn={product.priceEn}
            priceAr={product.priceAr}
            slug={product.slug}
            service={serviceId}
            lang={lang}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
