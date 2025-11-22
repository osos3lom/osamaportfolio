export const dictionaries = {
  en: {
    nav: {
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      blog: "Blog",
      store: "store",
    },
    sidebar: {
      showContacts: "Show Contacts",
      hideContacts: "Hide Contacts",
      email: "Email",
      phone: "Phone",
      birthday: "Birthday",
      location: "Location",
    },
    about: {
      title: "About me",
      servicesTitle: "What I'm doing",
    },
    testimonials: {
      title: "Testimonials",
    },
    resume: {
      title: "Resume",
      education: "Education",
      experience: "Experience",
      present: "Present",
      skills: "My skills",
    },
    portfolio: {
      title: "Portfolio",
    },
    blog: {
      title: "Blog",
    },
    store: {
      title: "Store",
      viewProducts: "View Products",
      getQuote: "Get Quote",
      digitalProducts: {
        title: "Digital Products",
        description: "Premium digital solutions and templates for your business needs.",
        items: [
          "Website Templates",
          "UI/UX Design Kits",
          "Mobile App Templates",
          "Brand Identity Packages",
          "Icon Sets & Graphics",
        ],
      },
      services: {
        title: "Professional Services",
        description: "Custom development and design services tailored to your requirements.",
        items: [
          "Custom Web Development",
          "Mobile App Development",
          "UI/UX Design",
          "Brand Strategy & Design",
          "Consulting & Training",
        ],
      },
    },
  },
  ar: {
    nav: {
      about: "نبذة",
      resume: "السيرة الذاتية",
      portfolio: "الأعمال",
      blog: "المدونة",
      store: "المتجر",
    },
    sidebar: {
      showContacts: "إظهار جهات الاتصال",
      hideContacts: "إخفاء جهات الاتصال",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      birthday: "تاريخ الميلاد",
      location: "الموقع",
    },
    about: {
      title: "نبذة عني",
      servicesTitle: "ما أقدمه",
    },
    testimonials: {
      title: "آراء العملاء",
    },
    resume: {
      title: "السيرة الذاتية",
      education: "التعليم",
      experience: "الخبرة",
      present: "الحاضر",
      skills: "مهاراتي",
    },
    portfolio: {
      title: "معرض الأعمال",
    },
    blog: {
      title: "المدونة",
    },
    store: {
      title: "المتجر",
      viewProducts: "عرض المنتجات",
      getQuote: "احصل على عرض سعر",
      digitalProducts: {
        title: "المنتجات الرقمية",
        description: "حلول رقمية وقوالب مميزة لاحتياجات عملك.",
        items: [
          "قوالب مواقع الويب",
          "أدوات تصميم UI/UX",
          "قوالب تطبيقات الموبايل",
          "حزم الهوية التجارية",
          "مجموعات الأيقونات والرسوميات",
        ],
      },
      services: {
        title: "الخدمات الاحترافية",
        description: "خدمات تطوير وتصميم مخصصة وفقًا لمتطلباتك.",
        items: [
          "تطوير مواقع ويب مخصصة",
          "تطوير تطبيقات الموبايل",
          "تصميم UI/UX",
          "استراتيجية وتصميم العلامة التجارية",
          "الاستشارات والتدريب",
        ],
      },
    },
  },
} as const

export type Dictionary = typeof dictionaries.en
