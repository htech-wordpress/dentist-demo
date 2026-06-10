import { ArrowRight } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const allTreatments = [
  {
    title: 'Dental Implants',
    description: 'A dental implant is a titanium post (like a tooth root) that is surgically positioned into the jawbone beneath the gum line. It provides unparalleled support and stability for an artificial tooth or bridge.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Root Canal Treatment',
    description: 'Root canal treatment is used to save a tooth that is badly decayed or infected. Our clinic uses modern rotary endodontics to ensure the procedure is completed comfortably and usually in a single sitting.',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Invisible Aligners',
    description: 'Clear aligners offer a practically invisible way to straighten your teeth. They are removable and custom-made to fit snugly over your teeth, gently shifting them into their correct positions over time.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Smile Designing',
    description: 'A complete smile makeover that enhances the aesthetics of your smile using veneers, teeth whitening, composite bonding, and precise alignment procedures customized just for you.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Teeth Whitening',
    description: 'Achieve a brighter, more radiant smile with our professional teeth whitening therapy. We wipe away deep stains caused by coffee, tea, smoking, and aging safely and effectively.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600'
  },
  {
    title: 'Kids Dentistry',
    description: 'We offer specialized, gentle pediatric dentistry. Our friendly environment helps children overcome dental anxiety, preventing early tooth decay and instilling good permanent hygiene habits.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Treatments() {
  return (
    <div className="bg-light">
      {/* Page Header */}
      <div className="bg-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Treatments</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our comprehensive range of high-quality dental treatments designed to restore your health and perfect your smile.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {allTreatments.map((treatment, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src={treatment.image} 
                  alt={treatment.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-dark mb-4">{treatment.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {treatment.description}
                </p>
                <button className="flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors">
                  Consult for this <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AppointmentForm />
    </div>
  );
}
