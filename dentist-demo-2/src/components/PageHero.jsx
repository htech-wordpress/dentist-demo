import { motion as Motion } from 'framer-motion'
import { BOOKING_URL } from '../utils/constants'

function PageHero({ title, subtitle }) {
  return (
    <section className="relative mx-auto mt-8 max-w-7xl px-4 md:px-6">
      <div className="glass-card rounded-3xl p-10 text-center md:p-14">
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl"
        >
          {title}
        </Motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
        >
          Book Appointment
        </a>
      </div>
    </section>
  )
}

export default PageHero
