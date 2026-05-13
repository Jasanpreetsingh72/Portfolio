import { motion } from 'framer-motion'

import { SectionHeading } from '@/components/common/SectionHeading'
import { profile, stats } from '@/data/portfolioData'

export const AboutSection = () => (
  <section id="about" className="section">
    <SectionHeading
      eyebrow="About"
      title="Engineering frontend systems that scale"
      description={profile.summary}
    />
    <div className="about-grid">
      <article className="glass">
        <h3>Professional Summary</h3>
        <p>
          I build modern and maintainable product interfaces with reusable component architecture,
          strong TypeScript conventions, and responsive experiences across all devices.
        </p>
      </article>
      <div className="about-grid__stats">
        {stats.map((stat) => (
          <motion.article
            className="glass"
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)
