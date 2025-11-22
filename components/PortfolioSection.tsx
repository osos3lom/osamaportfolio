"use client"

import Image from "next/image"
import IonIcon from "@/components/IonIcon"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

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
                <div className="columns-1 md:columns-2 lg:columns-3 gap-7.5 mb-2.5 space-y-7.5">
                    {data.portfolioProjects && data.portfolioProjects.length > 0 ? (
                        data.portfolioProjects.map((project) => (
                            <Card
                                key={project.id}
                                className="project-item active bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5"
                                data-filter-item
                                data-category={project.category}
                            >
                                <a href={project.projectUrl || "#"} className="w-full block">
                                    <figure className="project-img relative overflow-hidden rounded-lg">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            width={400}
                                            height={300}
                                            className="project-img-element w-full h-auto object-cover"
                                        />
                                    </figure>
                                    <CardContent className="p-4 pl-0">
                                        <CardTitle className="project-title text-lg font-medium mb-1">{project.title}</CardTitle>
                                        <CardDescription className="project-category text-sm text-muted-foreground">{project.category}</CardDescription>
                                    </CardContent>
                                </a>
                            </Card>
                        ))
                    ) : (
                        <>
                            <Card className="project-item active bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5" data-filter-item data-category="web development">
                                <a href="#" className="w-full block">
                                    <figure className="project-img relative overflow-hidden rounded-lg">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Finance"
                                            width={400}
                                            height={300}
                                            className="project-img-element w-full h-auto object-cover"
                                        />
                                    </figure>
                                    <CardContent className="p-4 pl-0">
                                        <CardTitle className="project-title text-lg font-medium mb-1">Finance</CardTitle>
                                        <CardDescription className="project-category text-sm text-muted-foreground">Web development</CardDescription>
                                    </CardContent>
                                </a>
                            </Card>
                            <Card className="project-item active bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5" data-filter-item data-category="web development">
                                <a href="#" className="w-full block">
                                    <figure className="project-img relative overflow-hidden rounded-lg">
                                        <div className="project-item-icon-box">
                                            <IonIcon name="eye-outline" />
                                        </div>
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Orizon"
                                            width={400}
                                            height={300}
                                            className="project-img-element w-full h-auto object-cover"
                                        />
                                    </figure>
                                    <CardContent className="p-4 pl-0">
                                        <CardTitle className="project-title text-lg font-medium mb-1">Orizon</CardTitle>
                                        <CardDescription className="project-category text-sm text-muted-foreground">Web development</CardDescription>
                                    </CardContent>
                                </a>
                            </Card>
                        </>
                    )}
                </div>
            </section>
        </article>
    )
}
