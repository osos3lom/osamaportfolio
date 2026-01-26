export interface Product {
  id: string
  serviceId: string
  image: string
  nameEn: string
  nameAr: string
  descEn: string
  descAr: string
  priceEn: string
  priceAr: string
  slug: string
}

export const products: Product[] = [
  // Website Templates
  {
    id: "saas-landing-page",
    serviceId: "website-templates",
    image: "/modern-dark-themed-saas-landing-page-with-hero-sec.jpg",
    nameEn: "SaaS Landing Page Template",
    nameAr: "قالب صفحة هبوط SaaS",
    descEn: "High-converting landing page optimized for SaaS products with CTAs and feature sections",
    descAr: "صفحة هبوط عالية التحويل محسّنة لمنتجات SaaS مع أزرار دعوة للعمل وأقسام الميزات",
    priceEn: "190 – 450 SAR",
    priceAr: "190 – 450 ريال",
    slug: "saas-landing-page",
  },
  {
    id: "ai-tool-marketing",
    serviceId: "website-templates",
    image: "/dark-ai-tool-dashboard-interface-with-neural-netwo.jpg",
    nameEn: "AI Tool Marketing Website",
    nameAr: "موقع تسويق أداة الذكاء الاصطناعي",
    descEn: "Modern website template designed specifically for AI tools and machine learning platforms",
    descAr: "قالب موقع حديث مصمم خصيصًا لأدوات الذكاء الاصطناعي ومنصات التعلم الآلي",
    priceEn: "290 – 650 SAR",
    priceAr: "290 – 650 ريال",
    slug: "ai-tool-marketing",
  },
  {
    id: "corporate-business",
    serviceId: "website-templates",
    image: "/dark-professional-corporate-business-website-with-.jpg",
    nameEn: "Corporate Business Website",
    nameAr: "موقع الأعمال المؤسسية",
    descEn: "Professional enterprise website with multi-page structure and advanced features",
    descAr: "موقع مؤسسي احترافي ببنية متعددة الصفحات وميزات متقدمة",
    priceEn: "350 – 750 SAR",
    priceAr: "350 – 750 ريال",
    slug: "corporate-business",
  },
  // Mobile App Templates
  {
    id: "ai-dashboard-app",
    serviceId: "mobile-app-templates",
    image: "/dark-themed-ai-dashboard-mobile-app-with-data-visu.jpg",
    nameEn: "AI Dashboard Mobile App",
    nameAr: "تطبيق لوحة تحكم الذكاء الاصطناعي",
    descEn: "Complete AI dashboard with data visualization, analytics, and real-time insights",
    descAr: "لوحة تحكم ذكاء اصطناعي كاملة مع تصور البيانات والتحليلات والرؤى في الوقت الفعلي",
    priceEn: "490 – 1,200 SAR",
    priceAr: "490 – 1,200 ريال",
    slug: "ai-dashboard-app",
  },
  {
    id: "fintech-banking-app",
    serviceId: "mobile-app-templates",
    image: "/dark-fintech-banking-mobile-app-interface-with-car.jpg",
    nameEn: "Fintech Banking App",
    nameAr: "تطبيق بنكي للتكنولوجيا المالية",
    descEn: "Full-featured banking app with secure transactions, cards management, and payments",
    descAr: "تطبيق بنكي كامل الميزات مع معاملات آمنة وإدارة البطاقات والمدفوعات",
    priceEn: "690 – 1,500 SAR",
    priceAr: "690 – 1,500 ريال",
    slug: "fintech-banking-app",
  },
  {
    id: "productivity-task-app",
    serviceId: "mobile-app-templates",
    image: "/dark-productivity-task-management-mobile-app-with-.jpg",
    nameEn: "Productivity & Task Management",
    nameAr: "الإنتاجية وإدارة المهام",
    descEn: "Task management app with projects, reminders, and team collaboration features",
    descAr: "تطبيق إدارة المهام مع المشاريع والتذكيرات وميزات التعاون الجماعي",
    priceEn: "375 – 950 SAR",
    priceAr: "375 – 950 ريال",
    slug: "productivity-task-app",
  },
  // UI/UX Design Kits
  {
    id: "modern-saas-kit",
    serviceId: "ui-ux-design-kits",
    image: "/dark-modern-saas-ui-kit-figma-components-design-sy.jpg",
    nameEn: "Modern SaaS UI Kit",
    nameAr: "مجموعة واجهة SaaS الحديثة",
    descEn: "Complete SaaS UI kit with 200+ components, design system, and Figma files",
    descAr: "مجموعة واجهة SaaS كاملة مع أكثر من 200 مكون ونظام تصميم وملفات Figma",
    priceEn: "380 – 850 SAR",
    priceAr: "380 – 850 ريال",
    slug: "modern-saas-kit",
  },
  {
    id: "ai-interface-kit",
    serviceId: "ui-ux-design-kits",
    image: "/dark-ai-interface-design-system-dashboard-componen.jpg",
    nameEn: "AI Interface Design System",
    nameAr: "نظام تصميم واجهة الذكاء الاصطناعي",
    descEn: "Specialized design system for AI products with data viz components and dashboards",
    descAr: "نظام تصميم متخصص لمنتجات الذكاء الاصطناعي مع مكونات تصور البيانات ولوحات التحكم",
    priceEn: "450 – 1,150 SAR",
    priceAr: "450 – 1,150 ريال",
    slug: "ai-interface-kit",
  },
  {
    id: "mobile-app-kit",
    serviceId: "ui-ux-design-kits",
    image: "/dark-mobile-app-ui-kit-screens-components-figma-de.jpg",
    nameEn: "Mobile App UI Kit",
    nameAr: "مجموعة واجهة تطبيقات الجوال",
    descEn: "Mobile-first design kit with 100+ screens for iOS and Android applications",
    descAr: "مجموعة تصميم للجوال أولاً مع أكثر من 100 شاشة لتطبيقات iOS وAndroid",
    priceEn: "300 – 780 SAR",
    priceAr: "300 – 780 ريال",
    slug: "mobile-app-kit",
  },
  // Icon Sets
  {
    id: "ai-saas-icons",
    serviceId: "icon-sets",
    image: "/dark-themed-ai-saas-icon-set-grid-modern-minimal-i.jpg",
    nameEn: "AI & SaaS Icon Set",
    nameAr: "مجموعة أيقونات الذكاء الاصطناعي وSaaS",
    descEn: "500+ modern icons for AI, SaaS, and tech products in SVG format",
    descAr: "أكثر من 500 أيقونة حديثة للذكاء الاصطناعي وSaaS والمنتجات التقنية بصيغة SVG",
    priceEn: "150 – 290 SAR",
    priceAr: "150 – 290 ريال",
    slug: "ai-saas-icons",
  },
  {
    id: "minimal-interface-icons",
    serviceId: "icon-sets",
    image: "/dark-minimal-interface-icons-grid-clean-outline-ui-.jpg",
    nameEn: "Minimal Interface Icons",
    nameAr: "أيقونات الواجهة البسيطة",
    descEn: "Clean, minimal icon collection for modern interfaces and applications",
    descAr: "مجموعة أيقونات نظيفة وبسيطة للواجهات والتطبيقات الحديثة",
    priceEn: "110 – 220 SAR",
    priceAr: "110 – 220 ريال",
    slug: "minimal-interface-icons",
  },
  {
    id: "ui-graphic-elements",
    serviceId: "icon-sets",
    image: "/dark-ui-graphic-elements-collection-icons-shapes-gr.jpg",
    nameEn: "UI Graphic Elements Pack",
    nameAr: "حزمة العناصر الرسومية للواجهة",
    descEn: "Complete collection of UI elements, shapes, patterns, and illustrations",
    descAr: "مجموعة كاملة من عناصر الواجهة والأشكال والأنماط والرسوم التوضيحية",
    priceEn: "185 – 375 SAR",
    priceAr: "185 – 375 ريال",
    slug: "ui-graphic-elements",
  },
  // Brand Identity
  {
    id: "ai-startup-brand",
    serviceId: "brand-identity",
    image: "/dark-ai-startup-brand-kit-logo-design-modern-tech-f.jpg",
    nameEn: "AI Startup Brand Kit",
    nameAr: "مجموعة علامة شركة الذكاء الاصطناعي الناشئة",
    descEn: "Complete branding package for AI startups with logo, colors, typography, and assets",
    descAr: "حزمة علامة تجارية كاملة للشركات الناشئة في الذكاء الاصطناعي مع الشعار والألوان والطباعة والأصول",
    priceEn: "750 – 1,450 SAR",
    priceAr: "750 – 1,450 ريال",
    slug: "ai-startup-brand",
  },
  {
    id: "saas-brand-identity",
    serviceId: "brand-identity",
    image: "/dark-saas-brand-identity-system-logo-typography-col.jpg",
    nameEn: "SaaS Brand Identity System",
    nameAr: "نظام هوية علامة SaaS",
    descEn: "Professional brand identity for SaaS companies with comprehensive guidelines",
    descAr: "هوية علامة تجارية احترافية لشركات SaaS مع إرشادات شاملة",
    priceEn: "680 – 1,350 SAR",
    priceAr: "680 – 1,350 ريال",
    slug: "saas-brand-identity",
  },
  {
    id: "premium-digital-brand",
    serviceId: "brand-identity",
    image: "/dark-premium-digital-brand-package-luxury-tech-bran.jpg",
    nameEn: "Premium Digital Brand Package",
    nameAr: "حزمة العلامة التجارية الرقمية الفاخرة",
    descEn: "Luxury brand package for high-end digital products and tech companies",
    descAr: "حزمة علامة تجارية فاخرة للمنتجات الرقمية الراقية والشركات التقنية",
    priceEn: "950 – 1,850 SAR",
    priceAr: "950 – 1,850 ريال",
    slug: "premium-digital-brand",
  },
]

export function getProductsByService(serviceId: string): Product[] {
  return products.filter((p) => p.serviceId === serviceId)
}

export function getProductById(productId: string): Product | undefined {
  return products.find((p) => p.id === productId || p.slug === productId)
}
