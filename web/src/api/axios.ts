import axios from 'axios'

import config from '../config'

interface Config {
	baseURL: string
	token: string
}

const apiConfig: Config = config

// Axios instance for API calls
const api = axios.create({
	baseURL: apiConfig.baseURL,
	headers: {
		Authorization: `Bearer ${apiConfig.token}`
	}
})

export default api
