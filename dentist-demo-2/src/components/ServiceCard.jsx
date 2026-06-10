import { motion as Motion } from 'framer-motion'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <Motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl p-5 transition"
    >
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="h-44 w-full rounded-xl object-cover"
      />
      <div className="mt-4 flex items-center gap-3">
        <div className="rounded-lg bg-primary-100 p-2 text-primary-600 dark:bg-primary-900/40 dark:text-primary-200">
          <Icon />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
      {service.price && (
        <p className="mt-3 text-sm font-semibold text-primary-600 dark:text-primary-300">
          Starting at {service.price}
        </p>
      )}
    </Motion.div>
  )
}

export default ServiceCard
