interface Environment {
	VITE_API_URL: string
	VITE_TOKEN: string
}

const environment = import.meta.env as unknown as Environment

const config = {
	baseURL: environment.VITE_API_URL,
	token: environment.VITE_TOKEN
}

export default config
