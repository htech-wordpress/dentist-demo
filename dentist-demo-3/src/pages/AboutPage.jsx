import { BOOK_URL, clinicBrandImage, clinicStats, doctorTeam } from '../utils/data'

function AboutPage() {
  return (
    <div className="section-wrap mt-16 space-y-12">
      <section>
        <img
          src={clinicBrandImage}
          alt="Pearl Dental Clinic"
          className="mb-6 h-64 w-full rounded-2xl object-cover"
          loading="lazy"
        />
        <h1 className="text-4xl font-bold">About Pearl Dental Clinic</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Delivering trusted, ethical, and technology-driven dental care for your family.
        </p>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
        >
          Book Appointment
        </a>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-cyan-300">Mission</h2>
          <p className="mt-2 text-slate-400">
            To provide world-class dental treatment with compassion, transparency, and patient
            comfort at the center of every appointment.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-cyan-300">Vision</h2>
          <p className="mt-2 text-slate-400">
            To become the most trusted smile-care destination by combining innovation, hygiene,
            and personalized treatment plans.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-cyan-300">Patient Promise</h2>
          <p className="mt-2 text-slate-400">
            Clear consultations, transparent pricing, and hygiene-first treatment protocols.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clinicStats.map((stat) => (
          <article key={stat.label} className="glass rounded-2xl p-5">
            <p className="text-3xl font-bold text-cyan-300">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {doctorTeam.map((doctor) => (
            <article key={doctor.name} className="glass rounded-2xl p-6">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="mb-4 h-52 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{doctor.role}</p>
              <h3 className="mt-2 text-xl font-semibold">{doctor.name}</h3>
              <p className="mt-3 text-slate-400">{doctor.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
