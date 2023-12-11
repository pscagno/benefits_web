import type { Preference } from 'types/preference'

export const regionOptions = [
	{ value: 'north', label: 'ZONA NORTE' },
	{ value: 'south', label: 'ZONA SUR' },
	{ value: 'west', label: 'ZONA OESTE' }
]

export const provinceOptions = [
	{ value: 'bsas', label: 'BUENOS AIRES' },
	{ value: 'cordoba', label: 'CÓRDOBA' },
	{ value: 'santaFe', label: 'SANTA FÉ' }
]

export const preferences: Preference[] = [
	{ value: 'salud', label: 'Salud' },
	{ value: 'balance', label: 'Balance' },
	{ value: 'gastronomia', label: 'Gastronomía' },
	{ value: 'campanas', label: 'Campañas' },
	{ value: 'celebraciones', label: 'Celebraciones' },
	{ value: 'productosBancarios', label: 'Productos bancarios' },
	{ value: 'alianzas', label: 'Alianzas' },
	{ value: 'sorteos', label: 'Sorteos' }
]
