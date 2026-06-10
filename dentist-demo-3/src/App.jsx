import { Route, Routes } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThreeDBackground from './components/ThreeDBackground'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="grid-bg relative min-h-screen overflow-hidden">
      <ThreeDBackground />
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-[60] rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-105 hover:bg-green-400"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <Footer />
    </div>
  )
}

export default App
