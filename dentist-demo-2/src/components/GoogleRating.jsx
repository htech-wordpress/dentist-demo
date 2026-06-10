import { FaGoogle, FaStar } from 'react-icons/fa'

function GoogleRating() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">
      <div className="glass-card flex flex-col items-start justify-between gap-6 rounded-2xl p-6 md:flex-row md:items-center md:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary-500">Google Reviews</p>
          <div className="mt-2 flex items-center gap-3">
            <FaGoogle className="text-2xl text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4.9 / 5.0 Rating</h3>
          </div>
          <div className="mt-2 flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <FaStar key={idx} />
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Based on 1,200+ verified patient reviews.
          </p>
        </div>

        <a
          href="https://www.google.com/search?q=dental+clinic+reviews"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
        >
          Read Reviews
        </a>
      </div>
    </section>
  )
}

export default GoogleRating
