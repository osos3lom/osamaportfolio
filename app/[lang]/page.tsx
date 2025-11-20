"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { getPortfolioData, type PortfolioData } from "@/lib/portfolio-data"
import { dictionaries } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"
import LanguageSwitcher from "@/components/language-switcher"
import Image from "next/image"
import IonIcon from "@/components/IonIcon"

export default function Portfolio() {
  const params = useParams()
  const lang = params.lang as Locale
  const [activeTab, setActiveTab] = useState("about")
  const [data, setData] = useState<PortfolioData | null>(null)
  const dict = dictionaries[lang]
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
      {/* Language Switcher */}
      <LanguageSwitcher currentLang={lang} />

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <Image
              src={data.personalInfo?.avatar || "/placeholder-user.jpg"}
              alt={data.personalInfo?.name || "Profile"}
              width={80}
              height={80}
              priority
              className="rounded-full"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title={data.personalInfo?.name || "Name"}>
              {data.personalInfo?.name || "Your Name"}
            </h1>
            <p className="title">{data.personalInfo?.title || "Your Title"}</p>
          </div>

          <button
            className="info_more-btn"
            data-sidebar-btn
            onClick={() => setSidebarActive(!sidebarActive)}
            aria-label={sidebarActive ? dict.sidebar.hideContacts : dict.sidebar.showContacts}
          >
            <div className="flex">
              <span className="mr-5">{sidebarActive ? dict.sidebar.hideContacts : dict.sidebar.showContacts}</span>
              <div className="pt-9">
                <IonIcon name="chevron-down" />
              </div>
            </div>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IonIcon name="mail-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">{dict.sidebar.email}</p>
                <a href={`mailto:${data.personalInfo?.email || ""}`} className="contact-link">
                  {data.personalInfo?.email || "your@email.com"}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IonIcon name="phone-portrait-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">{dict.sidebar.phone}</p>
                <a href={`tel:${data.personalInfo?.phone || ""}`} className="contact-link">
                  {data.personalInfo?.phone || "+1 (555) 123-4567"}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IonIcon name="calendar-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">{dict.sidebar.birthday}</p>
                <time dateTime={data.personalInfo?.dateOfBirth || "1990-01-01"}>
                  {data.personalInfo?.dateOfBirth
                    ? formatDate(data.personalInfo.dateOfBirth)
                    : "Jan 1, 1990"}
                </time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IonIcon name="location-outline" />
              </div>
              <div className="contact-info">
                <p className="contact-title">{dict.sidebar.location}</p>
                <address>{data.personalInfo?.location || "Your Location"}</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {data.personalInfo?.socialLinks?.github && (
              <li className="social-item">
                <a
                  href={data.personalInfo.socialLinks.github}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <IonIcon name="logo-github" />
                </a>
              </li>
            )}
            {data.personalInfo?.socialLinks?.linkedin && (
              <li className="social-item">
                <a
                  href={data.personalInfo.socialLinks.linkedin}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <IonIcon name="logo-linkedin" />
                </a>
              </li>
            )}
            {data.personalInfo?.socialLinks?.twitter && (
              <li className="social-item">
                <a
                  href={data.personalInfo.socialLinks.twitter}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <IonIcon name="logo-twitter" />
                </a>
              </li>
            )}
            {data.personalInfo?.socialLinks?.instagram && (
              <li className="social-item">
                <a
                  href={data.personalInfo.socialLinks.instagram}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <IonIcon name="logo-instagram" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation */}
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

        {/* About Section */}
        {activeTab === "about" && (
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">{dict.about.title}</h2>
            </header>

            <section className="about-text">
              {data.aboutSection?.content ? (
                <p>{data.aboutSection.content}</p>
              ) : (
                <p>
                  I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
                  media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
              )}

              {data.aboutSection?.highlights && data.aboutSection.highlights.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                  {data.aboutSection.highlights.map((highlight, index) => (
                    <p key={index} style={{ marginBottom: "10px" }}>
                      • {highlight}
                    </p>
                  ))}
                </div>
              )}
            </section>

            {/* Services */}
            <section className="service">
              <h3 className="h3 service-title">{dict.about.servicesTitle}</h3>
              <ul className="service-list">
                {data.services && data.services.length > 0 ? (
                  data.services.map((service) => (
                    <li key={service.id} className="service-item">
                      <div className="service-icon-box">
                        <Image
                          src={service.icon || "/placeholder.svg"}
                          alt={service.title}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="service-content-box">
                        <h4 className="h4 service-item-title">{service.title}</h4>
                        <p className="service-item-text">{service.description}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="service-item">
                      <div className="service-icon-box">
                        <Image src="/placeholder.svg" alt="Web Design" width={40} height={40} />
                      </div>
                      <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web Design</h4>
                        <p className="service-item-text">
                          The most modern and high-quality design made at a professional level.
                        </p>
                      </div>
                    </li>
                    <li className="service-item">
                      <div className="service-icon-box">
                        <Image src="/placeholder.svg" alt="Web Development" width={40} height={40} />
                      </div>
                      <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web Development</h4>
                        <p className="service-item-text">
                          High-quality development of sites at the professional level.
                        </p>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
              <h3 className="h3 testimonials-title">{dict.testimonials.title}</h3>
              <ul className="testimonials-list has-scrollbar">
                {data.testimonials && data.testimonials.length > 0 ? (
                  data.testimonials.map((testimonial) => (
                    <li key={testimonial.id} className="testimonials-item">
                      <div className="content-card" data-testimonials-item>
                        <div className="flex items-center gap-3 mb-6">
                          <figure className="testimonials-avatar-box">
                            <Image
                              src={testimonial.avatar || "/placeholder-user.jpg"}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full"
                            />
                          </figure>
                          <h4 className="mt-3 h4 testimonials-item-title">{testimonial.name}</h4>
                        </div>
                        <div className="testimonials-text">
                          <p>{testimonial.content}</p>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>
                      <figure className="testimonials-avatar-box">
                        <Image
                          src="/placeholder-user.jpg"
                          alt="Daniel Lewis"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </figure>
                      <h4 className="h4 testimonials-item-title">Daniel Lewis</h4>
                      <div className="testimonials-text">
                        <p>
                          Richard was hired to create a corporate identity. We were very pleased with the work done. She
                          has a lot of experience and is very concerned about the needs of client.
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </section>
          </article>
        )}

        {/* Resume Section */}
        {activeTab === "resume" && (
          <article className="resume active" data-page="resume">
            <header>
              <h2 className="h2 article-title">{dict.resume.title}</h2>
            </header>

            {/* Education */}
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <IonIcon name="book-outline" />
                </div>
                <h3 className="h3">{dict.resume.education}</h3>
              </div>
              <ol className="timeline-list">
                {data.education && data.education.length > 0 ? (
                  data.education.map((edu) => (
                    <li key={edu.id} className="timeline-item">
                      <h4 className="h4 timeline-item-title">{edu.degree}</h4>
                      <span>
                        {edu.startDate} — {edu.endDate}
                      </span>
                      <p className="timeline-text">{edu.institution}</p>
                      {edu.description && <p className="timeline-text">{edu.description}</p>}
                    </li>
                  ))
                ) : (
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">University of California, Berkeley</h4>
                    <span>2007 — 2013</span>
                    <p className="timeline-text">Bachelor of Science in Computer Science</p>
                  </li>
                )}
              </ol>
            </section>

            {/* Experience */}
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <IonIcon name="book-outline" />
                </div>
                <h3 className="h3">{dict.resume.experience}</h3>
              </div>
              <ol className="timeline-list">
                {data.experience && data.experience.length > 0 ? (
                  data.experience.map((exp) => (
                    <li key={exp.id} className="timeline-item">
                      <h4 className="h4 timeline-item-title">{exp.position}</h4>
                      <span>
                        {exp.startDate} — {exp.currentJob ? dict.resume.present : exp.endDate}
                      </span>
                      <p className="timeline-text">{exp.company}</p>
                      {exp.description && <p className="timeline-text">{exp.description}</p>}
                    </li>
                  ))
                ) : (
                  <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Creative Director</h4>
                    <span>2015 — {dict.resume.present}</span>
                    <p className="timeline-text">
                      Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores
                      et quas molestias exceptur.
                    </p>
                  </li>
                )}
              </ol>
            </section>

            {/* Skills */}
            <section className="skill">
              <h3 className="h3 skills-title">{dict.resume.skills}</h3>
              <ul className="skills-list content-card">
                {data.skills && data.skills.length > 0 ? (
                  data.skills.map((skill) => (
                    <li key={skill.id} className="skills-item">
                      <div className="title-wrapper">
                        <h5 className="h5">{skill.name}</h5>
                        <data value={skill.percentage}>{skill.percentage}%</data>
                      </div>
                      <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                      </div>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="skills-item">
                      <div className="title-wrapper">
                        <h5 className="h5">Web Design</h5>
                        <data value="80">80%</data>
                      </div>
                      <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                      </div>
                    </li>
                    <li className="skills-item">
                      <div className="title-wrapper">
                        <h5 className="h5">Graphic Design</h5>
                        <data value="70">70%</data>
                      </div>
                      <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </section>
          </article>
        )}

        {/* Portfolio Section */}
        {activeTab === "portfolio" && (
          <article className="portfolio active" data-page="portfolio">
            <header>
              <h2 className="h2 article-title">{dict.portfolio.title}</h2>
            </header>

            <section className="projects">
              <ul className="project-list">
                {data.portfolioProjects && data.portfolioProjects.length > 0 ? (
                  data.portfolioProjects.map((project) => (
                    <li
                      key={project.id}
                      className="project-item active"
                      data-filter-item
                      data-category={project.category}
                    >
                      <a href={project.projectUrl || "#"}>
                        <figure className="project-img">
                          <div className="project-item-icon-box">
                            <IonIcon name="eye-outline" />
                          </div>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                        </figure>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p>
                      </a>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="project-item active" data-filter-item data-category="web development">
                      <a href="#">
                        <figure className="project-img">
                          <div className="project-item-icon-box">
                            <IonIcon name="eye-outline" />
                          </div>
                          <Image
                            src="/placeholder.svg"
                            alt="Finance"
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                        </figure>
                        <h3 className="project-title">Finance</h3>
                        <p className="project-category">Web development</p>
                      </a>
                    </li>
                    <li className="project-item active" data-filter-item data-category="web development">
                      <a href="#">
                        <figure className="project-img">
                          <div className="project-item-icon-box">
                            <IonIcon name="eye-outline" />
                          </div>
                          <Image
                            src="/placeholder.svg"
                            alt="Orizon"
                            width={400}
                            height={300}
                            className="w-full h-auto"
                          />
                        </figure>
                        <h3 className="project-title">Orizon</h3>
                        <p className="project-category">Web development</p>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </section>
          </article>
        )}

        {/* Blog Section */}
        {activeTab === "blog" && (
          <article className="blog active" data-page="blog">
            <header>
              <h2 className="h2 article-title">{dict.blog.title}</h2>
            </header>

            <section className="blog-posts">
              <ul className="blog-posts-list">
                {data.blogPosts && data.blogPosts.length > 0 ? (
                  data.blogPosts
                    .filter((post) => post.published)
                    .map((post) => (
                      <li key={post.id} className="blog-post-item">
                        <a href="#">
                          <figure className="blog-banner-box">
                            <Image
                              src={post.featuredImage || "/placeholder.svg"}
                              alt={post.title}
                              width={400}
                              height={250}
                              className="w-full h-auto"
                            />
                          </figure>
                          <div className="blog-content">
                            <div className="blog-meta">
                              <p className="blog-category">{post.category}</p>
                              <span className="dot"></span>
                              <time dateTime={post.createdAt}>
                                {formatDate(post.createdAt)}
                              </time>
                            </div>
                            <h3 className="h3 blog-item-title">{post.title}</h3>
                            <p className="blog-text">{post.excerpt}</p>
                          </div>
                        </a>
                      </li>
                    ))
                ) : (
                  <>
                    <li className="blog-post-item">
                      <a href="#">
                        <figure className="blog-banner-box">
                          <Image
                            src="/placeholder.svg"
                            alt="Design conferences in 2022"
                            width={400}
                            height={250}
                            className="w-full h-auto"
                          />
                        </figure>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <p className="blog-category">Design</p>
                            <span className="dot"></span>
                            <time dateTime="2022-02-23">Feb 23, 2022</time>
                          </div>
                          <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                          <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                        </div>
                      </a>
                    </li>
                    <li className="blog-post-item">
                      <a href="#">
                        <figure className="blog-banner-box">
                          <Image
                            src="/placeholder.svg"
                            alt="Best fonts every designer"
                            width={400}
                            height={250}
                            className="w-full h-auto"
                          />
                        </figure>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <p className="blog-category">Design</p>
                            <span className="dot"></span>
                            <time dateTime="2022-02-23">Feb 23, 2022</time>
                          </div>
                          <h3 className="h3 blog-item-title">Best fonts every designer</h3>
                          <p className="blog-text">
                            Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                          </p>
                        </div>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </section>
          </article>
        )}

        {/* Store Section */}
        {activeTab === "store" && (
          <article className="store active" data-page="store">
            <header>
              <h2 className="h2 article-title">{dict.store.title}</h2>
            </header>
          </article>
        )}
      </div>
    </main>
  )
}