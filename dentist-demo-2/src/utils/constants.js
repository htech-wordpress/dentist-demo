import {
  FaTooth,
  FaTeeth,
  FaSmileBeam,
  FaUserMd,
  FaRegSmile,
  FaShieldAlt,
} from 'react-icons/fa'

export const BOOKING_URL = 'https://your-booking-url.com'
export const WHATSAPP_URL =
  'https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment'

export const heroSlides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Your Smile, Our Priority',
    description: 'Advanced dental care with comfort-first treatment plans.',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Modern Dentistry, Gentle Touch',
    description: 'State-of-the-art technology for precise and pain-aware care.',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Confident Smiles Every Day',
    description: 'Cosmetic and restorative treatments tailored to your goals.',
  },
]

export const servicePreviews = [
  {
    icon: FaTooth,
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing for healthy gums.',
  },
  {
    icon: FaUserMd,
    title: 'Root Canal',
    description: 'Painless root canal therapy with modern instruments.',
  },
  {
    icon: FaRegSmile,
    title: 'Whitening',
    description: 'Safe whitening procedures for a brighter smile.',
  },
  {
    icon: FaTeeth,
    title: 'Braces',
    description: 'Orthodontic treatments for aligned and confident smiles.',
  },
]

export const allServices = [
  ...servicePreviews,
  {
    icon: FaSmileBeam,
    title: 'Smile Makeover',
    description: 'Customized combination of veneers, contouring, and whitening.',
  },
  {
    icon: FaShieldAlt,
    title: 'Dental Implants',
    description: 'Long-lasting tooth replacement with natural aesthetics.',
  },
].map((service, index) => ({
  ...service,
  id: index + 1,
  price: ['₹1,500', '₹6,500', '₹4,000', '₹35,000', '₹25,000', '₹45,000'][index],
  image: [
    '/images/service-cleaning.jpg',
    '/images/service-root-canal.jpg',
    '/images/service-whitening.jpg',
    '/images/service-braces.jpg',
    '/images/service-whitening.jpg',
    '/images/service-implant.jpg',
  ][index],
}))

export const testimonials = [
  {
    name: 'Priya Mehta',
    review:
      'Fantastic care and very professional team. My treatment was smooth and pain-free.',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    review:
      'The doctors explained everything clearly and the clinic is incredibly modern.',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    review:
      'I loved the smile makeover result. Friendly staff and excellent service.',
    rating: 5,
  },
]

export const teamMembers = [
  {
    name: 'Dr. Aarya Singh',
    role: 'Chief Dental Surgeon',
    image: '/images/doctor-1.jpg',
  },
  {
    name: 'Dr. Rohan Verma',
    role: 'Orthodontist',
    image: '/images/doctor-2.jpg',
  },
  {
    name: 'Dr. Isha Nair',
    role: 'Cosmetic Dentist',
    image: '/images/doctor-3.jpg',
  },
]
