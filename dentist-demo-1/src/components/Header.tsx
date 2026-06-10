import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:flex justify-between items-center bg-dark text-white px-8 py-2 text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-primary" />
            <span>Mon - Sat: 9:00 AM - 9:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>Kharadi, Pune</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <Phone size={16} className="text-primary" />
          <span>Call Us: 09623551590</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
              32
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none text-dark">Care</h1>
              <p className="text-xs text-secondary tracking-widest uppercase">Dental Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t pb-6">
            <nav className="flex flex-col px-4 pt-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium px-2 py-2 rounded-lg ${
                    location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t my-2 pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full bg-primary text-white px-6 py-3 rounded-lg font-medium"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
