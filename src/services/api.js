import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-food-explorer-6zjq.onrender.com',
  withCredentials: true
})

export default api