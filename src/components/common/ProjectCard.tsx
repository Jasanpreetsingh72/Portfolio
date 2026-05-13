import '@/components/common/ProjectCard.scss'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

import type { Project } from '@/types'
import { fadeUp } from '@/utils/animation'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <motion.article
    className="project-card glass"
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4 }}
  >
    {/* <div className="project-card__image" /> */}
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <ul>
      {project.stack.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <div className="project-card__actions">
      <a href={project.liveUrl} target="_blank" rel="noreferrer">
        <FiExternalLink /> Demo
      </a>
    </div>
  </motion.article>
)
