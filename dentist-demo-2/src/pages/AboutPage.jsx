import { FaAward, FaClock, FaUsers } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { teamMembers } from '../utils/constants'

function AboutPage() {
  useDocumentTitle('Pearl Dental Clinic | About')

  return (
    <>
      <PageHero
        title="About Pearl Dental Clinic"
        subtitle="Delivering trusted, ethical, and technology-driven dental care for your family."
      />

      <section className="mx-auto mt-14 grid max-w-7xl gap-7 px-4 md:grid-cols-2 md:px-6">
        <div className="glass-card rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            To provide world-class dental treatment with compassion, transparency, and patient
            comfort at the center of every appointment.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            To become the most trusted smile-care destination by combining innovation, hygiene, and
            personalized treatment plans.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-3 md:px-6">
        {[
          { icon: FaAward, title: '15+ Years', text: 'Clinical excellence and trusted outcomes' },
          { icon: FaUsers, title: '8,000+', text: 'Happy patients served with care' },
          { icon: FaClock, title: 'Extended Hours', text: 'Convenient appointments, every week' },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="glass-card rounded-2xl p-6 text-center">
              <Icon className="mx-auto text-2xl text-primary-600" />
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          )
        })}
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 md:px-6">
        <h2 className="section-title text-center">Meet Our Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="glass-card rounded-2xl p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="h-64 w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default AboutPage
