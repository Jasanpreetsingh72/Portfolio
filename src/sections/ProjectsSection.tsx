import { useMemo, useState } from 'react'

import { ProjectCard } from '@/components/common/ProjectCard'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SkeletonCard } from '@/components/common/SkeletonCard'
import { projectFilters, projects, type ProjectFilter } from '@/data/portfolioData'

export const ProjectsSection = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [isLoading, setIsLoading] = useState(false)

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  const onFilterChange = (value: ProjectFilter) => {
    setIsLoading(true)
    setFilter(value)
    window.setTimeout(() => setIsLoading(false), 280)
  }

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="High-impact product work"
        description="Reusable card system with filtering, motion interactions, and modal detail view."
      />
      <div className="project-filters">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            className={item === filter ? 'active' : ''}
            onClick={() => onFilterChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)
          : filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </section>
  )
}
