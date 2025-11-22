"use client"

import Link from "next/link"
import IonIcon from "@/components/IonIcon"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface StoreSectionProps {
    lang: Locale
}

export default function StoreSection({ lang }: StoreSectionProps) {
    const dict = dictionaries[lang]

    return (
        <article className="store active" data-page="store">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.store.title}</h2>
            </header>

            <section className="store-cards">
                <div className="store-cards-grid">
                    {/* Digital Products Card */}
                    <div className="store-card">
                        <div className="store-card-icon">
                            <IonIcon name="code-slash-outline" />
                        </div>
                        <h3 className="store-card-title">{dict.store.digitalProducts.title}</h3>
                        <p className="store-card-description">{dict.store.digitalProducts.description}</p>
                        <ul className="store-card-list">
                            {dict.store.digitalProducts.items.map((item: string, index: number) => (
                                <li key={index}>
                                    <IonIcon name="checkmark-circle-outline" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href={`/${lang}/products`} className="store-card-btn">
                            <IonIcon name="cart-outline" />
                            <span>{dict.store.viewProducts}</span>
                        </Link>
                    </div>

                    {/* Services Card */}
                    <div className="store-card">
                        <div className="store-card-icon">
                            <IonIcon name="briefcase-outline" />
                        </div>
                        <h3 className="store-card-title">{dict.store.services.title}</h3>
                        <p className="store-card-description">{dict.store.services.description}</p>
                        <ul className="store-card-list">
                            {dict.store.services.items.map((item: string, index: number) => (
                                <li key={index}>
                                    <IonIcon name="checkmark-circle-outline" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href={`/${lang}/quote`} className="store-card-btn">
                            <IonIcon name="call-outline" />
                            <span>{dict.store.getQuote}</span>
                        </Link>
                    </div>
                </div>
            </section>
        </article>
    )
}
