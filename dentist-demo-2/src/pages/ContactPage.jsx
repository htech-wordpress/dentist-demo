import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { submitContactForm } from '../utils/api'

const initialForm = { name: '', email: '', phone: '', message: '' }

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  useDocumentTitle('Pearl Dental Clinic | Contact')

  const validate = () => {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Valid email is required'
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) nextErrors.phone = 'Valid phone is required'
    if (form.message.trim().length < 10) nextErrors.message = 'Message must be at least 10 chars'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('Sending...')
    try {
      await submitContactForm(form)
      setStatus('Message sent successfully. We will contact you soon.')
      setForm(initialForm)
      setErrors({})
    } catch {
      setStatus('Unable to reach server now. Please try again later.')
    }
  }

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Book your consultation, ask questions, or request a callback from our team."
      />

      <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 lg:grid-cols-2 md:px-6">
        <form onSubmit={onSubmit} className="glass-card rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Form</h2>
          <div className="mt-5 grid gap-4">
            {[
              { key: 'name', label: 'Name', type: 'text' },
              { key: 'email', label: 'Email', type: 'email' },
              { key: 'phone', label: 'Phone', type: 'tel' },
            ].map((field) => (
              <label key={field.key} className="text-sm">
                {field.label}
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none ring-primary-500 focus:ring dark:border-slate-700 dark:bg-slate-900/50"
                />
                {errors[field.key] && <span className="mt-1 block text-xs text-red-500">{errors[field.key]}</span>}
              </label>
            ))}
            <label className="text-sm">
              Message
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none ring-primary-500 focus:ring dark:border-slate-700 dark:bg-slate-900/50"
              />
              {errors.message && <span className="mt-1 block text-xs text-red-500">{errors.message}</span>}
            </label>
            <button
              type="submit"
              className="rounded-full bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
          </div>
        </form>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-7">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Clinic Details</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-2"><FaPhoneAlt /> +91 90000 12345</p>
              <p className="flex items-center gap-2"><FaEnvelope /> hello@pearldentalclinic.com</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> 21 Smile Avenue, Mumbai, India</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps?q=Mumbai&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
