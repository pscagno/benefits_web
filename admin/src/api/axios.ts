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
});


export const addBearerToken = (token: string) => {
	api.defaults.headers.common = {
		Authorization: `Bearer ${token}`
	}
}

export const removeHeadersAuthorization = () => {
	delete api.defaults.headers.common.Authorization
}

export default api
