import axios from 'axios'

// const baseURL = 'http://192.168.100.6:25566'
const baseURL = 'http://217.25.239.31:25666'

const rconConfig = {
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  }
}

export const RconAPI = axios.create(rconConfig)
