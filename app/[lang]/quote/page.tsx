"use client"

import type React from "react"
import { useState } from "react"
import { useParams } from "next/navigation"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import LanguageSwitcher from "@/components/language-switcher"
import IonIcon from "@/components/IonIcon"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

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

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setTimeout(() => setSubmitStatus("idle"), 5000)
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
    <main
      className="bg-neutral-950 min-h-screen text-neutral-100 font-sans selection:bg-yellow-500/30 relative overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <LanguageSwitcher currentLang={lang} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* Header with Enhanced Typography */}
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6 backdrop-blur-sm">
            <IonIcon name="sparkles" className="text-yellow-500 text-lg" />
            <span className="text-sm font-medium text-yellow-500">
              {lang === "en" ? "Free Consultation" : "استشارة مجانية"}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
            {lang === "en" ? "Get a Free Quote" : "احصل على عرض سعر مجاني"}
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {lang === "en"
              ? "Tell us about your project and we'll provide a tailored proposal with pricing and timeline."
              : "أخبرنا عن مشروعك وسنقدم لك عرضًا مفصلًا بالتكاليف والجدول الزمني."}
          </p>
        </header>

        <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Section */}
          <div className="lg:col-span-7">
            {/* Success Message with Animation */}
            {submitStatus === "success" && (
              <Card className="mb-8 border-green-500/30 bg-green-500/10">
                <CardContent className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                  <div className="bg-green-500/20 p-3 rounded-full shrink-0 animate-bounce">
                    <IonIcon
                      name="checkmark-circle"
                      className="text-3xl text-green-400"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      {lang === "en" ? "Request Submitted!" : "تم إرسال الطلب!"}
                    </h3>
                    <p className="text-green-200/80 leading-relaxed">
                      {lang === "en"
                        ? "Thank you! Your request has been submitted. We'll contact you within 24 hours."
                        : "شكرًا لك! تم إرسال طلبك. سنقوم بالرد خلال 24 ساعة."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6 md:p-10 space-y-8 md:space-y-10">
                <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                  {/* Personal Information Section */}
                  <div className="space-y-8">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <IonIcon name="person" className="text-yellow-500" />
                      </div>
                      {lang === "en" ? "Personal Information" : "المعلومات الشخصية"}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name Field */}
                      <div className="space-y-2 group">
                        <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                          {lang === "en" ? "Full Name" : "الاسم الكامل"}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder={lang === "en" ? "John Doe" : "محمد أحمد"}
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-neutral-600 hover:border-neutral-700 hover:bg-neutral-950/70"
                          />
                          {focusedField === "name" && (
                            <div className="absolute inset-0 rounded-xl bg-yellow-500/5 pointer-events-none animate-pulse" />
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2 group">
                        <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                          {lang === "en" ? "Email" : "البريد الإلكتروني"}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder={lang === "en" ? "john@example.com" : "example@domain.com"}
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-neutral-600 hover:border-neutral-700 hover:bg-neutral-950/70"
                          />
                          {focusedField === "email" && (
                            <div className="absolute inset-0 rounded-xl bg-yellow-500/5 pointer-events-none animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Phone Field */}
                      <div className="space-y-2 group">
                        <label className="text-neutral-300 text-sm font-medium">
                          {lang === "en" ? "Phone Number" : "رقم الهاتف"}
                        </label>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder={lang === "en" ? "+1 (555) 123-4567" : "+966 XX XXX XXXX"}
                          className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-neutral-600 hover:border-neutral-700 hover:bg-neutral-950/70"
                        />
                      </div>

                      {/* Company Field */}
                      <div className="space-y-2 group">
                        <label className="text-neutral-300 text-sm font-medium">
                          {lang === "en" ? "Company Name" : "اسم الشركة"}
                        </label>
                        <input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder={lang === "en" ? "Your Company" : "شركتك"}
                          className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-neutral-600 hover:border-neutral-700 hover:bg-neutral-950/70"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-800/50" />
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="space-y-8">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <IonIcon name="briefcase" className="text-yellow-500" />
                      </div>
                      {lang === "en" ? "Project Details" : "تفاصيل المشروع"}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Service Field */}
                      <div className="space-y-2">
                        <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                          {lang === "en" ? "Service Required" : "الخدمة المطلوبة"}
                          <span className="text-yellow-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all appearance-none hover:border-neutral-700 cursor-pointer hover:bg-neutral-950/70"
                          >
                            <option value="">
                              {lang === "en" ? "Select a service..." : "اختر خدمة..."}
                            </option>
                            <option value="web-development">
                              {lang === "en" ? "Web Development" : "تطوير الويب"}
                            </option>
                            <option value="mobile-app">
                              {lang === "en" ? "Mobile App Development" : "تطوير تطبيقات الموبايل"}
                            </option>
                            <option value="ui-ux-design">
                              {lang === "en" ? "UI/UX Design" : "تصميم UI/UX"}
                            </option>
                            <option value="branding">
                              {lang === "en" ? "Branding & Identity" : "العلامة التجارية والهوية"}
                            </option>
                            <option value="template">
                              {lang === "en" ? "Template / Theme Purchase" : "شراء قالب / ثيم"}
                            </option>
                            <option value="consulting">
                              {lang === "en" ? "Consulting" : "استشارات"}
                            </option>
                          </select>
                          <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 ${lang === "ar" ? "left-5" : "right-5"}`}>
                            <IonIcon name="chevron-down" className="text-xl" />
                          </div>
                        </div>
                      </div>

                      {/* Budget Field */}
                      <div className="space-y-2">
                        <label className="text-neutral-300 text-sm font-medium">
                          {lang === "en" ? "Budget Range" : "نطاق الميزانية"}
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all appearance-none hover:border-neutral-700 cursor-pointer hover:bg-neutral-950/70"
                          >
                            <option value="">
                              {lang === "en" ? "Select budget..." : "اختر الميزانية..."}
                            </option>
                            <option value="under-1000">
                              {lang === "en" ? "Under $1,000" : "أقل من 1,000$"}
                            </option>
                            <option value="1000-5000">$1,000 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000-25000">$10,000 - $25,000</option>
                            <option value="over-25000">
                              {lang === "en" ? "Over $25,000" : "أكثر من 25,000$"}
                            </option>
                          </select>
                          <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 ${lang === "ar" ? "left-5" : "right-5"}`}>
                            <IonIcon name="chevron-down" className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Field */}
                    <div className="space-y-2">
                      <label className="text-neutral-300 text-sm font-medium">
                        {lang === "en" ? "Project Timeline" : "الجدول الزمني"}
                      </label>
                      <div className="relative">
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl h-14 px-5 text-base focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all appearance-none hover:border-neutral-700 cursor-pointer hover:bg-neutral-950/70"
                        >
                          <option value="">
                            {lang === "en" ? "Select timeline..." : "اختر الجدول الزمني..."}
                          </option>
                          <option value="asap">
                            {lang === "en" ? "ASAP (Within 2 weeks)" : "عاجل (خلال أسبوعين)"}
                          </option>
                          <option value="1-month">{lang === "en" ? "1 Month" : "شهر واحد"}</option>
                          <option value="2-3-months">
                            {lang === "en" ? "2–3 Months" : "2–3 أشهر"}
                          </option>
                          <option value="3-6-months">
                            {lang === "en" ? "3–6 Months" : "3–6 أشهر"}
                          </option>
                          <option value="flexible">
                            {lang === "en" ? "Flexible" : "مرن"}
                          </option>
                        </select>
                        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 ${lang === "ar" ? "left-5" : "right-5"}`}>
                          <IonIcon name="chevron-down" className="text-xl" />
                        </div>
                      </div>
                    </div>

                    {/* Description Field */}
                    <div className="space-y-2">
                      <label className="text-neutral-300 text-sm font-medium flex items-center gap-2">
                        {lang === "en" ? "Project Description" : "وصف المشروع"}
                        <span className="text-yellow-500">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          required
                          rows={6}
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("description")}
                          onBlur={() => setFocusedField(null)}
                          placeholder={
                            lang === "en"
                              ? "Tell us about your project, goals, and requirements..."
                              : "أخبرنا عن مشروعك وأهدافك وأي متطلبات..."
                          }
                          className="w-full bg-neutral-950/50 border border-neutral-800 rounded-xl p-5 text-base min-h-[180px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all placeholder:text-neutral-600 hover:border-neutral-700 resize-y hover:bg-neutral-950/70"
                        />
                        {focusedField === "description" && (
                          <div className="absolute inset-0 rounded-xl bg-yellow-500/5 pointer-events-none animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed text-neutral-950 font-bold text-lg h-16 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-yellow-500/20 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    {isSubmitting ? (
                      <>
                        <IonIcon name="hourglass" className="text-2xl animate-spin" />
                        {lang === "en" ? "Sending..." : "جاري الإرسال..."}
                      </>
                    ) : (
                      <>
                        <IonIcon name="send" className="text-2xl group-hover:translate-x-1 transition-transform" />
                        {lang === "en" ? "Submit Quote Request" : "إرسال الطلب"}
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-center text-neutral-500 text-sm">
                    {lang === "en"
                      ? "Your information is secure and will never be shared with third parties."
                      : "معلوماتك آمنة ولن يتم مشاركتها مع أطراف ثالثة."}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards - Enhanced */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Card 1 */}
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-neutral-950/50 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-yellow-500/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <IonIcon name="time" className="text-3xl text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {lang === "en" ? "Quick Response" : "استجابة سريعة"}
                    </CardTitle>
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "We value your time. Expect a response within 24 hours."
                        : "نحن نقدر وقتك. توقع ردًا خلال 24 ساعة."}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-neutral-950/50 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-yellow-500/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <IonIcon name="shield-checkmark" className="text-3xl text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {lang === "en" ? "Free Consultation" : "استشارة مجانية"}
                    </CardTitle>
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "Discuss your project with us. No commitments and no hidden fees."
                        : "ناقش مشروعك معنا. بدون التزامات أو رسوم مخفية."}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-neutral-900/50 border-neutral-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-neutral-950/50 rounded-xl flex items-center justify-center border border-neutral-800 group-hover:border-yellow-500/30 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <IonIcon name="document-text" className="text-3xl text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {lang === "en" ? "Detailed Proposal" : "عرض مفصل"}
                    </CardTitle>
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "Receive a comprehensive breakdown of pricing, timeline, and scope."
                        : "احصل على تفصيل شامل للتكاليف والجدول الزمني والنطاق."}
                    </CardDescription>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-neutral-900/50 border-neutral-800">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <IonIcon name="star" className="text-yellow-500" />
                  {lang === "en" ? "Why Choose Us?" : "لماذا تختارنا؟"}
                </h4>
                <ul className="space-y-3">
                  {[
                    { icon: "checkmark-circle", text: lang === "en" ? "100+ Projects Delivered" : "أكثر من 100 مشروع منجز" },
                    { icon: "checkmark-circle", text: lang === "en" ? "5-Star Client Reviews" : "تقييمات 5 نجوم من العملاء" },
                    { icon: "checkmark-circle", text: lang === "en" ? "Expert Team" : "فريق خبراء" },
                    { icon: "checkmark-circle", text: lang === "en" ? "On-Time Delivery" : "تسليم في الوقت المحدد" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-300">
                      <IonIcon name={item.icon} className="text-green-500 text-xl shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}