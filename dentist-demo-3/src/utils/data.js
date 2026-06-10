import {
  FaRegSmile,
  FaShieldAlt,
  FaTooth,
  FaUserMd,
  FaTeethOpen,
  FaClinicMedical,
} from 'react-icons/fa'
import hero1 from '../assets/clinic/hero-1.jpg'
import hero2 from '../assets/clinic/hero-2.jpg'
import hero3 from '../assets/clinic/hero-3.jpg'
import serviceCleaning from '../assets/clinic/service-cleaning.jpg'
import serviceRootCanal from '../assets/clinic/service-root-canal.jpg'
import serviceWhitening from '../assets/clinic/service-whitening.jpg'
import serviceBraces from '../assets/clinic/service-braces.jpg'
import serviceSmileMakeover from '../assets/clinic/service-smile-makeover.jpg'
import serviceImplants from '../assets/clinic/service-implants.jpg'
import highlightAdvancedCare from '../assets/clinic/highlight-advanced-care.jpg'
import highlightPremiumExperience from '../assets/clinic/highlight-premium-experience.jpg'
import highlightGoogleReviews from '../assets/clinic/highlight-google-reviews.jpg'
import patientNidhi from '../assets/clinic/patient-nidhi.jpg'
import patientKaran from '../assets/clinic/patient-karan.jpg'
import patientPriya from '../assets/clinic/patient-priya.jpg'
import doctorAarya from '../assets/clinic/doctor-aarya.jpg'
import doctorRohan from '../assets/clinic/doctor-rohan.jpg'
import doctorIsha from '../assets/clinic/doctor-isha.jpg'
import clinicBrand from '../assets/clinic/clinic-brand.jpg'

export const BOOK_URL = 'https://your-booking-url.com'

export const heroSlides = [
  {
    title: 'Future-Ready Dental Care',
    subtitle: 'Precision treatments in an immersive, comfort-first clinic.',
    image: hero1,
  },
  {
    title: 'Smile Design with Technology',
    subtitle: 'Digital planning, gentle touch, and world-class outcomes.',
    image: hero2,
  },
  {
    title: 'Your Confident Smile Starts Here',
    subtitle: 'Preventive, cosmetic, and restorative dentistry under one roof.',
    image: hero3,
  },
]

export const services = [
  {
    icon: FaTooth,
    title: 'Teeth Cleaning',
    desc: 'Professional scaling and polishing for healthy gums.',
    price: 'Starting at ₹1,500',
    image: serviceCleaning,
  },
  {
    icon: FaUserMd,
    title: 'Root Canal',
    desc: 'Painless root canal therapy with modern instruments.',
    price: 'Starting at ₹6,500',
    image: serviceRootCanal,
  },
  {
    icon: FaRegSmile,
    title: 'Whitening',
    desc: 'Safe whitening procedures for a brighter smile.',
    price: 'Starting at ₹4,000',
    image: serviceWhitening,
  },
  {
    icon: FaTeethOpen,
    title: 'Braces',
    desc: 'Orthodontic treatments for aligned and confident smiles.',
    price: 'Starting at ₹35,000',
    image: serviceBraces,
  },
  {
    icon: FaClinicMedical,
    title: 'Smile Makeover',
    desc: 'Customized combination of veneers, contouring, and whitening.',
    price: 'Starting at ₹25,000',
    image: serviceSmileMakeover,
  },
  {
    icon: FaShieldAlt,
    title: 'Dental Implants',
    desc: 'Long-lasting tooth replacement with natural aesthetics.',
    price: 'Starting at ₹45,000',
    image: serviceImplants,
  },
]

export const homeHighlights = [
  {
    label: 'Advanced Care',
    title: 'Technology-Driven Dentistry',
    description: 'Digital diagnostics and precision planning for predictable smile outcomes.',
    image: highlightAdvancedCare,
  },
  {
    label: 'Premium Experience',
    title: 'Comfort At Every Step',
    description: 'Warm consultations, gentle procedures, and a stress-free clinic environment.',
    image: highlightPremiumExperience,
  },
  {
    label: 'Google Reviews',
    title: 'Loved By Families',
    description: 'Consistently trusted ratings from patients across preventive and advanced care.',
    image: highlightGoogleReviews,
  },
]

export const patientTestimonials = [
  {
    name: 'Nidhi Sharma',
    treatment: 'Teeth cleaning',
    quote: 'Very friendly staff and super clean clinic. My treatment was smooth and painless.',
    image: patientNidhi,
  },
  {
    name: 'Karan Malhotra',
    treatment: 'Root canal',
    quote: 'I expected pain, but the root canal was comfortable and professionally handled.',
    image: patientKaran,
  },
  {
    name: 'Priya Nair',
    treatment: 'Smile makeover',
    quote: 'The results look natural and the doctors explained every step in detail.',
    image: patientPriya,
  },
]

export const clinicStats = [
  { value: '15+ Years', label: 'Clinical excellence and trusted outcomes' },
  { value: '8,000+', label: 'Happy patients served with care' },
  { value: 'Extended Hours', label: 'Convenient appointments, every week' },
]

export const doctorTeam = [
  {
    name: 'Dr. Aarya Singh',
    role: 'Chief Dental Surgeon',
    bio: 'Leads comprehensive diagnosis and long-term preventive care planning.',
    image: doctorAarya,
  },
  {
    name: 'Dr. Rohan Verma',
    role: 'Orthodontist',
    bio: 'Specializes in braces and alignment-focused treatment for all age groups.',
    image: doctorRohan,
  },
  {
    name: 'Dr. Isha Nair',
    role: 'Cosmetic Dentist',
    bio: 'Designs personalized smile enhancement procedures with natural aesthetics.',
    image: doctorIsha,
  },
]

export const clinicBrandImage = clinicBrand

export const serviceProcess = [
  {
    title: 'Consult and Scan',
    description: 'Clinical exam, digital scan, and treatment priorities identified.',
  },
  {
    title: 'Plan and Budget',
    description: 'Stepwise treatment roadmap with timeline and package estimate.',
  },
  {
    title: 'Active Treatment',
    description: 'Procedure sessions with comfort checks and progress photos.',
  },
  {
    title: 'Review and Maintain',
    description: 'Outcome review plus personalized hygiene and follow-up schedule.',
  },
]

export const contactInfo = [
  { label: 'Call', value: '+91 98765 43210' },
  { label: 'Email', value: 'hello@dentalnova.demo' },
  { label: 'Address', value: 'Level 3, Smile Avenue, New Delhi 110001' },
]

export const workingHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', time: 'Emergency only (10:00 AM - 2:00 PM)' },
]

export const contactFaqs = [
  {
    q: 'Do you accept walk-ins?',
    a: 'Yes, walk-ins are accepted based on slot availability, but appointments are recommended.',
  },
  {
    q: 'Is EMI available for major treatments?',
    a: 'Yes, EMI options are available for implants, aligners, and smile design packages.',
  },
  {
    q: 'How soon can I get a first consultation?',
    a: 'Most new patients are scheduled the same day or within 24 hours.',
  },
]
