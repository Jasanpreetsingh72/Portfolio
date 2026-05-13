import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'

import { Button } from '@/components/common/Button'
import { profile, socialLinks } from '@/data/portfolioData'
import profileBanner from '@/assets/images/profile-banner.png'

export const HeroSection = () => (
  <section id="hero" className="hero section">
    <div className="hero__content">
      <p className="hero__eyebrow">{profile.location}</p>
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p>{profile.summary}</p>
      <div className="hero__cta">
        <a href="#projects">
          <Button>View Projects</Button>
        </a>
        <a href={profile.resumeHref} download>
          <Button variant="secondary">
            <FiDownload /> Resume
          </Button>
        </a>
      </div>
      <div className="hero__socials">
        {socialLinks.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`}>
          <FiMail /> Email
        </a>
      </div>
    </div>
    <motion.div
      className="hero__visual glass"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="hero__image-wrap">
        <img src={profileBanner} alt={`${profile.name} portrait`} className="hero__image" />
      </div>
      <p>{profile.subtitle}</p>
    </motion.div>
  </section>
)
