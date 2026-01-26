export interface Service {
  id: string
  slug: string
  nameEn: string
  nameAr: string
  descEn: string
  descAr: string
  priceEn: string
  priceAr: string
  icon: string
}

export const services: Service[] = [
  {
    id: "website-templates",
    slug: "/website-templates",
    nameEn: "Website Templates",
    nameAr: "قوالب المواقع",
    descEn: "High-performance, SEO-ready templates for SaaS, AI tools, and modern web apps",
    descAr: "قوالب عالية الأداء وجاهزة لمحركات البحث لـ SaaS وأدوات الذكاء الاصطناعي وتطبيقات الويب الحديثة",
    priceEn: "190 – 750 SAR",
    priceAr: "190 – 750 ريال",
    icon: "Layout",
  },
  {
    id: "mobile-app-templates",
    slug: "/mobile-app-templates",
    nameEn: "Mobile App Templates",
    nameAr: "قوالب تطبيقات الجوال",
    descEn: "Ready-to-use mobile templates for React Native and Flutter",
    descAr: "قوالب جوال جاهزة للاستخدام لـ React Native وFlutter",
    priceEn: "375 – 1,500 SAR",
    priceAr: "375 – 1,500 ريال",
    icon: "Smartphone",
  },
  {
    id: "ui-ux-design-kits",
    slug: "/ui-ux-design-kits",
    nameEn: "UI/UX Design Kits",
    nameAr: "مجموعات تصميم UI/UX",
    descEn: "Complete design systems with Figma files and components",
    descAr: "أنظمة تصميم كاملة مع ملفات Figma ومكونات",
    priceEn: "300 – 1,150 SAR",
    priceAr: "300 – 1,150 ريال",
    icon: "Palette",
  },
  {
    id: "icon-sets",
    slug: "/icon-sets",
    nameEn: "Icon Sets & Graphics",
    nameAr: "مجموعات الأيقونات والرسومات",
    descEn: "Professional icon collections and graphic elements",
    descAr: "مجموعات أيقونات احترافية وعناصر رسومية",
    priceEn: "110 – 375 SAR",
    priceAr: "110 – 375 ريال",
    icon: "Sparkles",
  },
  {
    id: "brand-identity",
    slug: "/brand-identity",
    nameEn: "Brand Identity Packages",
    nameAr: "حزم الهوية التجارية",
    descEn: "Complete branding solutions with logo, colors, and guidelines",
    descAr: "حلول علامة تجارية كاملة مع الشعار والألوان والإرشادات",
    priceEn: "560 – 1,850 SAR",
    priceAr: "560 – 1,850 ريال",
    icon: "Star",
  },
]
