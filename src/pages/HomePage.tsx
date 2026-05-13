import { Helmet } from 'react-helmet-async'

import { PageTransition } from '@/components/common/PageTransition'
import { Layout } from '@/components/common/Layout'
import { AboutSection } from '@/sections/AboutSection'
import { ContactSection } from '@/sections/ContactSection'
import { ExperienceSection } from '@/sections/ExperienceSection'
import { HeroSection } from '@/sections/HeroSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { SkillsSection } from '@/sections/SkillsSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { siteConfig } from '@/config/site'

const HomePage = () => (
  <>
    <Helmet>
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteConfig.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <PageTransition>
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </PageTransition>
  </>
)

export default HomePage
