import '@/components/common/SectionHeading.scss'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="section-heading">
    <p className="section-heading__eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description ? <p className="section-heading__description">{description}</p> : null}
  </div>
)
