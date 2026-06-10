import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { clinicBrandImage } from '../utils/data'

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10">
      <div className="section-wrap grid gap-8 md:grid-cols-3">
        <div>
          <img
            src={clinicBrandImage}
            alt="Pearl Dental Clinic"
            className="mb-3 h-20 w-full max-w-xs rounded-xl object-cover"
            loading="lazy"
          />
          <p className="text-lg font-semibold text-cyan-300">Pearl Dental Clinic</p>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Premium dental care with modern technology and compassionate experts.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-slate-300">
            <Link to="/" className="hover:text-cyan-200">
              Home
            </Link>
            <Link to="/services" className="hover:text-cyan-200">
              Services
            </Link>
            <Link to="/about" className="hover:text-cyan-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-cyan-200">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Follow Us</p>
          <div className="mt-3 flex gap-3">
          {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, index) => (
            <a key={index} href="#" className="glass rounded-full p-2 text-cyan-200 hover:text-white">
              <Icon />
            </a>
          ))}
          </div>
        </div>
      </div>
      <p className="section-wrap mt-8 text-sm text-slate-500">
        © 2026 Pearl Dental Clinic. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
