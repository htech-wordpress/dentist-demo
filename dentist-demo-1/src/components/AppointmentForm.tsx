import { useState } from 'react';
import { Calendar, User, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
       setIsSubmitting(false);
       setSuccess(true);
       setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-24 bg-dark relative overflow-hidden" id="book-now">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="flex-1 text-white">
            <h4 className="text-primary font-semibold tracking-wider uppercase mb-2">Book Your Appointment</h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Connect With Expert
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Dr. Shital Kawale Dharmadhikari<br/>
              B.D.S. Dental Surgeon, expertise in cosmetic and aesthetic dentistry
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-xl font-bold">09623551590</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-dark mb-6 text-center">Book Your Appointment</h3>
              
              {success ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-2xl text-center border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">Appointment Requested!</h4>
                  <p>Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Full Name *" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="tel" 
                      placeholder="Phone Number *" 
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                          type="date" 
                          required
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Clock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <select 
                          defaultValue=""
                          required
                          className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                        >
                          <option value="" disabled>Select Time</option>
                          <option value="10-11">10:00 AM - 11:00 AM</option>
                          <option value="11-12">11:00 AM - 12:00 PM</option>
                          <option value="12-01">12:00 PM - 01:00 PM</option>
                          <option value="01-02">01:00 PM - 02:00 PM</option>
                          <option value="02-03">02:00 PM - 03:00 PM</option>
                          <option value="03-04">03:00 PM - 04:00 PM</option>
                          <option value="04-05">04:00 PM - 05:00 PM</option>
                          <option value="05-06">05:00 PM - 06:00 PM</option>
                          <option value="06-07">06:00 PM - 07:00 PM</option>
                          <option value="07-08">07:00 PM - 08:00 PM</option>
                          <option value="08-09">08:00 PM - 09:00 PM</option>
                        </select>
                      </div>
                  </div>

                  <div className="relative">
                    <select 
                      defaultValue=""
                      required
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="" disabled>Treatment Type *</option>
                      <option value="consultation">Dental Consultation</option>
                      <option value="implants">Dental Implants</option>
                      <option value="root_canal">Root Canal Treatment</option>
                      <option value="smile_makeover">Smile Makeover</option>
                      <option value="braces">Orthodontics / Braces</option>
                      <option value="aligners">Clear Aligners (Invisalign)</option>
                      <option value="fmr">Full Mouth Rehabilitation</option>
                      <option value="tmj">TMJ Disorder Treatment</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="cleaning">Teeth Cleaning / Checkup</option>
                    </select>
                  </div>
                  
                  <div className="relative">
                    <MessageSquare size={20} className="absolute left-4 top-4 text-gray-400" />
                    <textarea 
                      placeholder="Message" 
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
