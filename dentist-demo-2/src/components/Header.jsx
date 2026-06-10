import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaMoon, FaSun, FaTooth } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { BOOKING_URL } from '../utils/constants'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark'
  })
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-primary-700 dark:text-primary-300">
          <FaTooth className="text-2xl" />
          <span className="text-lg font-bold">Pearl Dental Clinic</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? 'text-primary-600 dark:text-primary-300'
                    : 'text-slate-600 hover:text-primary-600 dark:text-slate-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-700"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-slate-700 dark:text-slate-200 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {menuOpen && (
        <div className="glass-card border-t px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-md border border-slate-200 px-3 py-2 text-sm dark:border-slate-700"
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
