import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import '@/components/common/Navbar.scss'

import { navItems } from '@/constants/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/common/ThemeToggle'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const active = useActiveSection(navItems.map((item) => item.href.replace('#', '')))

  const closeMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  return (
    <header className="navbar glass">
      <a href="#hero" className="navbar__brand" onClick={closeMenu}>
        <span className="navbar__brand-text">JS</span>
        <span className="navbar__brand-dot">.</span>
      </a>
      
      {/* Desktop Navigation */}
      <nav aria-label="Primary navigation" className="navbar__nav-desktop">
        <ul>
          {navItems.map((item) => {
            const isActive = active === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a href={item.href} className={isActive ? 'active' : ''}>
                  {item.label}
                  {isActive ? <motion.span layoutId="activeLinkDesktop" className="active-bg" /> : null}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="navbar__actions">
        <ThemeToggle />
        <button 
          className="navbar__mobile-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className="navbar__overlay" 
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.nav 
              aria-label="Mobile navigation" 
              className="navbar__nav-mobile glass"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <ul className="navbar__mobile-links">
                {navItems.map((item, index) => {
                  const isActive = active === item.href.replace('#', '')
                  return (
                    <motion.li 
                      key={item.href}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 30, opacity: 0 }}
                      transition={{ delay: 0.05 + index * 0.08, duration: 0.3, ease: 'easeOut' }}
                    >
                      <a 
                        href={item.href} 
                        className={isActive ? 'active' : ''} 
                        onClick={closeMenu}
                      >
                        {item.label}
                        {isActive && <span className="active-indicator" />}
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
              
              <motion.div 
                className="navbar__mobile-footer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p>Say Hello</p>
                <a href="mailto:hello@example.com" className="email-link">hello@example.com</a>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
