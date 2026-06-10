import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import AppointmentForm from '../components/AppointmentForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsCounter />
      <AboutSection />
      <ServicesSection />
      <AppointmentForm />
    </div>
  );
}
