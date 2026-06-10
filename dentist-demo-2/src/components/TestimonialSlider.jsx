import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '../utils/constants'
import 'swiper/css'
import 'swiper/css/pagination'

function TestimonialSlider() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 md:px-6">
      <h2 className="section-title text-center">What Our Patients Say</h2>
      <p className="section-subtitle text-center">
        Trusted by families for reliable and comfortable dental care.
      </p>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="mt-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.name} className="pb-12">
            <div className="glass-card h-full rounded-2xl p-6">
              <div className="mb-3 flex gap-1 text-amber-400">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                "{item.review}"
              </p>
              <p className="mt-4 font-semibold text-slate-900 dark:text-white">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TestimonialSlider
