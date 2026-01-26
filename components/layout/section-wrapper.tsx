import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  background?: "default" | "card"
}

export function SectionWrapper({ children, className = "", background = "default" }: SectionWrapperProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${background === "card" ? "bg-card/50" : ""} ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}
