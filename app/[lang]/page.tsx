"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getPortfolioData, type PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import LanguageSwitcher from "@/components/language-switcher"
import Sidebar from "@/components/Sidebar"
import Navigation from "@/components/Navigation"
import AboutSection from "@/components/AboutSection"
import ResumeSection from "@/components/ResumeSection"
import PortfolioSection from "@/components/PortfolioSection"
import BlogSection from "@/components/BlogSection"
import StoreSection from "@/components/StoreSection"

export default function Portfolio() {
  const params = useParams()
  const lang = params.lang as Locale
  const [activeTab, setActiveTab] = useState("about")
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarActive, setSidebarActive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    async function loadData() {
      try {
        const portfolioData = await getPortfolioData(lang)
        setData(portfolioData)
      } catch (error) {
        console.error("Error loading portfolio data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [lang])

  const formatDate = (dateString: string) => {
    if (!mounted) return dateString
    return new Date(dateString).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--smoky-black)] text-[var(--white-2)] text-[var(--fs-3)]">
        Loading portfolio...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[var(--smoky-black)] text-[var(--white-2)] text-[var(--fs-3)]">
        Failed to load portfolio data
      </div>
    )
  }

  return (
    <main>
      <LanguageSwitcher currentLang={lang} />

      <Sidebar
        data={data}
        lang={lang}
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
        formatDate={formatDate}
      />

      <div className="main-content">
        <Navigation lang={lang} activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "about" && <AboutSection data={data} lang={lang} />}
        {activeTab === "resume" && <ResumeSection data={data} lang={lang} />}
        {activeTab === "portfolio" && <PortfolioSection data={data} lang={lang} />}
        {activeTab === "blog" && <BlogSection data={data} lang={lang} formatDate={formatDate} />}
        {activeTab === "store" && <StoreSection lang={lang} />}
      </div>
    </main>
  )
}