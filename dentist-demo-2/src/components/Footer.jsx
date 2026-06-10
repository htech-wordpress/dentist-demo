import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Pearl Dental Clinic
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Premium dental care with modern technology and compassionate experts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-primary-600">
              Home
            </Link>
            <Link to="/services" className="hover:text-primary-600">
              Services
            </Link>
            <Link to="/about" className="hover:text-primary-600">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary-600">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary-500 hover:text-primary-600 dark:border-slate-700 dark:text-slate-300"
                aria-label="Social media"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Pearl Dental Clinic. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
