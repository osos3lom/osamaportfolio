"use client"

import Link from "next/link"
import Image from "next/image"
import IonIcon from "@/components/IonIcon"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface StoreSectionProps {
    lang: Locale
}

export default function StoreSection({ lang }: StoreSectionProps) {
    const dict = dictionaries[lang]

    const products = [
        {
            id: 1,
            name: dict.store.digitalProducts.items[0],
            category: "Templates",
            price: "190 – 750 SAR",
            image: "/store/WebsiteTemplates.jpg",
            description:
                lang === "en"
                    ? "Professional, responsive website templates ready to customize for your business needs."
                    : "قوالب مواقع ويب احترافية ومستجيبة جاهزة للتخصيص حسب احتياجات عملك.",
        },
        {
            id: 2,
            name: dict.store.digitalProducts.items[1],
            category: "Design Kits",
            price: "300 – 1,150 SAR",
            image: "/store/UIUXDesignKits.jpg",
            description:
                lang === "en"
                    ? "Complete UI/UX design systems with components, patterns, and guidelines."
                    : "أنظمة تصميم UI/UX كاملة مع المكونات والأنماط والإرشادات.",
        },
        {
            id: 3,
            name: dict.store.digitalProducts.items[2],
            category: "Mobile Apps",
            price: "375 – 1,500 SAR",
            image: "/store/MobileAppTemplates.jpg",
            description:
                lang === "en"
                    ? "Modern mobile app templates for iOS and Android with clean code architecture."
                    : "قوالب تطبيقات موبايل حديثة لنظامي iOS و Android مع بنية كود نظيفة.",
        },
        {
            id: 4,
            name: dict.store.digitalProducts.items[3],
            category: "Branding",
            price: "560 – 1,850 SAR",
            image: "/store/BrandIdentityPackages.jpg",
            description:
                lang === "en"
                    ? "Complete brand identity packages including logo, colors, typography, and guidelines."
                    : "حزم هوية تجارية كاملة تشمل الشعار والألوان والطباعة والإرشادات.",
        },
        {
            id: 5,
            name: dict.store.digitalProducts.items[4],
            category: "Graphics",
            price: "110 – 375 SAR",
            image: "/store/IconSets&Graphics.jpg",
            description:
                lang === "en"
                    ? "High-quality icon sets and graphic elements for web and mobile projects."
                    : "مجموعات أيقونات وعناصر رسومية عالية الجودة لمشاريع الويب والموبايل.",
        },
        {
            id: 6,
            name: lang === "en" ? "Custom Development" : "التطوير المخصص",
            category: "Services",
            price: "120 – 200 SAR/hour",
            image: "/store/CustomDevelopment.jpg",
            description:
                lang === "en"
                    ? "Tailored web and mobile development services to match your exact requirements."
                    : "خدمات تطوير ويب وموبايل مخصصة لتتناسب مع متطلباتك بالضبط.",
        },
    ]

    return (
        <article className="store active" data-page="store">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.store.title}</h2>
            </header>

            <section className="store-cards">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-7.5 space-y-7.5">
                    {products.map((product) => (
                        <Card key={product.id} className="store-card break-inside-avoid mb-7.5 bg-transparent border-none shadow-none p-0">
                            <a href={`/${lang}/quote`} className="w-full block">
                                <figure className="w-full h-[200px] rounded-xl overflow-hidden relative">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        width={400}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-[var(--orange-yellow-crayola)] text-white p-2 rounded-full">
                                            <IonIcon name="cart-outline" />
                                        </div>
                                    </div>
                                </figure>
                                <CardContent className="p-4 pl-0">
                                    <p className="text-[var(--light-gray-70)] text-sm mb-1">{product.category}</p>
                                    <CardTitle className="text-[var(--white-2)] capitalize text-lg mb-2">{product.name}</CardTitle>
                                    <CardDescription className="text-[var(--light-gray)] text-sm line-clamp-2 mb-3">
                                        {product.description}
                                    </CardDescription>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-[var(--orange-yellow-crayola)] font-medium">{product.price}</span>
                                        <span className="text-[var(--light-gray-70)] text-sm flex items-center gap-1 group-hover:text-[var(--orange-yellow-crayola)]">
                                            {lang === "en" ? "Get Quote" : "احصل على عرض"}
                                            <IonIcon name="arrow-forward-outline" />
                                        </span>
                                    </div>
                                </CardContent>
                            </a>
                        </Card>
                    ))}
                </div>
            </section>
        </article>
    )
}
