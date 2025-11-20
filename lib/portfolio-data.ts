// Types
export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  dateOfBirth: string
  location: string
  avatar: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export interface AboutSection {
  content: string
  highlights: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  content: string
  avatar: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate: string
  description?: string
}

export interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string
  currentJob: boolean
  description?: string
}

export interface Skill {
  id: string
  name: string
  percentage: number
}

export interface PortfolioProject {
  id: string
  title: string
  category: string
  image: string
  projectUrl?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  featuredImage: string
  createdAt: string
  published: boolean
}

export interface PortfolioData {
  personalInfo: PersonalInfo
  aboutSection: AboutSection
  services: Service[]
  testimonials: Testimonial[]
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  portfolioProjects: PortfolioProject[]
  blogPosts: BlogPost[]
}

export interface AboutData {
  title?: string
  content: string
  highlights: string[]
}

// Static portfolio data
const portfolioDataEn: PortfolioData = {
  personalInfo: {
    name: "Osama Alam",
    title: "Web Designer & Developer",
    email: "Osama.aalam@gmail.com",
    phone: "+966 (54) 690-6905",
    dateOfBirth: "1996-11-06",
    location: "Jeddah, Makkah, KSA",
    avatar: "/avatars/my-avatar.png",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  aboutSection: {
    content:
      "I'm a Creative Director, UI/UX Designer, and Programmer from Makkah, Saudi Arabia, specializing in web development and print media. I enjoy transforming complex ideas into simple, beautiful, and intuitive digital experiences. My work combines creative design with clean, efficient code, ensuring every website I build is both functional and visually striking. I add a personal touch to every project, making products that are eye-catching, user-friendly, and true to each brand's identity. My goal is to communicate your message creatively and bring your vision to life through design and technology",
    highlights: [
      "Passionate about creating beautiful and functional designs",
      "Expert in modern web technologies and frameworks",
      "Strong focus on user experience and accessibility",
      "Committed to delivering high-quality work on time",
    ],
  },
  services: [
    {
      id: "1",
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level.",
      icon: "/icons/web-design.svg", // Updated to use custom golden icon
    },
    {
      id: "2",
      title: "Web Development",
      description: "High-quality development of sites at the professional level.",
      icon: "/icons/web-development.svg", // Updated to use custom golden icon
    },
    {
      id: "3",
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android.",
      icon: "/icons/mobile-apps.svg", // Updated to use custom golden icon
    },
    {
      id: "4",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level.",
      icon: "/icons/photography.svg", // Updated to use custom golden icon
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Meshai Alzaidi",
      content:
        "Osama partnered with us to design and develop an advanced equestrian ERP system and mobile app. We were truly impressed by his vision, creativity, and deep understanding of both technology and the equine industry. His ability to translate complex operational needs into a seamless, user-friendly platform exceeded our expectations. Osama's dedication, professionalism, and innovative mindset made him an invaluable partner in bringing this project to life.",
      avatar: "/avatars/meshai.png", // Updated to use Meshai's avatar
    },
    {
      id: "2",
      name: "Naif Al-Zaidi",
      content:
        "Working with Osama on the Alzaidi Group website was an exceptional experience. He quickly understood our brand's vision and transformed it into a clean, elegant, and highly functional online presence. His attention to detail, design sense, and technical expertise stood out throughout the project. Osama delivered a website that truly reflects our company's identity and values — we couldn't be more satisfied with the result.",
      avatar: "/avatars/naif.png",
    },
    {
      id: "3",
      name: "Hisham Albloshi",
      content:
        "Osama did an outstanding job developing the Spice Road Store and Albloshi Food Group websites. His creativity, technical precision, and deep understanding of brand identity made both projects a success. He delivered modern, fast, and visually captivating platforms that perfectly reflect each brand's essence. Osama was professional, responsive, and committed to quality at every stage — a true partner who turns ideas into reality",
      avatar: "/avatars/hesham.png",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Science in Physics",
      institution: "University of Maryland, College Park",
      startDate: "2015",
      endDate: "2018",
      description: "Focused on research and development.",
    },
  ],
  experience: [
    {
      id: "1",
      position: "Creative Director",
      company: "Dareer Advertising Agancy",
      startDate: "2025",
      endDate: "Present",
      currentJob: true,
      description:
        "Leading creative projects and managing design teams. Responsible for overall creative direction and client relationships.",
    },
    {
      id: "2",
      position: "Senior Web Development",
      company: "Freelancing",
      startDate: "2020",
      endDate: "Present",
      currentJob: false,
      description: "Designed and developed responsive websites for various clients across different industries.",
    },
    {
      id: "3",
      position: "CTO",
      company: "Fursan Hub",
      startDate: "2022",
      endDate: "2024",
      currentJob: false,
      description: "Worked with small businesses to create their online presence through custom website designs.",
    },
  ],
  skills: [
    { id: "1", name: "Web Design", percentage: 80 },
    { id: "2", name: "Graphic Design", percentage: 70 },
    { id: "3", name: "Branding", percentage: 90 },
    { id: "4", name: "Coding", percentage: 100 },
  ],
  portfolioProjects: [
    {
      id: "1",
      title: "Masar Commercial Avenue",
      category: "Web Development",
      image: "/projects/masar-avenue.png", // Updated to use real Masar Avenue screenshot
      projectUrl: "https://www.masaravenue.com/",
    },
    {
      id: "2",
      title: "Alzaidy Concrete Factory",
      category: "Web Development",
      image: "/projects/alzaidy-concrete.jpg", // Updated to use real Alzaidy website screenshot
      projectUrl: "https://alzaidy.sa/",
    },
    {
      id: "3",
      title: "Albloshi Food Group",
      category: "Web Development",
      image: "/projects/albloshi-food.png", // Updated to use real Albloshi website screenshot
      projectUrl: "https://www.albloshifoodgroup.com/",
    },
    {
      id: "4",
      title: "Spice Road Store",
      category: "E-Commerce",
      image: "/projects/spice-road.jpg", // Updated to use real Spice Road website screenshot
      projectUrl: "https://spice-road.com/",
    },
    {
      id: "5",
      title: "Fursan Hub",
      category: "Mobile Apps & Web Development",
      image: "/projects/fursan-hub.png", // Updated to use real Fursan Hub mobile app screenshots
      projectUrl: "https://fursanhub.com/",
    },
    {
      id: "6",
      title: "FOM Real Estate",
      category: "Web Development",
      image: "/projects/fom-realestate.png", // Updated to use real FOM Real Estate screenshot
      projectUrl: "https://www.fomrealestate.com.sa/",
    },
  ],
  blogPosts: [
    {
      id: "1",
      title: "Winning 170,000 SAR in IoT Innovation Competition",
      excerpt:
        "Celebrating a major milestone in my career - winning first place and 170,000 SAR in the prestigious IoT Things Challenge 2023 with Fursan Hub, an innovative equestrian management solution that combines hardware and software excellence.",
      category: "Achievement",
      featuredImage: "/blog/iot-competition-win.jpg", // Updated to use real competition photo
      createdAt: "2023-05-15",
      published: true,
    },
    {
      id: "2",
      title: "Industrial Hackathon: Building a Hydrogen Electrolyzer Dashboard",
      excerpt:
        "My experience participating in the Industrial Hackathon where I developed a comprehensive IoT dashboard for monitoring and controlling hydrogen electrolyzer systems in real-time, showcasing the power of modern web technologies in industrial applications.",
      category: "Technology",
      featuredImage: "/blog/hydrogen-dashboard.jpg", // Updated to use real hackathon logo
      createdAt: "2023-08-22",
      published: true,
    },
    {
      id: "3",
      title: "Fursan Hub: Revolutionizing Equestrian Management",
      excerpt:
        "Building a comprehensive equestrian management system that transforms how horse owners, trainers, and businesses manage their operations. From mobile apps to web platforms, Fursan Hub brings the equine industry into the digital age.",
      category: "Mobile Apps",
      featuredImage: "/blog/fursan-hub-app.png", // Updated to use equestrian app screenshots
      createdAt: "2024-06-10",
      published: true,
    },
  ],
}

// Arabic version of portfolio data
const portfolioDataAr: PortfolioData = {
  personalInfo: {
    name: "أسامة عالم",
    title: "مصمم ومطور ويب",
    email: "Osama.aalam@gmail.com",
    phone: "+966 (54) 690-6905",
    dateOfBirth: "1996-11-06",
    location: "جدة، مكة المكرمة، المملكة العربية السعودية",
    avatar: "/avatars/my-avatar.png",
    socialLinks: {
      github: "https://github.com/osos3lom",
      linkedin: "https://www.linkedin.com/in/osama-alam-ab424127a",
      twitter: "https://x.com/osama3alm",
      instagram: "https://instagram.com",
    },
  },
  aboutSection: {
    content:
      "أنا مدير إبداعي ومصمم UI/UX ومبرمج من مكة المكرمة، المملكة العربية السعودية، متخصص في تطوير الويب والإعلام المطبوع. أستمتع بتحويل الأفكار المعقدة إلى تجارب رقمية بسيطة وجميلة وبديهية. يجمع عملي بين التصميم الإبداعي والكود النظيف والفعال، مما يضمن أن كل موقع ويب أقوم ببنائه يكون عمليًا وجذابًا بصريًا. أضيف لمسة شخصية لكل مشروع، وأصنع منتجات ملفتة للنظر وسهلة الاستخدام وتعكس هوية كل علامة تجارية. هدفي هو التواصل برسالتك بشكل إبداعي وإحياء رؤيتك من خلال التصميم والتكنولوجيا",
    highlights: [
      "شغوف بإنشاء تصاميم جميلة وعملية",
      "خبير في تقنيات وأطر عمل الويب الحديثة",
      "تركيز قوي على تجربة المستخدم وإمكانية الوصول",
      "ملتزم بتقديم عمل عالي الجودة في الوقت المحدد",
    ],
  },
  services: [
    {
      id: "1",
      title: "تصميم المواقع",
      description: "تصميم حديث وعالي الجودة على مستوى احترافي.",
      icon: "/icons/web-design.svg",
    },
    {
      id: "2",
      title: "تطوير المواقع",
      description: "تطوير عالي الجودة للمواقع على المستوى الاحترافي.",
      icon: "/icons/web-development.svg",
    },
    {
      id: "3",
      title: "تطبيقات الموبايل",
      description: "تطوير احترافي لتطبيقات iOS و Android.",
      icon: "/icons/mobile-apps.svg",
    },
    {
      id: "4",
      title: "التصوير الفوتوغرافي",
      description: "أقوم بالتصوير الفوتوغرافي عالي الجودة لأي فئة على مستوى احترافي.",
      icon: "/icons/photography.svg",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "مشاري الزايدي",
      content:
        "تعاون أسامة معنا في تصميم وتطوير نظام ERP متقدم للفروسية وتطبيق للهاتف المحمول. لقد أعجبنا حقًا برؤيته وإبداعه وفهمه العميق لكل من التكنولوجيا وصناعة الخيول. قدرته على ترجمة الاحتياجات التشغيلية المعقدة إلى منصة سلسة وسهلة الاستخدام تجاوزت توقعاتنا. إن تفاني أسامة واحترافيته وعقليته المبتكرة جعلته شريكًا لا يقدر بثمن في إحياء هذا المشروع.",
      avatar: "/avatars/meshai.png",
    },
    {
      id: "2",
      name: "نايف الزايدي",
      content:
        "كان العمل مع أسامة على موقع مجموعة الزايدي تجربة استثنائية. لقد فهم بسرعة رؤية علامتنا التجارية وحولها إلى حضور نظيف وأنيق وعملي على الإنترنت. برز اهتمامه بالتفاصيل وحس التصميم والخبرة الفنية طوال المشروع. قدم أسامة موقعًا يعكس حقًا هوية وقيم شركتنا - لا يمكننا أن نكون أكثر رضا عن النتيجة.",
      avatar: "/avatars/naif.png",
    },
    {
      id: "3",
      name: "هشام البلوشي",
      content:
        "قام أسامة بعمل رائع في تطوير متجر طريق التوابل ومواقع مجموعة البلوشي الغذائية. إبداعه ودقته التقنية وفهمه العميق لهوية العلامة التجارية جعلا كلا المشروعين ناجحين. قدم منصات حديثة وسريعة وجذابة بصريًا تعكس تمامًا جوهر كل علامة تجارية. كان أسامة محترفًا ومستجيبًا وملتزمًا بالجودة في كل مرحلة - شريك حقيقي يحول الأفكار إلى واقع",
      avatar: "/avatars/hesham.png",
    },
  ],
  education: [
    {
      id: "1",
      degree: "بكالوريوس علوم في الفيزياء",
      institution: "جامعة ماريلاند، كوليدج بارك",
      startDate: "٢٠١٥",
      endDate: "٢٠١٨",
      description: "التركيز على البحث والتطوير.",
    },
  ],
  experience: [
    {
      id: "1",
      position: "مدير إبداعي",
      company: "وكالة دارير للإعلان",
      startDate: "٢٠٢٥",
      endDate: "الحالي",
      currentJob: true,
      description: "قيادة المشاريع الإبداعية وإدارة فرق التصميم. مسؤول عن التوجيه الإبداعي الشامل وعلاقات العملاء.",
    },
    {
      id: "2",
      position: "مطور ويب أول",
      company: "العمل الحر",
      startDate: "٢٠٢٠",
      endDate: "الحالي",
      currentJob: true,
      description: "تصميم وتطوير مواقع ويب متجاوبة لمختلف العملاء عبر صناعات مختلفة.",
    },
    {
      id: "3",
      position: "مدير التقنية",
      company: "فرسان هاب",
      startDate: "٢٠٢٢",
      endDate: "٢٠٢٤",
      currentJob: false,
      description: "العمل مع الشركات الصغيرة لإنشاء وجودها على الإنترنت من خلال تصميمات مواقع مخصصة.",
    },
  ],
  skills: [
    { id: "1", name: "تصميم الويب", percentage: 80 },
    { id: "2", name: "التصميم الجرافيكي", percentage: 70 },
    { id: "3", name: "العلامة التجارية", percentage: 90 },
    { id: "4", name: "البرمجة", percentage: 100 },
  ],
  portfolioProjects: [
    {
      id: "1",
      title: "جادة مسار التجارية",
      category: "تطوير مواقع",
      image: "/projects/masar-avenue.png",
      projectUrl: "https://www.masaravenue.com/",
    },
    {
      id: "2",
      title: "مصنع الزايدي للخرسانة",
      category: "تطوير مواقع",
      image: "/projects/alzaidy-concrete.jpg",
      projectUrl: "https://alzaidy.sa/",
    },
    {
      id: "3",
      title: "مجموعة البلوشي الغذائية",
      category: "تطوير مواقع",
      image: "/projects/albloshi-food.png",
      projectUrl: "https://www.albloshifoodgroup.com/",
    },
    {
      id: "4",
      title: "متجر طريق التوابل",
      category: "التجارة الإلكترونية",
      image: "/projects/spice-road.jpg",
      projectUrl: "https://spice-road.com/",
    },
    {
      id: "5",
      title: "فرسان هاب",
      category: "تطبيقات الموبايل وتطوير المواقع",
      image: "/projects/fursan-hub.png",
      projectUrl: "https://fursanhub.com/",
    },
    {
      id: "6",
      title: "فوم العقارية",
      category: "تطوير مواقع",
      image: "/projects/fom-realestate.png",
      projectUrl: "https://www.fomrealestate.com.sa/",
    },
  ],
  blogPosts: [
    {
      id: "1",
      title: "الفوز بـ ١٢٠,٠٠٠ ريال سعودي في مسابقة الابتكار IoT",
      excerpt:
        "الاحتفال بإنجاز كبير في مسيرتي المهنية - الفوز بالمركز الأول و ١٢٠,٠٠٠ ريال سعودي في تحدي إنترنت الأشياء المرموق ٢٠٢٣ مع فرسان هاب، حل مبتكر لإدارة الفروسية يجمع بين التميز في الأجهزة والبرمجيات.",
      category: "إنجازات",
      featuredImage: "/blog/iot-competition-win.jpg",
      createdAt: "2023-05-15",
      published: true,
    },
    {
      id: "2",
      title: "هاكاثون الصناعة: بناء لوحة تحكم محلل الهيدروجين الكهربائي",
      excerpt:
        "تجربتي في المشاركة في هاكاثون الصناعة حيث طورت لوحة تحكم IoT شاملة لمراقبة والتحكم في أنظمة محلل الهيدروجين الكهربائي في الوقت الفعلي، عرض قوة تقنيات الويب الحديثة في التطبيقات الصناعية.",
      category: "تكنولوجيا",
      featuredImage: "/blog/hydrogen-dashboard.jpg",
      createdAt: "2023-08-22",
      published: true,
    },
    {
      id: "3",
      title: "فرسان هاب: ثورة في إدارة الفروسية",
      excerpt:
        "بناء نظام شامل لإدارة الفروسية يحول الطريقة التي يدير بها مالكو الخيول والمدربون والشركات عملياتهم. من تطبيقات الهاتف المحمول إلى منصات الويب، يجلب فرسان هاب صناعة الخيول إلى العصر الرقمي.",
      category: "تطبيقات الموبايل",
      featuredImage: "/blog/fursan-hub-app.png",
      createdAt: "2024-06-10",
      published: true,
    },
  ],
}

// Get portfolio data (now returns locale-specific data)
export async function getPortfolioData(locale: "en" | "ar" = "en"): Promise<PortfolioData> {
  // Simulate a small delay to mimic async behavior
  await new Promise((resolve) => setTimeout(resolve, 100))
  return locale === "ar" ? portfolioDataAr : portfolioDataEn
}

// This is a static portfolio without database/admin functionality
