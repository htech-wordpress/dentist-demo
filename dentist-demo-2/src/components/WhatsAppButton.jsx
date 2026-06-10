import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../utils/constants'

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-40 rounded-full bg-green-500 p-3 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  )
}

export default WhatsAppButton
