import axios from 'axios'
import { ENDPOINT_PRI } from 'settings/kernel'

const api = axios.create({
  baseURL: ENDPOINT_PRI
})

export default api
