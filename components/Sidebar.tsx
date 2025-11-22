"use client"

import Image from "next/image"
import IonIcon from "@/components/IonIcon"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface SidebarProps {
    data: PortfolioData
    lang: Locale
    sidebarActive: boolean
    setSidebarActive: (active: boolean) => void
    formatDate: (dateString: string) => string
}

export default function Sidebar({
    data,
    lang,
    sidebarActive,
    setSidebarActive,
    formatDate,
}: SidebarProps) {
    const dict = dictionaries[lang]

    return (
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
    )
}
