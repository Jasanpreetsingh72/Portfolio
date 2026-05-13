import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useEffect } from 'react'
import '@/components/common/ScrollProgress.scss'

export const ScrollProgress = () => {
  const progress = useScrollProgress()

  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
  }, [progress])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  )
}
