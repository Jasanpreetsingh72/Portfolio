import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { SectionHeading } from '@/components/common/SectionHeading'
import { testimonials } from '@/data/portfolioData'

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => window.clearInterval(timer)
  }, [])

  const active = testimonials[activeIndex]

  return (
    <section id="testimonials" className="section">
      <SectionHeading
        eyebrow="Testimonials"
        title="What teams say"
        description="Lightweight animated carousel to highlight client and team feedback."
      />
      <div className="testimonial glass">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            “{active.quote}”
          </motion.blockquote>
        </AnimatePresence>
        <p>
          {active.name} • {active.role}
        </p>
      </div>
    </section>
  )
}
