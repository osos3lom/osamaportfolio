import { ServicePageTemplate } from "@/components/templates/service-page-template"
import { services } from "@/config/services"

export default function BrandIdentityPage() {
  const service = services.find((s) => s.id === "brand-identity")!
  return <ServicePageTemplate service={service} />
}
