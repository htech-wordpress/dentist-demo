import { motion as Motion } from 'framer-motion'
import { services } from '../utils/data'

function ServiceGrid() {
  return (
    <section className="section-wrap mt-20">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Core Treatments</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
        A futuristic care flow designed around accuracy, safety, and aesthetics.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, idx) => {
          const Icon = item.icon
          return (
            <Motion.div key={item.title} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.2 }} className="glass rounded-2xl p-6">
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-36 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="inline-flex rounded-xl bg-cyan-500/15 p-3 text-cyan-300">
                <Icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cyan-300">0{idx + 1}</p>
            </Motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ServiceGrid
