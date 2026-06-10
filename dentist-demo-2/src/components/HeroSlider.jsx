import { motion as Motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { BOOKING_URL, heroSlides } from '../utils/constants'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        className="h-[78vh] min-h-[550px] w-full overflow-hidden rounded-b-[2.5rem]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-primary-900/50" />
              <Motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-6"
              >
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-primary-200">
                  Premium Dental Care
                </p>
                <h1 className="max-w-2xl text-4xl font-bold text-white md:text-6xl">{slide.title}</h1>
                <p className="mt-4 max-w-xl text-slate-100">{slide.description}</p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 w-fit rounded-full bg-primary-500 px-7 py-3 font-semibold text-white transition hover:bg-primary-600"
                >
                  Book Appointment
                </a>
              </Motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
