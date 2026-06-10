import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-primary-600 p-3 text-white shadow-lg transition hover:bg-primary-700"
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTopButton
