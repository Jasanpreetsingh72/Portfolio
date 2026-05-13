import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import '@/components/common/PageTransition.scss'

export const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    className="page-transition"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
  >
    {children}
  </motion.div>
)
