import type { ReactNode } from 'react'
import '@/components/common/Layout.scss'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton'

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <ScrollProgress />
    <Navbar />
    <main>{children}</main>
    <Footer />
    <ScrollToTopButton />
  </>
)
