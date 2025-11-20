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
      title: "store",
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
      formTitle: "نموذج التواصل",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
    },
  },
} as const

export type Dictionary = typeof dictionaries.en
