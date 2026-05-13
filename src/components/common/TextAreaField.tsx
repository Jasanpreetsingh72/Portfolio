import type { TextareaHTMLAttributes } from 'react'
import '@/components/common/TextAreaField.scss'

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const TextAreaField = ({ label, error, id, ...props }: TextAreaFieldProps) => (
  <label className="input-field" htmlFor={id}>
    <span>{label}</span>
    <textarea id={id} {...props} />
    {error ? <small>{error}</small> : null}
  </label>
)
