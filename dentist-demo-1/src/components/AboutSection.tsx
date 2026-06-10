
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Clinic Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600" 
                  alt="Dentist working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-primary rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="text-4xl font-extrabold mb-2">17+</div>
                <div className="font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 w-full">
            <h4 className="text-primary font-semibold tracking-wider uppercase mb-2">About Us</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
              Why Consult our Dentist in Kharadi, Pune?
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Dr. Shital Dharmadhikari brings a wealth of experience and knowledge to the Dental Clinic. Recognized as the Best Dentist in Kharadi, Pune, she is particularly adept in the field of clear aligners, offering non-invasive solutions to crooked or misaligned teeth. For our younger patients, we offer a comprehensive kids dentistry program designed to create a positive experience and a healthy foundation for lifelong oral health. Our gums dental treatment and dental radiology services offer preventive and diagnostic care, helping to maintain and restore optimal oral health.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We, at the 32Care Dental Clinic & Implant Center, combine advanced technology with a patient-centric approach for each Dental Treatment in Kharadi, Pune. Our commitment to providing personalized care within a comfortable environment sets us apart. Feel the difference and transform your smile with the quality dental care make. Consult the most renowned Dentist in Kharadi, Pune, Dr. Shital Dharmadhikari, and get your perfect oral health with us at 32Care Dental Clinic & Implant Center.
            </p>

            <Link to="/about" className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Discover More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
