import { motion as Motion } from 'framer-motion'
import HeroSlider from '../components/HeroSlider'
import GoogleRating from '../components/GoogleRating'
import ServiceCard from '../components/ServiceCard'
import SocialSection from '../components/SocialSection'
import TestimonialSlider from '../components/TestimonialSlider'
import ThreeDBackground from '../components/ThreeDBackground'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { allServices, servicePreviews } from '../utils/constants'

function HomePage() {
  useDocumentTitle('Pearl Dental Clinic | Home')

  return (
    <>
      <HeroSlider />

      <section className="relative mx-auto mt-16 max-w-7xl px-4 md:px-6">
        <ThreeDBackground />
        <div className="relative">
          <h2 className="section-title text-center">Advanced Care, Premium Experience</h2>
          <p className="section-subtitle text-center">
            3D-inspired visuals, modern dentistry, and personalized care for every smile.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicePreviews.map((service, idx) => (
              <Motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ServiceCard service={{ ...service, image: allServices[idx].image }} />
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <GoogleRating />
      <TestimonialSlider />
      <SocialSection />
    </>
  )
}

export default HomePage
