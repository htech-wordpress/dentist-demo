import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { BOOK_URL } from '../utils/data'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-bold tracking-wide text-cyan-300">
          PEARL DENTAL
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'text-cyan-300' : 'text-slate-300 transition hover:text-cyan-200'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-cyan-500 px-5 py-2 font-semibold text-slate-950 md:inline-block"
        >
          Book Appointment
        </a>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} type="button" aria-label="Menu">
          {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>
      {open && (
        <div className="section-wrap glass mb-4 rounded-2xl p-3 md:hidden">
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
