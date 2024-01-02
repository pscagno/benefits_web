import axios from 'axios'

import config from '../config'

const api = axios.create({
	baseURL: config.baseURL
})

export const addBearerToken = (token: string) => {
	api.defaults.headers.common = {
		Authorization: `Bearer ${token}`
	}
}

export const removeHeadersAuthorization = () => {
	delete api.defaults.headers.common.Authorization
}

export default api
