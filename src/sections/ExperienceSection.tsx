import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/common/SectionHeading'
import { experiences } from '@/data/portfolioData'

export const ExperienceSection = () => (
  <section id="experience" className="section">
    <SectionHeading
      eyebrow="Experience"
      title="Professional journey"
      description="Timeline of delivery-focused frontend roles."
    />
    <div className="timeline">
      {experiences.map((item) => (
        <motion.article
          className="timeline__item glass"
          key={`${item.company}-${item.duration}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3>{item.role}</h3>
          <p>
            {item.company} • {item.duration}
          </p>
          <ul>
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  </section>
)
