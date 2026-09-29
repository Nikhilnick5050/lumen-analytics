import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '../components/ui/Button'
import { Field, TextareaField } from '../components/ui/Field'
import { Modal } from '../components/ui/Modal'
import { useToast } from '../components/ui/Toast'
import './Cta.css'

interface FormState { name: string; email: string; message: string }
const initial: FormState = { name: '', email: '', message: '' }

export function Cta() {
  const { toast } = useToast()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitting, setSubmitting] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const validate = (): boolean => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) { toast('Please fix the highlighted fields.', 'error'); return }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setModalOpen(true)
      setForm(initial)
      setErrors({})
    }, 900)
  }

  const set = (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta">
          <div className="cta__copy">
            <h2 className="cta__title">Ready to see your product clearly?</h2>
            <p className="cta__sub">Join thousands of teams making faster, smarter decisions with Lumen.</p>
            <div className="cta__actions">
              <Button size="lg" onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}>Get started free</Button>
              <Button size="lg" variant="outline" onClick={() => toast('Our team will reach out within one business day.', 'info')}>Talk to sales</Button>
            </div>
          </div>

          <form className="cta__form" onSubmit={onSubmit} noValidate>
            <h3 className="cta__form-title">Contact us</h3>
            <Field label="Name" placeholder="Jane Doe" value={form.name} onChange={set('name')} error={errors.name} autoComplete="name" />
            <Field label="Email" type="email" placeholder="jane@company.com" value={form.email} onChange={set('email')} error={errors.email} autoComplete="email" />
            <TextareaField label="Message" placeholder="Tell us what you're building…" value={form.message} onChange={set('message')} error={errors.message} />
            <Button type="submit" fullWidth loading={submitting}>{submitting ? 'Sending…' : 'Send message'}</Button>
          </form>
        </div>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Message sent" footer={<Button onClick={() => setModalOpen(false)}>Close</Button>}>
        <p>Thanks for reaching out! Our team will get back to you within one business day.</p>
      </Modal>
    </section>
  )
}