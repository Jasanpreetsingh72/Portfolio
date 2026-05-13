import { SectionHeading } from '@/components/common/SectionHeading'
import { SkillCard } from '@/components/common/SkillCard'
import { skillCategories } from '@/data/portfolioData'

export const SkillsSection = () => (
  <section id="skills" className="section">
    <SectionHeading
      eyebrow="Skills"
      title="Cross-functional frontend capabilities"
      description="A blend of implementation depth, delivery discipline, and product-quality UI engineering."
    />
    <div className="skills-grid">
      {skillCategories.map((category) => (
        <SkillCard key={category.title} {...category} />
      ))}
    </div>
  </section>
)
