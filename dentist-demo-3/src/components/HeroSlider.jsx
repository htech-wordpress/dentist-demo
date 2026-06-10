import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { BOOK_URL, heroSlides } from '../utils/data'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative, Navigation, Pagination]}
      effect="creative"
      creativeEffect={{
        prev: { shadow: true, translate: ['-20%', 0, -1] },
        next: { translate: ['100%', 0, 0] },
      }}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      className="h-[74vh] min-h-[520px]"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <div className="relative h-full">
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-transparent" />
            <div className="section-wrap absolute inset-0 flex flex-col justify-center">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300">Dental Nova</p>
              <h1 className="max-w-2xl text-4xl font-bold md:text-6xl">{slide.title}</h1>
              <p className="mt-4 max-w-xl text-slate-300">{slide.subtitle}</p>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="mt-8 w-fit rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
                Book Appointment
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider
