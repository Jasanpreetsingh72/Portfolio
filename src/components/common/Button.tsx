import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import '@/components/common/Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => (
  <button className={clsx('btn', `btn--${variant}`, className)} {...props} />
)
