import { motion as Motion } from 'framer-motion'

function FloatOrb({ className, delay }) {
  return (
    <Motion.div
      animate={{ y: [0, -30, 0], rotate: [0, 10, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay }}
      className={className}
    />
  )
}

function ThreeDBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-cyan-400/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      <FloatOrb className="absolute left-8 top-24 h-20 w-20 rounded-2xl border border-cyan-300/40 bg-cyan-300/20 shadow-glow backdrop-blur-xl" delay={0.2} />
      <FloatOrb className="absolute right-16 top-1/3 h-28 w-28 rounded-full border border-indigo-300/40 bg-indigo-400/20 shadow-glow backdrop-blur-xl" delay={0.8} />
      <FloatOrb className="absolute bottom-20 left-1/4 h-16 w-16 rounded-xl border border-white/30 bg-white/10 backdrop-blur-xl" delay={1.2} />
    </div>
  )
}

export default ThreeDBackground
