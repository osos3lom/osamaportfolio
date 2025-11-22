"use client"

import { useParams } from "next/navigation"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import Link from "next/link"
import LanguageSwitcher from "@/components/language-switcher"
import IonIcon from "@/components/IonIcon"

export default function ProductsPage() {
  const params = useParams()
  const lang = params.lang as Locale
  const dict = dictionaries[lang]

  const products = [
    {
      id: 1,
      name: dict.store.digitalProducts.items[0],
      category: "Templates",
      price: "$49 - $199",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "Professional, responsive website templates ready to customize for your business needs."
          : "قوالب مواقع ويب احترافية ومستجيبة جاهزة للتخصيص حسب احتياجات عملك.",
    },
    {
      id: 2,
      name: dict.store.digitalProducts.items[1],
      category: "Design Kits",
      price: "$79 - $299",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "Complete UI/UX design systems with components, patterns, and guidelines."
          : "أنظمة تصميم UI/UX كاملة مع المكونات والأنماط والإرشادات.",
    },
    {
      id: 3,
      name: dict.store.digitalProducts.items[2],
      category: "Mobile Apps",
      price: "$99 - $399",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "Modern mobile app templates for iOS and Android with clean code architecture."
          : "قوالب تطبيقات موبايل حديثة لنظامي iOS و Android مع بنية كود نظيفة.",
    },
    {
      id: 4,
      name: dict.store.digitalProducts.items[3],
      category: "Branding",
      price: "$149 - $499",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "Complete brand identity packages including logo, colors, typography, and guidelines."
          : "حزم هوية تجارية كاملة تشمل الشعار والألوان والطباعة والإرشادات.",
    },
    {
      id: 5,
      name: dict.store.digitalProducts.items[4],
      category: "Graphics",
      price: "$29 - $99",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "High-quality icon sets and graphic elements for web and mobile projects."
          : "مجموعات أيقونات وعناصر رسومية عالية الجودة لمشاريع الويب والموبايل.",
    },
    {
      id: 6,
      name: lang === "en" ? "Custom Development" : "التطوير المخصص",
      category: "Services",
      price: lang === "en" ? "Custom Quote" : "عرض مخصص",
      image: "/placeholder.svg?height=300&width=400",
      description:
        lang === "en"
          ? "Tailored web and mobile development services to match your exact requirements."
          : "خدمات تطوير ويب وموبايل مخصصة لتتناسب مع متطلباتك بالضبط.",
    },
  ]

  return (
    <main>
      <LanguageSwitcher currentLang={lang} />

      <div className="products-page-container">
        <article className="products active" data-page="products">
          <header>
            <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{lang === "en" ? "Our Products & Services" : "منتجاتنا وخدماتنا"}</h2>
            <p className="products-subtitle">
              {lang === "en"
                ? "High-quality digital products and professional services to help grow your business."
                : "منتجات رقمية عالية الجودة وخدمات احترافية لمساعدة عملك على النمو."}
            </p>
          </header>

          <section className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <figure className="product-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} loading="lazy" />
                  <div className="product-overlay">
                    <Link href={`/${lang}/quote`} className="product-cta">
                      <IonIcon name="cart-outline" />
                      <span>{lang === "en" ? "Get Quote" : "احصل على عرض"}</span>
                    </Link>
                  </div>
                </figure>

                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <Link href={`/${lang}/quote`} className="product-link">
                      {lang === "en" ? "Learn More" : "معرفة المزيد"}
                      <IonIcon name="arrow-forward-outline" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className="products-cta-section">
            <h3 className="text-[var(--white-2)] capitalize text-lg">{lang === "en" ? "Need Something Custom?" : "هل تحتاج شيئًا مخصصًا؟"}</h3>
            <p>
              {lang === "en"
                ? "We offer fully customized solutions tailored to your specific needs. Contact us for a personalized quote."
                : "نقدم حلولاً مخصصة بالكامل لتلبية احتياجاتك المحددة. اتصل بنا للحصول على عرض سعر مخصص."}
            </p>
            <Link href={`/${lang}/quote`} className="form-btn" style={{ maxWidth: "300px", margin: "20px auto 0" }}>
              <IonIcon name="chatbubble-ellipses-outline" />
              <span>{dict.store.getQuote}</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
