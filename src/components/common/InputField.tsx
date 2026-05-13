import type { InputHTMLAttributes } from 'react'
import '@/components/common/InputField.scss'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const InputField = ({ label, error, id, ...props }: InputFieldProps) => (
  <label className="input-field" htmlFor={id}>
    <span>{label}</span>
    <input id={id} {...props} />
    {error ? <small>{error}</small> : null}
  </label>
)
