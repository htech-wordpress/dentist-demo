import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Dental Braces', icon: '✨', color: 'bg-indigo-50 text-indigo-600' },
  { id: 2, title: 'Dental Implants', icon: '🦷', color: 'bg-blue-50 text-blue-600' },
  { id: 3, title: 'Teeth Whitening', icon: '🌟', color: 'bg-yellow-50 text-yellow-600' },
  { id: 4, title: 'Root Canal Treatment', icon: '⚕️', color: 'bg-teal-50 text-teal-600' },
  { id: 5, title: 'Teeth Cleaning Polishing', icon: '🫧', color: 'bg-cyan-50 text-cyan-600' },
  { id: 6, title: 'Gums Treatment', icon: '🩸', color: 'bg-rose-50 text-rose-600' },
  { id: 7, title: 'Fluoride Treatment', icon: '🛡️', color: 'bg-emerald-50 text-emerald-600' },
  { id: 8, title: 'Dental Crowns Bridges', icon: '👑', color: 'bg-amber-50 text-amber-600' },
  { id: 9, title: 'Invisible Clear Aligners', icon: '😁', color: 'bg-violet-50 text-violet-600' }
];

const ServicesSection = () => {
  return (
    <div className="py-24 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-primary font-semibold tracking-wider uppercase mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">Treatments We Offer</h2>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive range of dental treatments using the latest technology to ensure the best possible care for your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <Link to="/treatments" className="mt-auto inline-flex items-center gap-2 text-dark font-semibold group-hover:text-primary transition-colors">
                Know More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/treatments" className="inline-flex items-center justify-center bg-dark hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
            View All Treatments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
