import AboutSection from '../components/AboutSection';
import { Award, Shield, HeartPulse, Stethoscope } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Stethoscope size={32} className="text-primary" />,
      title: "Extensive Experience",
      desc: "Dr. Shital comes with over 17 years of extensive clinical practice."
    },
    {
      icon: <HeartPulse size={32} className="text-primary" />,
      title: "Painless Treatment",
      desc: "We ensure you experience little to no pain during procedures."
    },
    {
      icon: <Shield size={32} className="text-primary" />,
      title: "High Safety Protocols",
      desc: "Top-notch sterilization routines ensuring an infection-free clinical environment."
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: "Advanced Technology",
      desc: "Up-to-date technologies like intra-oral scanners and high-end digital x-rays."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About 32 Care</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Learn more about our journey, our chief doctor, and why we are trusted by thousands in Kharadi, Pune.</p>
        </div>
      </div>

      <AboutSection />

      {/* Meet the Doctor Section */}
      <div className="bg-light py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
             <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1594824436998-dd40e4f69395?auto=format&fit=crop&q=80&w=600" 
                  alt="Dr. Shital" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="w-full md:w-2/3">
                <h4 className="text-primary font-semibold uppercase tracking-wider mb-2">Chief Dental Surgeon</h4>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Dr. Shital</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Dr. Shital is a highly esteemed Dental Surgeon with over 17 years of rich clinical experience in diagnosing and treating all kinds of dental issues.
                  </p>
                  <p>
                    She is an expert in Root Canal Treatments, Dental Implants, Invisible Aligners, and full mouth rehabilitations. With her compassionate approach, she has helped thousands of patients overcome their dental anxieties and achieve their perfect smile.
                  </p>
                  <p>
                    Her philosophy revolves around conserving natural teeth to the maximum extent and providing pain-free treatments utilizing the latest dental technologies.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't compromise on quality or hygiene. Our practice revolves around making your dental visits as comfortable as possible.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
