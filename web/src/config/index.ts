interface Environment {
	VITE_API_URL: string
	VITE_TOKEN: string
	VITE_PORTAL_URL: string
}

const environment = import.meta.env as unknown as Environment

const config = {
	baseURL: environment.VITE_API_URL,
	token: environment.VITE_TOKEN,
	portalURL: environment.VITE_PORTAL_URL
}

export default config
