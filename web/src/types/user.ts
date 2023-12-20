export interface UserPreferences {
	salud: boolean
	balance: boolean
	gastronomia: boolean
	campanas: boolean
	celebraciones: boolean
	productosBancarios: boolean
	alianzas: boolean
	sorteos: boolean
}

export interface User {
	userName: string
	email: string
	region: string
	province: string
	preferences: UserPreferences
}
