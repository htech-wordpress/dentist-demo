import axios from 'axios'

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const submitContactForm = async (payload) => {
  // Keep endpoint backend-ready for Django/FastAPI integration.
  return apiClient.post('/contact', payload)
}
