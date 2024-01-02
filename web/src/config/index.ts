const environment = import.meta.env

const config = {
	baseURL: environment.VITE_API_URL,
	portalURL: environment.VITE_PORTAL_URL
}

export default config
