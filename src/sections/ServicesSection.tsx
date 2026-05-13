import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/common/SectionHeading'
import { services } from '@/data/portfolioData'

export const ServicesSection = () => (
  <section id="services" className="section">
    <SectionHeading
      eyebrow="Services"
      title="How I can contribute"
      description="Execution-focused frontend services for product and platform teams."
    />
    <div className="services-grid">
      {services.map((item) => (
        <motion.article
          className="glass"
          key={item.title}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.article>
      ))}
    </div>
  </section>
)
