import HeroSlider from '../components/HeroSlider'
import ServiceGrid from '../components/ServiceGrid'
import { homeHighlights, patientTestimonials } from '../utils/data'

function HomePage() {
  return (
    <>
      <section className="relative">
        <HeroSlider />
      </section>
      <ServiceGrid />
      <section className="section-wrap mt-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Follow Our Smile Stories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6">
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-40 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.label}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-wrap mt-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">What Our Patients Say</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {patientTestimonials.map((item) => (
            <article key={item.name} className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-cyan-300">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.treatment}</p>
                </div>
              </div>
              <p className="text-slate-300">"{item.quote}"</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
