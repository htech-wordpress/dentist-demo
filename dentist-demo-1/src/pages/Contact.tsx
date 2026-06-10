import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-dark text-white py-20 text-center relative overflow-hidden mb-16">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a question or want to schedule an appointment? Get in touch with us today.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-bold text-dark mb-8">Get In Touch</h2>
            
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  Shop No. 7, Vighnaharta Complex, Next to Reliance Fresh, Kharadi, Pune, Maharashtra 411014
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Phone</h3>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  09623551590
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Email</h3>
                <p className="text-gray-600 leading-relaxed">
                  info@32caredentalpune.com<br />
                  drshital@32caredentalpune.com
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark mb-2">Working Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Saturday: 09:00 AM - 09:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 bg-gray-100 rounded-3xl overflow-hidden min-h-[400px] border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3782.355209776092!2d73.931885!3d18.557997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c140a6b72a6b%3A0xe5f8da95a70af3!2s32%20Care%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <AppointmentForm />
    </div>
  );
}
