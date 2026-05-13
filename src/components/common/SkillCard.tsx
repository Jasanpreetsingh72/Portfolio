import { motion } from 'framer-motion'
import '@/components/common/SkillCard.scss'

import type { SkillCategory } from '@/types'

export const SkillCard = ({ title, skills }: SkillCategory) => (
  <motion.article
    className="skill-card glass"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4 }}
  >
    <h3>{title}</h3>
    <div className="skill-card__items">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <div className="skill-row__meta">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-row__bar">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: skill.level / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.article>
)
