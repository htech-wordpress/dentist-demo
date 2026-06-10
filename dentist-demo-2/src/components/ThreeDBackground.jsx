function ThreeDBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-12 h-72 w-72 animate-pulse rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute right-10 top-28 h-64 w-64 animate-bounce rounded-full bg-blue-300/20 blur-3xl [animation-duration:6s]" />
      <div className="absolute bottom-10 left-1/3 h-48 w-48 rotate-12 rounded-3xl bg-cyan-300/20 blur-2xl" />
      <div className="absolute right-1/4 top-1/2 h-36 w-36 rounded-full border border-white/50 bg-white/20 shadow-xl backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-700/10" />
    </div>
  )
}

export default ThreeDBackground
