import axios from 'axios'

const baseURL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:4000/api'
    : import.meta.env.VITE_API_URL

export const axiosInstance = axios.create({
  baseURL: baseURL
})
