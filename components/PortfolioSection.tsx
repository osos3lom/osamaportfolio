"use client"

import Image from "next/image"
import IonIcon from "@/components/IonIcon"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface PortfolioSectionProps {
    data: PortfolioData
    lang: Locale
}

export default function PortfolioSection({ data, lang }: PortfolioSectionProps) {
    const dict = dictionaries[lang]

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.portfolio.title}</h2>
            </header>

            <section>
                <ul className="grid grid-cols-1 gap-7.5 mb-2.5">
                    {data.portfolioProjects && data.portfolioProjects.length > 0 ? (
                        data.portfolioProjects.map((project) => (
                            <li
                                key={project.id}
                                className="project-item active"
                                data-filter-item
                                data-category={project.category}
                            >
                                <a href={project.projectUrl || "#"} className="w-full">
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                            className="project-img-element"
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
                                <a href="#" className="w-full">
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Finance"
                                            width={400}
                                            height={300}
                                            className="project-img-element"
                                        />
                                    </figure>
                                    <h3 className="project-title">Finance</h3>
                                    <p className="project-category">Web development</p>
                                </a>
                            </li>
                            <li className="project-item active" data-filter-item data-category="web development">
                                <a href="#" className="w-full">
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Orizon"
                                            width={400}
                                            height={300}
                                            className="project-img-element"
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
    )
}
