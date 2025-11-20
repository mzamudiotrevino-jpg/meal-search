import axios from 'axios'

export default function useAPI() {
  const api = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
  })

  return { api }
}