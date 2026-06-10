import { services } from '../utils/data'

function ServicesPage() {
  return (
    <div className="section-wrap mt-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Explore our complete treatment range designed for comfort, precision, and lasting
          smile confidence.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <article key={service.title} className="glass rounded-2xl p-6">
              <img
                src={service.image}
                alt={service.title}
                className="mb-4 h-44 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="mb-3 inline-flex rounded-lg bg-cyan-500/20 p-3 text-cyan-200">
                <Icon />
              </div>
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-slate-400">{service.desc}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-200">{service.price}</p>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default ServicesPage
