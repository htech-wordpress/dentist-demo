import PageHero from '../components/PageHero'
import useDocumentTitle from '../hooks/useDocumentTitle'
import ServiceCard from '../components/ServiceCard'
import { allServices } from '../utils/constants'

function ServicesPage() {
  useDocumentTitle('Pearl Dental Clinic | Services')

  return (
    <>
      <PageHero
        title="Comprehensive Dental Services"
        subtitle="From routine checkups to smile transformations, explore treatments designed for every age and need."
      />
      <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesPage
