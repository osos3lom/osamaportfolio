"use client"

import Image from "next/image"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface AboutSectionProps {
    data: PortfolioData
    lang: Locale
}

export default function AboutSection({ data, lang }: AboutSectionProps) {
    const dict = dictionaries[lang]

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.about.title}</h2>
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
                    <div className="mt-5">
                        {data.aboutSection.highlights.map((highlight, index) => (
                            <p key={index} className="mb-2.5">
                                • {highlight}
                            </p>
                        ))}
                    </div>
                )}
            </section>

            {/* Services */}
            <section className="service">
                <h3 className="text-[var(--white-2)] capitalize text-lg service-title">{dict.about.servicesTitle}</h3>
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
                                    <h4 className="text-[var(--white-2)] capitalize text-base service-item-title">{service.title}</h4>
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
                                    <h4 className="text-[var(--white-2)] capitalize text-base service-item-title">Web Design</h4>
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
                                    <h4 className="text-[var(--white-2)] capitalize text-base service-item-title">Web Development</h4>
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
                <h3 className="text-[var(--white-2)] capitalize text-lg testimonials-title">{dict.testimonials.title}</h3>
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
                                        <h4 className="mt-3 text-[var(--white-2)] capitalize text-base testimonials-item-title">{testimonial.name}</h4>
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
                                <h4 className="text-[var(--white-2)] capitalize text-base testimonials-item-title">Daniel Lewis</h4>
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
    )
}
