import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const socials = [
  { label: 'Instagram', icon: FaInstagram, color: 'from-pink-500 to-purple-500' },
  { label: 'Facebook', icon: FaFacebookF, color: 'from-blue-500 to-cyan-500' },
  { label: 'Twitter', icon: FaTwitter, color: 'from-sky-400 to-blue-500' },
]

function SocialSection() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 md:px-6">
      <h2 className="section-title text-center">Follow Our Smile Stories</h2>
      <p className="section-subtitle text-center">
        See transformations, dental tips, and clinic updates.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {socials.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="glass-card rounded-2xl p-6 text-center transition hover:-translate-y-1"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${item.color} text-white`}
              >
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{item.label}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Join us for oral health insights and patient stories.
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SocialSection
