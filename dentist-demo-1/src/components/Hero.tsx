import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 w-full z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Welcome to 32 Care Dental Clinic & Implant Centre
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-dark leading-tight mb-6">
            Dentist in Kharadi, Pune <br />
            <span className="text-gradient">32Care</span> Dental Clinic
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
            At 32Care Dental Clinic & Implant Centre, Kharadi, Pune we provide advanced braces treatments, including self-ligating braces along with conventional metal, ceramic. Our focus is on modern digital dentistry and pain-free techniques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="tel:09623551590" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
              Connect With Expert <ArrowRight size={20} />
            </a>
            <Link to="/treatments" className="bg-white hover:bg-gray-50 text-dark border border-gray-200 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-transform hover:-translate-y-1 shadow-sm">
              Our Services
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-secondary" />
              <span>4.8+ Rated Dental Clinic</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={20} className="text-secondary" />
              <span>17 + Years Experience</span>
            </div>
          </div>
        </div>

        {/* Image/Visual */}
        <div className="flex-1 w-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
          {/* Placeholder for actual image */}
          <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl flex items-center bg-gray-200">
            <img 
               src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
               alt="Dentist giving patient a smile" 
               className="w-full h-full object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-0 right-0 mx-auto w-[80%] bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                 <span className="text-2xl">⭐</span>
               </div>
               <div>
                  <p className="font-bold text-dark">4.8+ Rating</p>
                  <p className="text-xs text-gray-500">Rated Dental Clinic</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
