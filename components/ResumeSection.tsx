"use client"

import IonIcon from "@/components/IonIcon"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface ResumeSectionProps {
    data: PortfolioData
    lang: Locale
}

export default function ResumeSection({ data, lang }: ResumeSectionProps) {
    const dict = dictionaries[lang]

    return (
        <article className="resume active" data-page="resume">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.resume.title}</h2>
            </header>

            {/* Education */}
            <section className="mb-7.5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="icon-box">
                        <IonIcon name="book-outline" />
                    </div>
                    <h3 className="text-[var(--white-2)] capitalize text-lg">{dict.resume.education}</h3>
                </div>
                <ol className="timeline-list">
                    {data.education && data.education.length > 0 ? (
                        data.education.map((edu) => (
                            <li key={edu.id} className="timeline-item">
                                <h4 className="text-[var(--white-2)] capitalize text-base timeline-item-title">{edu.degree}</h4>
                                <span className="timeline-span">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                                <p className="timeline-text">{edu.institution}</p>
                                {edu.description && <p className="timeline-text">{edu.description}</p>}
                            </li>
                        ))
                    ) : (
                        <li className="timeline-item">
                            <h4 className="text-[var(--white-2)] capitalize text-base timeline-item-title">University of California, Berkeley</h4>
                            <span className="timeline-span">2007 — 2013</span>
                            <p className="timeline-text">Bachelor of Science in Computer Science</p>
                        </li>
                    )}
                </ol>
            </section>

            {/* Experience */}
            <section className="mb-7.5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="icon-box">
                        <IonIcon name="book-outline" />
                    </div>
                    <h3 className="text-[var(--white-2)] capitalize text-lg">{dict.resume.experience}</h3>
                </div>
                <ol className="timeline-list">
                    {data.experience && data.experience.length > 0 ? (
                        data.experience.map((exp) => (
                            <li key={exp.id} className="timeline-item">
                                <h4 className="text-[var(--white-2)] capitalize text-base timeline-item-title">{exp.position}</h4>
                                <span className="timeline-span">
                                    {exp.startDate} — {exp.currentJob ? dict.resume.present : exp.endDate}
                                </span>
                                <p className="timeline-text">{exp.company}</p>
                                {exp.description && <p className="timeline-text">{exp.description}</p>}
                            </li>
                        ))
                    ) : (
                        <li className="timeline-item">
                            <h4 className="text-[var(--white-2)] capitalize text-base timeline-item-title">Creative Director</h4>
                            <span className="timeline-span">2015 — {dict.resume.present}</span>
                            <p className="timeline-text">
                                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores
                                et quas molestias exceptur.
                            </p>
                        </li>
                    )}
                </ol>
            </section>

            {/* Skills */}
            <section>
                <h3 className="text-[var(--white-2)] capitalize text-lg mb-5">{dict.resume.skills}</h3>
                <ul className="skills-list content-card">
                    {data.skills && data.skills.length > 0 ? (
                        data.skills.map((skill) => (
                            <li key={skill.id} className="skills-item">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <h5 className="text-[var(--white-2)] capitalize text-[13px] font-medium">{skill.name}</h5>
                                    <data value={skill.percentage} className="skill-data">{skill.percentage}%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <>
                            <li className="skills-item">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <h5 className="text-[var(--white-2)] capitalize text-[13px] font-medium">Web Design</h5>
                                    <data value="80" className="skill-data">80%</data>
                                </div>
                                <div className="skill-progress-bg">
                                    <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                                </div>
                            </li>
                            <li className="skills-item">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <h5 className="text-[var(--white-2)] capitalize text-[13px] font-medium">Graphic Design</h5>
                                    <data value="70" className="skill-data">70%</data>
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
    )
}
