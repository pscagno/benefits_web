import api from './axios'

/* eslint-disable @typescript-eslint/no-magic-numbers */
interface Benefit {
	id: number
	// Define the properties of a Benefit
}

interface ApiResponse {
	benefits: Benefit[]
}

export default async function getCards() {
	try {
		const response = await api.get<ApiResponse>('/benefit?page=0')
		return response.data.benefits
	} catch (error) {
		return error
	}
}

/* eslint-disable no-console */
// import type { CardBenefits } from 'components/CardsBenefits/types'

// import api from './axios'

// interface ApiResponse {
// 	benefits: CardBenefits[]
// }

// export default async function getCards() {
// 	try {
// 		const response = await api.get<ApiResponse>('/benefit?page=0')
// 		return response.data.benefits
// 	} catch (error) {
// 		console.error('Error fetching cards:', error)
// 		return []
// 	}
// }