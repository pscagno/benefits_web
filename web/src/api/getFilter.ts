import type { Subcategory } from 'types/subcategory'

import api from './axios'

export interface FilterResponse {
	id: number
	logo: 'health' | 'none'
	name: string
	color: string
	logoMobile?: string
	imageMenu?: string
	subcategories?: Subcategory[]
}

// export default async function getFilters(): Promise<FilterResponse[]> {
// 	const response = await fetch('src/mocks/data/benefitsCards.json')
// 	return response.json() as Promise<FilterResponse[]>
// }

interface Category {
	id: number
	// Define the properties of a Benefit
}

interface ApiResponse {
	benefits: Category[]
}

export default async function getFilters() {
	try {
		const response = await api.get<ApiResponse>('/category')
		console.log('response.data', response.data)
		return response.data
	} catch (error) {
		return error
	}
}
