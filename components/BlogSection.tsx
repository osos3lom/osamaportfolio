"use client"

import Image from "next/image"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"

interface BlogSectionProps {
    data: PortfolioData
    lang: Locale
    formatDate: (dateString: string) => string
}

export default function BlogSection({ data, lang, formatDate }: BlogSectionProps) {
    const dict = dictionaries[lang]

    return (
        <article className="blog active" data-page="blog">
            <header>
                <h2 className="text-[var(--white-2)] capitalize text-2xl article-title">{dict.blog.title}</h2>
            </header>

            <section className="mb-2.5">
                <ul className="grid grid-cols-1 gap-5">
                    {data.blogPosts && data.blogPosts.length > 0 ? (
                        data.blogPosts
                            .filter((post) => post.published)
                            .map((post) => (
                                <li key={post.id}>
                                    <a href="#" className="blog-post-link">
                                        <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                            <Image
                                                src={post.featuredImage || "/placeholder.svg"}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                            />
                                        </figure>
                                        <div className="p-4">
                                            <div className="flex justify-start items-center gap-2 mb-2.5">
                                                <p className="blog-category">{post.category}</p>
                                                <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                                <time dateTime={post.createdAt} className="blog-category">
                                                    {formatDate(post.createdAt)}
                                                </time>
                                            </div>
                                            <h3 className="text-[var(--white-2)] capitalize text-lg blog-item-title">{post.title}</h3>
                                            <p className="blog-text">{post.excerpt}</p>
                                        </div>
                                    </a>
                                </li>
                            ))
                    ) : (
                        <>
                            <li>
                                <a href="#" className="blog-post-link">
                                    <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Design conferences in 2022"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                        />
                                    </figure>
                                    <div className="p-4">
                                        <div className="flex justify-start items-center gap-2 mb-2.5">
                                            <p className="blog-category">Design</p>
                                            <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                            <time dateTime="2022-02-23" className="blog-category">Feb 23, 2022</time>
                                        </div>
                                        <h3 className="text-[var(--white-2)] capitalize text-lg blog-item-title">Design conferences in 2022</h3>
                                        <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="blog-post-link">
                                    <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Best fonts every designer"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                        />
                                    </figure>
                                    <div className="p-4">
                                        <div className="flex justify-start items-center gap-2 mb-2.5">
                                            <p className="blog-category">Design</p>
                                            <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                            <time dateTime="2022-02-23" className="blog-category">Feb 23, 2022</time>
                                        </div>
                                        <h3 className="text-[var(--white-2)] capitalize text-lg blog-item-title">Best fonts every designer</h3>
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
    )
}
