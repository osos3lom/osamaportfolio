"use client"

import Image from "next/image"
import type { PortfolioData } from "@/lib/portfolio-data"
import type { Locale } from "@/lib/i18n/config"
import { dictionaries } from "@/lib/i18n/dictionaries"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

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
                <div className="columns-1 md:columns-2 lg:columns-3 gap-7.5 space-y-7.5">
                    {data.blogPosts && data.blogPosts.length > 0 ? (
                        data.blogPosts
                            .filter((post) => post.published)
                            .map((post) => (
                                <Card key={post.id} className="bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5">
                                    <a href="#" className="blog-post-link w-full block">
                                        <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                            <Image
                                                src={post.featuredImage || "/placeholder.svg"}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                            />
                                        </figure>
                                        <CardContent className="p-4">
                                            <div className="flex justify-start items-center gap-2 mb-2.5">
                                                <p className="blog-category">{post.category}</p>
                                                <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                                <time dateTime={post.createdAt} className="blog-category">
                                                    {formatDate(post.createdAt)}
                                                </time>
                                            </div>
                                            <CardTitle className="text-[var(--white-2)] capitalize text-lg blog-item-title mb-2">{post.title}</CardTitle>
                                            <p className="blog-text">{post.excerpt}</p>
                                        </CardContent>
                                    </a>
                                </Card>
                            ))
                    ) : (
                        <>
                            <Card className="bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5">
                                <a href="#" className="blog-post-link w-full block">
                                    <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Design conferences in 2022"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                        />
                                    </figure>
                                    <CardContent className="p-4">
                                        <div className="flex justify-start items-center gap-2 mb-2.5">
                                            <p className="blog-category">Design</p>
                                            <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                            <time dateTime="2022-02-23" className="blog-category">Feb 23, 2022</time>
                                        </div>
                                        <CardTitle className="text-[var(--white-2)] capitalize text-lg blog-item-title mb-2">Design conferences in 2022</CardTitle>
                                        <p className="blog-text">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
                                    </CardContent>
                                </a>
                            </Card>
                            <Card className="bg-transparent border-none shadow-none p-0 break-inside-avoid mb-7.5">
                                <a href="#" className="blog-post-link w-full block">
                                    <figure className="w-full h-[200px] rounded-xl overflow-hidden">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Best fonts every designer"
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover transition-transform duration-[var(--transition-1)] hover:scale-110"
                                        />
                                    </figure>
                                    <CardContent className="p-4">
                                        <div className="flex justify-start items-center gap-2 mb-2.5">
                                            <p className="blog-category">Design</p>
                                            <span className="bg-[var(--light-gray-70)] w-1 h-1 rounded"></span>
                                            <time dateTime="2022-02-23" className="blog-category">Feb 23, 2022</time>
                                        </div>
                                        <CardTitle className="text-[var(--white-2)] capitalize text-lg blog-item-title mb-2">Best fonts every designer</CardTitle>
                                        <p className="blog-text">
                                            Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                                        </p>
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
