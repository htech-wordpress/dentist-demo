import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                32
              </div>
              <div>
                <h2 className="text-xl font-bold leading-none text-white">Care</h2>
                <p className="text-xs text-primary tracking-widest uppercase">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience world-class dental care with our team of specialists. We bring smiles to life with advanced technology and compassionate care.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/32Care-Dental-Clinic/100063871489656/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/32care_dental_clinic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.youtube.com/@32CareDentalClinic" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.25 8s0-2.25 2.25-2.25h15S21.75 5.75 21.75 8v8s0 2.25-2.25 2.25h-15S2.25 18.25 2.25 16V8z"/><polygon points="9.75 15.02 15.5 11.5 9.75 7.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary inline-block pb-1">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/treatments' },
                { name: 'Patient Testimonials', path: '/#testimonials' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary inline-block pb-1">Treatments</h3>
            <ul className="space-y-4">
              {['Dental Implants', 'Root Canal Treatment', 'Invisible Aligners', 'Teeth Whitening', 'Smile Designing'].map((service) => (
                <li key={service}>
                  <Link to={`/treatments`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-primary inline-block pb-1">Contact Details</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <p className="text-gray-400 text-sm">
                  Shop No. 7, Vighnaharta Complex, Next to Reliance Fresh, Kharadi, Pune, Maharashtra 411014
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Call for Appointment</p>
                  <p className="font-semibold">09623551590</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="font-semibold break-all">info@32caredentalpune.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 32 Care Dental Clinic. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
