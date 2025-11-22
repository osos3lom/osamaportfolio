"use client"

import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface NavigationProps {
    lang: Locale
    activeTab: string
    setActiveTab: (tab: string) => void
}

export default function Navigation({ lang, activeTab, setActiveTab }: NavigationProps) {
    const dict = dictionaries[lang]

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {["about", "resume", "portfolio", "blog", "store"].map((tab) => (
                    <li key={tab} className="navbar-item">
                        <button
                            className={`navbar-link ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                            data-nav-link
                        >
                            {dict.nav[tab as keyof typeof dict.nav]}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
