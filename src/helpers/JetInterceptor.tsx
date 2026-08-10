import axios from 'axios'
import { server_url } from '../congig'


const api = axios.create({
  baseURL:   'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.headers.Accept = 'application/json'
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      // localStorage.removeItem('access_token')
      // window.location.assign('/login')
      const navigate = () => {
        window.location.assign('/login')
      }
      navigate();

    }
    return Promise.reject(error)
  }
)

export default api