"use client"

import type React from "react"

import { useState } from "react"
import { useParams } from "next/navigation"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import LanguageSwitcher from "@/components/language-switcher"
import IonIcon from "@/components/IonIcon"

export default function QuotePage() {
  const params = useParams()
  const lang = params.lang as Locale
  const dict = dictionaries[lang]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
      })
    }, 1500)
  }

  return (
    <main>
      <LanguageSwitcher currentLang={lang} />

      <div className="quote-page-container">
        <article className="quote active" data-page="quote">
          <header>
            <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{lang === "en" ? "Get a Free Quote" : "احصل على عرض سعر مجاني"}</h2>
            <p className="quote-subtitle">
              {lang === "en"
                ? "Tell us about your project and we'll provide you with a detailed quote tailored to your needs."
                : "أخبرنا عن مشروعك وسنقدم لك عرض سعر مفصل يتناسب مع احتياجاتك."}
            </p>
          </header>

          <section className="quote-form-wrapper">
            {submitStatus === "success" && (
              <div className="quote-success-message">
                <IonIcon name="checkmark-circle-outline" />
                <p>
                  {lang === "en"
                    ? "Thank you! Your quote request has been submitted successfully. We'll get back to you within 24 hours."
                    : "شكرًا لك! تم إرسال طلب العرض بنجاح. سنعود إليك خلال 24 ساعة."}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {lang === "en" ? "Full Name" : "الاسم الكامل"} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder={lang === "en" ? "John Doe" : "محمد أحمد"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    {lang === "en" ? "Email Address" : "البريد الإلكتروني"} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder={lang === "en" ? "john@example.com" : "example@domain.com"}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {lang === "en" ? "Phone Number" : "رقم الهاتف"}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={lang === "en" ? "+1 (555) 123-4567" : "+966 XX XXX XXXX"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    {lang === "en" ? "Company Name" : "اسم الشركة"}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder={lang === "en" ? "Your Company" : "شركتك"}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    {lang === "en" ? "Service Required" : "الخدمة المطلوبة"} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">{lang === "en" ? "Select a service..." : "اختر خدمة..."}</option>
                    <option value="web-development">{lang === "en" ? "Web Development" : "تطوير الويب"}</option>
                    <option value="mobile-app">
                      {lang === "en" ? "Mobile App Development" : "تطوير تطبيقات الموبايل"}
                    </option>
                    <option value="ui-ux-design">{lang === "en" ? "UI/UX Design" : "تصميم UI/UX"}</option>
                    <option value="branding">
                      {lang === "en" ? "Branding & Identity" : "العلامة التجارية والهوية"}
                    </option>
                    <option value="template">{lang === "en" ? "Template/Theme Purchase" : "شراء قالب/ثيم"}</option>
                    <option value="consulting">{lang === "en" ? "Consulting" : "استشارات"}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    {lang === "en" ? "Budget Range" : "نطاق الميزانية"}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">{lang === "en" ? "Select budget..." : "اختر الميزانية..."}</option>
                    <option value="under-1000">{lang === "en" ? "Under $1,000" : "أقل من 1,000$"}</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="over-25000">{lang === "en" ? "Over $25,000" : "أكثر من 25,000$"}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="timeline" className="form-label">
                  {lang === "en" ? "Project Timeline" : "الجدول الزمني للمشروع"}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">{lang === "en" ? "Select timeline..." : "اختر الجدول الزمني..."}</option>
                  <option value="asap">{lang === "en" ? "ASAP (Within 2 weeks)" : "في أسرع وقت (خلال أسبوعين)"}</option>
                  <option value="1-month">{lang === "en" ? "1 Month" : "شهر واحد"}</option>
                  <option value="2-3-months">{lang === "en" ? "2-3 Months" : "2-3 أشهر"}</option>
                  <option value="3-6-months">{lang === "en" ? "3-6 Months" : "3-6 أشهر"}</option>
                  <option value="flexible">{lang === "en" ? "Flexible" : "مرن"}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">
                  {lang === "en" ? "Project Description" : "وصف المشروع"} *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  rows={6}
                  placeholder={
                    lang === "en"
                      ? "Tell us about your project, goals, and any specific requirements..."
                      : "أخبرنا عن مشروعك وأهدافك وأي متطلبات محددة..."
                  }
                />
              </div>

              <button type="submit" className="form-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <IonIcon name="hourglass-outline" />
                    <span>{lang === "en" ? "Sending..." : "جاري الإرسال..."}</span>
                  </>
                ) : (
                  <>
                    <IonIcon name="send-outline" />
                    <span>{lang === "en" ? "Submit Quote Request" : "إرسال طلب العرض"}</span>
                  </>
                )}
              </button>
            </form>

            <div className="quote-info">
              <div className="quote-info-card">
                <IonIcon name="time-outline" />
                <div>
                  <h4>{lang === "en" ? "Quick Response" : "استجابة سريعة"}</h4>
                  <p>{lang === "en" ? "We respond within 24 hours" : "نرد خلال 24 ساعة"}</p>
                </div>
              </div>
              <div className="quote-info-card">
                <IonIcon name="shield-checkmark-outline" />
                <div>
                  <h4>{lang === "en" ? "Free Consultation" : "استشارة مجانية"}</h4>
                  <p>{lang === "en" ? "No obligations or hidden fees" : "لا التزامات أو رسوم مخفية"}</p>
                </div>
              </div>
              <div className="quote-info-card">
                <IonIcon name="document-text-outline" />
                <div>
                  <h4>{lang === "en" ? "Detailed Proposal" : "اقتراح مفصل"}</h4>
                  <p>{lang === "en" ? "Clear breakdown of costs & timeline" : "تفصيل واضح للتكاليف والجدول الزمني"}</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
