import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'

import { Button } from '@/components/common/Button'
import { InputField } from '@/components/common/InputField'
import { TextAreaField } from '@/components/common/TextAreaField'
import { SectionHeading } from '@/components/common/SectionHeading'
import { profile } from '@/data/portfolioData'
import { submitContactForm } from '@/services/contactService'

interface ContactForm {
  name: string
  email: string
  message: string
}

export const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const errors = useMemo(
    () => ({
      name: form.name.trim().length < 2 ? 'Name must be at least 2 characters.' : '',
      email: /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Enter a valid email address.',
      message: form.message.trim().length < 12 ? 'Message should be at least 12 characters.' : '',
    }),
    [form],
  )

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const hasErrors = Object.values(errors).some(Boolean)
    if (hasErrors || isSubmitting) return

    setIsSubmitting(true)
    await submitContactForm(form)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something exceptional"
        description="Open to frontend and full-stack opportunities, product collaborations, and consulting work."
      />
      <div className="contact-grid">
        <article className="glass">
          <h3>Direct Contact</h3>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </article>
        <form className="glass contact-form" onSubmit={onSubmit} noValidate>
          <InputField
            id="name"
            name="name"
            label="Name"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            error={errors.name}
            required
          />
          <InputField
            id="email"
            name="email"
            type="email"
            label="Email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            error={errors.email}
            required
          />
          <TextAreaField
            id="message"
            name="message"
            label="Message"
            rows={5}
            value={form.message}
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            error={errors.message}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          {submitted ? <p className="contact-form__success">Thanks! I will get back to you soon.</p> : null}
        </form>
      </div>
    </section>
  )
}
