import { useState } from 'react'
import axios from 'axios'
import { contactFaqs, contactInfo, workingHours } from '../utils/data'

const initial = { name: '', email: '', phone: '', message: '' }
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

function ContactPage() {
  const [form, setForm] = useState(initial)
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${API_URL}/contact`, form)
      setMsg('Sent successfully.')
      setForm(initial)
    } catch {
      setMsg('Backend not reachable right now.')
    }
  }

  return (
    <div className="section-wrap mt-16 space-y-12">
      <section className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={submit} className="glass rounded-2xl p-6">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-2 text-slate-400">
            Share your concern and our front desk will call back within 30 minutes.
          </p>
          <div className="mt-5 grid gap-4">
            {['name', 'email', 'phone'].map((key) => (
              <input
                key={key}
                required
                value={form[key]}
                onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300"
                placeholder={key[0].toUpperCase() + key.slice(1)}
              />
            ))}
            <textarea
              rows="5"
              required
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300"
              placeholder="Message"
            />
            <button className="rounded-full bg-cyan-500 px-5 py-3 font-semibold text-slate-950">
              Send Message
            </button>
            {msg && <p className="text-sm text-cyan-200">{msg}</p>}
          </div>
        </form>
        <div className="glass rounded-2xl p-4">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Delhi&output=embed"
            className="h-full min-h-[420px] w-full rounded-xl border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {contactInfo.map((item) => (
          <article key={item.label} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
            <p className="mt-3 text-slate-200">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Working Hours</h2>
          <div className="mt-4 space-y-3">
            {workingHours.map((slot) => (
              <div key={slot.day} className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-slate-300">{slot.day}</span>
                <span className="text-cyan-200">{slot.time}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Quick FAQ</h2>
          <div className="mt-4 space-y-4">
            {contactFaqs.map((faq) => (
              <div key={faq.q}>
                <p className="font-medium text-cyan-200">{faq.q}</p>
                <p className="mt-1 text-sm text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default ContactPage
