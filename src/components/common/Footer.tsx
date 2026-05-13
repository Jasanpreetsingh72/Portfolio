import '@/components/common/Footer.scss'

import { socialLinks } from '@/data/portfolioData'

export const Footer = () => (
  <footer className="footer" id="footer">
    <div>
      <p>Built with React, TypeScript, SCSS, and Framer Motion.</p>
      <small>© {new Date().getFullYear()} Jasanpreet Singh. All rights reserved.</small>
    </div>
    <ul>
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </footer>
)
