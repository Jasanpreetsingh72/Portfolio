import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ErrorBoundary } from '@/components/common/ErrorBoundary'

const HomePage = lazy(() => import('@/pages/HomePage'))

export const AppRouter = () => (
  <ErrorBoundary>
    <Suspense fallback={<div className="page-loader">Loading experience...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  </ErrorBoundary>
)
